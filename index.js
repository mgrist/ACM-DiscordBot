// Require the necessary discord.js classes
const { Client, Intents, Role, RoleManager } = require("discord.js");
// discord bot token stored in config file
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES"],
});

// Text channel ID that role commands will be issued in
const roleChannel = "975972573164761108";

// ID number for each role in the server.
const president_role = "975921199743901716";
const vicePresident_role = "975921252181098506";
const officer_role = "975921128382021703";
const eventsTeam_role = "975920858067533855";
const member_role = "975920537073225789";
const tutor_role = "975921305759137823";
const student_role = "975920815545659432";

// When the client is ready, run this code (only once)
client.once("ready", (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// When client sends a message, do something
client.on("messageCreate", async (message) => {
	if (message.channelId === roleChannel) {
		if (message.content === "!hello") {
			console.log(await message.guild.channels.fetch());
		}
	}
});

// Login to Discord with your client's token
client.login(token);
