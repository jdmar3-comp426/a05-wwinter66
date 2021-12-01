var db = require('./database.js')
var md5 = require('md5')

all = db.prepare('SELECT * FROM userinfo').all();

function updateAll() {
    all = db.prepare('SELECT * FROM userinfo').all();
}

console.log("\nAll records in my database:", db.name)
console.log(all)

const getUser = db.prepare('SELECT * FROM userinfo WHERE id = ?')
const output = getUser.get('2')

console.log("\nFull record for username:", output.user)
console.log(output)