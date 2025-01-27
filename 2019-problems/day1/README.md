## Day 1: The Tyranny of the Rocket Equation ---

### Context:

- Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.

- Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

- The Elves quickly load you into a spacecraft and prepare to launch.

- At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

- Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

### For example:

- For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
- For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
- For a mass of 1969, the fuel required is 654.
- For a mass of 100756, the fuel required is 33583.
- The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

### Provdied Data:

108356
111312
137196
128616
117950
110687
149855
106679
108283
109674
130693
115970
139102
92402
51187
109371
70666
54387
128163
94570
74413
117655
134559
145383
129820
83945
86672
56044
52237
117451
51745
144767
109782
128636
70508
140779
113920
58512
116036
57614
63442
102753
56205
51487
98089
132630
66180
138042
71889
57474
58566
133510
90960
74920
91702
51396
112592
91050
55641
116282
65960
84625
65758
109305
107023
86523
55909
81584
145804
147259
117323
122480
101046
148804
81935
148541
120652
60031
75792
149544
114685
142754
141287
142735
147108
143915
137950
111655
121805
91835
117756
147393
134534
85136
139815
137344
84791
82886
143721
118304

### Query:

- What is the sum of the fuel requirements for all of the modules on your spacecraft?
