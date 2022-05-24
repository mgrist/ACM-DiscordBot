const {
	roleChannel,
	generalChannel,
	prefix,
	adminList,
} = require("../config.json");

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
	await user
		.send(
			"Respond with `!role` followed by the desired role name, no spaces allowed in the role name"
		)
		.catch(() => {
			client.channels.cache
				.get(generalChannel)
				.send(
					`Hi ${user}, you requested a custom role but your DMs are closed. Please open your DMs.`
				);
		});

	// when the bot recieves a dm from the author of the reaction, parse message and send request to admins
	client.on("messageCreate", async (message) => {
		if (
			message.channel.type === "DM" &&
			message.author.id === id &&
			!message.author.bot
		) {
			// grab the custom role name that the user entered
			let roleName = parseRoleName(message);

			// if a valid role name was provided, continue with request
			if (roleName) {
				// send all mods a dm to give custom role to user
				for (const adminID of adminList) {
					const admin = await client.users.fetch(adminID);
					await admin.send(
						message.author.username +
							"#" +
							message.author.discriminator +
							" has requested the role `" +
							roleName +
							"`"
					);
				}

				// verify that the role request is submitted
				message.author.send("You're role request has been submitted.");
			}
		}
	});
}

function parseRoleName(message) {
	// if message does not start with ! prefix, or author is a bot, ignore.
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	// checks if given a role command and an argument
	if (command === "role" && args[0]) {
		return args[0];
	} else {
		message.author.send(
			"Invalid command. Make sure to use !role and provide an argument."
		);

		return null;
	}
}

module.exports = {
	giveRoleOnReaction
};
