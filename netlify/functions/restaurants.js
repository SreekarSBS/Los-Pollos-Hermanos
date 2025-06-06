import fetch from "node-fetch";
import { CARDS_API } from "../../src/utils/constants";

const SWIGGY_API_URL ={CARDS_API};

export async function handler(event, context) {
  try {
    const response = await fetch(SWIGGY_API_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36",
        Accept: "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
      },
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: "Swiggy API blocked the request." }),
      };
    }

    const json = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // allow all or restrict to your frontend domain
      },
      body: JSON.stringify(json),
    };
  } catch (err) {
    console.error("Swiggy fetch error:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch Swiggy data" }),
    };
  }
}
