var should = require('chai').should(),
    undojs = require('../index');

describe('#initUndo', function() {
  var testObject = {};

  it('init of undo mechanism works', function() {
    var undoObject = undojs.initUndo(testObject);

    undoObject.should.have.property('__changesIndex');
    undoObject.__changesIndex.should.have.property('idx').equal(-1); 
    undoObject.should.have.property('__changesHistory').with.length(0);
    undoObject.should.have.property('undo');
    undoObject.should.have.property('redo');
  });
  
});

