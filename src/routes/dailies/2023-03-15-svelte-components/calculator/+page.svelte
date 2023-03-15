<script>
  const firstNum = 6;

  const secondNum = 98.3;

  const operation = 'add';

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