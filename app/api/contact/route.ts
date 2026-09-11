import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  const accessKey = process.env.web3forms_access_key;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Web3Forms access key is not configured." },
      { status: 500 },
    );
  }

  const fields = await request.json() as Record<string, string | undefined>;
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: fields.subject,
      from_name: "Rivo Lending website",
      ...fields,
    }),
  });

  const result = await response.json() as { success?: boolean; message?: string };
  return NextResponse.json(result, { status: response.status });
}