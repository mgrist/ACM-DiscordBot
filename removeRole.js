const { roleChannel } = require("./config.json");

const removeRoleOnReaction = async (reaction, user, rolesArr) => {
	// If an acutal user is reacting, not a bot.
	if (!user.bot && reaction.message.channelId == roleChannel) {
		//Storing message and emoji for reference
		let message = reaction.message;
		let emoji = reaction.emoji;

		// find the index of a role/emoji
		const indexRole = rolesArr.findIndex(
			(item) => item.emoji === emoji.name
		);

		message.guild.members.fetch(user.id).then((member) => {
			member.roles.remove(rolesArr[indexRole].id);
		});
	}
};

module.exports = {
	removeRoleOnReaction,
};
