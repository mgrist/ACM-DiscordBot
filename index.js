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

let messagesFinal = [];

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
const facultyEmoji = "🍎";
const alumniEmoji = "🎓";
// education status
const freshmanEmoji = "1️⃣";
const sophomoreEmoji = "2️⃣";
const juniorEmoji = "3️⃣";
const seniorEmoji = "4️⃣";
const graduateEmoji = "📚";
// pronouns
const himEmoji = "🧡";
const herEmoji = "💜";
const theyEmoji = "💚";
const otherEmoji = "❤️";
// interests
const programmingEmoji = "👩‍💻";
const gamedevEmoji = "🕹";
const itEmoji = "🌐";
const cyberEmoji = "🔒";

// When the client is ready, run this code (only once)
client.once("ready", async (c) => {
	//Successful logon
	console.log(`Ready! Logged in as ${c.user.tag}`);

	//Store channel and send role message to it
	const channel = client.channels.cache.get(roleChannel);

	// Deletes 100 previous messages
	channel.bulkDelete(100);

	channel.send(
		"__**React to give yourself roles:**__\n\n" +
			"__Enrollment Status__\n\n" +
			studentEmoji +
			": `Student`\n\n" +
			tutorEmoji +
			": `Tutor`\n\n" +
			facultyEmoji +
			": `Faculty`\n\n" +
			alumniEmoji +
			": `Alumni`\n\n"
	);
	channel.send(
			"__Seniority__\n\n" +
			freshmanEmoji +
			": `Freshman`\n\n"+ 
			sophomoreEmoji +
			": `Sophomore`\n\n" +
			juniorEmoji +
			": `Junior`\n\n" +
			seniorEmoji +
			": `Senior`\n\n" +
			graduateEmoji +
			": `Graduate School`\n\n"
	);
	channel.send(
			"__Pronouns__\n" +
			himEmoji +
			": `He/Him`\n\n" +
			herEmoji +
			": `She/Her`\n\n" +
			theyEmoji +
			": `They/Them`\n\n" +
			otherEmoji +
			": `Other`\n\n" 
	);
	channel.send(
			"__Interests__\n\n" +
			programmingEmoji +
			": `Programming`\n\n" +
			gamedevEmoji +
			": `Game Dev`\n\n" +
			itEmoji +
			": `IT`\n\n" +
			cyberEmoji +
			": `CyberSec`\n\n"
	);

	channel.messages.fetch({ limit: 100 }).then(messages => {
		//Iterate through the messages here with the variable "messages".
		messages.forEach(message => messagesFinal.push(message.id))
	});
});

// When bot sends message, react to it's message with certain emojis
client.on("messageCreate", (message) => {

	if ((message.channel.id === roleChannel) && (message.id == parseInt(messagesFinal[0]))) {
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
				member.roles.add(student_roleID);
			});
			break;
		case tutorEmoji:
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.add(tutor_roleID);
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
				member.roles.remove(student_roleID);
			});
			break;
		case tutorEmoji:
			message.guild.members.fetch(user.id).then((member) => {
				member.roles.remove(tutor_roleID);
			});
			break;
		default:
			break;
	}
});

// Login to Discord with your client's token
client.login(token);
