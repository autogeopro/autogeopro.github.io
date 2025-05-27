<script>
    import { priceData } from '$lib/priceData/priceData.js';
    import PriceTable from '../PriceTable/PriceTable.svelte';
  </script>
  
  {#each Object.entries(priceData) as [category, services]}
    <PriceTable {category} {services} />
  {/each}
  