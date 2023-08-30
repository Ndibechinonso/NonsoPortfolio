import Visitor from "@/models/visitor.model";
import dbConnection from "@/utils/dbConnection";
import mail from "@/utils/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

  await dbConnection();
  const { name, email, feedback } = await req.json();

  const visitor = new Visitor({ name, email, feedback });
  const newVisitor = await visitor.save()
  if(newVisitor === visitor){
    mail({
      from: "edwardndibe@gmail.com",
      to: "edwardndibe@gmail.com",
      subject: `New Message from ${name}`,
      attachment: [
        {
          data: `<html><p>${email} says</p> <p>${feedback}</p></html>`,
          alternative: true,
        },
      ],
    });
    return NextResponse.json({msg: ["Thank you for contacting me, I will get bavk to you soon."]})
  }
return NextResponse.json({msg: ["Error"]})
};

