// Require the necessary discord.js classes
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
// discord bot token stored in config file
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!");
});

// Login to Discord with your client's token
client.login(token);
