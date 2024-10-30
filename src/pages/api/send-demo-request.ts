import nodemailer from 'nodemailer';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, recaptchaToken } = req.body;

        // Verify the reCAPTCHA token
        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
            {
                method: 'POST',
            }
        );
        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return res.status(400).json({ message: 'reCAPTCHA validation failed' });
        }

        // Create a transporter object using SMTP or a service like Gmail
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // EMail options
        let mailOptions = {
            from: '"denovo security" <youremail@example.com>', // Sender address
            to: 'admin@denovosecurity.com', // Your email (where you receive the demo requests)
            subject: 'New Demo Request',
            text: `Demo Request from ${firstName} ${lastName} - Email: ${email}`,
            html: `<p>Demo Request from <strong>${firstName} ${lastName}</strong></p>
                   <p>Email: ${email}</p>`,
        };

        try {
            // Send the email
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}