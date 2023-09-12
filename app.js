import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import personRoutes from "./routes/person.js";
import { errorMiddleware } from "./middlewares/errorMiddlewares.js";

const port = process.env.PORT || 3000;
// const mongoURI = process.env.MONGO_URI;

dotenv.config();
const app = express();

app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((error) => {
    console.log("Database connection error", error);
  });

app.use('/api', personRoutes);
app.use(errorMiddleware);
app.listen(port, () => {
  console.log("listening on port " + port);
});
