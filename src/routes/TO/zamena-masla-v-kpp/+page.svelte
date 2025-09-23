<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  let priceList = [
    { name: "Замена масла в МКПП", price: "от 1350 руб." },
    { name: "Замена масла в АКПП", price: "от 1350 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА МАСЛА В КПП
  </h1>

  <p class="mb-4">
    Масло в коробке передач обеспечивает смазку, охлаждение и защиту от износа. Со временем оно загрязняется и теряет вязкость,
    что ведёт к повышенному трению, перегреву и преждевременным поломкам КПП/АКПП.
  </p>

  <img
    src="/images/zamena_masla_v_kpp_images/kpp.png"
    alt="Замена масла в КПП"
    class="mx-auto mb-6 rounded shadow-md w-full"
  />

  <div class="grid gap-6 mt-8">

    <!-- Причины (красный) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-red-600 mb-3">
        ⚠️ Причины необходимости замены масла в КПП (АКПП)
      </h2>

      <!-- МКПП -->
      <h3 class="font-semibold mb-2">МКПП</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li><span class="font-semibold">Накопление продуктов износа.</span> Металлическая стружка и частицы бронзы/латуни ухудшают смазку и теплоотвод.</li>
        <li><span class="font-semibold">Падение теплоёмкости.</span> Старое масло хуже охлаждает при интенсивном движении.</li>
        <li><span class="font-semibold">Попадание влаги и пыли.</span> Через сапун при бездорожье внутрь может попасть вода и абразив.</li>
      </ul>

      <!-- АКПП (ряд с изображением) -->
      <div class="mt-5 flex flex-col md:flex-row items-start gap-4">
        <img
          src="/images/zamena_masla_v_kpp_images/korobka_avtomat.png"
          alt="АКПП"
          class="w-full md:w-1/3 rounded shadow-md"
        />
        <div class="text-sm md:text-base leading-relaxed">
          <h3 class="font-semibold mb-2">АКПП</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><span class="font-semibold">Много пар трения.</span> Загрязнённое масло ускоряет износ подшипников, шестерён, фрикционов.</li>
            <li><span class="font-semibold">Засорение фильтра.</span> Падает давление жидкости, нарушается работа гидроблока.</li>
            <li><span class="font-semibold">Сбои в работе датчиков.</span> Металлическая пыль на датчиках скорости валов даёт ошибки управления.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Польза (зелёный) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">
        ✅ Что даёт своевременная замена масла
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Снижает износ шестерён и подшипников</li>
        <li>Уменьшает риск перегрева и заклинивания</li>
        <li>Обеспечивает плавные и корректные переключения</li>
        <li>Продлевает срок службы трансмиссии</li>
      </ul>
    </div>

    <!-- Интервалы (жёлтый) -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">
        ⏱ Когда проводить замену
      </h2>
      <p>
        Рекомендуемый пробег до замены масла в коробке передач обычно <b>40–60 тыс. км</b>. В тяжёлых условиях эксплуатации
        (пробки, буксировка, бездорожье, резкие перепады температур) интервал следует сократить.
      </p>
    </div>

    <!-- Процесс (синий) -->
    <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-blue-600 mb-3">
        ⚙️ Как проходит замена в техцентре АВТОГЕО
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Слив старого масла (или откачка при регламенте производителя)</li>
        <li>Замена фильтра при наличии конструктивной возможности</li>
        <li>Заправка масла, соответствующего спецификациям конкретной КПП/АКПП</li>
        <li>Проверка уровня, герметичности и адаптация (для ряда АКПП)</li>
        <li>Используются только сертифицированные масла и комплектующие</li>
      </ul>
    </div>

  </div>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену масла в КПП (АКПП) позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
   <label class="flex items-center gap-2 cursor-pointer">
    <input id="consentCheckbox" type="checkbox" class="w-4 h-4">
    <span id="consentText" class="text-xs text-gray-500">
    Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </span>
  </label>
  </div>

  <!-- Прайс -->
  <table class="w-full border mt-6 text-sm">
    <thead>
      <tr class="bg-gray-200">
        <th class="p-2 border">Наименование работ*</th>
        <th class="p-2 border">Стоимость</th>
      </tr>
    </thead>
    <tbody>
      {#each priceList as item}
        <tr>
          <td class="border p-2">{item.name}</td>
          <td class="border p-2">{item.price}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <!-- Логотипы -->
  <div class="flex flex-wrap justify-center items-center gap-8 mt-8">
    <img src="/images/logo_auto/audi.png" alt="Audi" class="h-10 object-contain">
    <img src="/images/logo_auto/bmw.png" alt="BMW" class="h-10 object-contain">
    <img src="/images/logo_auto/ford.png" alt="Ford" class="h-10 object-contain">
    <img src="/images/logo_auto/hundai.png" alt="Hyundai" class="h-10 object-contain">
    <img src="/images/logo_auto/kia.png" alt="Kia" class="h-10 object-contain">
    <img src="/images/logo_auto/mazda.png" alt="Mazda" class="h-10 object-contain">
    <img src="/images/logo_auto/mercedes.png" alt="Mercedes" class="h-10 object-contain">
    <img src="/images/logo_auto/nissan.png" alt="Nissan" class="h-10 object-contain">
    <img src="/images/logo_auto/peugeot.png" alt="Peugeot" class="h-10 object-contain">
    <img src="/images/logo_auto/renault.png" alt="Renault" class="h-10 object-contain">
    <img src="/images/logo_auto/tyiota.png" alt="Toyota" class="h-10 object-contain">
  </div>

  <p class="text-xs text-gray-600 mt-2">
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером-приёмщиком.<br />
    **Цены действительны при условии нормального состояния резьбовых соединений.
  </p>
</div>
