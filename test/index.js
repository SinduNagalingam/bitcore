'use strict';

var should = require('chai').should();
var einrcore = require('../');

describe('Library', function() {
  it('should export primatives', function() {
    should.exist(einrcore.crypto);
    should.exist(einrcore.encoding);
    should.exist(einrcore.util);
    should.exist(einrcore.errors);
    should.exist(einrcore.Address);
    should.exist(einrcore.Block);
    should.exist(einrcore.MerkleBlock);
    should.exist(einrcore.BlockHeader);
    should.exist(einrcore.HDPrivateKey);
    should.exist(einrcore.HDPublicKey);
    should.exist(einrcore.Networks);
    should.exist(einrcore.Opcode);
    should.exist(einrcore.PrivateKey);
    should.exist(einrcore.PublicKey);
    should.exist(einrcore.Script);
    should.exist(einrcore.Transaction);
    should.exist(einrcore.URI);
    should.exist(einrcore.Unit);
  });
});
