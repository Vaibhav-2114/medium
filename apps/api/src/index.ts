import express  from "express"
import Router from "./routes/router";

const app = express();

app.use('/api/v1', Router)

app.listen(4000, () => {
  console.log("server started at: http://localhost:4000")
})
