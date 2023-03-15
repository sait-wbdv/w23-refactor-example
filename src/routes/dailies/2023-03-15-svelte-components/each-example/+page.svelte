<script>
  let fruits = ["Apple", "Orange", "Plum"];
</script>
<main>
  <h1>Cordelle's Favourite Fruits</h1>
  <ul>
    {#each fruits as fruit}
      <li><strong>{fruit}</strong></li>
    {/each}
  </ul>
</main>