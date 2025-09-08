<script>
  import './carousel.css';
  import { onMount, onDestroy } from 'svelte';

  import Item1 from "./Items/Item1.svelte";
  import Item2 from "./Items/Item2.svelte";
  import Item3 from "./Items/Item3.svelte";
  import Item4 from "./Items/Item4.svelte";

  const items = [Item1, Item2, Item3, Item4];

  let currentSlideItem = 0;
  let interval;

  const nextItem = () => {
    currentSlideItem = (currentSlideItem + 1) % items.length;
  };

  const prevItem = () => {
    currentSlideItem = (currentSlideItem - 1 + items.length) % items.length;
  };

  const resetAutoplay = () => {
    clearInterval(interval);
    interval = setInterval(nextItem, 10000); // каждые 10 секунд
  };

  const handlePrev = () => {
    prevItem();
    resetAutoplay(); // перезапуск после ручного клика
  };

  const handleNext = () => {
    nextItem();
    resetAutoplay();
  };

  onMount(() => {
    resetAutoplay();
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="relative grid">
  {#each items as Item, i}
    <div
      class="col-start-1 row-start-1 transition-opacity duration-500"
      class:opacity-100={i === currentSlideItem}
      class:opacity-0={i !== currentSlideItem}
      class:pointer-events-none={i !== currentSlideItem}
    >
      <svelte:component this={Item}>
        <button
          class="left-button absolute left-4 top-1/2 -translate-y-1/2 text-text text-4xl bg-black/30 hover:bg-black/50 transition-all p-4 rounded-full z-10"
          on:click={handlePrev}
          aria-label="Предыдущий слайд"
        >
          &#10094;
        </button>

        <button
          class="right-button absolute right-4 top-1/2 -translate-y-1/2 text-text text-4xl bg-black/30 hover:bg-black/50 transition-all p-4 rounded-full z-10"
          on:click={handleNext}
          aria-label="Следующий слайд"
        >
          &#10095;
        </button>
      </svelte:component>
    </div>
  {/each}
</div>
