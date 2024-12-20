/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('blogz');
const collection = "drafts";

// db.getCollectionInfos({name : collection});
// db.runCommand( { collMod: "users",
//    validator: {
//       $jsonSchema: {
//          bsonType: "object",
//          required: [ "email", "password" ],
//          properties: {
//             email: {
//                bsonType: "string",
//                description: "must be a string and is required"
//             },
//             password: {
//                bsonType: "string",
//                minLength: 6,
//                description: "must be a string of at least 6 characters, and is required"
//             }
//          }
//       }
//    }
// } );

db.runCommand({collMod : "blogs", 
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Drafts Object Validation",
         required: [ "title", "createdAt"],
         properties: {
            title: {
               bsonType: "string",
               description: "title must be a string and is required"
            },
            banner: {
               bsonType: "string",
               description: "banner muse be a string."
            },
            description: {
               bsonType: "string",
               maxLength : 300,
               description: "Description Maximum character muse be under 300."
            },
            topics : {
             bsonType : "array",
             description : "Topics muse be a array string."
            },
            content : {
              bsonType : "array",
              description : "Content muse be a array."
            },
            date : {
              bsonType : "date",
              description : "createAt must be a date."
            }
         }
      }
   }
});

// db.createCollection(collection, {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           title: "Drafts Object Validation",
//           required: [ "title"],
//           properties: {
//              title: {
//                 bsonType: "string",
//                 description: "title must be a string and is required"
//              },
//              banner: {
//                 bsonType: "string",
//                 description: "banner muse be a string."
//              },
//              description: {
//                 bsonType: "string",
//                 maxLength : 300,
//                 description: "Description Maximum character muse be under 300."
//              },
//              topics : {
//               bsonType : "array",
//               description : "Topics muse be a array string."
//              },
//              content : {
//                bsonType : "array",
//                description : "Content muse be a array."
//              },
//              createdAt : {
//                bsonType : "number",
//                description : "createAt must be a number."
//              }
//           }
//        }
//     }
//  } )
