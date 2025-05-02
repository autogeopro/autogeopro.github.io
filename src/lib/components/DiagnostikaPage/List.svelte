<script>
    export let activeLink = '';
  
    const links = [
      { href: 'kompyuternaya-diagnostika', title: 'Компьютерная диагностика' },
      { href: 'diagnostika-dvigatelya', title: 'Диагностика двигателя' },
      { href: 'diagnostika-podveski-i-razval-shozhdeniya', title: 'Диагностика подвески и развал-схождения' },
      { href: 'kompleksnaya-diagnostika', title: 'Комплексная диагностика' },
    ];
  </script>
  
  <ul class="divide-y divide-thrid border border-thrid text-primary text-md">
    {#each links as { href, title }}
      <li class="p-4">
        <a
          href={`/diagnostika/${href}`}
          class={`block ${activeLink === href ?
           ' font-bold text-secondary' : ''}`}
        >
          {title}
        </a>
      </li>
    {/each}
  </ul>
  