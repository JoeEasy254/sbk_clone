import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.smartbrainskenya.com',
            port: '',
      
          },

             {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
      
          },
        ],
      },
};

export default withNextVideo(nextConfig);