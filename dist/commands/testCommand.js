"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestCommand {
    constructor() {
        this._command = "TestCommand";
    }
    help() { return "This command does nothing."; }
    isCommand(command) { return command === this._command; }
    execute(args, msgObj, client) { msgObj.channel.send("Wow, test!"); }
}
exports.default = TestCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixXQUFXO0lBQWhDO1FBR3FCLGFBQVEsR0FBRyxhQUFhLENBQUM7SUFZOUMsQ0FBQztJQVJHLElBQUksS0FBWSxPQUFPLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUd0RCxTQUFTLENBQUMsT0FBZSxJQUFhLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBR3pFLE9BQU8sQ0FBQyxJQUFjLEVBQUUsTUFBdUIsRUFBRSxNQUFzQixJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUEsQ0FBQztDQUVoSDtBQWZELDhCQWVDIn0=