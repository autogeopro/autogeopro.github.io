<div class="main_container relative pt-5 mx-auto max-w-[1440px] pb-5">
  <img 
    class="absolute z-0 top-0 left-0 w-full h-full object-cover brightness-125" 
    src="images/remontcars.jpg" 
    alt=""
  >
      
  <div class="main_container_block relative p-6 mt-5 mb-5 rounded-lg mr-10 ml-14 md:ml-24 max-w-[790px] min-h-[350px] flex flex-col justify-center items-start"
       style="background: rgba(255, 255, 255, 0.35);">
       
    <h1 class="main_text_bold font-bold text-[45px] text-black m-0 leading-[56px] xs:leading-[40px] xs:text-[30px] pb-5"
        style="text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">
      Акция!
    </h1>
      
    <ul class="main_text_second max-w-[590px] text-xl text-black font-bold space-y-2"
        style="text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">
      <li>Вы еще не были у нас?</li>
      <li>Давайте знакомиться!</li>
      <li>Скидка 10% на ремонт автомобиля при первом посещении.</li>
    </ul>
  </div>
  
  <slot/>
</div>
