import * as Discord from "discord.js";

export interface SelfBotCommand {
    help(): string;
    isCommand(command: string): boolean;
    execute(args: string[], msgObject: Discord.Message, client: Discord.Client): void;
}