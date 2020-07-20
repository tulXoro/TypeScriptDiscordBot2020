"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Purge {
    constructor() {
        this._command = "purge";
    }
    help() { return "Deletes messages."; }
    isCommand(command) { return command === this._command; }
    execute(args, msgObj, client) {
        if (args[0] === null || Number(args[0]) <= 0) {
            msgObj.channel.send('Unable to purge that amount!');
            return;
        }
        var amount = parseInt(args[0]);
        msgObj.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            msgObj.channel.send('There was an error trying to purge messages in this channel!');
        });
    }
}
exports.default = Purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUM7SUFvQnhDLENBQUM7SUFsQkcsSUFBSSxLQUFZLE9BQU8sbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBRTdDLFNBQVMsQ0FBQyxPQUFlLElBQWEsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFekUsT0FBTyxDQUFDLElBQWMsRUFBRSxNQUF1QixFQUFFLE1BQXNCO1FBRW5FLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDcEQsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBdEJELHdCQXNCQyJ9