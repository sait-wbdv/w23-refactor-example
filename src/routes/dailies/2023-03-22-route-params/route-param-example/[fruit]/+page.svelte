<script>
  import { page } from '$app/stores'

  console.log($page.params.fruit);
</script>

<main>
  <h1>{$page.params.fruit}</h1>
</main>

<style>
  main {
    font-variant: small-caps;
  }
</style>