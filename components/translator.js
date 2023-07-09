const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
  translate(locale, text){
    let translation;
    
    if(text == ''){
      return { error: 'No text to translate' };
    }
    
    if (!locale || !text){
      return { error: 'Required field(s) missing' };
    }
    
    if(locale == 'american-to-british'){
      translation = this.americanToBritish(text);
    }
    
    if(locale == 'british-to-american'){
      translation = this.britishToAmerican(text);
    }
    
    if(locale != 'british-to-american' 
       && locale != 'american-to-british'){
      return {error: 'Invalid value for locale field'};
    }

    if(translation === text){
      return {text: text, translation: "Everything looks good to me!"};
    }else{
      return {text: text, translation: translation};
    }
  }

  americanToBritish(text){
    
    let americanOnlyArray = Object.keys(americanOnly);
    let spellingArray = Object.keys(americanToBritishSpelling);
    let titles = Object.keys(americanToBritishTitles);
    
    americanOnlyArray.forEach(phrase => {
      if(new RegExp(phrase, 'gi').test(text)){
        text = text.replace(new RegExp(phrase, 'gi'), '<span class="highlight">' + americanOnly[phrase] + '</span>');
      }
    });

    spellingArray.forEach(spelling => {
      if (new RegExp(spelling, 'gi').test(text)){
        text = text.replace(new RegExp(spelling, 'gi'), '<span class="highlight">' + americanToBritishSpelling[spelling] + '</span>');
      }
    });

    titles.forEach(title => {
      if(new RegExp(title, 'gi').test(text)){
        text = text.replace(new RegExp(title, 'gi'), '<span class="highlight">' + title[0].toUpperCase() + title.slice(1, title.length - 1) + '</span>');
      }
    });

    text = text.replace( /([0-9]{2})(:)([0-9]{2})/g, function(match, g1, g2, g3) {
 return '<span class="highlight">' + g1 + '.' + g3 + '</span>'; 
    });

    return text[0].toUpperCase() + text.slice(1, text.length);
      
    let textArr = text.split(' ');

    textArr = textArr.map(word => {
      let check = word;
      word = word.toLowerCase();
      if (Object.keys(americanOnly).findIndex(item => item === word) != -1){
        let newWord = americanOnly[word];
        return '<span class="highlight">' + this.capitalize(check, newWord) + '</span>';
      } else if (Object
                .keys(americanToBritishSpelling)
                .findIndex(item => item === word) != -1){
        let newWord = americanToBritishSpelling[word]
        return '<span class="highlight">' + 
          this.capitalize(check, newWord) + '</span>';
      } else if (Object
                 .keys(americanToBritishTitles)
                 .findIndex(item => item === word) != -1){
        let newWord = americanToBritishTitles[word];
        return '<span class="highlight">' + 
          this.capitalize(check, newWord) + '</span>';
      } else { return check; }
    });
    return textArr.join(' ');
  }

  britishToAmerican(text){
    let britishArray = Object.keys(britishOnly);
    let spellingObj = {};
    for(let [key, value] of Object.entries(americanToBritishSpelling)){
      spellingObj[value] = key;
    }
    let spellingArr = Object.keys(spellingObj);
    let titlesObj = {};
    for(let [key, value] of Object.entries(americanToBritishTitles)){
      titlesObj[value] = key;
    }
    let titles = Object.keys(titlesObj);

     britishArray.forEach(phrase => {
      if(new RegExp(phrase, 'gi').test(text)){
        text = text.replace(new RegExp(phrase, 'gi'), 
                            '<span class="highlight">' + 
                            britishOnly[phrase] + '</span>');
      }
    });

    spellingArr.forEach(spelling => {
      if (new RegExp(spelling, 'gi').test(text)){
        text = text.replace(new RegExp(spelling, 'gi'), 
                            '<span class="highlight">' +
                            spellingObj[spelling] + '</span>');
      }
    });
    
    var titleRegex = /(mr|mrs|ms|mx|dr|prof)\s/gi;
    var title = text.match(titleRegex);
    
    if (title) {
      title.forEach((title) => {
        text = text.replace(
          title,
          `<span class="highlight">${(title.charAt(0).toUpperCase() +
                                      title.slice(1)).replace(" ", ".")}
                                      </span> `
        );
      });
    }

    text = text.replace( /([0-9]{1,2})(.)([0-9]{2})/g, 
                        function(match, g1, g2, g3) {
 return '<span class="highlight">' + g1 + ':' + g3 + '</span>'; 
    });
    
    return text[0].toUpperCase() + text.slice(1, text.length);
      
    let textArr = text.split(' ').map(word => {
      let check = word;
      if (Object.keys(britishOnly)
          .findIndex(item => item === word.toLowerCase()) != -1){
        let newWord = britishOnly[word];
        return '<span class="highlight">' + 
          this.capitalize(check, newWord) + '</span>';
      } else if (Object.values(americanToBritishSpelling)
                 .findIndex(item => item === word) != -1){
        let newWord = Object
          .keys(americanToBritishSpelling)[Object
          .values(americanToBritishSpelling)
          .findIndex(item => item === word)];
        
          return '<span class="highlight">' + 
            this.capitalize(check, newWord) + '</span>';
      } else if (Object.values(americanToBritishTitles)
                 .findIndex(item => item === word) != -1){
              let newWord = Object
                .keys(americanToBritishTitles)[Object
                .values(americanToBritishSpelling)
                .findIndex(item => item === word)];
              return '<span class="highlight">' + 
                this.capitalize(check, newWord) + '</span>';
      } else { return check }
    });
    return textArr.join(' ');
  }

  capitalize(oldWord, newWord){
    
    if(oldWord.slice(1, 0).toLowerCase() === oldWord[0]){
      return newWord;
    }else{
      return newWord.slice(0, 1).toUpperCase() + newWord.slice(1, newWord.length);
    }
  }
}

module.exports = Translator;