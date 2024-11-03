const passwordGenerator = () => {
    const alphabate = "ABCDEFGHIJKLMNOPQRStVWXYZabcdefghijklmnopqrstuvxyz0123456789";
    let password;
    for (let i = 0; i <= 8; i++) {
        password += alphabate[Math.floor(Math.random() * alphabate.length)];
    }
    return password;
}
module.exports = passwordGenerator;