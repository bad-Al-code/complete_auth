export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #000000; padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verify Your Email</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #000000;">{verificationToken}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 2 hour for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to al_auth!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #000000;
      color: white;
      text-align: center;
      padding: 20px;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
    }
    .content {
      padding: 20px;
      text-align: left;
    }
    .content p {
      font-size: 16px;
      color: #333333;
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #888888;
      font-size: 0.8em;
    }
    .footer a {
      color: #000000;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <div class="email-container">
    <!-- Email Header -->
    <div class="header">
      <h1>Welcome to al_auth, {userName}!</h1>
    </div>

    <!-- Email Content -->
    <div class="content">
      <p>Hello {userName},</p>
      <p>We're excited to have you onboard at <strong>al_auth</strong>! You've successfully created an account using the email: <strong>{userEmail}</strong>.</p>
      <p>We’re here to help you secure your apps and manage authentication with ease. You can now explore all the features and tools that al_auth has to offer.</p>
      <p>If you have any questions, feel free to reach out to our support team.</p>
      <p>Best regards,<br>The al_auth Team</p>
    </div>

    <!-- Email Footer -->
    <div class="footer">
      <p>This is an automated message, please do not reply to this email.</p>
      <p>Need help? <a href="#">Contact Support</a></p>
      <p>&copy; 2024 al_auth. All rights reserved.</p>
    </div>
  </div>

</body>
</html>
`;
