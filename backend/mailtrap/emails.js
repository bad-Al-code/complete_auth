import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationToken}",
        verificationToken,
      ),
      category: "Email Verification",
    });

    console.log("Email sent succssfully", response);
  } catch (error) {
    console.error(`Error sending verification: ${error} `);
    throw new Error(`Error sending verification email :${error}`);
  }
};
