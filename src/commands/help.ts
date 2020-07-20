import * as Discord from "discord.js";
import { SelfBotCommand } from "../api";

export default class helpCommand implements SelfBotCommand {

    // What the user should say to use the command
    private readonly _command = "help";

    // Description listed from the help command
    // TODO: implement help command
    help(): string{ return "This command shows a list of commands."; }

    // Checks if this is the command (used for handler; ignore this)
    isCommand(command: string): boolean { return command === this._command; }

    // What the command should do when executed
    execute(args: string[], msgObj: Discord.Message, client: Discord.Client){ 
        msgObj.channel.send("Help is on the way!");
    }

}