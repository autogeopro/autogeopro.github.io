<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  let priceListFilters = [
    { name: "Замена воздушного фильтра",  price: "от 1000 руб." },
    { name: "Замена топливного фильтра",  price: "от 1350 руб." },
    { name: "Замена салонного фильтра",   price: "от 1350 руб." },
    { name: "Комплексная диагностика авто", price: "от 1000 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА ФИЛЬТРОВ
  </h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Регулярная замена фильтров — простой и эффективный способ поддерживать автомобиль в отличном состоянии и обеспечить безопасность на дороге.
  </p>

  <!-- Виды фильтров (фиолетовый блок) -->
  <div class="bg-gradient-to-r from-fuchsia-50 to-white border-l-4 border-fuchsia-500 rounded-lg shadow p-6 mb-6">
    <img 
      src="/images/zamena_filtrov_images/filtr.png" 
      alt="Фильтр" 
      class="w-40 sm:w-48 md:w-56 float-none md:float-left mr-0 md:mr-4 mb-3 md:mb-2 rounded shadow-md"
    />
    <h2 class="font-semibold mt-1 mb-2 text-fuchsia-700">● Виды фильтров</h2>
    <ul class="space-y-1 pl-1">
      <li><span class="font-semibold">Топливный фильтр</span> — задерживает загрязнения из бензина/дизеля, защищает форсунки и элементы топливной системы.</li>
      <li><span class="font-semibold">Масляный фильтр</span> — очищает моторное масло от продуктов износа и грязи, продлевая срок службы двигателя.</li>
      <li><span class="font-semibold">Салонный фильтр</span> — улучшает качество воздуха в салоне, задерживая пыль, пыльцу и аллергены.</li>
      <li><span class="font-semibold">Воздушный фильтр</span> — очищает воздух, поступающий в двигатель, влияет на тягу и расход топлива.</li>
    </ul>
    <div class="clear-both"></div>
  </div>

  <div class="grid gap-6 mt-6">

    <!-- Признаки (красный блок) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-red-600 mb-3">⚠️ Признаки необходимости замены фильтров</h2>

      <h3 class="font-semibold mb-2">Воздушный фильтр</h3>
      <ul class="pl-6 list-disc space-y-1 mb-3">
        <li><span class="font-semibold">Снижение мощности/тяги.</span> Ограничение притока воздуха ухудшает разгон.</li>
        <li><span class="font-semibold">Рост расхода топлива.</span> Менее эффективное сгорание смеси.</li>
        <li><span class="font-semibold">Чёрный дым из выхлопа.</span> Признак неполного сгорания.</li>
        <li><span class="font-semibold">Шум при работе двигателя.</span> Двигатель «задыхается» от нехватки воздуха.</li>
        <li><span class="font-semibold">Визуально грязный/повреждённый элемент.</span></li>
      </ul>

      <h3 class="font-semibold mb-2">Топливный фильтр</h3>
      <ul class="pl-6 list-disc space-y-1 mb-3">
        <li><span class="font-semibold">Потеря мощности, провалы при разгоне.</span></li>
        <li><span class="font-semibold">Нестабильные холостые.</span> Неравномерная подача топлива.</li>
        <li><span class="font-semibold">Проблемы с запуском.</span> Двигатель заводится не сразу или отказывается запускаться.</li>
        <li><span class="font-semibold">Шумная работа топливного насоса.</span> Особенно при низком уровне топлива.</li>
        <li><span class="font-semibold">Повышенный расход топлива.</span></li>
      </ul>

      <h3 class="font-semibold mb-2">Масляный фильтр</h3>
      <ul class="pl-6 list-disc space-y-1 mb-3">
        <li><span class="font-semibold">Перегрев двигателя.</span> Ухудшение циркуляции масла.</li>
        <li><span class="font-semibold">Сторонние звуки в ГРМ/верхней части.</span> Стук клапанов, «пение» гидрокомпенсаторов.</li>
        <li><span class="font-semibold">Тёмное масло вскоре после замены.</span> Фильтр не справляется.</li>
        <li><span class="font-semibold">Падение давления масла.</span> Загорается индикатор.</li>
      </ul>

      <h3 class="font-semibold mb-2">Салонный фильтр</h3>
      <ul class="pl-6 list-disc space-y-1">
        <li><span class="font-semibold">Слабый поток воздуха.</span> Падает эффективность кондиционера/отопителя.</li>
        <li><span class="font-semibold">Повышенная влажность, запотевание стёкол.</span></li>
        <li><span class="font-semibold">Аллергические реакции у пассажиров.</span></li>
        <li><span class="font-semibold">Сильно загрязнён визуально.</span></li>
      </ul>
    </div>

    <!-- Когда менять (жёлтый блок) -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">⏱ Когда менять</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><span class="font-semibold">Воздушный:</span> каждые 10–20 тыс. км или раз в год, чаще при пыльных условиях.</li>
        <li><span class="font-semibold">Масляный:</span> при каждой замене моторного масла по регламенту.</li>
        <li><span class="font-semibold">Топливный:</span> обычно 30–60 тыс. км, зависит от типа двигателя и качества топлива.</li>
        <li><span class="font-semibold">Салонный:</span> 10–15 тыс. км или раз в год, чаще при интенсивной городской эксплуатации.</li>
      </ul>
      <p class="text-xs text-gray-600 mt-2">Фактические интервалы смотрите по руководству производителя для вашей модели.</p>
    </div>

    <!-- Зачем менять (зелёный блок) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">✅ Зачем менять вовремя</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Стабильная тяга и экономичный расход</li>
        <li>Меньше нагрузки на ДВС и топливную систему</li>
        <li>Чище воздух в салоне, меньше аллергенов</li>
        <li>Продление ресурса агрегатов и датчиков</li>
      </ul>
    </div>

    <!-- Как проводим (синий блок) -->
    <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-blue-600 mb-3">⚙️ Как проводится замена в техцентре АВТОГЕО</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Диагностика состояния фильтрующих элементов и сопряжённых систем</li>
        <li>Подбор фильтров по VIN и спецификациям производителя</li>
        <li>Аккуратная замена с проверкой уплотнений и крепежа</li>
        <li>Сброс сервисных интервалов (если предусмотрено)</li>
        <li>Контрольный осмотр и рекомендации по дальнейшему обслуживанию</li>
      </ul>
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену фильтров, позвоните по телефону 
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
  <table class="w-full border mt-2 text-sm">
    <thead>
      <tr class="bg-gray-200">
        <th class="p-2 border">Наименование работ*</th>
        <th class="p-2 border">Стоимость</th>
      </tr>
    </thead>
    <tbody>
      {#each priceListFilters as item}
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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером-приёмщиком.<br>
    **Цены действительны при условии нормального состояния резьбовых крепёжных соединений.
  </p>
</div>
