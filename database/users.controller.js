const UserModel = require("./users.js");

const createCollection = async () => {
	try {
		setTimeout(async () => {
			await UserModel({
				acm_id: "2574486",
				first_name: "Matthew",
				last_name: "Grist",
				membership_type: "Chapter Member",
				active_member: true,
				discord_id: "313887877098504194",
			}).save();
		}, 1000);
	} catch (err) {
		console.log(err);
	}

	return;
};

module.exports = {
	createCollection,
};
