import nodemailer from "nodemailer";
export async function POST(req, res) {
  const { name, email, message } = await req.json();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail account
      pass: process.env.GMAIL_PASS, // Your Gmail password or App password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // Your Gmail account
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    return new Response(JSON.stringify("Message sent successfully."), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify("Error sending message."), {
      status: 500,
    });
  }
}
