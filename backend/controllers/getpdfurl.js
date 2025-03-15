const express = require('express');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARYNAME,
  api_key: process.env.CLOUDINARYAPIKEY,
  api_secret: process.env.CLOUDINARYAPISECRET,
});

// Endpoint to fetch media URL based on public ID
const getttpdfurl = async (req, res) => {
  const publicid = req.query.public_id;
  if (!publicid) {
    return res.status(400).json({ message: "Public ID is required" });
  }

  try {
    // Fetch the file details from Cloudinary
    const fileDetails = await cloudinary.api.resource(publicid);

    if (fileDetails) {
      const { resource_type, secure_url } = fileDetails;

      // Check if the resource is a video or image
      if (resource_type === 'video') {
        // If it's a video, return the secure URL for video
        res.json({ url: secure_url });
      } else if (resource_type === 'image') {
        // If it's an image, return the secure URL for image
        res.json({ url: secure_url });
      } else {
        res.status(404).json({ message: "Unsupported media type" });
      }
    } else {
      res.status(404).json({ message: "File not found" });
    }
  } catch (error) {
    console.error("Error fetching file from Cloudinary:", error);
    res.status(500).json({ message: "Error retrieving file from Cloudinary", error });
  }
};

module.exports = {
  getttpdfurl,
};
