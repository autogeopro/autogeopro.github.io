<script>
    
    import Item1 from "./Items/Item1.svelte";
    import Item2 from "./Items/Item2.svelte";
    import Item3 from "./Items/Item3.svelte";
    import Item4 from "./Items/Item4.svelte";
    const items = [
      Item1,
      Item2,
      Item3,
      Item4,
    ];
  
    let currentSlideItem = 0;
    
    const nextItem = () => {
      currentSlideItem = (currentSlideItem + 1) % items.length;
    }
  
    const prevItem = () => {
      if (currentSlideItem != 0) {
          currentSlideItem = (currentSlideItem - 1) % items.length;
      } else {
          currentSlideItem = items.length - 1;
      }
    }
  
  </script>
  

<div class="max-w-[1280px] mx-auto mt-10">
<div class="mt-[90px] sm:ml-[80px] ml-10 md:flex flex-grow mx-auto md:justify-between ">
    <div class="pr-[5px] lg:pr-[80px] md:pr-[50px] mr-10 md:border-r mb-10 border-b md:border-b-0 border-bg-thrid md:pt-[10px] md:h-[230px]" >
        <p class="font-semibold text-[16px] uppercase text-primary">Отзывы</p>
        <h1 class="mt-[12px] font-bold text-[36px] max-w-[300px] text-primary leading-[48px] mb-10">Что люди говорят о нашем сервисе:</h1>
    </div>
    <div class=" max-w-[500px] md:pr-[25px] relative">

{#each [items[currentSlideItem]] as Item (currentSlideItem)}
<Item>
    <div class="absolute left-5 right-5 top-3/4 mt-4 flex justify-end gap-[24px]">
        <button  class="w-12 h-12 rounded-full hover:bg-third bg-third text-text hover:scale-110 transition-transform duration-200"on:click={() => prevItem()}>&#10094;</button>
        <button  class="w-12 h-12 rounded-full hover:bg-third bg-third text-text hover:scale-110 transition-transform duration-200"on:click={() => nextItem()}>&#10095;</button>
      </div>
</Item>
{/each}
   </div>
   </div>
  </div>


  
