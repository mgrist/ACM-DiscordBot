// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
// discord bot token stored in config file & role channel ID bot will operate in
const { token } = require("./config.json");

const { outputRoleMessage } = require("./src/startUp.js");
const { giveRoleOnReaction } = require("./src/giveRole.js");
const { removeRoleOnReaction } = require("./src/removeRole.js");
const { connectDatabase } = require("./database/mongo.js");

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
	{ emoji: "๐", id: "975920537073225789", roleName: "member" },
	{ emoji: "๐ป", id: "975920815545659432", roleName: "student" },
	{ emoji: "๐", id: "976860263150153778", roleName: "faculty" },
	{ emoji: "๐", id: "976860671037833236", roleName: "alumni" },
	{ emoji: "๐จโ๐ค", id: "976860704592265236", roleName: "guest" },
	// education status
	{ emoji: "1๏ธโฃ", id: "976860744496865301", roleName: "freshman" },
	{ emoji: "2๏ธโฃ", id: "976860936788922388", roleName: "sophomore" },
	{ emoji: "3๏ธโฃ", id: "976860965020790865", roleName: "junior" },
	{ emoji: "4๏ธโฃ", id: "976860987602907167", roleName: "senior" },
	{ emoji: "5๏ธโฃ", id: "976861005978173521", roleName: "graduate" },
	// pronouns
	{ emoji: "๐งก", id: "976861030095413248", roleName: "him" },
	{ emoji: "๐", id: "976861081387540551", roleName: "her" },
	{ emoji: "๐", id: "976861102623305738", roleName: "they" },
	{ emoji: "โค๏ธ", id: "976861155081486336", roleName: "custom" },
	// interests
	{ emoji: "๐น", id: "976861323625377842", roleName: "gamedev" },
	{ emoji: "๐ฆ", id: "976861323667333170", roleName: "frontend" },
	{ emoji: "๐บ", id: "976861486339199107", roleName: "backend" },
	{ emoji: "๐", id: "976861513526706196", roleName: "data" },
	{ emoji: "๐", id: "976861542047940638", roleName: "devops" },
	{ emoji: "โข๏ธ", id: "976861574620925953", roleName: "red" },
	{ emoji: "๐ชค", id: "976861663443693568", roleName: "blue" },
	{ emoji: "๐ก", id: "976861699921559582", roleName: "network" },
	{ emoji: "๐ค", id: "976861736269410314", roleName: "ai" },
	{ emoji: "๐ง", id: "976861783207837766", roleName: "cloud" },
	{ emoji: "๐ฟ", id: "976861824228130927", roleName: "threed" },
	{ emoji: "๐จ", id: "976861855500869722", roleName: "graphic" },
	{ emoji: "๐ฟ", id: "976861896437276743", roleName: "software" },
	{ emoji: "๐ฅ", id: "976861932495704154", roleName: "server" },
	{ emoji: "๐คข", id: "976861966947741696", roleName: "embed" },
	{ emoji: "๐ต๏ธโโ๏ธ", id: "976862011952623726", roleName: "forensic" },
];

// When the client is ready, run this code (only once)
client.once("ready", async (c) => {
	//Successful logon
	// eslint-disable-next-line no-console
	console.log(`Ready! Logged in as ${c.user.tag}`);

	//connect to mongodb database
	connectDatabase();

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
