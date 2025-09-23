<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  let priceListCoolant = [
    { name: "Замена охлаждающей жидкости (антифриза)", price: "от 2000 руб." },
    { name: "Промывка системы охлаждения от масла",     price: "от 4000 руб." },
    { name: "Мойка радиатора со снятием",               price: "от 5000 руб." },
    { name: "Комплексная диагностика автомобиля",       price: "от 1000 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <!-- Заголовок -->
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА ЖИДКОСТЕЙ В СИСТЕМЕ ОХЛАЖДЕНИЯ
  </h1>

  <!-- Вводный абзац -->
  <p class="mb-4">
    Охлаждающая жидкость (антифриз) поддерживает оптимальную температуру двигателя и предотвращает коррозию. 
    Со временем она теряет свойства, что может привести к перегреву и дорогому ремонту.
  </p>

  <!-- Картинка сверху -->
  <img 
    src="/images/zamena_zhidkostei_images/zamena_shidkostei.png" 
    alt="Замена охлаждающей жидкости"
    class="mx-auto mb-6 rounded shadow-md w-full max-w-[800px]"
    loading="lazy"
  />

  <div class="grid gap-6 mt-4">
    <!-- Когда нужна замена (красный блок) -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-red-600 mb-3">⚠️ Когда необходима замена жидкости</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><span class="font-semibold">Изменение цвета.</span> Мутный или коричневый оттенок указывает на коррозию</li>
        <li><span class="font-semibold">Масляные следы.</span> Пятна в бачке или на радиаторе — тревожный сигнал</li>
        <li><span class="font-semibold">Осадок.</span> Возникает при смешивании разных антифризов</li>
        <li><span class="font-semibold">Хлопья и пена.</span> Жидкость потеряла защитные свойства</li>
        <li><span class="font-semibold">Перегрев двигателя.</span> Стрелка температуры часто выше нормы</li>
        <li><span class="font-semibold">Доливка другого стандарта.</span> Смешение классов недопустимо</li>
      </ul>
    </div>

    <!-- Особенности замены (синий блок) -->
    <div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-blue-600 mb-3">⚙️ Особенности замены жидкости</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Полный слив старого антифриза и промывка системы</li>
        <li>Использование сертифицированных жидкостей с нужными допусками</li>
        <li>Заправка правильного объёма и проверка герметичности</li>
        <li>Диагностика термостата и насоса охлаждения</li>
      </ul>
    </div>

    <!-- Почему выбирают (зелёный блок) -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">✅ Почему выбирают техцентр АВТОГЕО</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Опытные специалисты с гарантией качества</li>
        <li>Только проверенные жидкости от производителей</li>
        <li>Обслуживание любых марок и моделей авто</li>
        <li>Комплексный осмотр для предотвращения проблем</li>
      </ul>
    </div>
  </div>

  <!-- Призыв -->
  <p class="text-blue-600 font-semibold my-4">
    Своевременная замена антифриза защищает двигатель от перегрева и продлевает его срок службы. 
    Запишитесь в техцентр АВТОГЕО — и система охлаждения вашего авто будет работать без сбоев!
  </p>

  <!-- CTA -->
  <div class="bg-gray-100 border rounded-md p-4 mb-6">
    <p class="mb-2">
      Чтобы записаться на замену охлаждающей жидкости, позвоните по телефону 
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
      {#each priceListCoolant as item}
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
