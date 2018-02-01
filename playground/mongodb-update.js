// const MongoClient =  require ('mongodb').MongoClient;
const {MongoClient, ObjectID} =  require ('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    if (err) {
        return console.log ('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

   var db = client.db('TodoApp')
   db.collection('Todos').findOneAndUpdate({
       _id: new ObjectID("5a73034fec5c733deae3e1bb")
   }, {
       $set: {
           completed: true
       }
   }, {
       returnOriginal: false
   }).then((result) =>{
       console.log(result);
   });
   

//findOneAndUpdate
    //client.close
    });