<script>
  import { browser } from '$app/environment'

  let message = '';
  
  if (browser) {
    message = prompt('Please enter a message.');
  }

</script>
<main>
  <h1>{message}</h1>
</main>