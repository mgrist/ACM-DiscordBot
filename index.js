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

//enrollment status
const studentEmoji = "💻";
const facultyEmoji = "🍎";
const alumniEmoji = "🎓";
const guestEmoji = "👨‍🎤";
// education status
const freshmanEmoji = "1️⃣";
const sophomoreEmoji = "2️⃣";
const juniorEmoji = "3️⃣";
const seniorEmoji = "4️⃣";
const graduateEmoji = "5️⃣";
// pronouns
const himEmoji = "🧡";
const herEmoji = "💜";
const theyEmoji = "💚";
const otherEmoji = "❤️";
// interests
const gamedevEmoji = "🕹";
const backendEmoji = "🍺";
const dataEmoji = "📊";
const devOpsEmoji = "🃏";
const redEmoji = "☢️";
const blueEmoji = "🪤";
const networkEmoji = "📡";
const aiEmoji = "🤖";
const cloudEmoji = "🌧";
const threedEmoji = "🗿";
const graphicEmoji = "🎨";
const seEmoji = "🚿";
const serverEmoji = "🔥";
const frontendEmoji = "🦚";
const embedEmoji = "🤢";
const forensicEmoji = "🕵️‍♀️";

//Putting IDs into a map to consolidate the role selection
const rolesMap = new Map([
	[studentEmoji, "975920815545659432"],
	[facultyEmoji, "976860263150153778"],
	[alumniEmoji, "976860671037833236"],
	[guestEmoji, "976860704592265236"],
	[freshmanEmoji, "976860744496865301"],
	[sophomoreEmoji, "976860936788922388"],
	[juniorEmoji, "976860965020790865"],
	[seniorEmoji, "976860987602907167"],
	[graduateEmoji, "976861005978173521"],
	[himEmoji, "976861030095413248"],
	[herEmoji, "976861081387540551"],
	[theyEmoji, "976861102623305738"],
	[otherEmoji, "976861155081486336"],
	[gamedevEmoji, "976861323625377842"],
	[frontendEmoji, "976861323667333170"],
	[backendEmoji, "976861486339199107"],
	[dataEmoji, "976861513526706196"],
	[devOpsEmoji, "976861542047940638"],
	[redEmoji, "976861574620925953"],
	[blueEmoji, "976861663443693568"],
	[networkEmoji, "976861699921559582"],
	[aiEmoji, "976861736269410314"],
	[cloudEmoji, "976861783207837766"],
	[threedEmoji, "976861824228130927"],
	[graphicEmoji, "976861855500869722"],
	[seEmoji, "976861896437276743"],
	[serverEmoji, "976861932495704154"],
	[embedEmoji, "976861966947741696"],
	[forensicEmoji, "976862011952623726"]
]);

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
				"__Enrollment Status__\n\n" +
				studentEmoji +
				": `Student`\n\n" +
				facultyEmoji +
				": `Faculty`\n\n" +
				alumniEmoji +
				": `Alumni`\n\n" +
				guestEmoji +
				": `Guest`\n\n"
		)
		.then((sent) => {
			sent.react(studentEmoji);
			sent.react(facultyEmoji);
			sent.react(alumniEmoji);
			sent.react(guestEmoji);
		});

	channel
		.send(
			"__Seniority__\n\n" +
				freshmanEmoji +
				": `Freshman`\n\n" +
				sophomoreEmoji +
				": `Sophomore`\n\n" +
				juniorEmoji +
				": `Junior`\n\n" +
				seniorEmoji +
				": `Senior`\n\n" +
				graduateEmoji +
				": `Graduate Student`\n\n"
		)
		.then((sent) => {
			sent.react(freshmanEmoji);
			sent.react(sophomoreEmoji);
			sent.react(juniorEmoji);
			sent.react(seniorEmoji);
			sent.react(graduateEmoji);
		});

	channel
		.send(
			"\n\n__Pronouns__\n\n" +
				himEmoji +
				": `He/Him`\n\n" +
				herEmoji +
				": `She/Her`\n\n" +
				theyEmoji +
				": `They/Them`\n\n" +
				otherEmoji +
				": `Other`\n\n"
		)
		.then((sent) => {
			sent.react(himEmoji);
			sent.react(herEmoji);
			sent.react(theyEmoji);
			sent.react(otherEmoji);
		});

	channel
		.send(
			"__Interests__\n\n" +
				gamedevEmoji +
				": `Game Dev`\n\n" +
				frontendEmoji +
				": `Frontend Dev`\n\n" +
				backendEmoji +
				": `Backend Dev`\n\n" +
				dataEmoji +
				": `Data Science`\n\n" +
				devOpsEmoji +
				": `DevOps`\n\n" +
				redEmoji +
				": `CyberSec - Red Team`\n\n" +
				blueEmoji +
				": `CyberSec - Blue Team`\n\n" +
				networkEmoji +
				": `Networking`\n\n" +
				aiEmoji +
				": `Artificial Intelligence`\n\n" +
				cloudEmoji +
				": `Cloud Computing`\n\n" +
				threedEmoji +
				": `3D Modeling`\n\n" +
				graphicEmoji +
				": `Graphic Design`\n\n" +
				seEmoji +
				": `Software Engineering`\n\n" +
				serverEmoji +
				": `Server Administration`\n\n" +
				embedEmoji +
				": `Embedded Development`\n\n" +
				forensicEmoji +
				": `Computer Forensics`\n\n"
		)
		.then((sent) => {
			sent.react(gamedevEmoji);
			sent.react(frontendEmoji);
			sent.react(backendEmoji);
			sent.react(dataEmoji);
			sent.react(devOpsEmoji);
			sent.react(redEmoji);
			sent.react(blueEmoji);
			sent.react(networkEmoji);
			sent.react(aiEmoji);
			sent.react(cloudEmoji);
			sent.react(threedEmoji);
			sent.react(graphicEmoji);
			sent.react(seEmoji);
			sent.react(serverEmoji);
			sent.react(embedEmoji);
			sent.react(forensicEmoji);
		});
});

// When client reacts to bot message, assign role
client.on("messageReactionAdd", async (reaction, user) => {

	// If an acutal user is reacting, not a bot.
	if ((!user.bot) && (reaction.message.channelId == roleChannel)) {

		let message = reaction.message;
		let emoji = reaction.emoji;

		message.guild.members.fetch(user.id).then((member) => {
			member.roles.add(rolesMap.get(emoji.name));
		});
	}
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	// If an acutal user is reacting, not a bot.
	if ((!user.bot) && (reaction.message.channelId == roleChannel)) {
		//Storing message and emoji for reference
		let message = reaction.message;
		let emoji = reaction.emoji;

		message.guild.members.fetch(user.id).then((member) => {
			member.roles.remove(rolesMap.get(emoji.name));
		});
	}
});

// Login to Discord with your client's token
client.login(token);