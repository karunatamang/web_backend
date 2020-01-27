const express = require("express");
const auth = require('../middleware/auth');
const router = express.Router();

const DonateController = require("../controller/donate_controller");

router.post("/donation",DonateController.addDonation);
router.get("/donation",DonateController.getDonations);
router.get("/donation/:id",DonateController.viewDonationById);
router.put("/donation/:id", DonateController.updateDonation);
router.delete("/donation/:id", DonateController.deleteDonation);
//router.get("/donation/:donor",DonateController.viewDonations);
module.exports = router