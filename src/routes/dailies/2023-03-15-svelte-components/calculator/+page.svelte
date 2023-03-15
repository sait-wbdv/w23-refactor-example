<script>
  import { browser } from '$app/environment';
  
  // Declare variables to avoid server-side errors
  let firstNum = 0;
  let secondNum = 0;
  let operation = '';

  if (browser) {
    firstNum = Number(prompt('Add a first number.'));
  
    secondNum = Number(prompt('Add a second number.'));
  
    operation = prompt('What operation?');
  }

</script>

<main>
  <h1>Calculator Example</h1>
  {#if operation === 'add'}
    <p>The sum of {firstNum} and {secondNum} is {firstNum + secondNum}.</p>
  {:else if operation === 'subtract'}
    <p>The difference between {firstNum} and {secondNum} is {firstNum - secondNum}.</p>
  {:else if operation === 'multiply'}
    <p>The product of {firstNum} and {secondNum} is {firstNum * secondNum}.</p>
  {:else if operation === 'divide'}
    <p>The quotient of {firstNum} and {secondNum} is {firstNum / secondNum}.</p>
  {:else}
    <p>Please enter a valid operation!</p>
  {/if}

</main>

<style>

</style>