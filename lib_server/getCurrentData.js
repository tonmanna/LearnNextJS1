const { ref } = require("./firebasegetData");
function getCurrentData() {
    return new Promise((resolve) => {
        ref.once('value', function (snapshot) {
            const val = snapshot.val();
            resolve(val);
        });
    });
}

module.exports = {
    getCurrentData: getCurrentData
}


