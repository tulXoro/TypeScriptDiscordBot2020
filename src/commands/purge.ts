import * as Discord from "discord.js";
import { SelfBotCommand } from "../api";

// Purge Command
export default class Purge implements SelfBotCommand {

    private readonly _command = "purge";

    help(): string{ return "This command does nothing."; }

    isCommand(command: string): boolean { return command === this._command; }

    execute(args: string[], msgObj: Discord.Message, client: Discord.Client){ 

        if(args[0] === null || Number(args[0]) <= 0) {
            msgObj.channel.send('Unable to purge that amount!');
            return;
        } 
        
        var amount = parseInt(args[0]);
        msgObj.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            msgObj.channel.send('There was an error trying to purge messages in this channel!');
        });

        msgObj.channel.send('test');
    }

}