// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
// discord bot token stored in config file & role channel ID bot will operate in
const { token } = require("./config.json");

const { outputRoleMessage } = require("./startUp.js");
const { giveRoleOnReaction } = require("./giveRole.js");
const { removeRoleOnReaction } = require("./removeRole.js");

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

//Putting IDs into a map to consolidate the role selection
let rolesArr = [
	//enrollment status
	{ emoji: "💻", id: "975920815545659432", roleName: "student" },
	{ emoji: "🍎", id: "976860263150153778", roleName: "faculty" },
	{ emoji: "🎓", id: "976860671037833236", roleName: "alumni" },
	{ emoji: "👨‍🎤", id: "976860704592265236", roleName: "guest" },
	// education status
	{ emoji: "1️⃣", id: "976860744496865301", roleName: "freshman" },
	{ emoji: "2️⃣", id: "976860936788922388", roleName: "sophomore" },
	{ emoji: "3️⃣", id: "976860965020790865", roleName: "junior" },
	{ emoji: "4️⃣", id: "976860987602907167", roleName: "senior" },
	{ emoji: "5️⃣", id: "976861005978173521", roleName: "graduate" },
	// pronouns
	{ emoji: "🧡", id: "976861030095413248", roleName: "him" },
	{ emoji: "💜", id: "976861081387540551", roleName: "her" },
	{ emoji: "💚", id: "976861102623305738", roleName: "they" },
	{ emoji: "❤️", id: "976861155081486336", roleName: "custom" },
	// interests
	{ emoji: "🕹", id: "976861323625377842", roleName: "gamedev" },
	{ emoji: "🦚", id: "976861323667333170", roleName: "frontend" },
	{ emoji: "🍺", id: "976861486339199107", roleName: "backend" },
	{ emoji: "📊", id: "976861513526706196", roleName: "data" },
	{ emoji: "🃏", id: "976861542047940638", roleName: "devops" },
	{ emoji: "☢️", id: "976861574620925953", roleName: "red" },
	{ emoji: "🪤", id: "976861663443693568", roleName: "blue" },
	{ emoji: "📡", id: "976861699921559582", roleName: "network" },
	{ emoji: "🤖", id: "976861736269410314", roleName: "ai" },
	{ emoji: "🌧", id: "976861783207837766", roleName: "cloud" },
	{ emoji: "🗿", id: "976861824228130927", roleName: "threed" },
	{ emoji: "🎨", id: "976861855500869722", roleName: "graphic" },
	{ emoji: "🚿", id: "976861896437276743", roleName: "software" },
	{ emoji: "🔥", id: "976861932495704154", roleName: "server" },
	{ emoji: "🤢", id: "976861966947741696", roleName: "embed" },
	{ emoji: "🕵️‍♀️", id: "976862011952623726", roleName: "forensic" },
];

// When the client is ready, run this code (only once)
client.once("ready", async (c) => {
	//Successful logon
	// eslint-disable-next-line no-console
	console.log(`Ready! Logged in as ${c.user.tag}`);
	// outputs the initial message in the role channel with respective reactions
	outputRoleMessage(client, rolesArr);
});

// When client reacts to bot message, assign role
client.on("messageReactionAdd", async (reaction, user) => {
	// gives user roles based on reaction
	giveRoleOnReaction(reaction, user, rolesArr, client);
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	// removes user roles based on reaction
	removeRoleOnReaction(reaction, user, rolesArr);
});

// Login to Discord with your client's token
client.login(token);
