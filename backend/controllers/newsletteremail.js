const nodemailer = require("nodemailer");

const transport_sendemail_newletter = async (req, res) => {
  try {
    // Create a reusable transporter object using Gmail service
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,  // Your Gmail account
        pass: process.env.GMAIL_PASS,  // Your Gmail password (or App-specific password)
      },
    });

    const { email } = req.body;

    // Ensure email is provided
    if (!email) {
      return res.status(400).send({
        success: false,
        message: "Email Not Provided!",
      });
    }

    // Send email to the owner (new subscriber)
    await transport.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,  // Owner's email address
      subject: 'New Newsletter Subscription (AMB ENG WEBSITE)',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #333333;">New Newsletter Subscription</h2>
              <h1 style="font-size: 16px; color: #555555;">AMB Engineering Website</h1>
              <p style="font-size: 16px; color: #555555;">You have a new subscriber:</p>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Email:</strong> ${email}</li>
              </ul>
            </div>
          </body>
        </html>
      `,
      replyTo: email,  // Optional: set the reply-to to the user's email
    });

    // Send a confirmation email to the user (subscriber)
    await transport.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for subscribing (AMB Engineering Website)!',
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);">
              <h2 style="color: #333333;">Thank you for subscribing!</h2>
              <h1 style="font-size: 16px; color: #555555;">AMB Engineering Website</h1>
              <p style="font-size: 16px; color: #555555;">Thank you for subscribing to our newsletter. You'll receive the latest updates from us soon.</p>
              <p style="font-size: 16px; color: #555555;">Stay tuned for exciting content!</p>
              <p style="font-size: 14px; color: #777777;">If you have any questions, feel free to contact us anytime.</p>
            </div>
          </body>
        </html>
      `,
      replyTo: process.env.GMAIL_USER,  // Optional: set the reply-to to the owner's email
    });

    // Return success response after emails are sent
    res.status(200).send({
      success: true,
      message: "Subscription successful. Emails have been sent.",
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({
      success: false,
      message: "Error sending email. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = {
  transport_sendemail_newletter,
};
