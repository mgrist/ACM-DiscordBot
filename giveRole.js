const { roleChannel } = require("./config.json");

const giveRoleOnReaction = async (reaction, user, rolesArr) => {
	// If an acutal user is reacting, not a bot.
	if (!user.bot && reaction.message.channelId == roleChannel) {
		let message = reaction.message;
		let emoji = reaction.emoji;

		// console.log(rolesArr.findIndex((item) => item.emoji === emoji.name));
		// find the index of a role/emoji
		const indexRole = rolesArr.findIndex(
			(item) => item.emoji === emoji.name
		);

		message.guild.members.fetch(user.id).then((member) => {
			member.roles.add(rolesArr[indexRole].id);
		});
	}
};

module.exports = {
	giveRoleOnReaction,
};
