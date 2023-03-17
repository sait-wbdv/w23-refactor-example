<script>
  let bold = '';

  const handleChange = function(event) {
    console.log(event.target);
    if (event.target.checked) {
      bold = 'bold';
    } else {
      bold = '';
    }
  }
</script>

<main class="{bold}">
  <label for="bold">Bold Text</label>
  <input on:change={handleChange} type="checkbox" id="bold">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto dignissimos, inventore, officiis quidem obcaecati assumenda in expedita ipsam possimus deserunt accusamus maiores corrupti sequi. Eligendi, ad odit? Expedita fugit distinctio mollitia dicta cupiditate quibusdam quasi iure, accusamus dolorum ipsa officiis esse nihil minus itaque facilis explicabo. Voluptate, non in.</p>
</main>

<style>
  .bold {
    font-weight: bold;
  }
</style>