undo.js
=======

A javascript module to enable undo/redo on a object level.

## Installation

  npm install undojs --save
  
## Usage

```javascript
  var undojs = require('undojs');
  
  var anyObject = new Object();
  undojs.initUndo(anyObject);
  
  // TATATA! your object now has the undo / redo abiltity
  
  anyObject.test = 1;
  anyObject.test = 3;
  anyObject.undo();
  console.log(anyObject.test)
  // -> 1
  anyObject.redo();
  console.log(anyObject.test)
  // -> 3
```

You can even specify the function names:
```javascript
  var undojs = require('undojs');
  
  var anyObject = new Object();
  undojs.initUndo(anyObject, 'un', 're');
  
  anyObject.test = 1;
  anyObject.test = 3;
  anyObject.un();
  console.log(anyObject.test)
  // -> 1
  anyObject.re();
  console.log(anyObject.test)
  // -> 3
```

## Tests

```
  npm test
```

## Contributing

Contribution always appreciated :)

## Release History

* 0.0.1 Initial release
