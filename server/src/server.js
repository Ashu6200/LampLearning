const { httpServer } = require("./app");
const { connectDB } = require("./configs/db");


const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, async () => {
    console.log(`Sever is listening on port ${PORT}`);
    await connectDB();
});
