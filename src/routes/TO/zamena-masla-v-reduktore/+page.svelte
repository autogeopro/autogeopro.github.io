<script>
  let contacts = { phone: "+7 (999) 135-35-35" };
  let priceList = [
    { name: "Замена масла в мосту", price: "от 1350 руб." },
    { name: "Комплексная диагностика автомобиля", price: "от 1000 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА МАСЛА В РЕДУКТОРЕ
  </h1>

  <p class="mb-4">
    Редуктор отвечает за передачу крутящего момента от двигателя к колёсам и работает в условиях повышенных нагрузок.
    Масло смазывает шестерни и подшипники, предотвращая износ и перегрев. 
  </p>

  <div class="grid gap-6 mt-8">

    <!-- Признаки (красный блок) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <div class="flex flex-col md:flex-row items-start gap-6">
        <img
          src="/images/zamena_masla_v_reductore_images/reductor.png"
          alt="Редуктор"
          class="w-full md:w-1/3 rounded shadow-md flex-shrink-0"
        />
        <div class="md:flex-1">
          <h2 class="text-lg font-bold text-red-600 mb-3">
            ⚠️ Признаки необходимости замены масла в редукторе
          </h2>
          <ul class="list-disc pl-6 space-y-2">
            <li>Шумы и вибрации при разгоне, торможении или поворотах</li>
            <li>Износ подшипников или зубцов шестерён</li>
            <li>Некорректная установка механизма</li>
            <li>Утечки масла</li>
            <li>Износ уплотнителей</li>
            <li>Засор дренажного отверстия</li>
            <li>Слабая затяжка крепёжных болтов</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Польза (зелёный блок) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">
        ✅ Своевременная замена позволит
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Обеспечить надёжную смазку рабочих элементов</li>
        <li>Предотвратить коррозию и накопление металлической стружки</li>
        <li>Снизить износ и продлить срок службы редуктора</li>
        <li>Поддержать оптимальную температуру работы системы</li>
      </ul>
    </div>

    <!-- Интервал (жёлтый блок) -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">
        ⏱ Когда требуется замена
      </h2>
      <p>
        Масло в редукторе рекомендуется менять каждые <b>40–80 тыс. км</b> в зависимости от условий эксплуатации. 
        При интенсивной езде по бездорожью или тяжёлых режимах интервал сокращается.
      </p>
    </div>

    <!-- Процесс (синий блок) -->
    <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-blue-600 mb-3">
        ⚙️ Как проводится замена в техцентре АВТОГЕО
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Сливается отработанное масло</li>
        <li>Проверяется состояние масла и визуально осматривается редуктор</li>
        <li>Очищается сливное отверстие, при необходимости меняется маслоналивная трубка</li>
        <li>Заливается масло рекомендованного типа и марки</li>
        <li>Проверяется герметичность и уровень масла после замены</li>
      </ul>
      <p class="mt-2">
        Используются только сертифицированные масла, которые обеспечивают максимальную защиту и стабильную работу редуктора.
      </p>
    </div>

  </div>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену масла в редукторе, позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <p class="text-xs text-gray-500">
      □ Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </p>
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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером-приёмщиком.<br>
    **Цены действительны при условии нормального состояния резьбовых крепёжных соединений.
  </p>
</div>
