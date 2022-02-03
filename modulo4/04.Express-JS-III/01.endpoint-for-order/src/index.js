const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

app.get("/users/:userId/orders/:orderId", (req, res) => {
  console.log("Url params:", req.params);
  console.log("Url param userId:", req.params.userId);
  console.log("Url param orderId:", req.params.orderId);
  res.send("Hi :)");
});
