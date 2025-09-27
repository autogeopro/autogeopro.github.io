<div class="main_container relative pt-5 mx-auto max-w-[1440px] pb-5">
  <img 
    class="absolute z-0 top-0 left-0 w-full h-full object-cover brightness-125" 
    src="images/cars-glav.jpg" 
    alt=""
  >
      
  <div class="main_container_block relative p-6 mt-5 mb-5 rounded-lg mr-10 ml-14 md:ml-24 max-w-[790px] min-h-[350px] flex flex-col justify-center items-start"
       style="background: rgba(255, 255, 255, 0.25);">
       
    <h1 class="main_text_bold font-bold text-[45px] text-black m-0 leading-[56px] xs:leading-[40px] xs:text-[30px]"
        style="text-shadow: 2px 2px 5px rgba(0,0,0,0.6);">
      Дороги ведут к нам!
    </h1>
    
    <p class="main_text_third mt-6 text-black text-base font-bold"
       style="text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">
      г.Москва, ул.Авиамоторная, д.73А стр 5
    </p>
  </div>
  
  <slot/>
</div>
