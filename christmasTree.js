// Draw a Christmas tree in the Console using a function that will receive a height value
//     x
//    xxx
//   xxxxx
//  xxxxxxx
// xxxxxxxxx

// Conditions: To draw the Christmas tree you should use only special chapters
// Will simulate changes light as a real tree

// USE ONLY IN VS CODE TERMINAL!!!!!
// USE ONLY UNDER YOUR OWN RISK
// TODO: Support other terminals

const drawATree = (height, message = "") => {
  let padding = 0;
  let chars = 0;

  for (let i = height; i > 0; i--) {
    const char = i === height ? "⭐️" : i % 3 === 0 ? "💡" : "🎄";
    const line = " ".repeat(i) + char + char.repeat(height - i + " ");
    padding = ~~(height / 2);
    chars = line;
    console.log(line);
  }

  const scape = " ".repeat(padding);

  for (let i = 3; i > 0; i--) {
    console.log(` ${scape}${"|".repeat(padding * 2)}`);
  }

  console.log(`${" ".repeat(chars.length / 2 - message.length / 2)}${message}`);
};

drawATree(60, "** Merry Christmas **");
