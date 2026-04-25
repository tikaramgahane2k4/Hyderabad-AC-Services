
const fs = require('fs');
const content = fs.readFileSync('/home/navgurukul/AC/Hyderabad-AC-Services/Hyderabad-AC-Services/src/styles/global.css', 'utf8');

let openBraces = 0;
let closeBraces = 0;
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    for (let char of line) {
        if (char === '{') openBraces++;
        if (char === '}') closeBraces++;
    }
}

console.log(`Open: ${openBraces}, Close: ${closeBraces}`);
if (openBraces !== closeBraces) {
    console.log("IMBALANCE DETECTED!");
}
