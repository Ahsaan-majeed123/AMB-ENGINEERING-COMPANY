const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const port = 3000;

// Cloudinary configuration (replace with your credentials)
cloudinary.config({
   cloud_name: process.env.CLOUDINARYNAME,
  api_key: process.env.CLOUDINARYAPIKEY,
  api_secret: process.env.CLOUDINARYAPISECRET,
});

// API to fetch Cloudinary URL for a given public_id (e.g., "favicon-96x96")
const get_favicon_urll = async (req, res) => {
  const { public_id } = req.query; // Get public_id from query params

  if (!public_id) {
    return res.status(400).json({ error: 'public_id is required' });
  }

  try {
    // Fetch the image details from Cloudinary
    const result = await cloudinary.api.resource(public_id, {
      resource_type: 'image', // Specify image resource type
    });

    // Return the secure URL from Cloudinary
    const secureUrl = result.secure_url;
    res.json({ url: secureUrl });

  } catch (error) {
    console.error('Error fetching image from Cloudinary:', error);
    res.status(500).json({ error: 'Failed to fetch the image from Cloudinary' });
  }
}

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = {
    get_favicon_urll
}
