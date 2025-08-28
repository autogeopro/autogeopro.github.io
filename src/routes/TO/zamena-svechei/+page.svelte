<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  // Прайс для блока «Свечи»
  let priceListPlugs = [
    { name: "Замена свечей зажигания (к‑т)",                           price: "от 1350 руб." },
    { name: "Замена свечей зажигания (со снятием впускного коллектора)", price: "от 3000 руб." },
    { name: "Компьютерная диагностика (считывание кодов ошибок)",       price: "от 1350 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-4 text-red-600">ЗАМЕНА СВЕЧЕЙ</h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Свечи зажигания играют важную роль в работе бензинового двигателя: они воспламеняют топливно‑воздушную смесь,
    влияя на мощность, экономичность и экологичность работы автомобиля.
  </p>
 <img 
      src="/images/zamena_svechei_images/svetchi.png" 
      alt="Свечи зажигания"
      class="w-40 sm:w-48 md:w-56 float-none md:float-left mr-0 md:mr-4 mb-3 md:mb-2 rounded shadow-md"
    />
  <!-- Признаки (зелёным только первые слова) -->
  <h2 class="font-semibold mt-4 mb-2">● Признаки необходимости замены свечей</h2>
  <ul class="list-disc pl-6 space-y-2">
    <li>
      <span style="color:#16a34a;">Трудности с запуском мотора.</span>
      Мотор заводится после нескольких попыток или отказывается запускаться вовсе
    </li>
    <li>
      <span style="color:#16a34a;">Отсутствие быстрой реакции на педаль газа.</span>
      Скорость набирается плохо, обороты двигателя не поднимаются
    </li>
    <li>
      <span style="color:#16a34a;">Пропуски зажигания.</span>
      Нестабильные холостые, рывки в движении, посторонние звуки
    </li>
    <li>
      <span style="color:#16a34a;">Увеличенный расход топлива.</span>
      Неэффективное сгорание смеси повышает потребление
    </li>
    <li>
      <span style="color:#16a34a;">Чёрный дым из выхлопной трубы.</span>
      Несгоревшее топливо попадает в выпуск
    </li>
    <li>
      <span style="color:#16a34a;">Внешний вид свечей.</span>
      Плотные сажевые отложения, масляные подтёки, износ электродов; свинцовые отложения на изоляторе (зеленоватый/коричневатый оттенок)
    </li>
  </ul>

  <!-- Виды -->
  <h2 class="font-semibold mt-6 mb-2">● Виды свечей и их особенности</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Медные — бюджетный вариант, требуют более частой замены</li>
    <li>Иридиевые и платиновые — более долговечны, стабильная искра и экономичный расход топлива</li>
    <li>Исполнения с улучшенным теплоотводом — под разные условия эксплуатации</li>
  </ul>

  <!-- Польза -->
  <h2 class="font-semibold mt-6 mb-2">● Зачем менять вовремя</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Стабильная работа двигателя: устойчивые холостые, ровная тяга</li>
    <li>Экономия топлива: полнее сгорание смеси, меньше перерасход</li>
    <li>Меньше выбросов: чище выхлоп, меньшая нагрузка на катализатор</li>
    <li>Продление ресурса: меньше нагрузки на катушки/провода и защита ДВС</li>
  </ul>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену свечей зажигания, позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <p class="text-xs text-gray-500">
      □ Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </p>
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
      {#each priceListPlugs as item}
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
    **Цены действительны при условии нормального состояния резьбовых крепежных соединений
    (гайки, болты, винты и прочее нормально откручиваются без дополнительного нагрева).
  </p>
</div>
