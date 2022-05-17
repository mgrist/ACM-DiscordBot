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
		"GUILD_MESSAGE_REACTIONS"
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
	console.log(`Ready! Logged in as ${c.user.tag}`);
	const channel = client.channels.cache.get(roleChannel);
	channel.send('test');
	// const message = await interaction.fetchReply({ content: 'test', fetchReply: true });
	// message.react('976258444057247775').then(() => message.react('976258444057247775'));
});

// When client sends a message, do something
client.on("messageReactionAdd", async (reaction, user) => {
	// if message reaction is in the role channel
	console.log('hi mom');

	let message = reaction.message;
	let emoji = reaction.emoji;

	if(emoji.name == '👍')
	{
		console.log('success');
	}
});

// Login to Discord with your client's token
client.login(token);
