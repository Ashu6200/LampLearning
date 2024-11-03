const intializSocket = io => {
    return io.on("connect", socket => {
        const roomId = socket.id;
        socket.on("joinConverstaion", ({ conversationId }) => {
            socket.join(conversationId);
        });
        socket.on("discconnect", () => { });
    });
};
module.exports = { intializSocket };
