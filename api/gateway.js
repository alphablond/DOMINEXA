const express = require("express");
const { success, error } = require("./utils/response");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/v1/status", (req, res) => {
  success(res, { message: "System operational" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
