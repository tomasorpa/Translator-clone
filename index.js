const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

//escuchar peticiones
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//routes
app.use("/api", require("./routes/translator"));
app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(process.env.PORT);
