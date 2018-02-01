// const MongoClient =  require ('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require ('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    if (err) {
        return console.log ('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

    var db = client.db('TodoApp')
    db.collection('Todos').find({
        _id: new ObjectID("5a7095c8472eba10d85f5e07")
     }).toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch todos', err);
    });

})

// QUARY BY ID