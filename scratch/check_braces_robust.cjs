
const fs = require('fs');
const content = fs.readFileSync('/home/navgurukul/AC/Hyderabad-AC-Services/Hyderabad-AC-Services/src/styles/global.css', 'utf8');

let balance = 0;
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    for (let j = 0; j < line.length; j++) {
        if (line[j] === '{') {
            balance++;
        } else if (line[j] === '}') {
            balance--;
            if (balance < 0) {
                console.log(`NEGATIVE BALANCE at line ${i + 1}, column ${j + 1}`);
                process.exit(1);
            }
        }
    }
}

console.log(`Final balance: ${balance}`);
if (balance > 0) {
    console.log("Missing closing braces!");
}
