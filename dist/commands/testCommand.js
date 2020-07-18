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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUM7SUFROUMsQ0FBQztJQU5HLElBQUksS0FBWSxPQUFPLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUV0RCxTQUFTLENBQUMsT0FBZSxJQUFhLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXpFLE9BQU8sQ0FBQyxJQUFjLEVBQUUsTUFBdUIsRUFBRSxNQUFzQixJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUEsQ0FBQztDQUUvRztBQVZELDhCQVVDIn0=