<script>
  let imageId = 237;

  const handleClick = function() {
    imageId++;
    console.log(imageId);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick}>
  <h3>Card Title</h3>
  <img src="https://picsum.photos/id/{imageId}/200/200" alt="Random Lorem Picsum">
  <p>This is a puppy?</p>
  <p>Current ID: {imageId}</p>
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