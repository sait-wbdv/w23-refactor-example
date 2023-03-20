<script>
  let counter = 0;
  let countList = [];

  const handleClick = () => {
    counter++;

    // Method 1: Adding to arrays in SvelteKit
    countList.push(counter);
    countList = countList;

    // Method 2
    // countList[countList.length] = counter;

    // Method 3 (advanced-ish)
    // countList = [...countList, counter];

    // console.log(countList);
  }

</script>

<main>
  <h1>Push of a FizzBuzz</h1>
  <button on:click={handleClick}>Counter: {counter}</button>
  <ul>
    {#each countList as count}
      {#if count % 15 === 0}
        <li>FizzBuzz</li>
      {:else if count % 3 === 0}
        <li>Fizz</li>
      {:else if count % 5 === 0}
        <li>Buzz</li>
      {:else}
        <li>{count}</li>
      {/if}
    {/each}
  </ul>
</main>