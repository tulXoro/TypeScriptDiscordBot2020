import * as Discord from "discord.js";
import * as ConfigFile from "./config";

const bot: Discord.Client = new Discord.Client();


// When the bot turns on
bot.on("ready", () => {

    // Let's us know the bot is online
    console.log("Ready to go!");
});

bot.on("message", msg => {

    if(msg.author.bot) { return; }

    if(!msg.content.startsWith(ConfigFile.config.prefix)) return;

    

})

bot.login(ConfigFile.config.token);