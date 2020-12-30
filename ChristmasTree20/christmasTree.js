// TESTED ONLY IN VS CODE TERMINAL!!!!!
// TODO: Support other terminals

const drawATree = (height, message = "** Merry Christmas **") => {
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

drawATree(50);
