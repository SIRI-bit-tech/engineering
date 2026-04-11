import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { SITE_NAME, SITE_EMAIL } from "@/constants/constants";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !company || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required engineering form fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `${SITE_NAME} <enquiry@voltaedge.com>`,
      to: [SITE_EMAIL],
      subject: `Engineering Inquiry: ${subject} from ${company}`,
      html: `
        <div style="font-family: sans-serif; color: #1D1F21; max-width: 600px; margin: 0 auto; border: 1px solid #005F8D; padding: 40px;">
          <h1 style="color: #003B5C; font-size: 24px; border-bottom: 2px solid #005F8D; padding-bottom: 10px;">Technical Engineering Request</h1>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #E1F5FE; padding: 20px; border-left: 4px solid #005F8D; margin-top: 20px;">
            <p style="margin: 0; line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 40px; font-size: 12px; color: #005F8D; text-transform: uppercase; font-weight: bold; letter-spacing: 1px;">VE-ENQ-SYSTEM-2024</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "An internal engineering system error occurred" },
      { status: 500 }
    );
  }
}
