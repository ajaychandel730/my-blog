/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const nextConfig = {
    logging : {
     fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    },
    webpack  : (config, { isServer }) => {
        if (!isServer) {
          // Ensure that all imports of 'yjs' resolve to the same instance
          config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs')
        }
        return config
      },
    reactStrictMode: false,
    images :{
        remotePatterns : [
            {
                protocol : "https",
                hostname : "res.cloudinary.com",
                port : "",
                pathname : "/instagram-clone-images-27017/image/upload/**"
            },
            {
                protocol : "https",
                hostname : "nextui.org",
                port : "",
                pathname : "/images/**"
            }
        ]
    },
    experimental : {
        serverActions : {
            bodySizeLimit : "2mb"
        }
    }
};

// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         // Ensure that all imports of 'yjs' resolve to the same instance
//         config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs')
//       }
//       return config
//     },
//   }

export default nextConfig;
