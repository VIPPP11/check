const { EmbedBuilder } = require('discord.js');
const config = require("../config.js");
const musicIcons = require('../UI/icons/musicicons.js');

module.exports = {
    name: "support",
    description: "Get support server link",
    permissions: "0x0000000000000800",
    options: [],
    run: async (client, interaction, lang) => {
        try {
            const supportServerLink = "https://discord.gg/mPkaJaYwcN";
            const githubLink = "https://github.com/penhfgold_";
            const replitLink = "https://replit.com/@penhfgold_";
            const youtubeLink = "https://www.youtube.com/@penhfgold_";

            const embed = new EmbedBuilder()
                .setColor('#b300ff')
                .setAuthor({
                    name: lang.support.embed.authorName,
                    iconURL: musicIcons.beats2Icon, 
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.description
                    .replace("{supportServerLink}", supportServerLink)
                    .replace("{githubLink}", githubLink)
                    .replace("{replitLink}", replitLink)
                    .replace("{youtubeLink}", youtubeLink)
                )
                .setImage('https://cdn.discordapp.com/attachments/1330465076536414229/1348906508527865946/Picsart_25-03-11_13-32-43-331.jpg?ex=67d12a95&is=67cfd915&hm=05d5091f66b012d1abe1464f37d159dc5369a2768440d8e21c866e13ac7c9b57&')
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (e) {
            console.error(e);
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setAuthor({
                    name: lang.support.embed.error,
                    iconURL: musicIcons.alertIcon,
                    url: config.SupportServer
                })
                .setDescription(lang.support.embed.errorDescription)
                .setFooter({ text: lang.footer, iconURL: musicIcons.heartIcon });

            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    },
};
