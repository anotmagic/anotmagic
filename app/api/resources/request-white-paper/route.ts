import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const role = String(formData.get("role") ?? "").trim();

    // Basic validation
    if (!name || !company || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid work email address.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    // Instantiate the client here — AFTER the env var check — so the
    // module can be imported at build time without side effects.
    const resend = new Resend(process.env.RESEND_API_KEY);

    const internalEmail =
      process.env.WHITE_PAPER_REQUEST_TO || process.env.CONTACT_EMAIL;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "M Sciences <onboarding@resend.dev>";

    if (!internalEmail) {
      console.error(
        "WHITE_PAPER_REQUEST_TO or CONTACT_EMAIL is not configured.",
      );

      return NextResponse.json(
        {
          success: false,
          message: "Recipient email is not configured.",
        },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safeRole = escapeHtml(role || "Not provided");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [internalEmail],
      replyTo: email,
      subject: `White Paper Request — ${name} — ${company}`,

      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>White Paper Request</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background: #f7f8f7;
              font-family: Arial, Helvetica, sans-serif;
              color: #10262e;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 40px auto;
                background: #ffffff;
                border: 1px solid #d9e1e1;
              "
            >

              <div
                style="
                  background: #10262e;
                  color: #ffffff;
                  padding: 28px 32px;
                "
              >
                <div
                  style="
                    color: #2fa9a6;
                    font-size: 12px;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    margin-bottom: 10px;
                  "
                >
                  M Sciences
                </div>

                <h1
                  style="
                    margin: 0;
                    font-size: 26px;
                    line-height: 1.25;
                    font-weight: 700;
                  "
                >
                  White Paper Request
                </h1>
              </div>

              <div style="padding: 32px;">

                <p
                  style="
                    margin-top: 0;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #37535e;
                  "
                >
                  A visitor has requested access to the full
                  <strong>
                    Rethinking Industrial Water Performance
                  </strong>
                  white paper.
                </p>

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    border-collapse: collapse;
                    margin-top: 24px;
                  "
                >
                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #eef2f1;
                        border-bottom: 1px solid #d9e1e1;
                        width: 150px;
                        font-weight: 700;
                      "
                    >
                      Name
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #d9e1e1;
                      "
                    >
                      ${safeName}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #eef2f1;
                        border-bottom: 1px solid #d9e1e1;
                        font-weight: 700;
                      "
                    >
                      Company
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #d9e1e1;
                      "
                    >
                      ${safeCompany}
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #eef2f1;
                        border-bottom: 1px solid #d9e1e1;
                        font-weight: 700;
                      "
                    >
                      Work email
                    </td>

                    <td
                      style="
                        padding: 12px;
                        border-bottom: 1px solid #d9e1e1;
                      "
                    >
                      <a
                        href="mailto:${safeEmail}"
                        style="color: #17787a;"
                      >
                        ${safeEmail}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        padding: 12px;
                        background: #eef2f1;
                        font-weight: 700;
                      "
                    >
                      Role
                    </td>

                    <td style="padding: 12px;">
                      ${safeRole}
                    </td>
                  </tr>
                </table>

                <div
                  style="
                    margin-top: 28px;
                    padding: 18px 20px;
                    background: #f7efe2;
                    border-left: 4px solid #a8600f;
                  "
                >
                  <strong>Manual approval required</strong>

                  <p
                    style="
                      margin: 8px 0 0;
                      color: #37535e;
                      line-height: 1.5;
                    "
                  >
                    No PDF has been automatically sent to the requester.
                    Review the request and send the approved white paper
                    manually if appropriate.
                  </p>
                </div>

                <p
                  style="
                    margin-top: 30px;
                    margin-bottom: 0;
                    font-size: 13px;
                    color: #6b7b80;
                  "
                >
                  This request was submitted through the M Sciences
                  Resources page.
                </p>

              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send the request.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Your request has been received. The M Sciences team will review it and contact you.",
      id: data?.id,
    });
  } catch (error) {
    console.error("White paper request error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
