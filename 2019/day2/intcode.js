const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const extractInstructions = (filePath) =>
  Deno.readTextFileSync(filePath).split(",").map(Number);

const part1 = (program) => {
  const ops = {
    1: add,
    2: multiply,
  };
  const instr = [...program];

  for (let index = 0; index < instr.length; index += 4) {
    const [currentInstr, num1Pos, num2Pos, resultPos] = instr.slice(
      index,
      index + 4
    );

    const output = instr[0];
    if (currentInstr === 99) return output;
    const operation = ops[currentInstr];

    instr[resultPos] = operation(instr[num1Pos], instr[num2Pos]);
  }

  return "program is not halted";
}; //  6627023

const part2 = (program) => {
  for (let noun = 0; noun < 100; noun++) {
    const instr = [...program];
    instr[1] = noun;
    for (let verb = 0; verb < 100; verb++) {
      instr[2] = verb;
      const output = part1(instr);

      if (output === 19690720) return noun * 100 + verb;
    }
  }
}; //19690720

const main = () => {
  const program = extractInstructions("./puzzleinput.txt");
  console.log(part1(program));
  console.log(part2(program));
};

main();
