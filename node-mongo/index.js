const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongo://localhost:27017';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Connected to the server');
    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne(
        { name: 'Uthapizza', description: 'sup' },
        (err, result) => {
            assert.equal(err, null);

            console.log('After Insert:\n');
            console.log(result.ops);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);

                console.log('Found: ' + docs);

                db.dropCollection('dishes', (err, result) => {
                    assert.equal(err, null);

                    client.close();
                });
            });
        }
    );
});
