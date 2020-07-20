import * as Discord from "discord.js";
import { SelfBotCommand } from "../api";

// Template test command
export default class TestCommand implements SelfBotCommand {

    // What the user should say to use the command
    private readonly _command = "TestCommand";

    // Description listed from the help command
    // TODO: implement help command
    help(): string{ return "This command does nothing."; }

    // Checks if this is the command (used for handler; ignore this)
    isCommand(command: string): boolean { return command === this._command; }

    // What the command should do when executed
    execute(args: string[], msgObj: Discord.Message, client: Discord.Client){ msgObj.channel.send("Wow, test!");}

}