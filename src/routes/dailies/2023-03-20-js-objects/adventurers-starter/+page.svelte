<script>
  /************/
  /* Player 1 */
  /************/

  // Player 1 general
  const player1Name = 'Ryan Reynolds';
  const player1Race = 'human';
  const player1Class = 'rogue';
  let player1Level = 1;
  let player1Health = 8;

  // Player 1 effects
  let player1Poisoned = true;

  // Player 1 items
  let player1Backpack = [
      'rusty knife',
      'gem',
      'journal'
    ];

  /************/
  /* Player 2 */
  /************/

  // Player 2 general
  const player2Name = 'Gyda';
  const player2Race = 'dwarf';
  const player2Class = 'fighter';
  let player2Level = 1;
  let player2Health = 12;

  // Player 2 effects
  let player2Poisoned = false;

  // Player 2 items
  let player2Backpack = [
    'sword',
    'leather armour',
    'rations'
  ];

  /************/
  /* Player 3 */
  /************/

  // Player 3 general
  const player3Name = 'Anna';
  const player3Race = 'elf';
  const player3Class = 'wizard';
  let player3Level = 1;
  let player3Health = 9;

  // Player 3 effects
  let player3Poisoned = true;

  // Player 3 items
  let player3Backpack = [
      'staff',
      'cloak',
      'spell book'
  ];
</script>

<main>
  <h1>List of Adventurers</h1>
  <h2>Rogue</h2>
  <div class="card">
    <h3>{player1Name}</h3>
    <ul>
      <li>Race: {player1Race}</li>
      <li>Class: {player1Class}</li>
      <li>Level: {player1Level}</li>
      <li>Health: {player1Health}</li>
      <li>Poisoned: {player1Poisoned}</li>
      <li>Backpack:
        <ul>
          {#each player1Backpack as item}
            <li>{item}</li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>

  <h2>Fighter</h2>
  <div class="card">
    <h3>{player2Name}</h3>
    <ul>
      <li>Race: {player2Race}</li>
      <li>Class: {player2Class}</li>
      <li>Level: {player2Level}</li>
      <li>Health: {player2Health}</li>
      <li>Poisoned: {player2Poisoned}</li>
      <li>Backpack:
        <ul>
          {#each player2Backpack as item}
            <li>{item}</li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
  <h2>Wizard</h2>
  <div class="card">
    <h3>{player3Name}</h3>
    <ul>
      <li>Race: {player3Race}</li>
      <li>Class: {player3Class}</li>
      <li>Level: {player3Level}</li>
      <li>Health: {player3Health}</li>
      <li>Poisoned: {player3Poisoned}</li>
      <li>Backpack:
        <ul>
          {#each player3Backpack as item}
            <li>{item}</li>
          {/each}
        </ul>
      </li>
    </ul>
  </div>
</main>