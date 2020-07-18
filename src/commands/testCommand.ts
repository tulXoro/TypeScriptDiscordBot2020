import * as Discord from "discord.js";
import { SelfBotCommand } from "../api";

export default class TestCommand implements SelfBotCommand {

    private readonly _command = "TestCommand";

    help(): string{ return "This command does nothing."; }

    isCommand(command: string): boolean { return command === this._command; }

    execute(args: string[], msgObj: Discord.Message, client: Discord.Client){ msgObj.channel.send("Wow, test!")}

}