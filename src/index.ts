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

    // Something
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

    if(!msg.guild){
        return msg.author.send('I can\'t respond to direct messages!');
    }

    // If the prefix isn't used, stop
    if(!msg.content.startsWith(ConfigFile.config.prefix)) return;

    // Assume it is a command and handle it
    handle(msg);
})

/*
bot.on('voiceStateUpdate', (oldMember, newMember) => {
    //if a role isn't found, then return
    const voice_role = oldMember.guild.roles.find(role => role.name == "In Voice Channel");
    if(!voice_role) return;

    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel
    
    //checks when a member leaves or enters a channel
    if(newUserChannel && !oldUserChannel) oldMember.addRole(voice_role);
    else if(!oldUserChannel && newUserChannel) oldMember.addRole(voice_role);
    else if(!newUserChannel) newMember.removeRole(voice_role);
})*/

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