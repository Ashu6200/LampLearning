const { default: mongoose } = require("mongoose");

let dbInstance = undefined;
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        dbInstance = connectionInstance;
        console.log(
            `\n☘️  MongoDB Connected! Db host: ${connectionInstance.connection.host}\n`
        );
    } catch (error) {
        console.log("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = { connectDB, dbInstance }