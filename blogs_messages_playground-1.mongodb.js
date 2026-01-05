
use("blogz");

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]{1,64}@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/; but is the limitions of this regex
// db.getCollection("messages").createIndex({"expires_at" : 1}, {expireAfterSeconds : 0});

db.createCollection("messages", {
    validator : {
        $jsonSchema : {
            bsonType : "object",
            required: ["name", "email", "subject", "text", "expires_at", "created_at"],
            properties : {
                name : {
                    bsonType : "string",
                    minLength : 3,
                    maxLength : 30,
                    description : "Your name must be between [3-32] character long."
                },
                email : {
                bsonType : "string",
                maxLength : 254,
                description : "Please provide valid email.",
                pattern :   "^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]{1,64}@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}$"
                },
                subject : {
                    bsonType : "string",
                    maxLength : 100,
                    description : "Subject must be in between [0-100] characters."
                },
                text : {
                    bsonType : "string",
                    maxLength : 300,
                    description : "Your message text under [0-300] character long."
                },
                expires_at : {
                    bsonType : "date",
                    description : "Please provide message expires date."
                },
                created_at : {
                    bsonType : "date",
                    description : "Please provide message creater_at date."
                }
            }
        }
    }
})