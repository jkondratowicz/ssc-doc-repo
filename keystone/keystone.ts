import dotenv from "dotenv";
import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";
dotenv.config();

const {
  // The S3 Bucket Name used to store assets
  S3_BUCKET_NAME: bucketName = "keystone-test",
  // The region of the S3 bucket
  S3_REGION: region = "ap-southeast-2",
  // The Access Key ID and Secret that has read/write access to the S3 bucket
  S3_ACCESS_KEY_ID: accessKeyId = "keystone",
  S3_SECRET_ACCESS_KEY: secretAccessKey = "keystone",
  // The base URL to serve assets from
  ASSET_BASE_URL: baseUrl = "http://localhost:3000",
} = process.env;

export default withAuth(
  config({
    server: {
      cors: {
        origin: ["http://localhost:5173", "https://sscmapa.kondratowicz.pl"],
        credentials: true,
      },
      port: 3007,
    },
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    lists,
    session,
    storage: {
      local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `${baseUrl}/images${path}`,
        serverRoute: {
          path: "/images",
        },
        storagePath: "public/images",
      },
      local_files: {
        kind: "local",
        type: "file",
        generateUrl: (path) => `${baseUrl}/file${path}`,
        serverRoute: {
          path: "/files",
        },
        storagePath: "public/files",
      },
    },
  })
);
