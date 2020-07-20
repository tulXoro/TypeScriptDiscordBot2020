"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const bot = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
bot.on("ready", () => {
    var _a, _b;
    (_a = bot.user) === null || _a === void 0 ? void 0 : _a.setStatus('online');
    (_b = bot.user) === null || _b === void 0 ? void 0 : _b.setActivity('I\'m not sure');
    console.log("Ready to go!");
    var active_servers = 0;
});
bot.on("message", msg => {
    if (msg.author.bot)
        return;
    if (!msg.content.startsWith(ConfigFile.config.prefix))
        return;
    handle(msg);
});
function handle(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandsClass of commands) {
            try {
                if (!commandsClass.isCommand(command))
                    continue;
                yield commandsClass.execute(args, msg, bot);
            }
            catch (exeception) {
                console.log(exeception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0)
        return;
    for (const commandName of ConfigFile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
;
bot.login(ConfigFile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBc0M7QUFDdEMsdUNBQXVDO0FBR3ZDLE1BQU0sR0FBRyxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVqRCxJQUFJLFFBQVEsR0FBcUIsRUFBRSxDQUFDO0FBR3BDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUM7QUFLdEMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFOztJQUVqQixNQUFBLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUU7SUFDOUIsTUFBQSxHQUFHLENBQUMsSUFBSSwwQ0FBRSxXQUFXLENBQUMsZUFBZSxFQUFFO0lBR3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFHNUIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBR0gsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFHcEIsSUFBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUc7UUFBRSxPQUFPO0lBRzFCLElBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU87SUFHN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFBO0FBRUYsU0FBZSxNQUFNLENBQUMsR0FBb0I7O1FBRXRDLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5RSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0MsS0FBSSxNQUFNLGFBQWEsSUFBSSxRQUFRLEVBQUU7WUFDakMsSUFBRztnQkFFQyxJQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7b0JBQUUsU0FBUztnQkFDL0MsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDL0M7WUFBQSxPQUFNLFVBQVUsRUFBQztnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzNCO1NBQ0o7SUFDTCxDQUFDO0NBQUE7QUFFRCxTQUFTLFlBQVksQ0FBQyxZQUFvQjtJQUV0QyxJQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQXFCLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPO0lBR3ZGLEtBQUksTUFBTSxXQUFXLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFvQixFQUFDO1FBQzVELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLFlBQVksSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUN4RSxNQUFNLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBb0IsQ0FBQztRQUN0RCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzFCO0FBRUwsQ0FBQztBQUFBLENBQUM7QUFHRixHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMifQ==