const express = require("express");
const patronsRoutes = require("./src/patrons/routes");

const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/patrons/", patronsRoutes);

app.listen(port, () => console.log(`Server has started on port: ${port}`));
