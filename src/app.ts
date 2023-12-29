import express from "express";
import session from "express-session";
import { connect } from "./utils/connect";
import { routes } from "./routes";
import  cors  from 'cors';
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import path from "path";


const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use('/uploads/images',express.static(path.join(__dirname,'/uploads')))
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new session.MemoryStore(),
  })
);



app.listen(3005, () => {
    console.log("Server is running now!");
    connect();
    routes(app);
})