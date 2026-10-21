import express from "express";

const app = express();
export default app;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello employees!");
});

app.use(express.json());

app.use("/employees", employeeRouter);

import employeeRouter from "#api/employee";
// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
app.use("/employees", employeeRouter);

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});
