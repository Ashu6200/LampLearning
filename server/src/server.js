const { httpServer } = require("./app");
const { connectDB } = require("./configs/db");
const cloudinary = require('cloudinary').v2;
const config = require("./configs/config");

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: config.CLOUDINARYCLOUDNAME,
  api_key: config.CLOUDINARYAPIKEY,
  api_secret: config.CLOUDINARYAPISECERT,
});

const server = async () => {
  await connectDB();
  // createStaticData()
  httpServer.listen(PORT, () => {
    console.log(`Sever is listening on port ${PORT}`);
  });
};
server();