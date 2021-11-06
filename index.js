const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const connectDatabase = require("./config/db");
const router = require("./routers/router");
const cors = require("cors");

// Settings
dotenv.config({path: './config/config.env'});
connectDatabase();

// Express
const app = express();
app.use(express.json());

// Middlewares
app.use(cors());
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routes
app.use("/", router);

// Port config
const PORT = process.env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
    console.log('El servidor se ejecuta en ambiente', process.env.NODE_ENV, 'en el puerto', PORT);
});