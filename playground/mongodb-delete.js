// const MongoClient =  require ('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require ('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    if (err) {
        return console.log ('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

   var db = client.db('TodoApp')
   db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
       console.log(result);
   })
    
    //deleteMany
    //one
    //client.close
    });