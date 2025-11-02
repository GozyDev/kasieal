import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    // Authenticate Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // 1️⃣ Get all existing emails from column A
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A2:A",
    });

    const existingEmails = readRes.data.values?.flat() || [];

    // 2️⃣ Prevent duplicate emails
    if (existingEmails.includes(email)) {
      return new Response(
        JSON.stringify({ message: "Email already on waitlist" }),
        { status: 409 }
      );
    }

    // 3️⃣ Figure out the next available row number
    const nextRow = (readRes.data.values?.length || 0) + 2; // +2 because header + 1-indexed

    // 4️⃣ Add the new email (A) and timestamp (C)
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Sheet1!A${nextRow}:C${nextRow}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, "", new Date().toISOString()]],
      },
    });

    return new Response(
      JSON.stringify({ message: "Successfully added to waitlist" }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to save entry" }), {
      status: 500,
    });
  }
}
