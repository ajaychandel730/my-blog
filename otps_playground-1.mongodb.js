

use("blogz");

// db.otps.createIndex(
//   { expires_at: 1 },       // the field that stores expiry time
//   { expireAfterSeconds: 0 }
// );

// db.otps.getIndexes();

// db.runCommand({
//     collMod : "otps",
//     validator : {
//       $jsonSchema : {
//         bsonType : "object",
//         required : ["email", "code", "expries_at", "created_at"],
//         properties : {
//             email : {
//                 bsonType : "string",
//                 pattern: "^[a-zA-Z0-9._%+-]+@gmail\\.com$",
//                 description : "Please enter valid email."
//             },
//             code : {
//                 bsonType : "string",
//                 description : "code should be in between 4-10."
//             },
//             expires_at : {
//                 bsonType : "date",
//                 description : "You forgot enter expires time."
//             },
//             created_at : {
//                 bsonType : "date",
//                 description : "Provide default created time value."
//             }
//         }

//       }
//     },
//     validationLevel : "strict",
//     validationAction : "error"
// })