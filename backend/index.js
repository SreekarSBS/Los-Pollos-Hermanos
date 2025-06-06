import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors({
    origin: "http://localhost:1234", 
  }));
  

const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(SWIGGY_API_URL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.swiggy.com/",
        "Origin": "https://www.swiggy.com",
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Swiggy API blocked the request." });
    }

    const json = await response.json();
    res.json(json);
  } catch (err) {
    console.error("Swiggy fetch error:", err.message);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(5050, () =>
  console.log("🚀 Proxy server running on http://localhost:5050")
);
