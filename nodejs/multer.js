import express from "express";
import multer from "multer";
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });

//disk storage from multer format perseveration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.end("hii from server");
});

app.post("/upload", upload.single("dp"), (req, res) => {
  res.status(200).json({ message: "uploaded successfully" });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
