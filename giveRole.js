const { roleChannel, generalChannel } = require("./config.json");

const giveRoleOnReaction = async (reaction, user, rolesArr, client) => {
	// If an acutal user is reacting, not a bot.
	if (!user.bot && reaction.message.channelId == roleChannel) {
		let message = reaction.message;
		let emoji = reaction.emoji;

		// console.log(rolesArr.findIndex((item) => item.emoji === emoji.name));
		// find the index of a role/emoji
		const indexRole = rolesArr.findIndex(
			(item) => item.emoji === emoji.name
		);

		// if user reacts with custom pronoun role, send a message to a mod
		if (rolesArr[indexRole].roleName == "custom") {
			sendRoleRequest(user.id, client);
		}
		// otherwise, give the user their requested role, no checks needed
		else {
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.add(rolesArr[indexRole].id);
			});
		}
	}
};

// sends a role request to a mod with a custom role name
async function sendRoleRequest(id, client) {
	// grabbing user that reacted to the role
	const user = await client.users.fetch(id);

	// if DMs are blocked, message them in general, otherwise send a DM to the mods.
	await user.send("Please enter the role name desired").catch(() => {
		client.channels.cache
			.get(generalChannel)
			.send(
				`Hi ${user}, you requested a custom role but your DMs are closed. Please open your DMs.`
			);
	});
}

module.exports = {
	giveRoleOnReaction,
};
