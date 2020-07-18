import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { SelfBotCommand } from "./api";

const bot: Discord.Client = new Discord.Client();

let commands: SelfBotCommand[] = [];

loadCommands(`${__dirname}/commands`);

// When the bot turns on
bot.on("ready", () => {

    // Let's us know the bot is online
    console.log("Ready to go!");
});

bot.on("message", msg => {

    if(msg.author.bot) { return; }

    if(!msg.content.startsWith(ConfigFile.config.prefix)) return;

    handle(msg);
})

async function handle(msg: Discord.Message) {
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for(const commandsClass of commands) {
        try{
            //when the command doesn't exist
            if(!commandsClass.isCommand(command)) continue;
            await commandsClass.execute(args, msg, bot);
        }catch(exeception){
            console.log(exeception);
        }
    }
}

function loadCommands(commandsPath: string) {

    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) return;

    for(const commandName of ConfigFile.config.commands as string[]){
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass() as SelfBotCommand;
        commands.push(command);
    }

};

bot.login(ConfigFile.config.token);