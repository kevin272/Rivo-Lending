export async function submitWeb3Form(
  fields: Record<string, string | undefined>,
  subject: string,
) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ subject, ...fields }),
  });

  const responseText = await response.text();
  let result: { success?: boolean; message?: string };

  try {
    result = responseText
      ? JSON.parse(responseText) as { success?: boolean; message?: string }
      : { success: false, message: "The contact service returned an empty response." };
  } catch {
    result = {
      success: false,
      message: responseText || "The contact service returned an invalid response.",
    };
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || "We couldn't send your request. Please try again.");
  }
}