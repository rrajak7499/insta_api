const express = require('express');
const { igdl  } = require('btch-downloader');
const cors = require('cors');



const app = express();
app.use(cors());
const port = 5000;

app.get('/download', async (req, res) => {
  console.log('server running backend')
  const url = req.query.url; // Get the URL from the query string
// const url = 'https://www.instagram.com/p/DDHoxHtoE33/?utm_source=ig_web_copy_link';

  if (!url) {
    return res.status(400).send({ error: "URL is required" });
  }

  try {
    // Use the rahad-all-downloader package to download the video
    const result = await igdl (url);
    console.log(result);
    
    res.json(result); // Send the result as a response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
