/*global describe, it*/

var assert = require('assert'),
    Cubehash = require('../cubehash');

describe('cubehash', function () {
    var cubehash = new Cubehash();

    it('Should be a function', function (done) {
        assert.equal(typeof Cubehash, 'function');
        done();
    });

    it('Should rotate with 32 bit modulus', function() {
        cubehash = new Cubehash();

        for(var i = 1; i < 30; i++) {
            assert.equal(
                cubehash.rotate(2, i),
                Math.pow(2, i + 1)
            );
        }
        assert.equal(
            cubehash.rotate(2, 31),
            1
        );
        assert.equal(
            cubehash.rotate(2, 32),
            2
        );
        for(var i = 33; i < 62; i++) {
            assert.equal(
                cubehash.rotate(2, i),
                Math.pow(2, i % 31)
            );
        }
        assert.equal(
            cubehash.rotate(2, 63),
            1
        );
        assert.equal(
            cubehash.rotate(2, 64),
            2
        );
    });

    var intToHexTests = [
        {arg: 0, expect: '00000000'},
        {arg: 9001, expect: '00002329'},
        {arg: 4294967294, expect: 'fffffffe'},
        {arg: -401703733, expect: 'e80e7ccb'},
        {arg: 4294967295, expect: 'ffffffff'},
        {arg: -42, expect: 'ffffffd6'}
    ]

    intToHexTests.forEach(function(test) {
        it('Should call intToHex with ' +
           test.arg.toString() + ' and give ' + test.expect, function() {
            assert.equal(
                cubehash.intToHex(test.arg),
                test.expect
            );
        })
    })

    it('Should hash correctly', function (done) {
        cubehash = new Cubehash();
        assert.equal(
            cubehash.hash(''),
            '38d1e8a22d7baac6fd5262d83de89cacf784a02caa866335299987722aeabc59'
        );
        assert.equal(
            cubehash.hash('Hello'),
            '011f92d0c9418d9cbf59cb1c709b8fb40efcf7c48e735a1436c0a6e72d337e6c'
        );
        assert.equal(
            cubehash.hash('The quick brown fox jumps over the lazy dog'),
            '9096bfd8082d5a31facac9b4de6615bdd5596389832ca3058abc97377b58aa94'
        );
        done();
    });
});
