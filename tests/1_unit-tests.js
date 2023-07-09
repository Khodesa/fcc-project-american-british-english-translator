const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator()

suite('Unit Tests', () => {
  test('1."Mangoes are my favorite fruit." to British English', function(done){
    assert.isTrue(translator.translate('american-to-british', "Mangoes are my favorite fruit.").translation.includes('class="highlight"'))
    done()
  })
  test('2."I ate yogurt for breakfast." to British English', function(done){
    assert.isTrue(translator.translate('american-to-british', "I ate yogurt for breakfast.").translation.includes('yoghurt'))
    done()
  })
  test("3. We had a party at my friend's condo.", function(done){
    assert.isTrue(translator.translate('american-to-british', "We had a party at my friend's condo.").translation.includes('class="highlight"'))
    done()
  })
  test('4. Can you toss this in the trashcan for me?', function(done){
    assert.isTrue(translator.translate('american-to-british', 'Can you toss this in the trashcan for me?').translation.includes('class="highlight"'))
    done()
  })
  test('5. The parking lot was full.', function(done){
    assert.isTrue(translator.translate('american-to-british', 'The parking lot was full.').translation.includes('class="highlight"'))
    done()
  })
  test('6. Like a high tech Rube Goldberg machine.', function(done){
    assert.isTrue(translator.translate('american-to-british', 'Like a high tech Rube Goldberg machine.').translation.includes('class="highlight"'))
    done()
  })
  test('7. To play hooky means to skip class or work.', function(done){
    assert.isTrue(translator.translate('american-to-british', 'To play hooky means to skip class or work.').translation.includes('class="highlight"'))
    done()
  })
  test('8. No Mr. Bond, I expect you to die.', function(done){
    assert.isTrue(translator.translate('american-to-british', 'No Mr. Bond, I expect you to die.').translation.includes('class="highlight"'))
    done()
  })
  test('9. Dr. Grosh will see you now.', function(done){
    assert.isTrue(translator.translate('american-to-british', 'Dr. Grosh will see you now.').translation.includes('class="highlight"'))
    done()
  })
  test('10. Lunch is at 12:15 today.', function(done){
    assert.isTrue(translator.translate('american-to-british', 'Lunch is at 12:15 today.').translation.includes('class="highlight"'))
    done()
  })
  test('11. We watched the footie match for a while.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'We watched the footie match for a while.').translation.includes('class="highlight"'))
    done()
  })
  test('12. Paracetamol takes up to an hour to work.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'Paracetamol takes up to an hour to work.').translation.includes('class="highlight"'))
    done()
  })
  test('13. First, caramelise the onions.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'First, caramelise the onions.').translation.includes('class="highlight"'))
    done()
  })
  test('14. I spent the bank holiday at the funfair.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'I spent the bank holiday at the funfair.').translation.includes('class="highlight"'))
    done()
  })
  test('15. I had a bicky then went to the chippy.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'I had a bicky then went to the chippy.').translation.includes('class="highlight"'))
    done()
  })
  test("16. I've just got bits and bobs in my bum bag.", function(done){
    assert.isTrue(translator.translate('british-to-american', "I've just got bits and bobs in my bum bag.").translation.includes('class="highlight"'))
    done()
  })
  test('17. The car boot sale at Boxted Airfield was called off.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'The car boot sale at Boxted Airfield was called off.').translation.includes('class="highlight"'))
    done()
  })
  test('18. Have you met Mrs Kalyani?', function(done){
    assert.isTrue(translator.translate('british-to-american', 'Have you met Mrs Kalyani?').translation.includes('class="highlight"'))
    done()
  })
  test("19. Prof Joyner of King's College, London.", function(done){
    assert.isTrue(translator.translate('british-to-american', "Prof Joyner of King's College, London.").translation.includes('class="highlight"'))
    done()
  })
  test('20. Tea time is usually around 4 or 4.30.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'Tea time is usually around 4 or 4.30.').translation.includes('class="highlight"'))
    done()
  })
  test('21. Mangoes are my favorite fruit.', function(done){
    assert.isTrue(translator.translate('american-to-british', "Mangoes are my favorite fruit.").translation.includes('class="highlight"'))
    done()
  })
  test('22. I ate yogurt for breakfast.', function(done){
    assert.isTrue(translator.translate('american-to-british', "I ate yogurt for breakfast.").translation.includes('class="highlight"'))
    done()
  })
 test('11. We watched the footie match for a while.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'We watched the footie match for a while.').translation.includes('class="highlight"'))
    done()
  })
  test('12. Paracetamol takes up to an hour to work.', function(done){
    assert.isTrue(translator.translate('british-to-american', 'Paracetamol takes up to an hour to work.').translation.includes('class="highlight"'))
    done()
  })
});
