// pasword:t4qb9jN15zgNEV5i
import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records"
import cors from 'cors'

const app:Express = express();
const port = process.env.PORT || 3001;


app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://lakshitha779988:t4qb9jN15zgNEV5i@financetracker.ycdwujr.mongodb.net/?retryWrites=true&w=majority&appName=FinanceTracker"
mongoose.connect(mongoURI).then(()=>console.log("conect to mongodb")).catch((err) =>console.error("faild to conect mongoDb"));

app.use("/financial-records",financialRecordRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });