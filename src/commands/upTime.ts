import * as Discord from "discord.js";
import { SelfBotCommand } from "../api";

// Template test command
export default class upTimeCommand implements SelfBotCommand {

    private readonly _command = "uptime";

    
    help(): string{ return "Gets the amount of time that this bot has been online."; }

    
    isCommand(command: string): boolean { return command === this._command; }

    // TODO: finish
    execute(args: string[], msgObj: Discord.Message, client: Discord.Client){ 

    }

}