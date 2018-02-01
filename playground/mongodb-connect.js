const MongoClient =  require ('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) =>{
    if (err) {
        return console.log ('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB Server');

//     var db = client.db('TodoApp')
//     db.collection('Todos').insertOne({
//         text:'Something to do',
//         completed: false

//     }, (err, result) =>{
//         if (err) {
//         return console.log('Unable to connect to Server');
//     }
    
//     console.log(JSON.stringify(result.ops, undefined, 2));
// });


var db = client.db('TodoApp')
    db.collection('Users').insertOne({
        Name: 'Affiong',
        Age: 27,
        Loction: 'Obodo Oyibo'

    }, (err, result) =>{
        if (err) {
        return console.log('Unable to connect to Server');
    }
    
    console.log(JSON.stringify(result.ops, undefined, 2));
});


client.close();
 });