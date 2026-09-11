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

  const result = await response.json() as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message || "We couldn't send your request. Please try again.");
  }
}