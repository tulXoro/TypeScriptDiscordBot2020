import * as Discord from "discord.js";
import * as ConfigFile from "./config";

const bot: Discord.Client = new Discord.Client();

bot.on("ready", () => {

    // Let's us know the bot is online
    console.log("Ready to go!");
});

bot.login(ConfigFile.config.token);