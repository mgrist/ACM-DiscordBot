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
const president_role = "975921199743901716";
const vicePresident_role = "975921252181098506";
const officer_role = "975921128382021703";
const eventsTeam_role = "975920858067533855";
const member_role = "975920537073225789";
const tutor_role = "975921305759137823";
const student_role = "975920815545659432";

// When the client is ready, run this code (only once)
client.once("ready", async (c) => {
	//Successful logon
	console.log(`Ready! Logged in as ${c.user.tag}`);

	//Store channel and send role message to it
	const channel = client.channels.cache.get(roleChannel);

	channel.bulkDelete(100);

	channel.send(
		"__**React to give yourself a role:**__\n\n💻: `Student`\n\n👨‍🏫: `Tutor`\n"
	);
});

// When bot sends message, react to it's message with certain emojis
client.on("messageCreate", (message) => {
	if (message.channel.id === `976249794982993920`) {
		message.react("💻");
		message.react("👨‍🏫");
	}
});

// When client reacts to bot message, assign role
client.on("messageReactionAdd", async (reaction, user) => {
	//Storing message and emoji for reference
	let message = reaction.message;
	let emoji = reaction.emoji;

	//Checking for reacted emojis, and assigning roles accordingly
	//💻 represents students
	if (emoji.name == "💻") {
		message.guild.members.fetch(user.id).then((member) => {
			member.roles.add("975920815545659432");
		});
	}
	//💻 represents students
	if (emoji.name == "👨‍🏫") {
		message.guild.members.fetch(user.id).then((member) => {
			member.roles.add("975921305759137823");
		});
	}
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	//Storing message and emoji for reference
	let message = reaction.message;
	let emoji = reaction.emoji;

	//Checking for removed reacted emojis, and unassigning accordingly
	//💻 represents students
	if (emoji.name == "💻") {
		message.guild.members.fetch(user.id).then((member) => {
			member.roles.remove("975920815545659432");
		});
	}
	// 👨‍🏫 represents tutors
	if (emoji.name == "👨‍🏫") {
		message.guild.members.fetch(user.id).then((member) => {
			member.roles.remove("975921305759137823");
		});
	}
});

// Login to Discord with your client's token
client.login(token);
