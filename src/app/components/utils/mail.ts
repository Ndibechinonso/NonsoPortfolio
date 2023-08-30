import { SMTPClient } from "emailjs";

export default async function handler(mailObj: any) {
  const client = new SMTPClient({
    user: "edwardndibe@gmail.com",
    password: process.env.PASSWORD,
    host: "smtp.gmail.com",
    ssl: true,
  });
  try {
    const message = await client.sendAsync(mailObj);
  } catch (e) {
    console.log(e, "error");
  }
}
