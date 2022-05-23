const { roleChannel } = require("./config.json");

// outputs the messages containing the roles and their corresponding emojis
// reacts to each message with the possible role emojis
const outputRoleMessage = async (client, rolesArr) => {
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
};

module.exports = {
	outputRoleMessage,
};
