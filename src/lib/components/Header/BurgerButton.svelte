<script>
  export let buttonMenu;
  export let isButtonOpen = true;
</script>

<button 
  class="mt-7 md:hidden w-[50px] h-[50px] rounded-md bg-third text-text font-bold transition-colors duration-200 ease-in-out" 
  on:click={buttonMenu}
>
  {#if isButtonOpen}
    <div class="w-8 h-1 bg-text mx-auto"></div>
    <div class="w-8 h-1 bg-text mt-1 mx-auto"></div>
    <div class="w-8 h-1 bg-text mt-1 mx-auto"></div>
    <div class="w-8 h-1 bg-text mt-1 mx-auto"></div>
  {:else}
    
  <div class="relative w-8 h-8 mx-auto">
    <div class="absolute top-1/2 left-0 w-8 h-1 bg-text rotate-45"></div>
    <div class="absolute top-1/2 left-0 w-8 h-1 bg-text -rotate-45"></div>
  </div>
  {/if}
</button>
