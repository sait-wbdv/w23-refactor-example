<main class="schedule">
  <h1>Program Schedule</h1>
  <section class="week">
    <h2 id="week-1">Week 1</h2> 
    <time class="svelte-pkdlok">Monday, Jan 9</time>
    <a href="#" class="svelte-pkdlok">
      <article class="dsgn-270 lesson svelte-pkdlok">
        <p>DSGN 270 - Day 1</p>
        <h3 class="svelte-pkdlok">Program Orientation</h3>
      </article>
    </a>
    <time class="svelte-pkdlok">Tuesday, Jan 10</time>
    <a href="#" class="svelte-pkdlok">
      <article class="dsgn-270 lesson svelte-pkdlok">
        <p>DSGN 270 - Day 2</p>
        <h3 class="svelte-pkdlok">Day 2 - Intro to Design for Devs</h3>
      </article>
    </a>
    <time class="svelte-pkdlok">Wednesday, Jan 11</time>
    <a href="#" class="svelte-pkdlok">
      <article class="dsgn-270 lesson svelte-pkdlok">
        <p>DSGN 270 - Day 3</p>
        <h3 class="svelte-pkdlok">Day 3 - Visual Hierarchy and User Flows</h3>
      </article>
    </a>
    <time class="svelte-pkdlok">Thursday, Jan 12</time>
    <a href="#" class="svelte-pkdlok">
      <article class="cpnt-201 lesson svelte-pkdlok">
        <p>CPNT 201 - Day 1</p>
        <h3 class="svelte-pkdlok">Day 1 File Management and The Command Line</h3>
      </article>
    </a>
    <time class="svelte-pkdlok">Friday, Jan 13</time>
    <a href="#" class="svelte-pkdlok">
      <article class="cpnt-201 lesson svelte-pkdlok">
        <p>CPNT 201 - Day 2</p>
        <h3 class="svelte-pkdlok">Day 2 - Introduction to Git and Github</h3>
      </article>
    </a>
   </section>
</main>

<style>

  .schedule time {
    font-weight: bold;
  }

  .schedule a {
    text-decoration: none;
    display: block;
    width: 100%;
  }

  .schedule article {
    color: hsl(var(--hue), 20%, 10%);
    background: hsl(var(--hue), 25%, 93%);
    border: 3px solid hsl(var(--hue), 20%, 50%);
    margin: 1rem 2rem;
    padding: 1rem;
    border-radius: .5rem;

    box-shadow: 0px 1px 1px rgba(0,0,0,0.05),
    0px 2px 2px rgba(0,0,0,0.05),
    0px 4px 4px rgba(0,0,0,0.05),
    0px 8px 8px rgba(0,0,0,0.05);
  }

  .schedule a:hover article {
    border: 3px solid hsl(var(--hue), 50%, 50%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
    0px 2px 2px rgba(0,0,0,0.1),
    0px 4px 4px rgba(0,0,0,0.1),
    0px 8px 8px rgba(0,0,0,0.1);
  }

  .schedule article h3 {
    margin: 1rem 0;
  }

  .schedule a:hover article.cpnt-264, .schedule a:hover article.cpln-240 {
    border: 3px solid hsl(0, 0%, 20%);
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1),
    0px 2px 2px rgba(0,0,0,0.1),
    0px 4px 4px rgba(0,0,0,0.1),
    0px 8px 8px rgba(0,0,0,0.1);
  }

  .schedule article.dsgn-270 {
    --hue: 270;
  }

  .schedule article.cpnt-201 {
    --hue: 30;
  }

</style>