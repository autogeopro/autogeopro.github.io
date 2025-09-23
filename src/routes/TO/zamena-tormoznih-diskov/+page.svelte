<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  let priceListDiscs = [
    { name: "Замена переднего тормозного диска", price: "от 1350 руб." },
    { name: "Замена заднего тормозного диска",   price: "от 1350 руб." },
    { name: "Обслуживание тормозных суппортов",  price: "от 600 руб."  },
    { name: "Чистка тормозной скобы и направляющих", price: "от 400 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ
  </h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Тормозные диски напрямую влияют на эффективность торможения и безопасность автомобиля. 
    Со временем они изнашиваются, деформируются или покрываются трещинами, что снижает характеристики и может привести к аварийным ситуациям.
  </p>

  <!-- Картинка СВЕРХУ -->
  <img 
    src="/images/zamena_tormozov/tormoza.png"
    alt="Тормозные диски"
    class="mx-auto mb-6 rounded shadow-md w-full max-w-[800px]"
    loading="lazy"
  />

  <div class="grid gap-6 mt-4">
    <!-- Признаки (красный блок) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-red-600 mb-3">⚠️ Признаки необходимости замены</h2>
      <h3 class="font-semibold mb-1">Визуальные признаки</h3>
      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Глубокая коррозия, трещины, сколы на рабочей поверхности</li>
        <li>Ржавчина во вентиляционных прорезях или значительная толщина металла поражена</li>
        <li>Искривление/перекос диска, следы перегрева (синение)</li>
      </ul>
      <h3 class="font-semibold mb-1">Звуковые признаки</h3>
      <ul class="list-disc pl-6 space-y-1 mb-3">
        <li>Скрип, скрежет, визг из-за вибрации между диском и колодкой</li>
        <li>Стук при увеличении скорости (возможный признак трещины)</li>
      </ul>
      <h3 class="font-semibold mb-1">Ощущения при торможении</h3>
      <ul class="list-disc pl-6 space-y-1">
        <li>Вибрация руля или педали при интенсивном торможении</li>
        <li>Рывки и толчки из-за неравномерного износа</li>
        <li>Педаль требует большего усилия для «схвата»</li>
      </ul>
    </div>

    <!-- Когда менять (жёлтый блок) -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">⏱ Когда нужна замена</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Толщина диска ниже минимально допустимой по спецификации</li>
        <li>Есть деформации (волнистость), трещины, следы перегрева</li>
        <li>Появление устойчивых вибраций или пульсаций при торможении</li>
      </ul>
    </div>

    <!-- Польза (зелёный блок) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">✅ Что даёт своевременная замена</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Восстановление равномерного и эффективного торможения</li>
        <li>Снижение износа колодок</li>
        <li>Отсутствие вибраций и посторонних шумов</li>
        <li>Повышение общей безопасности и комфорта</li>
      </ul>
    </div>

    <!-- Процесс (синий блок) -->
    <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-blue-600 mb-3">⚙️ Как проходит замена в техцентре АВТОГЕО</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Снятие тормозных суппортов и изношенных дисков</li>
        <li>Проверка состояния всей системы</li>
        <li>Установка новых дисков с соблюдением регламента</li>
        <li>Балансировка и регулировка тормозной системы</li>
        <li>Тестирование работы тормозов после замены</li>
      </ul>
    </div>
  </div>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену тормозных дисков, позвоните по телефону 
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
      {#each priceListDiscs as item}
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
    **Цены действительны при условии нормального состояния резьбовых соединений.
  </p>
</div>
