<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  // Прайс для раздела охлаждающей жидкости
  let priceListCoolant = [
    { name: "Замена охлаждающей жидкости (антифриза)", price: "от 2000 руб." },
    { name: "Промывка системы охлаждения от масла",     price: "от 4000 руб." },
    { name: "Мойка радиатора со снятием",               price: "от 5000 руб." },
    { name: "Комплексная диагностика автомобиля",       price: "от 1000 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-4 text-red-600">
    ЗАМЕНА ЖИДКОСТЕЙ В СИСТЕМЕ ОХЛАЖДЕНИЯ
  </h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Жидкость системы охлаждения (антифриз) поддерживает оптимальную температуру двигателя, предотвращая перегрев и коррозию внутренних деталей.
    Со временем антифриз теряет свои свойства, что может привести к серьёзным поломкам и дорогому ремонту.
  </p>

   <img 
      src="/images/zamena_zhidkostei_images/zamena_shidkostei.png" 
      alt="Свечи зажигания"
      class="w-40 sm:w-48 md:w-56 float-none md:float-left mr-0 md:mr-4 mb-3 md:mb-2 rounded shadow-md"
    />

 <!-- Когда необходима замена -->
<h2 class="font-semibold mt-4 mb-2">● Когда необходима замена жидкости</h2>
<ul class="list-disc pl-6 space-y-1">
  <li>
    <span style="color:#16a34a;">Изменение цвета.</span>
    Свежий антифриз обычно яркий (зелёный, красный, синий или жёлтый); тёмно‑коричневый или мутный цвет указывает на ржавчину
  </li>
  <li>
    <span style="color:#16a34a;">Масляные следы.</span>
    Пятна на радиаторе и/или в расширительном бачке — тревожный сигнал, жидкость требуется срочно заменить
  </li>
  <li>
    <span style="color:#16a34a;">Осадок.</span>
    Появляется при смешивании разных видов антифриза и свидетельствует о несовместимости составов
  </li>
  <li>
    <span style="color:#16a34a;">Хлопья и пена.</span>
    Явный показатель, что жидкость испортилась и не защищает систему от коррозии
  </li>
  <li>
    <span style="color:#16a34a;">Перегрев двигателя.</span>
    Стрелка температуры часто поднимается выше нормы — требуется замена жидкости и диагностика системы
  </li>
  <li>
    <span style="color:#16a34a;">Доливка другого стандарта.</span>
    Чтобы избежать проблем, следует использовать один класс охлаждающей жидкости без смешения
  </li>
</ul>


  <!-- Особенности замены -->
  <h2 class="font-semibold mt-4 mb-2">● Особенности замены жидкости</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Полный слив старой охлаждающей жидкости и промывка системы от загрязнений</li>
    <li>Использование качественных марок антифриза с нужными характеристиками и допусками</li>
    <li>Заправка правильного объёма и проверка системы на герметичность</li>
    <li>Диагностика термостата и водяного насоса для комплексного обслуживания</li>
  </ul>

  <!-- Призыв -->
  <p class="text-blue-600 font-semibold my-4">
    Своевременная замена охлаждающей жидкости защищает двигатель от перегрева и коррозии и увеличивает срок его службы.
    Запишитесь на обслуживание в техцентр АВТОГЕО — и будьте уверены в исправности системы охлаждения вашего автомобиля!
  </p>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 mb-4">
    <p class="mb-2">
      Чтобы записаться на замену охлаждающей жидкости, позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <p class="text-xs text-gray-500">
      □ Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </p>
  </div>

  <!-- Почему выбирают -->
  <h2 class="font-semibold mt-4 mb-2">● Почему выбирают техцентр АВТОГЕО</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Опытные специалисты, гарантирующие тщательную замену и проверку</li>
    <li>Используются только сертифицированные жидкости от проверенных производителей</li>
    <li>Обслуживаются любые марки и модели автомобилей</li>
    <li>Возможность комплексного техосмотра для предотвращения проблем</li>
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
      {#each priceListCoolant as item}
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
