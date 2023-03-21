<script>
  const todoList = [
    'Get out of bed',
    'Make coffee',
    'Read feeds',
    'Have shower',
    'Brush teeth',
    'Get dressed',
    'Leave for work',
    'Get breakfast to go'
  ];
</script>
<main>
  <h1>Morning Todos</h1>
  <ol>
    {#each todoList as todo}
      <li>{todo}</li>
    {/each}
  </ol>
</main>