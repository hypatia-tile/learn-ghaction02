"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// my-script.ts
function greet(name) {
    console.log(`Hello, ${name}!`);
}
const args = process.argv.slice(2); // Slice to remove 'node' and the script path
if (args.length > 0 && args[0] !== undefined) {
    greet(args[0]);
}
else {
    console.log("Please provide a name as an argument.");
}
//# sourceMappingURL=index.js.map