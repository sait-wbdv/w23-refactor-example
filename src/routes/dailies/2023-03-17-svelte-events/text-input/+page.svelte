<script>
  let name = 'World';

  const handleInput = function(event) {
    console.log(event.target.value);
    name = event.target.value;
  }
</script>

<main>
  <label for="name">Name:</label>
  <input on:input={handleInput} type="text" id="name">
  <h1>Hello {name}!</h1>
</main>