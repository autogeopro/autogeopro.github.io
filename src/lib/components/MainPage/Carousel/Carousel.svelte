<script>
  import './carousel.css'

  import Item1 from "./Items/Item1.svelte";
  import Item2 from "./Items/Item2.svelte";
  const items = [
    Item1,
    Item2,
  ];

  let currentSlideItem = 0;
  
  const nextImage = () => {
    currentSlideItem = (currentSlideItem + 1) % items.length;
  }

  const prevImage = () => {
    if (currentSlideItem != 0) {
        currentSlideItem = (currentSlideItem - 1) % items.length;
    } else {
        currentSlideItem = items.length - 1;
    }
  }

</script>

{#each [items[currentSlideItem]] as Item (currentSlideItem)}
    <Item>
        <button class="left-button absolute left-4  top-1/2 transform -translate-y-1/2 text-text text-4xl" on:click={() => prevImage()}>&#10094;</button>
        <button class="right-button absolute right-4 top-1/2 transform -translate-y-1/2 text-text text-4xl" on:click={() => nextImage()}>&#10095;</button>
    </Item>
{/each}