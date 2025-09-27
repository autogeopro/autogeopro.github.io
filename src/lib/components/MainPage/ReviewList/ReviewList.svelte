<script>
  import { onMount } from 'svelte';
  import Review from "./Review.svelte";

  let reviews = [];
  let reviewsMock = [
    { id: 1, Text: "Отличный центр, сход-развал сделали качественно. Очень доброжелательный персонал. Рекомендую!", Title: "Андрей Шапоренко" },
    { id: 2, Text: "Отличный сервис, очень благодарна персоналу за быстрый и качественный ремонт и за подробный рассказ о всех неисправностях в моей машине!", Title: "Екатерина Позднякова" },
    { id: 3, Text: "Шикарный автосервис,помогли,подсказали,почини все быстро и самое главное качественно. Цены очень приятные в работники-мастера", Title: "Иван Минаев" },
    { id: 4, Text: "Хорошие мастера с большим опытом , приехал с проблемой с подвеской решили в течении часа, всем рекомендую , цены демократичные", Title: "Андрей Евплов" },
  ];
  let error = null;

  const apiUrl = 'https://strapi.autogeopro.ru/api/posts';

  onMount(async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.statusText}`);
      }
      const data = await response.json();
      reviews = data.data; 
    } catch (err) {
      error = err.message;
      reviews = reviewsMock
    }
  });

  let currentReviewIndex = 0;

  const nextReview = () => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  };

  const prevReview = () => {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
  };
</script>

<div class="max-w-[1280px] mx-auto mt-10">
  <div class="mt-[90px] sm:ml-[80px] ml-10 md:flex flex-grow mx-auto md:justify-between">
    <div class="pr-[5px] lg:pr-[80px] md:pr-[50px] mr-10 md:border-r mb-10 border-b md:border-b-0 border-bg-thrid md:pt-[10px] md:h-[230px]">
      <p id="reviews" class="font-semibold text-lg uppercase text-primary">Отзывы</p>
      <h1 class="mt-[12px] font-bold text-3xl max-w-[300px] text-primary leading-[48px] mb-10">
        Что люди говорят о нашем сервисе:
      </h1>
    </div>
    <div class="max-w-[500px] md:pr-[25px] relative">
        {#each reviews as review, index}
          {#if index === currentReviewIndex}
            <Review {...review}>
              <div class="absolute left-5 right-5 top-3/4 mt-4 flex justify-end gap-[24px]">
                <button
                  class="w-12 h-12 rounded-full hover:bg-third bg-third text-text hover:scale-110 transition-transform duration-200"
                  on:click={prevReview}>&#10094;</button>
                <button
                  class="w-12 h-12 rounded-full hover:bg-third bg-third text-text hover:scale-110 transition-transform duration-200"
                  on:click={nextReview}>&#10095;</button>
              </div>
            </Review>
          {/if}
        {/each}
    </div>
  </div>
</div>
