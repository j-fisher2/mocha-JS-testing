const assert=require('assert')
const Rooster=require('../index')

describe('test rooster',()=>{
  describe('.annouceDawn',()=>{
    it('returns a rooster call',()=>{
      const expected='cock-a-doodle-doo!';
      const actual=Rooster.announceDawn();

      assert.equal(expected,actual);
    })
  })
  describe('.timeAtDawn',()=>{
    it('returns its argument as a string',()=>{
      const expected='3';
      const actual=Rooster.timeAtDawn(3);

      assert.strictEqual(expected,actual);
    })
    it('throws error if passed number greater than 23',()=>{
      assert.throws(()=>{
        Rooster.timeAtDawn(25);
      },RangeError)
    })
  })
})
