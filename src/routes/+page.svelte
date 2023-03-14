<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet"> 
</svelte:head>

<div class="hero">
  <p>Hello world!</p>
</div>

<style>

  .hero {
    font-size: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 75vh;

    flex: auto;

    background-image: url('https://picsum.photos/id/10/2000/2000');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  } 

  .hero p {
    font-family: 'Nabla', Arial, Helvetica, cursive;
    font-size: clamp(64px, 10vw, 128px);
    margin: 0;
  }

</style>