const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({
    email: "alesinloyeadetungba@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/AdeGneus/current-date",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
