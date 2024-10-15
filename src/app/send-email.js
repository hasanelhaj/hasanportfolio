const sgMail = require('@sendgrid/mail');

exports.handler = async () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'recipient_email@example.com',
    from: 'sehasanelhaj@gmail7078.com',
    subject: 'Email from Vercel Cron Job',
    text: 'This email was sent using a Vercel cron job.'
  };

  try {
    const info = await sgMail.send(msg);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};