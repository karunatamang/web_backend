const express = require("express");
const auth = require('../middleware/auth');
const router = express.Router();

const ContactUsController = require("../controller/contact_controller");

router.post("/contactus", ContactUsController.addContact);
router.get("/contactus", ContactUsController.viewContact);
router.get("/contactus/:id", ContactUsController.viewContactById);
router.put("/contactus/:id", ContactUsController.updateContact);
router.delete("/contactus/:id", ContactUsController.deleteContact);

module.exports = router