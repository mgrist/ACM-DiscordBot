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

//Enrollment Status
const member_roleID = "975920537073225789";
const student_roleID = "975920815545659432";
const faculty_roleID = "976860263150153778";
const alumni_roleID = "976860671037833236";
const guest_roleID = "976860704592265236";

//Seniority
const freshman_roleID = "976860744496865301";
const sophomore_roleID = "976860936788922388";
const junior_roleID = "976860965020790865";
const senior_roleID = "976860987602907167";
const gradstudent_roleID = "976861005978173521";

//Pronouns
const hehim_roleID = "976861030095413248";
const sheher_roleID = "976861081387540551";
const theythem_roleID = "976861102623305738";
const other_roleID = "976861155081486336";

//Interests
const gamedev_roleID = "976861323625377842";
const frontend_roleID = "976861323667333170";
const backend_roleID = "976861486339199107";
const datasci_roleID = "976861513526706196";
const devops_roleID = "976861542047940638";
const redteam_roleID = "976861574620925953";
const blueteam_roleID = "976861663443693568";
const network_roleID = "976861699921559582";
const ai_roleID = "976861736269410314";
const cloud_roleID = "976861783207837766";
const modeling_roleID = "976861824228130927";
const design_roleID = "976861855500869722";
const softeng_roleID = "976861896437276743";
const serveradmin_roleID = "976861932495704154";
const embedded_roleID = "976861966947741696";
const forensic_roleID = "976862011952623726";

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

//Trying to create a map to make the role setting easier and much smaller
const rolesMap = {
	studentEmoji: "975920815545659432"
};

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

	// This was used to remove roles from the bot that couldn't be removed manually, I'd suggest we leave this here for future use
	//
	// let message = reaction.message;
	// let emoji = reaction.emoji;
	//
	// if(user.bot){
	// 	message.guild.members.fetch(user.id).then((member) => {
	// 		member.roles.remove(student_roleID);
	// 	})
	// }

	// If an acutal user is reacting, not a bot.
	if ((!user.bot) && (reaction.message.channelId == roleChannel)) {

		let message = reaction.message;
		let emoji = reaction.emoji;

		//We need to refactor all of this. We can possibly use a map to automatically grab the id for whatever emoji is read into the line above
		//Checking for reacted emojis, and assigning roles accordingly
		//Gross switch statements
		switch (emoji.name) {
			case studentEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(student_roleID);
				});
				break;
			case facultyEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(faculty_roleID);
				});
				break;
			case alumniEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(alumni_roleID);
				});
				break;
			case guestEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(guest_roleID);
				});
				break;
			case freshmanEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(freshman_roleID);
				});
				break;
			case sophomoreEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(sophomore_roleID);
				});
				break;
			case juniorEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(junior_roleID);
				});
				break;
			case seniorEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(senior_roleID);
				});
				break;
			case graduateEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(gradstudent_roleID);
				});
				break;
			case himEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(hehim_roleID);
				});
				break;
			case herEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(sheher_roleID);
				});
				break;
			case theyEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(theythem_roleID);
				});
				break;
			case otherEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(other_roleID);
				});
				break;
			case gamedevEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(gamedev_roleID);
				});
				break;
			case frontendEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(frontend_roleID);
				});
				break;
			case backendEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(backend_roleID);
				});
				break;
			case dataEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(datasci_roleID);
				});
				break;
			case devOpsEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(devops_roleID);
				});
				break;
			case redEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(redteam_roleID);
				});
				break;
			case blueEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(blueteam_roleID);
				});
				break;
			case networkEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(network_roleID);
				});
				break;
			case aiEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(ai_roleID);
				});
				break;
			case cloudEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(cloud_roleID);
				});
				break;
			case threedEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(modeling_roleID);
				});
				break;
			case graphicEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(design_roleID);
				});
				break;
			case seEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(softeng_roleID);
				});
				break;
			case serverEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(serveradmin_roleID);
				});
				break;
			case embedEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(embedded_roleID);
				});
				break;
			case forensicEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.add(forensic_roleID);
				});
				break;
		}
	}
});

// When client removes reaction to bot message, unassign role
client.on("messageReactionRemove", async (reaction, user) => {
	// If an acutal user is reacting, not a bot.
	if ((!user.bot) && (reaction.message.channelId == roleChannel)) {
		//Storing message and emoji for reference
		let message = reaction.message;
		let emoji = reaction.emoji;

		//Checking for removed reacted emojis, and unassigning accordingly
		//More gross switch statements
		switch (emoji.name) {
			case studentEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(student_roleID);
				});
				break;
			case facultyEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(faculty_roleID);
				});
				break;
			case alumniEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(alumni_roleID);
				});
				break;
			case guestEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(guest_roleID);
				});
				break;
			case freshmanEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(freshman_roleID);
				});
				break;
			case sophomoreEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(sophomore_roleID);
				});
				break;
			case juniorEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(junior_roleID);
				});
				break;
			case seniorEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(senior_roleID);
				});
				break;
			case graduateEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(gradstudent_roleID);
				});
				break;
			case himEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(hehim_roleID);
				});
				break;
			case herEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(sheher_roleID);
				});
				break;
			case theyEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(theythem_roleID);
				});
				break;
			case otherEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(other_roleID);
				});
				break;
			case gamedevEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(gamedev_roleID);
				});
				break;
			case frontendEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(frontend_roleID);
				});
				break;
			case backendEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(backend_roleID);
				});
				break;
			case dataEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(datasci_roleID);
				});
				break;
			case devOpsEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(devops_roleID);
				});
				break;
			case redEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(redteam_roleID);
				});
				break;
			case blueEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(blueteam_roleID);
				});
				break;
			case networkEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(network_roleID);
				});
				break;
			case aiEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(ai_roleID);
				});
				break;
			case cloudEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(cloud_roleID);
				});
				break;
			case threedEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(modeling_roleID);
				});
				break;
			case graphicEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(design_roleID);
				});
				break;
			case seEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(softeng_roleID);
				});
				break;
			case serverEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(serveradmin_roleID);
				});
				break;
			case embedEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(embedded_roleID);
				});
				break;
			case forensicEmoji:
				message.guild.members.fetch(user.id).then((member) => {
					member.roles.remove(forensic_roleID);
				});
				break;
		}
	}
});

// Login to Discord with your client's token
client.login(token);
