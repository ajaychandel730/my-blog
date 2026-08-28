use("blogz");

db.createCollection("admin_configs", {
 validator:{
    $jsonSchema:{
        bsonType:"object",
        properties:{
            service:{
                bsonType:"string",
                enum:["google_gmail"],
                description:"Must be a string and set to 'google_gmail' to identify the Gmail integration service",
            },
            email:{
                bsonType:"string",
                maxLength:254,
                description:"Must be a valid string containing the sender's gmail address"
            },
            refershToken:{
                bsonType:"string",
                description:"Must be a valid string containing the Google OAuth refresh token"
            },
            expiryDate:{
                bsonType:"number",
                description:"Must be a timestamp containg the google refersh token expire date."
            },
            createdAt:{
                bsonType:"date",
                description:"CreatedAt field must be a date."
            }
        }
    }
 }
})