const mongoose = require("mongoose")
const adminschema = require("./adminschema")
const connectDB = require("./connectDB")
mongoose.connect("mongodb://127.0.0.1:27017/Complaint-tracker");
const createAdmin = async () => {
    const admin = new adminschema({
      username: "admin",
      password: "admin123"
    })
    await admin.save();
    console.log("admin created")
    mongoose.disconnect();
}
createAdmin();

