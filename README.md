to-mongodb-core
===============

Gets the underlying mongodb-core instance in the passed mongodb-native or mongojs instance.

Usage
-----

```js
var mongojs = require('mongojs');
var toMongodbCore = require('to-mongodb-core');

var db = mongojs('mydb');

toMongodbCore(db, function(err, mdbcore) {
  // mdbcore is the mongodb-core server instance used.
});
```

License
-------

MIT
