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
    ],
    url: 'https://en.wikipedia.org/wiki/Rogue_(Dungeons_%26_Dragons)'
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
    ],
    url: 'https://en.wikipedia.org/wiki/Fighter_(Dungeons_%26_Dragons)'
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
    ],
    url: 'https://en.wikipedia.org/wiki/Wizard_(Dungeons_%26_Dragons)'
  }

  const players = [player1, player2, player3];

</script>

<main>
  <h1>List of Adventurers</h1>
  <section>
    {#each players as player}
      <a href="{player.url}" target="_blank">
        <article class="card">
          <h3>{player.name}</h3>
          <ul>
            <li>Race: {player.race}</li>
            <li>Class: {player.class}</li>
            <li>Level: {player.level}</li>
            <li>Health: {player.health}</li>
            <li>Poisoned: {player.poisoned}</li>
            <li>Backpack:
              <ul>
                {#each player.backpack as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </li>
          </ul>
        </article>
      </a>
    {/each}
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