const express = require("express");
const app = express();

//reads all files from folder "public"
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
