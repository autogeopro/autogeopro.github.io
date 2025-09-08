<div class="main_container relative pt-5 mx-auto max-w-[1440px] pb-5">
  <img 
    class="absolute z-0 top-0 left-0 w-full h-full object-cover brightness-125" 
    src="images/cars-glav.jpg" 
    alt=""
  >
    
  <div class="main_container_block relative bg-white bg-opacity-50 p-6 rounded-lg mr-10 mt-5 mb-5 ml-14 md:ml-24 max-w-[790px] min-h-[350px] flex flex-col justify-center items-start bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-transparent">
    <h1 class="main_text_bold font-bold text-[45px] text-third m-0 leading-[56px] xs:leading-[40px] xs:text-[30px] pb-10">
      Диагностика авто <br> по 28 пунктам БЕСПЛАТНО
    </h1>
    
    <a 
      class="uni_button rounded-md px-[48px] py-[16px] bg-secondary text-text font-bold no-underline hover:bg-hoverButton transition-bg duration-200 ease-in-out" 
      href="/"
    >
      Записаться
    </a>
  </div>

  <slot/>
</div>
