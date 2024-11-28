<script>
  import './posts.css'
</script>

<div class="posts_container sm:grid sm:grid-cols-2 sm:gap-20 max-w-[1280px] mx-auto mt-20 justify-between p-5 bg-background">
    <div class="posts_featured">
        <p class="posts_featuerd_fisrt_text text-primary font-bold text-[36px]">Последний Пост</p>
        <div class="posts_featured_content p-8 pb-12 border border-light mt-7">
            <img class="posts_featured_img" src="images/car.jpg" alt="/">
            <p class="posts_featured_text_date text-primary text-sm pt-8">May 23, 2024</p>
            <h1 class="posts_featured_text_title text-primary text-bold text-[28px] leading-[30px] mt-2 xs:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
            <p class="posts_featured_text text-textAlt pb-7 text-base leading-[28px] mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <a class="posts_featured_button  uni_button rounded-md uni_button  px-[48px] py-[16px] bg-secondary text-text font-bold no-underline hover:bg-hoverButton transition-bg duration-200 ease-in-out" href="/">Подробнее</a>
        </div>
    </div>

    <div class="posts_all_posts sm:mt-0 mt-10">
        <div class="posts_all_posts_first_text_container flex justify-between gap-5">
            <p class="posts_all_posts_allposts_text text-primary text-[36px] font-bold">Все Посты</p>
         <p class="posts_all_posts_viewall_text mt-6 pr-2"><a class="text-secondary text-[16px] no-underline" href="/" >Показать Все</a></p>
        </div>
        <div class="posts_all_posts_content flex flex-col justify-between cursor-pointer mt-[30px]">
            <div class="posts_all_posts_post transition transition-colors"> 
                <p class="posts_all_posts_post_text_date">May 23, 2024</p>
                <h1 class="posts_all_posts_post_text_title">8 Figma design systems that you can download for free today.</h1>
           
            </div>
            <div class="posts_all_posts_post transition transition-colors">
                <p class="posts_all_posts_post_text_date">May 23, 2024</p>
                <h1 class="posts_all_posts_post_text_title">8 Figma design systems that you can download for free today.</h1>

            </div>
            <div class="posts_all_posts_post transition transition-colors xs:hidden">
                <p class="posts_all_posts_post_text_date">May 23, 2024</p>
                <h1 class="posts_all_posts_post_text_title">8 Figma design systems that you can download for free today.</h1>

            </div>
            <div class="posts_all_posts_post transition transition-colors hidden lg:block">
                <p class="posts_all_posts_post_text_date">May 23, 2024</p>
                <h1 class="posts_all_posts_post_text_title">8 Figma design systems that you can download for free today.</h1>

            </div>
        </div>
    </div>

</div>