var isDriverDb = function(db) {
  if (typeof db.admin !== 'function') return false;
  if (typeof db.close !== 'function') return false;
  if (typeof db.collection !== 'function') return false;
  if (!db.s || typeof db.s.topology !== 'object') return false;
  if (typeof db._getServer !== 'undefined') return false;

  return true;
};

var isMongojsDb = function(db) {
  if (typeof db.close !== 'function') return false;
  if (typeof db.collection !== 'function') return false;
  if (typeof db.getCollectionNames !== 'function') return false;
  if (typeof db._getServer !== 'function') return false;

  return true;
};

module.exports = function(db, cb) {
  if (isDriverDb(db)) return cb(null, db.s.topology);
  if (isMongojsDb(db)) {
    db._getServer(function(err, srv) {
      if (err) return cb(err);
      cb(null, srv);
    });
    return;
  }

  cb(new Error('Unrecognized mongodb or mongojs instance. Only mongodb-native 2.x is supported.'));
};
