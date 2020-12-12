const router = require("express").Router();
const listController = require('../controllers/controller')

router.post("/addUser",listController.userData)
router.post("/addTask",listController.addTask);

module.exports = router;
