const clone = require('clone')
const config = require('./config')
const fs = require('fs');

const db = {}

const defaultData = {
    entries: [ ]
}

const get = (token) => {
    let data = db[token]
    if (data == null) {
        let text = fs.readFileSync('dataset/Blood1-addtime.csv','utf8')
        let lines = text.split('\n');
        for(const line of lines){
            let token = line.split(',');
            let item = {}
            item['id'] = parseInt(token[0])
            item['date'] = token[1]
            item['systolicBP'] = parseInt(token[2])
            item['smoke'] = parseInt(token[3])
            item['overwt'] = parseInt(token[4])

            defaultData.entries.push(item)
        }

        data = db[token] = clone(defaultData)
    }

    return data
}

const add = (token, entry) => {
    if (!entry.id) {
        entry.id = Math.random().toString(36).substr(-8)
    }

    get(token).entries.push(entry)

    return entry
}

module.exports = {
    get,
    add
}
