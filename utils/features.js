import DataUriParser from "datauri/parser.js";
import path from "path";
import  {createTransport} from "nodemailer";

export const getDataUri = (file) => {
  const parser = new DataUriParser();
  const exname = path.extname(file.originalname).toString();

  return parser.format(exname, file.buffer);
};

export const sendToken = async (user, res, message, statuscCode) => {
  const token = await user.generateToken();

  res
    .status(statuscCode)
    .cookie("token", token, {
      ...cookieOptions,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    })
    .json({
      success: true,
      message: message,
    });
};

export const cookieOptions = {
  secure: process.env.NODE_ENV === "Development" ? true : false,
  httpOnly: process.env.NODE_ENV === "Development" ? true : false,
  sameSite: process.env.NODE_ENV === "Development" ? true : "none",
};

export const sendEmail = async (subject, to, text) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};