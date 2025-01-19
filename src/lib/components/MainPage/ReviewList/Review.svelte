<!-- <script>
    export let id;
    export let text;
    export let name;
  </script>
  
  <div id={id} class="carousel-item relative mb-[50px] max-w-[500px]">
    <div>
      <p class="text-[24px] text-primary font-bold leading-[32px] h-[95px] xs:max-w-[300px]">{text}</p>
      <p class="mt-[100px] text-primary text-[24px] xs:max-w-[100px]">{name}</p>
    </div>
    <slot />
  </div> -->
  

  <script>
    export let id;
    export let Title;
    export let Text;
  </script>
  
  <div id={id} class="carousel-item relative mb-[50px] max-w-[500px] md:min-w-[430px] lg:min-w-[500px]">
    <div>
      <p class="text-[24px] text-primary font-bold leading-[32px] h-[95px] xs:max-w-[300px]">{Text}</p>
      <p class="mt-[100px] text-primary text-[24px] xs:max-w-[100px]">{Title}</p>
    </div>
    <slot />
  </div>