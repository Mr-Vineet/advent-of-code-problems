const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

const ops = {
  1: add,
  2: multiply,
};

const part1 = (program) => {
  const instr = program.split(",").map(Number);
  for (let index = 0; index < instr.length; index += 4) {
    const [currentInstr, num1Pos, num2Pos, resultPos] = instr.slice(
      index,
      index + 4
    );
    const operation = ops[currentInstr];

    if (currentInstr === 99) return instr;

    instr[resultPos] = operation(instr[num1Pos], instr[num2Pos]);
  }

  return "program is not halted";
};

const main = () => {
  const program = Deno.readTextFileSync("./puzzleinput.txt");

  console.log(part1(program));
  // console.log(part2);
};

main();
