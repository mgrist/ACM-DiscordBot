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
	]
});

// Text channel ID that role commands will be issued in
const roleChannel = "976249794982993920";

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
	{ emoji: "❤️", id: "976861155081486336", roleName: "other" },
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
	{ emoji: "🕵️‍♀️", id: "976862011952623726", roleName: "forensic" }
];

// When the client is ready, run this code (only once)
client.once("ready", async (c) => {
	//Successful logon
	console.log(`Ready! Logged in as ${c.user.tag}`);

	//Store channel and send role message to it
	const channel = client.channels.cache.get(roleChannel);

	// Deletes 100 previous messages
	channel.bulkDelete(100);

	channel
		.send(
			"__**React to give yourself roles:**__\n\n" +
				"**__Enrollment Status__**\n\n" +
				rolesArr[0].emoji +
				": `Student`\n\n" +
				rolesArr[1].emoji +
				": `Faculty`\n\n" +
				rolesArr[2].emoji +
				": `Alumni`\n\n" +
				rolesArr[3].emoji +
				": `Guest`\n\n"
		)
		.then((sent) => {
			sent.react(rolesArr[0].emoji);
			sent.react(rolesArr[1].emoji);
			sent.react(rolesArr[2].emoji);
			sent.react(rolesArr[3].emoji);
		});

	channel
		.send(
			"**__Seniority__**\n\n" +
				rolesArr[4].emoji +
				": `Freshman`\n\n" +
				rolesArr[5].emoji +
				": `Sophomore`\n\n" +
				rolesArr[6].emoji +
				": `Junior`\n\n" +
				rolesArr[7].emoji +
				": `Senior`\n\n" +
				rolesArr[8].emoji +
				": `Graduate Student`\n\n"
		)
		.then((sent) => {
			sent.react(rolesArr[4].emoji);
			sent.react(rolesArr[5].emoji);
			sent.react(rolesArr[6].emoji);
			sent.react(rolesArr[7].emoji);
			sent.react(rolesArr[8].emoji);
		});

	channel
		.send(
			"\n\n**__Pronouns__**\n\n" +
				rolesArr[9].emoji +
				": `He/Him`\n\n" +
				rolesArr[10].emoji +
				": `She/Her`\n\n" +
				rolesArr[11].emoji +
				": `They/Them`\n\n" +
				rolesArr[12].emoji +
				": `Other`\n\n"
		)
		.then((sent) => {
			sent.react(rolesArr[9].emoji);
			sent.react(rolesArr[10].emoji);
			sent.react(rolesArr[11].emoji);
			sent.react(rolesArr[12].emoji);
		});

	channel
		.send(
			"**__Interests__**\n\n" +
				rolesArr[13].emoji +
				": `Game Dev`\n\n" +
				rolesArr[14].emoji +
				": `Frontend Dev`\n\n" +
				rolesArr[15].emoji +
				": `Backend Dev`\n\n" +
				rolesArr[16].emoji +
				": `Data Science`\n\n" +
				rolesArr[17].emoji +
				": `DevOps`\n\n" +
				rolesArr[18].emoji +
				": `CyberSec - Red Team`\n\n" +
				rolesArr[19].emoji +
				": `CyberSec - Blue Team`\n\n" +
				rolesArr[20].emoji +
				": `Networking`\n\n" +
				rolesArr[21].emoji +
				": `Artificial Intelligence`\n\n" +
				rolesArr[22].emoji +
				": `Cloud Computing`\n\n" +
				rolesArr[23].emoji +
				": `3D Modeling`\n\n" +
				rolesArr[24].emoji +
				": `Graphic Design`\n\n" +
				rolesArr[25].emoji +
				": `Software Engineering`\n\n" +
				rolesArr[26].emoji +
				": `Server Administration`\n\n" +
				rolesArr[27].emoji +
				": `Embedded Development`\n\n" +
				rolesArr[28].emoji +
				": `Computer Forensics`\n\n"
		)
		.then((sent) => {
			sent.react(rolesArr[13].emoji);
			sent.react(rolesArr[14].emoji);
			sent.react(rolesArr[15].emoji);
			sent.react(rolesArr[16].emoji);
			sent.react(rolesArr[17].emoji);
			sent.react(rolesArr[18].emoji);
			sent.react(rolesArr[19].emoji);
			sent.react(rolesArr[20].emoji);
			sent.react(rolesArr[21].emoji);
			sent.react(rolesArr[22].emoji);
			sent.react(rolesArr[23].emoji);
			sent.react(rolesArr[24].emoji);
			sent.react(rolesArr[25].emoji);
			sent.react(rolesArr[26].emoji);
			sent.react(rolesArr[27].emoji);
			sent.react(rolesArr[28].emoji);
		});
});

// When client reacts to bot message, assign role
client.on("messageReactionAdd", async (reaction, user) => {
	// If an acutal user is reacting, not a bot.
	if (!user.bot && reaction.message.channelId == roleChannel) {
		let message = reaction.message;
		let emoji = reaction.emoji;

		// console.log(rolesArr.findIndex((item) => item.emoji === emoji.name));
		// find the index of a role/emoji
		const indexRole = rolesArr.findIndex((item) => item.emoji === emoji.name);

		message.guild.members.fetch(user.id).then((member) => {
			member.roles.add(rolesArr[indexRole].id);
		});
	}
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	// If an acutal user is reacting, not a bot.
	if (!user.bot && reaction.message.channelId == roleChannel) {
		//Storing message and emoji for reference
		let message = reaction.message;
		let emoji = reaction.emoji;

		// find the index of a role/emoji
		const indexRole = rolesArr.findIndex((item) => item.emoji === emoji.name);

		message.guild.members.fetch(user.id).then((member) => {
			member.roles.remove(rolesArr[indexRole].id);
		});
	}
});

// Login to Discord with your client's token
client.login(token);
