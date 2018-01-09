const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Datastore = require('nedb')
const path = require('path')
const db = new Datastore({ filename: path.join(__dirname, 'database/baseball.db'), autoload: true })

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')))

app.post('/insert', (req, res) => {
  db.insert(req.body, function (err, newDoc) {
    if(err){
      res.status(500)
    }
    res.send('successfully inserted into database')
  })
})

app.get('/all-records', (req, res) => {
    db.find({}, function (err, docs) {
       if(err) {
         res.status(500)
         res.send('Error getting data from db')
       }
       res.send(docs)
    })
  }
)



app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
