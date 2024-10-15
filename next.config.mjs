/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images :{
        remotePatterns : [
            {
                protocol : "https",
                hostname : "res.cloudinary.com",
                port : "",
                pathname : "/instagram-clone-images-27017/image/upload/**"
            }
        ]
    },
    experimental : {
        serverActions : {
            bodySizeLimit : "2mb"
        }
    }
};

export default nextConfig;
