// Required Dependencies
import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { SelfBotCommand } from "./api";

const bot: Discord.Client = new Discord.Client();

let commands: SelfBotCommand[] = [];

// Loads in the commands from the directory (I think)
loadCommands(`${__dirname}/commands`);

// VARS

// When the bot turns on
bot.on("ready", () => {

    bot.user?.setStatus('online');
    bot.user?.setActivity('I\'m not sure');

    // Let's us know the bot is online
    console.log("Ready to go!");

    // TODO: implement a way to know how many servers the bot is in
    var active_servers = 0;
});

// When there is a new message in a server
bot.on("message", msg => {

    // If the writer of the message is the bot, stop
    if(msg.author.bot) return;

    // If the prefix isn't used, stop
    if(!msg.content.startsWith(ConfigFile.config.prefix)) return;

    // Assume it is a command and handle it
    handle(msg);
})

async function handle(msg: Discord.Message) {
    // Splits the message into the command (the first word of the message)
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    // And obtains the arguments of the commands
    let args = msg.content.split(" ").slice(1);

    for(const commandsClass of commands) {
        try{
            // When the command exists, execute
            if(!commandsClass.isCommand(command)) continue;
            await commandsClass.execute(args, msg, bot);
        }catch(exeception){
            console.log(exeception);
        }
    }
}

function loadCommands(commandsPath: string) {
    // Makes sure there is a config file and that there are commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) return;

    // pushes all commands from the config into the "commands" array
    for(const commandName of ConfigFile.config.commands as string[]){
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass() as SelfBotCommand;
        commands.push(command);
    }

};

// Starts the bot
bot.login(ConfigFile.config.token);