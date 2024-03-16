import { backend } from "./backend";

export const makeAuthenticatedPOSTRequest = async (route, body) => {
  const response = await fetch(backend + route, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};
