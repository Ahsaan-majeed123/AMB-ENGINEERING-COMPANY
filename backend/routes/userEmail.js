const express = require("express");
const { transport_sendemail } = require("../controllers/sendEmail");
const { getttpdfurl } = require("../controllers/getpdfurl");
const { getttimgurl } = require("../controllers/getimgurl");
const { get_favicon_urll } = require("../controllers/getimgfavicon");
const router = express.Router();


router.post("/",transport_sendemail)
router.get("/get-pdf-url", getttpdfurl)
router.get("/get-img-url", getttimgurl)
router.get("/get-favicon-url", get_favicon_urll)

module.exports = router;