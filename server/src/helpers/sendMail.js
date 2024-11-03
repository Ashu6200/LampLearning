const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const config = require('../configs/config');

const sendMail = async (options) => {
    const { SMTPHOST, SMTPPORT, SMTPSERVICE, SMTPMAIL, SMTPPASS } = config

    const transporter = nodemailer.createTransport({
        host: SMTPHOST,
        port: Number(SMTPPORT),
        service: SMTPSERVICE,
        auth: {
            user: SMTPMAIL,
            pass: SMTPPASS,
        },
    });

    try {
        const { email, subject, mailtemplate, data } = options;
        const mailTemplatePath = path.join(__dirname, '../mails', mailtemplate);
        const html = await ejs.renderFile(mailTemplatePath, data);
        const mailOptions = {
            from: SMTPMAIL,
            to: email,
            subject,
            html,
        };
        await transporter.sendMail(mailOptions);
        console.info(`Email sent to ${email}`);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email delivery failed');
    }
};

module.exports = sendMail;