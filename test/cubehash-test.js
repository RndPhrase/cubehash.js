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
            '38d1e8a22d7baac6fd5262d83de89cacf784a02caa866335299987722aeabc59'
        );
        assert.equal(
            cubehash('Hello'),
            '011f92d0c9418d9cbf59cb1c709b8fb40efcf7c48e735a1436c0a6e72d337e6c'
        );
        assert.equal(
            cubehash('The quick brown fox jumps over the lazy dog'),
            '9096bfd8082d5a31facac9b4de6615bdd5596389832ca3058abc97377b58aa94'
        );
        done();
    });
});
