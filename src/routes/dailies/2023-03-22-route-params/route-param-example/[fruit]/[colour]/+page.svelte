<script>
  import { page } from '$app/stores'

  console.log($page.params.colour);
</script>

<main>
  <h1>{$page.params.fruit}: {$page.params.colour}</h1>
</main>

<style>
  main {
    font-variant: small-caps;
  }
</style>