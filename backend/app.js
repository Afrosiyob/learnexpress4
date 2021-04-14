// IMPOERT
const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

// CREATE SERVER
const APP = express();

APP.use(express.json({ extended: true }));
// ROUTES
APP.use("/api/auth", require("./routes/auth.routes"));
APP.use("/api/product", require("./routes/product.routes"));

// SET PORT
const PORT = config.get("PORT") || 5000;

// CONNECT MONGOOSE
async function start() {
    try {
        await mongoose.connect(config.get("mongoURI"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        // RUN SERVER
        APP.listen(PORT, () => console.log(`Server is runnig on ${PORT} port`));
    } catch (error) {
        console.log("Server Error", error.message);
        process.exit(1);
    }
}

// START APP WITH MONGOOSE
start();