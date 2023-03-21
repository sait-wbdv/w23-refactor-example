<script>
  /************/
  /* Player 1 */
  /************/

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
    ]
  }

  /************/
  /* Player 2 */
  /************/

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
    ]
  }
  /************/
  /* Player 3 */
  /************/

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
    ]
  }

  const players = [player1, player2, player3];

</script>

<main>
  <h1>List of Adventurers</h1>
  <section>
    <a href="https://en.wikipedia.org/wiki/Rogue_(Dungeons_%26_Dragons)" target="_blank">
      <article class="card">
        <h3>{player1.name}</h3>
        <ul>
          <li>Race: {player1.race}</li>
          <li>Class: {player1.class}</li>
          <li>Level: {player1.level}</li>
          <li>Health: {player1.health}</li>
          <li>Poisoned: {player1.poisoned}</li>
          <li>Backpack:
            <ul>
              {#each player1.backpack as item}
                <li>{item}</li>
              {/each}
            </ul>
          </li>
        </ul>
      </article>
    </a>
    <a href="https://en.wikipedia.org/wiki/Dwarf_(Dungeons_%26_Dragons)" target="_blank">
      <article class="card">
        <h3>{player2.name}</h3>
        <ul>
          <li>Race: {player2.race}</li>
          <li>Class: {player2.class}</li>
          <li>Level: {player2.level}</li>
          <li>Health: {player2.health}</li>
          <li>Poisoned: {player2.poisoned}</li>
          <li>Backpack:
            <ul>
              {#each player2.backpack as item}
                <li>{item}</li>
              {/each}
            </ul>
          </li>
        </ul>
      </article>
    </a>
    <a href="https://en.wikipedia.org/wiki/Wizard_(Dungeons_%26_Dragons)" target="_blank">
      <article class="card">
        <h3>{player3.name}</h3>
        <ul>
          <li>Race: {player3.race}</li>
          <li>Class: {player3.class}</li>
          <li>Level: {player3.level}</li>
          <li>Health: {player3.health}</li>
          <li>Poisoned: {player3.poisoned}</li>
          <li>Backpack:
            <ul>
              {#each player3.backpack as item}
                <li>{item}</li>
              {/each}
            </ul>
          </li>
        </ul>
      </article>
    </a>
  </section>
</main>

<style>
  section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  a {
    display: block;
    text-decoration: none;
    color: #444;
  }

  a:hover article {
    background-color: ghostwhite;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1), 
              0px 2px 2px rgba(0,0,0,0.1), 
              0px 4px 4px rgba(0,0,0,0.1), 
              0px 8px 8px rgba(0,0,0,0.1);
  }

  article {
    border: 1px solid black;
    background-color: #eee;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.05), 
              0px 2px 2px rgba(0,0,0,0.05), 
              0px 4px 4px rgba(0,0,0,0.05), 
              0px 8px 8px rgba(0,0,0,0.05);
  }
</style>