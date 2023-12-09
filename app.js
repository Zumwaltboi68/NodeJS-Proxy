const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Proxy requests to the target website
app.get('/proxy', async (req, res) => {
  try {
    const targetUrl = req.query.url;
    const response = await axios.get(targetUrl);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error proxying the request');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
