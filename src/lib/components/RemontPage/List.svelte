<script>
  export let activeLink = '';

  const links = [
    { href: 'dvigatel', title: 'Ремонт двигателя' },
    { href: 'transmissiya', title: 'Ремонт трансмиссии' },
    { href: 'hodovaya', title: 'Ремонт ходовой части' },
    { href: 'tormoznaya', title: 'Ремонт тормозной системы' },
    { href: 'vihlopnaya', title: 'Ремонт выхлопной системы' },
    { href: 'ohlazhdeniya', title: 'Ремонт системы охлаждения' },
    { href: 'toplivnaya', title: 'Ремонт топливной системы' },
    { href: 'otopleniya', title: 'Ремонт системы отопления' },
    { href: 'electrooborudovanie', title: 'Ремонт электрооборудования' },
    { href: 'electronnie', title: 'Ремонт электронных систем' }
  ];
</script>

<ul class="divide-y divide-thrid border border-thrid text-primary text-md">
  {#each links as { href, title }}
    <li class="p-4">
      <a
        href={`/remont/${href}`}
        class={`block ${activeLink === href ?
         'text-red-500 font-bold text-primary' : ''}`}
      >
        {title}
      </a>
    </li>
  {/each}
</ul>
