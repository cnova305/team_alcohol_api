const express = require("express");
const patronsRoutes = require("./src/patrons/routes");

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/patrons/", patronsRoutes);

app.listen(port, () => console.log(`Server has started on port: ${port}`));
