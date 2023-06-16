// const env = require("dotenv").config();
// const env = require("./config/env");
// require("dotenv").config();

const { env } = require("./config/env");
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./database/connect");
const todoRouter = require("./routes/todo.js");
const authRouter = require("./routes/auth.js");

const app = express();

//express.json
app.use(express.json());
app.use(morgan("dev"));
const PORT = env.PORT || 3000;

// connect mongodb
connectDB().then(() => {
    console.log("Connected database is succesfully");
});

// todo api
app.use("/todo", todoRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server is on running on port ${PORT}`);
});
