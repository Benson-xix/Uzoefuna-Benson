"use server";


import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";



const resend = new Resend(process.env.RESEND_API_KEY);



  export async function POST(req: NextRequest, res: NextResponse) {
    try {
     
      const body = await req.json();
  
      const { email, subject, message } = body;
  
      if (!email || !subject || !message) {
        return NextResponse.json({ error: "Invalid input data" });
      }
  
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['uzoefunam.benson@gmail.com'],
        subject: subject,
        reply_to: email,
        text: message,
      });
  
      return NextResponse.json(data);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to send email" });
    }
  }
