const masses = [
  108356, 111312, 137196, 128616, 117950, 110687, 149855, 106679, 108283,
  109674, 130693, 115970, 139102, 92402, 51187, 109371, 70666, 54387, 128163,
  94570, 74413, 117655, 134559, 145383, 129820, 83945, 86672, 56044, 52237,
  117451, 51745, 144767, 109782, 128636, 70508, 140779, 113920, 58512, 116036,
  57614, 63442, 102753, 56205, 51487, 98089, 132630, 66180, 138042, 71889,
  57474, 58566, 133510, 90960, 74920, 91702, 51396, 112592, 91050, 55641,
  116282, 65960, 84625, 65758, 109305, 107023, 86523, 55909, 81584, 145804,
  147259, 117323, 122480, 101046, 148804, 81935, 148541, 120652, 60031, 75792,
  149544, 114685, 142754, 141287, 142735, 147108, 143915, 137950, 111655,
  121805, 91835, 117756, 147393, 134534, 85136, 139815, 137344, 84791, 82886,
  143721, 118304,
];
const add = (sum, number) => sum + number;

const calculateFuel = (mass) => Math.floor(mass / 3) - 2;

const totalFuel = (masses) =>
  masses.reduce((sum, mass) => sum + calculateFuel(mass), 0);

const evaluatefuelForFuel = (mass) => {
  const fuel = calculateFuel(mass);

  if (fuel <= 0) return 0;

  return fuel + evaluatefuelForFuel(fuel);
};

const grossFuel = (masses) => {
  const fuelPerMass = masses.map(evaluatefuelForFuel);
  const totalFuel = fuelPerMass.reduce(add, 0);

  return totalFuel;
};

const main = () => {
  console.log(totalFuel(masses)); //3481005
  console.log(grossFuel(masses)); //5218616
};

main();
