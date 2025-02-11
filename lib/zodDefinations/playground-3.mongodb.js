use("blogz");


db.runCommand({ collMod : "drafts",
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Drafts Object Validation",
          required: [ "title", "userId", "date", "banner"],
          properties: {
            userId : {
             bsonType : "objectId",
             description : "UserId must be required."
            },
            date : {
               bsonType : "date",
               description : "date must be required."
            },
             title: {
                bsonType: "string",
                description: "title must be a string and is required"
             },
             banner: {
                bsonType: "string",
                description: "banner must be a string."
             },
             description: {
                bsonType: "string",
                maxLength : 300,
                description: "Description Maximum character must be under 300."
             },
             topics : {
              bsonType : "array",
              description : "Topics must be a array string."
             },
             content : {
               bsonType : "array",
               description : "Content must be a array."
             }
          }
       }
    }
 } )