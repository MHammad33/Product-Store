import express from "express";

const app = express();

// Routes
app.get("/", (_req, res) => {
  res.send("Server Home Page");
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
