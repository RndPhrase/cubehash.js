/*global describe, it*/

var assert = require('assert'),
    cubehash = require('../cubehash');

describe('cubehash', function () {
    it('Should be a function', function (done) {
        assert.equal(typeof cubehash, 'function');
        done();
    });

    it('Should hash correctly', function (done) {
        assert.equal(
            cubehash(''),
            '19a0db16b09118bea669abce93600c93ef9b3923394ac1f265fc0188e8f4948f'
        );
        assert.equal(
            cubehash('Hello'),
            '7e1bc1f5f6b2560f65318f6a6ed588b949a3c595319face48240f1b63942cbe3'
        );
        assert.equal(
            cubehash('The quick brown fox jumps over the lazy dog'),
            '35313466942166a44a412532e078287f5863ecc0041d139d42ac4240a9893451'
        );
        done();
    });
});
