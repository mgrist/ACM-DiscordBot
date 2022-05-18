// Require the necessary discord.js classes
const { Client, Intents, Role, RoleManager } = require("discord.js");
// discord bot token stored in config file
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		"GUILDS",
		"GUILD_MESSAGES",
		"DIRECT_MESSAGES",
		"GUILD_MESSAGE_REACTIONS",
	],
});

// Text channel ID that role commands will be issued in
const roleChannel = "976249794982993920";

// ID number for each role in the server.
const president_roleID = "975921199743901716";
const vicePresident_roleID = "975921252181098506";
const officer_roleID = "975921128382021703";
const eventsTeam_roleID = "975920858067533855";
const member_roleID = "975920537073225789";
const tutor_roleID = "975921305759137823";
const student_roleID = "975920815545659432";

const studentEmoji = "💻";
const tutorEmoji = "👨‍🏫";

// When the client is ready, run this code (only once)
client.once("ready", async (c) => {
	//Successful logon
	console.log(`Ready! Logged in as ${c.user.tag}`);

	//Store channel and send role message to it
	const channel = client.channels.cache.get(roleChannel);

	// Deletes 100 previous messages
	channel.bulkDelete(100);

	channel.send(
		"__**React to give yourself a role:**__\n\n" +
			studentEmoji +
			": `Student`\n\n" +
			tutorEmoji +
			": `Tutor`\n"
	);
});

// When bot sends message, react to it's message with certain emojis
client.on("messageCreate", (message) => {
	if (message.channel.id === `976249794982993920`) {
		message.react(studentEmoji);
		message.react(tutorEmoji);
	}
});

// When client reacts to bot message, assign role
client.on("messageReactionAdd", async (reaction, user) => {
	//Storing message and emoji for reference
	let message = reaction.message;
	let emoji = reaction.emoji;

	//Checking for reacted emojis, and assigning roles accordingly
	switch (emoji.name) {
		case studentEmoji:
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.add("975920815545659432");
			});
			break;
		case tutorEmoji:
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.add("975921305759137823");
			});
			break;
	}
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	//Storing message and emoji for reference
	let message = reaction.message;
	let emoji = reaction.emoji;

	//Checking for removed reacted emojis, and unassigning accordingly
	switch (emoji.name) {
		case studentEmoji:
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.remove("975920815545659432");
			});
			break;
		case tutorEmoji:
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.remove("975921305759137823");
			});
			break;
		default:
			break;
	}
});

// Login to Discord with your client's token
client.login(token);
