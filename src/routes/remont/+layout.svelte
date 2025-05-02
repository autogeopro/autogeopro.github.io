<script>
  import { page } from '$app/stores';
  import List from "../../lib/components/RemontPage/List.svelte";

  export let data;
  let activeLink = '';
  $: activeLink = $page.url.pathname.split('/').pop();
</script>

<div class="max-w-[1280px] mx-auto pl-3 md:pl-5 pr-3 md:pr-5">

    <!-- Заголовок -->
    <h1 class="mt-10 text-primary text-3xl">{data?.title}</h1>

    <div class="flex mt-10">
      <List {activeLink} />
      
      <div class="pl-5 md:pl-12">

        <!-- Основной контент -->
        <slot />

      </div>
      
    </div>
</div>
  