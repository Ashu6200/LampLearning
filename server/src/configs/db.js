const { default: mongoose } = require("mongoose");
const config = require("./config");

let dbInstance = undefined;
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(config.DATABASEURL);
        dbInstance = connectionInstance;
        console.log(
            `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = { connectDB, dbInstance }