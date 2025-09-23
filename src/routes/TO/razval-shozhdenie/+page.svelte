<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  // Прайс для развал-схождения
  let priceListAlignment = [
    { name: "Сход-развал передней оси",                         price: "3500 руб." },
    { name: "Сход-развал двух осей (легковые/кроссоверы)",      price: "4000 руб." },
    { name: "Сход-развал двух осей (внедорожники)",             price: "4700 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">РАЗВАЛ-СХОЖДЕНИЕ</h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Регулировка углов установки колёс (развал-схождение) — важная процедура, влияющая на безопасность, комфорт, управляемость и расход топлива.
    Правильные параметры обеспечивают устойчивость автомобиля, снижают вибрации и предотвращают преждевременный износ шин.
  </p>

  <div class="grid gap-6 mt-8">

    <!-- Признаки (красный блок с картинкой слева) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <!-- Картинка -->
        <img 
          src="/images/Diagnostika/diagnostika_podveski.png" 
          alt="Диагностика подвески" 
          class="w-full md:w-1/3 rounded shadow-md flex-shrink-0"
          loading="lazy"
        />
        <!-- Текст -->
        <div class="md:flex-1">
          <h2 class="text-lg font-bold text-red-600 mb-3">⚠️ Признаки необходимости развала-схождения</h2>

          <h3 class="font-semibold mb-1">Визуальные признаки</h3>
          <ul class="list-disc pl-6 space-y-2 mb-3">
            <li><span class="font-semibold text-green-600">Неравномерный износ шин.</span> Износ внешней кромки — положительный развал, внутренней — отрицательный. Влияет на сцепление и расход топлива.</li>
            <li><span class="font-semibold text-green-600">Смещение руля.</span> Руль наклонён при движении прямо — нарушение углов схождения.</li>
          </ul>

          <h3 class="font-semibold mb-1">Функциональные признаки</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li><span class="font-semibold text-green-600">Увод автомобиля.</span> Машину тянет в сторону на ровной дороге.</li>
            <li><span class="font-semibold text-green-600">Шумы и вибрации.</span> Посторонние звуки и потряхивания указывают на проблемы с геометрией.</li>
            <li><span class="font-semibold text-green-600">Руль не возвращается в ноль.</span> После поворота требуется усилие для возврата.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Что входит (жёлтый блок) -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">⏱ Что входит в процедуру</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Диагностика и замер текущих углов установки колёс</li>
        <li>Регулировка развала, схождения и кастера по нормам производителя</li>
        <li>Проверка состояния подвески и рулевого управления</li>
        <li>Тест-драйв для контроля результата</li>
      </ul>
    </div>

    <!-- Преимущества (зелёный блок) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">✅ Преимущества обращения в АВТОГЕО</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Современное оборудование для точной настройки</li>
        <li>Квалифицированные специалисты с опытом</li>
        <li>Быстрая и качественная работа для любых марок</li>
      </ul>
    </div>
  </div>

  <!-- Призыв -->
  <p class="text-blue-600 font-semibold my-4">
    Если заметили хотя бы один признак — запишитесь на диагностику и развал-схождение в техцентр АВТОГЕО.
    Это гарантия безопасности, долгого ресурса шин и комфортной езды.
  </p>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 mb-6">
    <p class="mb-2">
      Чтобы записаться на развал-схождение, звоните 
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
      {#each priceListAlignment as item}
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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно.<br>
    **Цены действительны при нормальном состоянии резьбовых соединений.
  </p>
</div>
