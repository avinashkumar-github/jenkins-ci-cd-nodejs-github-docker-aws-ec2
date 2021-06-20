const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the node app!!"
  });
});
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started!!");
});
