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
  <h1 class="text-xl font-bold text-center mb-4 text-red-600">
    ЗАМЕНА ТОРМОЗНЫХ ДИСКОВ
  </h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Тормозные диски напрямую влияют на эффективность торможения и безопасность автомобиля. 
    Со временем диски изнашиваются, деформируются или покрываются трещинами, что снижает тормозные характеристики и может привести к аварийным ситуациям.
  </p>


<img 
    src="/images/zamena_tormozov/tormoza.png"
    alt="Тормозные колодки"
    class="mx-auto mb-6 rounded shadow-md w-full"
  />

  <!-- Признаки -->
  <h2 class="font-semibold mt-4 mb-2">● Признаки необходимости замены тормозных дисков</h2>

  <h3 class="font-medium mb-1">Визуальные признаки</h3>
  <ul class="list-disc pl-6 space-y-1 mb-3">
    <li>Глубокая коррозия, трещины, сколы на рабочей поверхности.</li>
    <li>Ржавчина, затронувшая вентиляционные прорези или значительную толщу металла.</li>
    <li>Искривление/перекос диска, следы перегрева (синение).</li>
  </ul>

  <h3 class="font-medium mb-1">Звуковые признаки</h3>
  <ul class="list-disc pl-6 space-y-1 mb-3">
    <li>Скрип, скрежет, визг вследствие вибрации между диском и колодкой.</li>
    <li>Стук при увеличении скорости (возможный признак трещины).</li>
  </ul>

  <h3 class="font-medium mb-1">Ощущения при торможении</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Вибрация руля или педали, особенно при интенсивном торможении.</li>
    <li>Рывки и толчки из‑за неравномерного износа диска.</li>
    <li>Изменение реакции педали: требуется сильнее утапливать для «схвата» колодок.</li>
  </ul>

  <!-- Когда менять -->
  <h2 class="font-semibold mt-4 mb-2">● Когда нужна замена дисков</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Толщина диска ниже минимально допустимой по спецификации.</li>
    <li>Наличие деформаций (волнистость), трещин, следов перегрева.</li>
    <li>Появление устойчивых вибраций или пульсаций при торможении.</li>
  </ul>

  <!-- Польза своевременной замены -->
  <h2 class="font-semibold mt-4 mb-2">● Что даёт своевременная замена</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Восстановление равномерного и эффективного торможения.</li>
    <li>Снижение износа тормозных колодок.</li>
    <li>Отсутствие вибраций и посторонних шумов при торможении.</li>
    <li>Повышение общей безопасности и комфорта вождения.</li>
  </ul>

  <!-- CTA -->
  <p class="text-blue-600 font-semibold my-4">
    Доверьте замену тормозных дисков специалистам техцентра АВТОГЕО — это вклад в безопасность на дороге!
  </p>

  <div class="bg-gray-100 border rounded-md p-4 mb-4">
    <p class="mb-2">
      Чтобы записаться на замену тормозных дисков, позвоните по телефону 
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <p class="text-xs text-gray-500">
      □ Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </p>
  </div>

  <!-- Этапы работ -->
  <h2 class="font-semibold mt-4 mb-2">● Как проходит замена тормозных дисков в техцентре АВТОГЕО</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Снятие тормозных суппортов и дисков.</li>
    <li>Проверка состояния всей тормозной системы.</li>
    <li>Установка новых дисков с соблюдением технических норм.</li>
    <li>Балансировка и регулировка тормозной системы.</li>
    <li>Тестирование работы тормозов после замены.</li>
  </ul>

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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером‑приёмщиком.<br>
    **Цены действительны при условии нормального состояния резьбовых крепёжных соединений 
    (гайки, болты, винты и прочее нормально откручиваются без дополнительного нагрева, применения специальных жидкостей и средств).
  </p>
</div>
