<script>
  let contacts = { phone: "+7 (999) 135-35-35" };
  let priceList = [
    { name: "Замена масла в мосту", price: "от 1350 руб." },
    { name: "Комплексная диагностика автомобиля", price: "от 1000 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-4 text-red-600">
    ЗАМЕНА МАСЛА В РЕДУКТОРЕ
  </h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Редуктор отвечает за передачу крутящего момента от двигателя к колёсам и работает в условиях повышенных нагрузок.
    Масло в редукторе смазывает шестерни и подшипники, предотвращая износ и перегрев.
  </p>

<!-- Контейнер “картинка слева — текст справа” -->
<div class="flex flex-col md:flex-row items-start gap-6">
  <!-- Картинка слева -->
  <img
    src="/images/zamena_masla_v_reductore_images/reductor.png"
    alt="Замена масла в редукторе"
    class="w-full md:w-1/3 rounded shadow-md flex-shrink-0"
    loading="lazy"
  >

  <!-- Текст справа -->
  <div class="text-sm md:text-base text-gray-900 leading-relaxed md:flex-1">
    <h2 class="font-semibold mt-0 mb-2">● Признак необходимости замены масла в редукторе</h2>
    <ul class="list-disc pl-6 space-y-1">
      <li>Шумы и вибрации</li>
      <li>Износ подшипников или зубцов шестерён. Шум может быть слышен при разгоне, торможении или на поворотах</li>
      <li>Некорректная установка механизма</li>
      <li>Утечки масла</li>
      <li>Износ уплотнителя</li>
      <li>Засор дренажного отверстия</li>
      <li>Слабая затяжка крепёжных болтов</li>
    </ul>
  </div>
</div>

  <!-- Польза -->
  <h2 class="font-semibold mt-4 mb-2">● Своевременная замена масла в редукторе позволит</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Обеспечить надёжную смазку рабочих элементов</li>
    <li>Предотвратить коррозию и накопление металлической стружки в редукторе</li>
    <li>Снизить износ и продлить срок службы редуктора</li>
    <li>Поддержать оптимальную температуру работы системы</li>
  </ul>

  <!-- Интервал -->
  <h2 class="font-semibold mt-4 mb-2">● Когда требуется замена масла в редукторе</h2>
  <p class="mb-4">
    Как правило, масло в редукторе меняют каждые <b>40–80 тыс. км</b> в зависимости от рекомендаций производителя и условий эксплуатации.
    При интенсивном движении по бездорожью или в тяжёлых условиях интервал стоит сократить.
  </p>

  <!-- Призыв -->
  <p class="text-blue-600 font-semibold mb-4">
    Регулярная замена масла в редукторе помогает избежать серьёзных поломок и сохранить комфортное управление автомобилем.
    Обращение в техцентр АВТОГЕО обеспечивает своевременное обслуживание!
  </p>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 mb-4">
    <p class="mb-2">
      Чтобы записаться на замену масла в редукторе, позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <p class="text-xs text-gray-500">
      □ Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </p>
  </div>

  <!-- Этапы -->
  <h2 class="font-semibold mt-4 mb-2">● Как проводится замена масла в редукторе в техцентре АВТОГЕО</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Сливается отработанное масло</li>
    <li>Проверяется состояние масла и визуально осматривается редуктор</li>
    <li>Очищается сливное отверстие и при необходимости меняется маслоналивная трубка</li>
    <li>Заливается масло рекомендованного типа и марки</li>
    <li>Проверяется герметичность и уровень масла после замены</li>
  </ul>

  <p class="mt-2">
    При замене масла в редукторе применяются только качественные масла, которые обеспечивают максимальную защиту и стабильную работу редуктора вашего автомобиля.
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
      {#each priceList as item}
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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером-приёмщиком.<br>
    **Цены действительны при условии нормального состояния резьбовых крепёжных соединений (гайки, болты, винты и прочее нормально откручиваются без дополнительного нагрева, применения специальных жидкостей и средств).
  </p>
</div>
