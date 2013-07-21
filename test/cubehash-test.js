/*global describe, it*/

var assert = require('assert'),
    cubehash = require('../cubehash');

describe('cubehash', function () {
    it('Should be a function', function (done) {
        assert.equal(typeof cubehash, 'function');
        done();
    });

    it('Should hash correctly', function (done) {
        assert.equal(cubehash(''), '38d1e8a22d7baac6fd5262d83de89cacf784a02caa866335299987722aeabc59');
        assert.equal(cubehash('Hello'), '692638db57760867326f851bd2376533f37b640bd47a0ddc607a9456b692f70f');
        assert.equal(cubehash('The quick brown fox jumps over the lazy dog'), '94e0c958d85cdfaf554919980f0f50b945b88ad08413e0762d6ff0219aff3e55');
        done();
    });
});
