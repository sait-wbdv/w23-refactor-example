<main>
  <h1>Animal Gallery</h1>
  <section class="gallery">
    <article>
      <img src="/images/animals/237-puppy.jpg" alt="Puppy">
      <h3>Cute Puppy</h3>
    </article>
    <article>
      <img src="/images/animals/433-bear.jpg" alt="Brown Bear">
      <h3>Brown Bear</h3>
    </article>
    <article>
      <img src="/images/animals/577-moose.jpg" alt="Moose">
      <h3>Moose</h3>
    </article>
    <article>
      <img src="/images/animals/582-coyote.jpg" alt="Coyote">
      <h3>Coyote</h3>
    </article>
    <article>
      <img src="/images/animals/593-tiger.jpg" alt="Baby Tiger">
      <h3>Baby Tiger</h3>
    </article>
    <article>
      <img src="/images/animals/718-wolf.jpg" alt="Wolf">
      <h3>Wolf</h3>
    </article>
    <article>
      <img src="/images/animals/783-monkey.jpg" alt="Monkey">
      <h3>Monkey</h3>
    </article>
    <article>
      <img src="/images/animals/790-elk.jpg" alt="Elk">
      <h3>Elk</h3>
    </article>
    <article>
      <img src="/images/animals/837-bulldog.jpg" alt="Bull Dog">
      <h3>Bull Dog</h3>
    </article>
    <article>
      <img src="/images/animals/1024-bird.jpg" alt="Bird">
      <h3>Bird</h3>
    </article>
    <article>
      <img src="/images/animals/1025-pug.jpg" alt="Pug">
      <h3>Pug</h3>
    </article>
    <article>
      <img src="/images/animals/1074-cat.jpg" alt="Cat">
      <h3>Big Cat</h3>
    </article>
    <article>
      <img src="/images/animals/1084-walrus.jpg" alt="Walrus">
      <h3>Walrus</h3>
    </article>
  </section>
</main>

<style>
  .gallery {
    margin: auto;
  }

  .gallery article {
    width: 100%;
    margin: 1rem;

    background-color: #ccc;
    border-radius: 1rem;
    border: 1px solid #aaa;
    box-shadow: 0 1px 1px #0000000d,
                0 2px 2px #0000000d,
                0 4px 4px #0000000d,
                0 8px 8px #0000000d;
  }

  .gallery article h3 {
    margin: 0.5rem;
    text-align: center;
  }

  .gallery article img {
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  @media screen and (min-width: 800px) {
    .gallery {
      display: grid;
      grid-template-columns: 250px 250px 250px;
      justify-content: center;
      gap: 1rem;
    }

    .gallery article {
      margin: 0;
    }
  }

</style>