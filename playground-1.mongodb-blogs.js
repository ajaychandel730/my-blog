/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


const database = 'blogz';
const collection = 'blogs';

// The current database to use.
use(database);
// db.getCollection(collection).insertOne({
//     title : "fkdlfl",
//     topics : ["fdkf"]
// })
db.runCommand( { collMod: "blogs",
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "title", "topics", "banner"],
          properties: {
            title : {
                bsonType : "string",
                description : "Please provide blog title."
            },
            banner  : {
                bsonType : "string",
                description : "Please provide blog  banner."
            },
            topics : {
                bsonType : "array",
                description : "Please provide blog topic."
            },
            description : {
                bsonType : "string",
                maxLength : 300,
            },
            content  : {
                bsonType : 'array'
            }
          }
       }
    }
 } );


// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
