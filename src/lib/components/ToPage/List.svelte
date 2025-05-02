<script>
    export let activeLink = '';
  
    const links = [
      { href: 'zamena-masla-v-dvs', title: 'Замена масла в ДВС' },
      { href: 'zamena-masla-v-kpp', title: 'Замена масла в КПП' },
      { href: 'zamena-masla-v-reduktore', title: 'Замена масла в Редукторе' },
      { href: 'zamena-tormoznih-kolodok', title: 'Замена тормозных колодок' },
      { href: 'zamena-tormoznih-diskov', title: 'Замена тормозных дисков' },
      { href: 'zamena-filtrov', title: 'Замена фильтров' },
      { href: 'zamena-svechei', title: 'Замена свечей' },
      { href: 'zamena-zhidkostei-sistem-ohlazhdeniya', title: 'Замена жидкостей систем охлаждения' },
      { href: 'razval-shozhdenie', title: 'Развал-схождение' }
    ];
  </script>
  
  <ul class="divide-y divide-thrid border border-thrid text-primary text-md">
    {#each links as { href, title }}
      <li class="p-4">
        <a
          href={`/TO/${href}`}
          class={`block ${activeLink === href ?
           'font-bold text-secondary' : ''}`}
        >
          {title}
        </a>
      </li>
    {/each}
  </ul>
  