"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class helpCommand {
    constructor() {
        this._command = "help";
    }
    help() { return "This command shows a list of commands."; }
    isCommand(command) { return command === this._command; }
    execute(args, msgObj, client) {
        msgObj.channel.send("Help is on the way!");
    }
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsV0FBVztJQUFoQztRQUdxQixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBY3ZDLENBQUM7SUFWRyxJQUFJLEtBQVksT0FBTyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7SUFHbEUsU0FBUyxDQUFDLE9BQWUsSUFBYSxPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUd6RSxPQUFPLENBQUMsSUFBYyxFQUFFLE1BQXVCLEVBQUUsTUFBc0I7UUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUo7QUFqQkQsOEJBaUJDIn0=