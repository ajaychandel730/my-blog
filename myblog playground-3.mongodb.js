use("blogz");
const collection = "blogs";

// db.getCollectionInfos({ name: collection });

// db.blogs.updateMany({}, [
//   {
//     $set: {
//       topics: {
//         $reduce: {
//           input: "$topics",
//           initialValue: [],
//           in: {
//             $concatArrays: [
//               "$$value",
//               {
//                 $map: {
//                   input: {
//                     $regexFindAll: { input: "$$this", regex: /[a-zA-Z0-9]+/g },
//                   },
//                   in: "$$this.match",
//                 },
//               },
//             ],
//           },
//         },
//       },
//     },
//   },
// ]);

// db.getCollection(collection).updateMany({userId : new ObjectId("676ffa364a0f166268b55cc7")},{
//    $unset : {
//       // userId : new ObjectId("676ffa364a0f166268b55cc7"),
//       userName : "",
//       userImg : ""
//    },

// },
// {
//    bypassDocumentValidation: true
// });

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

// db.runCommand({collMod : "blogs",
//    validator: {
//       $jsonSchema: {
//          bsonType: "object",
//          title: "blog Validation",
//          required: [ "title", "date", "userId"],
//          properties: {
//             userId : {
//              bsonType : "objectId",
//              description : "userId must be a objectId and is required."
//             },
//             title: {
//                bsonType: "string",
//                description: "title must be a string and is required"
//             },
//             banner: {
//                bsonType: "string",
//                description: "banner muse be a string."
//             },
//             description: {
//                bsonType: "string",
//                maxLength : 300,
//                description: "Description Maximum character must be under 300."
//             },
//             topics : {
//              bsonType : "array",
//              description : "Topics muse be a array string."
//             },
//             content : {
//               bsonType : "array",
//               description : "Content muse be a array."
//             },
//             date : {
//               bsonType : "date",
//               description : "Date property must be a date."
//             }
//          }
//       }
//    }
// });
