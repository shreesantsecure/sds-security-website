import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY environment variable is missing.");
            return NextResponse.json(
                { success: false, error: "Server configuration error. Please try again later." },
                { status: 500 }
            );
        }

        const formData = await request.formData();

        const position = formData.get("position")?.toString() || "";
        const fullName = formData.get("fullName")?.toString() || "";
        const email = formData.get("email")?.toString() || "";
        const phone = formData.get("phone")?.toString() || "";
        const experience = formData.get("experience")?.toString() || "";
        const message = formData.get("message")?.toString() || "";
        const fileEntry = formData.get("file");

        // Validation
        if (!position.trim()) {
            return NextResponse.json(
                { success: false, error: "Position applied for is required." },
                { status: 400 }
            );
        }

        if (!fullName.trim()) {
            return NextResponse.json(
                { success: false, error: "Full Name is required." },
                { status: 400 }
            );
        }

        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            return NextResponse.json(
                { success: false, error: "A valid email address is required." },
                { status: 400 }
            );
        }

        if (!phone.trim()) {
            return NextResponse.json(
                { success: false, error: "Phone number is required." },
                { status: 400 }
            );
        }

        // Process File Attachment if present
        const attachments: Array<{ filename: string; content: Buffer }> = [];

        if (fileEntry && fileEntry instanceof File && fileEntry.size > 0) {
            // Validate file size (< 10MB)
            if (fileEntry.size > 10 * 1024 * 1024) {
                return NextResponse.json(
                    { success: false, error: "Attached resume exceeds the 10MB limit." },
                    { status: 400 }
                );
            }

            const arrayBuffer = await fileEntry.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            attachments.push({
                filename: fileEntry.name || "Resume.pdf",
                content: buffer,
            });
        }

        const resend = new Resend(apiKey);

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Job Application</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#334155;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td style="background-color:#0F172A; padding:28px 32px; border-bottom:3px solid #0B65C6;">
              <h1 style="color:#ffffff; font-size:20px; font-weight:700; margin:0; letter-spacing:-0.5px;">SDS Security Careers</h1>
              <p style="color:#94a3b8; font-size:13px; margin:4px 0 0 0; text-transform:uppercase; letter-spacing:1px; font-weight:600;">New Job Application</p>
            </td>
          </tr>
          <!-- Body Content -->
          <tr>
            <td style="padding:32px;">
              <div style="display:inline-block; background-color:#e0f2fe; border:1px solid #bae6fd; border-radius:6px; padding:6px 12px; margin-bottom:20px;">
                <span style="font-size:13px; font-weight:700; color:#0369a1; text-transform:uppercase;">Applied Position: ${escapeHtml(position.trim())}</span>
              </div>

              <p style="margin:0 0 24px 0; font-size:15px; color:#475569; line-height:1.5;">
                A candidate has submitted a new job application via the SDS Security Careers page.
              </p>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; width:150px; font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase;">Candidate Name</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:15px; font-weight:600; color:#0f172a;">${escapeHtml(fullName.trim())}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase;">Email Address</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:15px; color:#0B65C6; font-weight:500;">
                    <a href="mailto:${escapeHtml(email.trim())}" style="color:#0B65C6; text-decoration:none;">${escapeHtml(email.trim())}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase;">Phone Number</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:15px; font-weight:600; color:#0f172a;">
                    <a href="tel:${escapeHtml(phone.trim())}" style="color:#0f172a; text-decoration:none;">${escapeHtml(phone.trim())}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase;">Total Experience</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:15px; font-weight:500; color:#334155;">${escapeHtml(experience.trim() || "Not specified")}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:13px; font-weight:600; color:#64748b; text-transform:uppercase;">Resume Attached</td>
                  <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:15px; font-weight:600; color:${attachments.length > 0 ? "#16a34a" : "#dc2626"};">
                    ${attachments.length > 0 ? `Yes (${escapeHtml(attachments[0].filename)})` : "No attachment"}
                  </td>
                </tr>
              </table>

              ${message.trim() ? `
              <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:20px; margin-bottom:24px;">
                <p style="margin:0 0 8px 0; font-size:12px; font-weight:700; color:#64748b; text-transform:uppercase; letter-spacing:0.5px;">Cover Note / Message</p>
                <p style="margin:0; font-size:14px; color:#334155; line-height:1.6; white-space:pre-wrap;">${escapeHtml(message.trim())}</p>
              </div>
              ` : ""}

              <p style="margin:0; font-size:13px; color:#94a3b8;">
                Tip: Click <strong>Reply</strong> in your email client to contact ${escapeHtml(fullName.trim())} directly.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc; padding:20px 32px; border-top:1px solid #e2e8f0; text-align:center;">
              <p style="margin:0; font-size:12px; color:#94a3b8;">Sent automatically from <a href="https://www.sdssecurity.com/careers" style="color:#0B65C6; text-decoration:none;">SDS Security Careers Portal</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `;

        const { data, error } = await resend.emails.send({
            from: "Website <forms@securedesign.in>",
            to: "office@sreesecure.com",
            replyTo: email.trim(),
            subject: `Job Application: ${position.trim()} - ${fullName.trim()}`,
            html: htmlContent,
            attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (error) {
            console.error("Resend API error (careers):", error);
            return NextResponse.json(
                { success: false, error: error.message || "Failed to submit job application email." },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
        console.error("Careers API Route error:", err);
        return NextResponse.json(
            { success: false, error: errorMessage },
            { status: 500 }
        );
    }
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
