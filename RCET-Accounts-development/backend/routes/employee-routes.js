const express = require("express");
const auth = require("../Middleware/auth");
const employeeController = require("../controllers/employee-controller");
const router = express.Router();

//Get All Employees
router.get("/", auth, employeeController.getEmployees);


router.get("/stats",  employeeController.getStats);

//Get Single Employee
router.get("/:id", auth, employeeController.getEmployee);

//Add Employee
router.post("/add", auth, employeeController.addEmployee);

//Update Employee
router.patch("/:id", auth, employeeController.updateEmployee);

//Delete Employee
router.delete("/:id", auth, employeeController.deleteEmployee);

//Verify Employee
router.get("/verify/:id", auth, employeeController.verifyEmployee);

module.exports = router;
