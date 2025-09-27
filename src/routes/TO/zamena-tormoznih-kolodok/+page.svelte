<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  let priceListPads = [
    { name: "Замена передних тормозных колодок", price: "от 1620 руб." },
    { name: "Замена задних тормозных колодок",  price: "от 1620 руб." },
    { name: "Прокачка тормозной системы",       price: "от 2000 руб." },
    { name: "Регулировка троса ручного тормоза",price: "от 1000 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА ТОРМОЗНЫХ КОЛОДОК
  </h1>

  <p class="mb-4">
    Тормозные колодки — одна из ключевых частей тормозной системы, обеспечивающая эффективное замедление и остановку автомобиля; со временем колодки изнашиваются и требуют своевременной замены.
  </p>

   <!-- Прайс -->
  <table class="w-full border mt-6 text-sm">
    <thead>
      <tr class="bg-gray-200">
        <th class="p-2 border">Наименование работ*</th>
        <th class="p-2 border">Стоимость</th>
      </tr>
    </thead>
    <tbody>
      {#each priceListPads as item}
        <tr>
          <td class="border p-2">{item.name}</td>
          <td class="border p-2">{item.price}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="grid gap-6 mt-8">

    <!-- Признаки (красный блок с картинкой слева) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <img 
          src="/images/tormoznie_kolodki_images/tormozn.png" 
          alt="Тормозные колодки" 
          class="w-full md:w-1/3 rounded shadow-md flex-shrink-0"
        />
        <div class="md:flex-1">
          <h2 class="text-lg font-bold text-red-600 mb-3">
            ⚠️ Признаки, указывающие на необходимость замены
          </h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Характерный звук при торможении: скрип, скрежет, стук (сколы и трещины на фрикционных накладках).</li>
            <li>Некорректная работа тормозной системы: слишком резкое или, наоборот, затяжное торможение.</li>
            <li>Пыль с частицами металлической стружки на колёсных дисках — признак сильного износа колодок.</li>
            <li>Увеличение тормозного пути по сравнению с паспортным значением.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Когда менять (жёлтый блок) -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">
        ⏱ Когда необходима замена колодок
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Толщина накладок износилась до 2–3 мм (минимальные значения).</li>
        <li>Появились скрежет или свист при торможении.</li>
        <li>Педаль стала менее чувствительной или автомобиль тянет в сторону.</li>
        <li>Сработали индикаторы износа колодок на панели приборов или в системе ABS.</li>
      </ul>
    </div>

    <!-- Польза (зелёный блок) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">
        ✅ Вовремя заменённые колодки
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Обеспечат надёжное торможение и сократят тормозной путь.</li>
        <li>Снизят риск аварийных ситуаций, связанных с потерей эффективности тормозов.</li>
        <li>Устранят шумы и вибрации при торможении.</li>
        <li>Предотвратят повреждение тормозных дисков и других компонентов.</li>
      </ul>
    </div>

    <!-- Процесс (синий блок) -->
    <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-blue-600 mb-3">
        ⚙️ Как проходит замена в техцентре АВТОГЕО
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Снятие тормозных суппортов.</li>
        <li>Осмотр состояния тормозных дисков и других элементов.</li>
        <li>Установка новых оригинальных или сертифицированных колодок.</li>
        <li>Проверка и регулировка тормозной системы после установки.</li>
        <li>Контроль качества работы.</li>
      </ul>
    </div>

  </div>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену тормозных колодок, позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <label class="flex items-center gap-2 cursor-pointer">
    <input id="consentCheckbox" type="checkbox" class="w-4 h-4">
    <span id="consentText" class="text-xs text-gray-500">
    Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </span>
  </label>
  </div>

 

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
    **Цены действительны при условии нормального состояния резьбовых крепёжных соединений (гайки, болты, винты и прочее нормально откручиваются без дополнительного нагрева).
  </p>
</div>
