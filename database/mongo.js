const mongoose = require("mongoose");
//const { createCollection } = require("./users.controller.js");
const { dbusername, dbpassword } = require("../config.json");

const url =
	"mongodb+srv://" +
	dbusername +
	":" +
	dbpassword +
	"@acm-chapter-asu.3o1s6.mongodb.net/members?retryWrites=true&w=majority";

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 2000,
	keepalive: true,
};

const connectDatabase = async () => {
	try {
		await mongoose.connect(url, options);

		console.log(`MongoDB connected ${url}`);

		//createCollection();
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	connectDatabase,
};
