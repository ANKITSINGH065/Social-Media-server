import { app } from "./app.js";
import { connectDB } from "./data/databass.js";
import cloadianary from "cloudinary";
import Stripe from "stripe";


connectDB();

export const stripe = new Stripe(process.env.STRIP_SECRET_KEY);

cloadianary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SPI_SECRET,
});
app.listen(process.env.PORT, () => {
  console.log(
    `server is lisen on ${process.env.PORT}, in  ${process.env.NODE_ENV}`
  );
});
