const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
const [bessie,,dolly,babe,little] = farmAnimals.split(' ');
const [blackAndWhite,,black,pink] = farmAnimals.split(' ');
const red = colors[0]
const orange = colors[1]
const yellow = colors[2]
const green = colors[3]
const blue = colors[4]
const indigo = colors[5]
const violet = colors[6]
const [r, o, y, g, b,, v] = colors
const indg = colors[5]

const {muppetName, color, song, job, partner} = muppet;

const {nestedJob, nestedPartner, album: {theMuppetMovie: {song2, song4}}} = nestedMuppet




// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner