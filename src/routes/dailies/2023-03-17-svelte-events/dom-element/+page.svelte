<script>
  let animalId = 237;

  const handleClick = function() {
    animalId++;
    console.log(animalId);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick}>
  <h3>Card Title</h3>
  <img src="https://picsum.photos/id/{animalId}/200/200" alt="Random Lorem Picsum">
  <p>This is a puppy?</p>
  <p>Current ID: {animalId}</p>
</div>

<style>
  div {
    width: 30ch;
    border: 1px solid black;
    background-color: #eee;

    padding: 1rem;
    margin: auto;
  }

  img {
    width: 100%;
  }
</style>