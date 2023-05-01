import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
const app = express();
import authRouter from './routes/authent.mjs'
import userRouter from './routes/users.mjs'
import postRouter from './routes/posts.mjs'
import categoryRouter from './routes/categories.mjs'
import multer from "multer"
import path from 'path';
import { fileURLToPath } from 'url';



dotenv.config();
app.use(express.json())
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, //useCreateIndex: true,
  //useFindAndModify: true

})


  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/categories", categoryRouter)


app.listen(5000, () => {
  console.log("backend is running")
})