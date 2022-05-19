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
const gamedevEmoji = "🎮";
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
				"__Enrollment Status__\n" +
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
			"__Seniority__\n" +
				freshmanEmoji +
				": `Freshman`\n\n" +
				sophomoreEmoji +
				": `Sophomore`\n\n" +
				juniorEmoji +
				": `Junior`\n\n" +
				seniorEmoji +
				": `Senior`\n\n" +
				graduateEmoji +
				": `Graduate School`\n\n"
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
			"\n\n__Pronouns__\n" +
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
			"__Interests__\n" +
				gamedevEmoji +
				": `Game Dev`\n\n" +
				frontendEmoji +
				": `Frontend Dev`\n\n" +
				backendEmoji +
				": `Backend Dev`\n\n" +
				dataEmoji +
				": `Data Science`\n\n" +
				devOpsEmoji +
				": `Dev Ops`\n\n" +
				redEmoji +
				": `Red Team`\n\n" +
				blueEmoji +
				": `Blue Team`\n\n" +
				networkEmoji +
				": `Networking`\n\n" +
				aiEmoji +
				": `Artificial Intelligence`\n\n" +
				cloudEmoji +
				": `Cloud Computing`\n\n" +
				threedEmoji +
				": `3d Modeling`\n\n" +
				graphicEmoji +
				": `Graphic Design`\n\n" +
				seEmoji +
				": `Software Engineer`\n\n" +
				serverEmoji +
				": `Server Administrator`\n\n" +
				embedEmoji +
				": `Embedded Development`\n\n" +
				forensicEmoji +
				": `Forensic Analysis`\n\n"
		)
		.then((sent) => {
			sent.react(freshmanEmoji);
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
	if (!user.bot && reaction.message.channelId == roleChannel) {
		//Storing message and emoji for reference
		let message = reaction.message;
		let emoji = reaction.emoji;

		//Checking for reacted emojis, and assigning roles accordingly
		switch (emoji.name) {
			case studentEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(student_roleID);
				});
				break;
		}
	}
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	// If an acutal user is reacting, not a bot.
	if (!user.bot && reaction.message.channelId == roleChannel) {
		//Storing message and emoji for reference
		let message = reaction.message;
		let emoji = reaction.emoji;

		//Checking for removed reacted emojis, and unassigning accordingly
		switch (emoji.name) {
			case studentEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(student_roleID);
				});
				break;
			default:
				break;
		}
	}
});

// Login to Discord with your client's token
client.login(token);
