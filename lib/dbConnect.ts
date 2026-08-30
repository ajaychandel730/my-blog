// import { MongoClient } from "mongodb";
// import { getErrorMessage } from "@/utils/errors";

// type GlobalWithMongo = typeof globalThis & {
//   _mongoClientPromise?: MongoClient;
// };

// const MONGO_URI: string | undefined = process.env?.MONGO_URI;
// let options = {};

// if (!MONGO_URI) {
//   throw new Error("Please define MONGO_URI.");
// }

// let globalWithMongo: GlobalWithMongo = global;
// let client: MongoClient;
// let clientPromise: MongoClient;

// async function dbConnect(): Promise<MongoClient> {
//   try {
//     if (!MONGO_URI) {
//       throw new Error("Please define MONGO_URI.");
//     }

//     if (clientPromise) {
//       return clientPromise;
//     }

//     if (process.env.NODE_ENV !== "production") {
//       if (!globalWithMongo?._mongoClientPromise) {
//         client = new MongoClient(MONGO_URI, options);
//         globalWithMongo._mongoClientPromise = await client.connect();
//       }
//       clientPromise = globalWithMongo._mongoClientPromise;
//     } else {
//       client = new MongoClient(MONGO_URI, options);
//       clientPromise = await client.connect();
//     }

//     return clientPromise;
//   } catch (err: unknown) {
//     throw new Error(getErrorMessage(err));
//   }
// }

// export { dbConnect };

// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, ServerApiVersion } from "mongodb"
 
if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"')
}
 
const uri = process.env.MONGO_URI
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
}
 
let client: MongoClient
let clientPromise :Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient
  }
 
  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options)
  }
  client = globalWithMongo._mongoClient
  clientPromise = client.connect();
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect();
}
 
// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;


// // import clientPromise from './path/to/your/mongoClientFile';
// async function shutdown() {
//   const client = await clientPromise;
//   await client.close();
//   console.log('MongoDB connection closed.');
//   process.exit(0);
// }

// // Listen for process termination signals
// process.on('SIGINT', shutdown);
// process.on('SIGTERM', shutdown);
