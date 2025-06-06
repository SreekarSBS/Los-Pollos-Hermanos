import fetch from "node-fetch";

const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

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
