const mongoose = require("mongoose");
const { createCollection } = require("./users.controller.js");

const url = "mongodb://localhost:27017/members";
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 2000,
	keepalive: true,
	directConnection: true,
}

const connectDatabase = async () => {
	try {
		await mongoose.connect(url, options);
	
		console.log(`MongoDB connected ${url}`);

		//createCollection();
	}
	catch (err) {
		console.error(err);
	}
};

module.exports = {
	connectDatabase,
};
