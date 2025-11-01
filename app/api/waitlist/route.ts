import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email } = body;

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

    // Read all emails (column B)
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!B2:B",
    });

    const existingEmails = readRes.data.values?.flat() || [];

    // Check duplicates
    if (existingEmails.includes(email)) {
      return new Response(
        JSON.stringify({ message: "Email already on waitlist" }),
        { status: 409 }
      );
    }

    // Add new entry
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name || "", email, new Date().toISOString()]],
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
