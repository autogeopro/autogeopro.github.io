<script>
  export let category;
  export let services = [];
</script>

<div class="mb-8">
  <!-- Здесь ставим id только для блока с нужной категорией -->
  {#if category === "Техническое обслуживание автомобиля"}
    <h2 id="technical-maintenance" class="text-2xl font-semibold mb-4 text-primary">
      {category}
    </h2>
  {:else}
    <h2 class="text-2xl font-semibold mb-4 text-primary">{category}</h2>
  {/if}

  <table class="w-full bg-text text-primary rounded shadow text-sm">
    <tbody>
      {#each services as service}
        <tr class="border-b">
          <td class="p-2">{service.title}</td>
          <td class="p-2 text-right text-secondary font-medium">{service.price}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
