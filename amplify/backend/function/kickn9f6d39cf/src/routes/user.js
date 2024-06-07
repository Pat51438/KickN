const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

// POST request for creating user.
router.post("/create", user_controller.user_create);

// DELETE request to delete user.
router.delete("/:id", user_controller.user_delete);

// PUT request to update user.
router.put("/:id", user_controller.user_update);

// GET request for one user.
router.get("/:id", user_controller.user_detail);

// GET request for list of all user items.
router.get("/", user_controller.user_list);

module.exports = router;