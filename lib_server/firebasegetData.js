
var admin = require('firebase-admin');
var serviceAccount = require('../AUTH.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://labsharingday11112019.firebaseio.com'
});
var db = admin.database();
var ref = db.ref();
exports.ref = ref;

;
