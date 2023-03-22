<script>
  import { page } from '$app/stores'
  import { players } from '../players.js';
  import Card from '../Card.svelte';

  let foundPlayer;

  // Find an object in an array

  // Method 1: for...of
  for (let player of players) {
    if (player.id === $page.params.id) {
      foundPlayer = player;
      break;
    }
    // else: do nothing and move on to the next player
  }

  // Method 2: array.find() (not for beginners unless they like pain)

  // Long way
  // const findPlayer = (item) => {
  //   if (item.id === $page.params.id) {
  //     // array.find() returns the current item and stops the loop
  //     return true;
  //   } else {
  //     // array.find() moves on to the next item in the array
  //     return false;
  //   }
  // }

  // Short way
  // foundPlayer = players.find(item => item.id === $page.params.id);

</script>
<main>
  <h1>Player Details</h1>
  <section>
    {#if foundPlayer}
    <a href="{foundPlayer.url}" target="_blank">
      <Card player={foundPlayer} />
    </a>
    {:else}
    <h3>Player not found</h3>
    {/if}
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
    border-radius: 1rem;
  }

  a:hover {
    background-color: ghostwhite;
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1), 
              0px 2px 2px rgba(0,0,0,0.1), 
              0px 4px 4px rgba(0,0,0,0.1), 
              0px 8px 8px rgba(0,0,0,0.1);
  }

</style>