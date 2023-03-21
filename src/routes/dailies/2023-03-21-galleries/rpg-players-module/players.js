// By convention, this file should be located in /src/lib

/************/
/* Player 1 */
/************/

// Private variable
const player1 = {
  name: 'Ryan Reynolds',
  race: 'human',
  class: 'rogue',
  level: 1,
  health: 8,
  poisoned: true,
  backpack: [
    'rusty knife',
    'gem',
    'journal'
  ],
  url: 'https://en.wikipedia.org/wiki/Rogue_(Dungeons_%26_Dragons)'
}

/************/
/* Player 2 */
/************/

// Private variable
const player2 = {
  name: "Gyda",
  race: "dwarf",
  class: "fighter",
  level: 1,
  health: 12,
  poisoned: false,
  backpack: [
    'sword',
    'leather armour',
    'rations'
  ],
  url: 'https://en.wikipedia.org/wiki/Fighter_(Dungeons_%26_Dragons)'
}
/************/
/* Player 3 */
/************/

// Private variable
const player3 = {
  name: "Anna",
  race: "elf",
  class: "wizard",
  level: 1,
  health: 9,
  poisoned: true,
  backpack: [
    'staff',
    'cloak',
    'spell book'
  ],
  url: 'https://en.wikipedia.org/wiki/Wizard_(Dungeons_%26_Dragons)'
}

// Exported variables are available to the outside environment
export const players = [player1, player2, player3];
