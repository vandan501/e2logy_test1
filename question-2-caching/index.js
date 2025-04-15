import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';


const app = express();

const PORT = process.env.PORT || 3000;
const REMOTE_API = "https://jsonplaceholder.typicode.com/posts"

let cachedData = null;
let cacheTimestamp = null;
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes [10 minutes = 60000ms]

app.get('/data', async (req, res) => {
  const now = Date.now();

  if (cachedData && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
    return res.json({
      source: 'cache',
      data: cachedData
    });
  }

  try {
    console.log('Fetching from:', REMOTE_API);
    const response = await fetch(REMOTE_API);
    const data = await response.json();

    cachedData = data;
    cacheTimestamp = now;

    res.json({
      source: 'api',
      data: cachedData
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
