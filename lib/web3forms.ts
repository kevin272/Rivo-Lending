export async function submitWeb3Form(
  fields: Record<string, string | undefined>,
  subject: string,
) {
  const configResponse = await fetch("/api/contact");
  const configText = await configResponse.text();
  let config: { accessKey?: string; message?: string };

  try {
    config = configText
      ? JSON.parse(configText) as { accessKey?: string; message?: string }
      : { message: "Web3Forms configuration returned an empty response." };
  } catch {
    throw new Error("Web3Forms configuration returned an invalid response.");
  }

  if (!configResponse.ok || !config.accessKey) {
    throw new Error(config.message || "Web3Forms access key is not configured.");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: config.accessKey,
      subject,
      from_name: "Rivo Lending website",
      ...fields,
    }),
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