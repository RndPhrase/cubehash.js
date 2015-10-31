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
        var i;

        for(i = 1; i < 30; i += 1) {
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
        for(i = 33; i < 62; i += 1) {
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
    ];

    intToHexTests.forEach(function(test) {
        it('Should call intToHex with ' +
           test.arg.toString() + ' and give ' + test.expect, function() {
            assert.equal(
                cubehash.intToHex(test.arg),
                test.expect
            );
        });
    });

    it('Should hash correctly', function (done) {
        cubehash = new Cubehash();
        assert.equal(
            cubehash.hash(''),
            'a2e8d138c6aa7b2dd86252fdac9ce83d2ca084f7356386aa7287992959bcea2a'
        );
        assert.equal(
            cubehash.hash('Hello'),
            'd0921f019c8d41c91ccb59bfb48f9b70c4f7fc0e145a738ee7a6c0366c7e332d'
        );
        assert.equal(
            cubehash.hash('The quick brown fox jumps over the lazy dog'),
            'd8bf9690315a2d08b4c9cafabd1566de896359d505a32c833797bc8a94aa587b'
        );
        done();
    });
});
