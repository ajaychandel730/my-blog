const { ObjectId } = require("mongodb");

use('blogz');

// db.getCollection("blogs").updateMany({}, {
//     $set : {userId : new ObjectId("67a049d4baa0cb8b71f63366")}
// });


db.runCommand( { collMod: "users",
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "email", "password", "joinDate", "role"],
          properties: {
            role : {
               enum : ["owner", "admin", "user"],
               description : "please add user role",
            },
             email: {
                bsonType: "string",
                description: "Email must be required."
             },
             password: {
                bsonType: "string",
                minLength : 6,
                description: "6–10 chars, must include letter, number, and special character"
             },
             name : {
                bsonType : "string",
                minLength : 3,
                maxLength : 32,
                description : 'User name must be  between [3-32] characters.'
             },
             image : {
                bsonType : "string",
                description : "User Image muse be a string."
             },
             joinDate : {
                bsonType : "date",
                description : "User join date is required."
             }
          }
       }
    }
 } );