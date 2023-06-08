import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
require("dotenv").config();
class BucketS3 {
  constructor(folder) {
    this.accessKeyId = process.env.AWS_ACCESS_KEY;
    this.secretKeyId = process.env.AWS_SECRET_KEY;
    this.bucketName = process.env.AWS_BUCKET_NAME;
    this.bucketRegion = process.env.AWS_REGION;
    this.folder = folder;
    this.client = new S3Client({
      region: this.bucketRegion,
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretKeyId,
      },
    });
  }

  async uploadFile(file, fileName) {
    try {
      const keyFile = `${this.folder}/${fileName}.png`;
      let url = `https://${this.bucketName}.s3.amazonaws.com/${keyFile}`;
      const objectFile = {
        Bucket: this.bucketName,
        Key: keyFile,
        Body: file.data,
        ACL: "public-read",
      };
      await this.client.send(new PutObjectCommand(objectFile));
      return url;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default BucketS3;
