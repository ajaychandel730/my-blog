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
use('blogsz');


db.getCollection("users").insertOne({
   email : "ksjk",
   password : "jd"
});

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

// db.createCollection("students", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           title: "Student Object Validation",
//           required: [ "address", "major", "name", "year" ],
//           properties: {
//              name: {
//                 bsonType: "string",
//                 description: "'name' must be a string and is required"
//              },
//              year: {
//                 bsonType: "int",
//                 minimum: 2017,
//                 maximum: 3017,
//                 description: "'year' must be an integer in [ 2017, 3017 ] and is required"
//              },
//              gpa: {
//                 bsonType: [ "double" ],
//                 description: "'gpa' must be a double if the field exists"
//              }
//           }
//        }
//     }
//  } )
