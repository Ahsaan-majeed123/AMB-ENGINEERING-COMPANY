const nodemailer = require("nodemailer");

const transport_sendemail = async (req, res) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const { name, email, message, contactNo, category } = req.body;

    // Ensure all required fields are provided
    if (!name || !email || !message || !contactNo || !category) {
      return res.status(400).send({
        success: false,
        message: "All required fields (name, email, message, contactNo, category) must be provided!",
      });
    }

    // Log email to check incoming data
    // console.log("Received email:", email);

    const info = await transport.sendMail({
      from: process.env.GMAIL_USER, // The Gmail account you're using to send the email

      
      to: "farhanbajwa418@gmail.com",   // Recipient email (your email)
subject: `Contact Form FROM ${name}`,
text: message,
replyTo: email,
html: `
  <html>
    <body style="background-color: #f4f4f4; font-family: sans-serif; padding: 5px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; font-size: 24px; font-weight: bold; color: #2c3e50; margin-bottom: 20px;">
          --AMB ENGINEERING COMPANY WEBSITE--
        </div>
        <div style="text-align: center; font-size: 20px; font-weight: 600; color: #34495e; margin-bottom: 20px;">
          Message from ${name}
        </div>
        <div style="font-size: 16px; color: #2c3e50; line-height: 1.6;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong><br>
  <p style="border:1px solid white; padding:5px 4px;">${message}</p>
</p>

          <p><strong>Phone No:</strong> ${contactNo}</p>
          <p><strong>Category:</strong> ${category}</p>
        </div>
        <div style="text-align: center; font-size: 14px; color: #95a5a6; margin-top: 20px;">
          Thank you for reaching out to AMB Engineering Company. We will get back to you shortly.
        </div>
      </div>
    </body>
  </html>
`
,



      replyTo: email, // The user's email, so that replies will go to the user
    });

    // Respond with success message
    res.status(200).send({
      success: true,
      message: "Message Sent Successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({
      success: false,
      message: "Error sending email.",
      error: error.message,
    });
  }
};

module.exports = {
  transport_sendemail,
};
