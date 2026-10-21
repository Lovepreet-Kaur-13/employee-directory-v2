import employees, { getEmployee, getRandomEmployee } from "#db/employees";
import express from "express";

const router = express.Router();

export default router;

router.get("/", (req, res) => {
  const employees = getEmployee();
  res.send(employees);
});

router.get("/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});
