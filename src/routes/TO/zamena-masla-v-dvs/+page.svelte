<script>
  let contacts = {
    phone: "+7 (999) 135-35-35"
  };

  let priceList = [
    { name: "Замена масла в двигателе", price: "от 1350 руб." },
    { name: "Замена масла в двигателе с промывкой", price: "от 1800 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <h1 class="text-xl font-bold text-center mb-6 text-red-600">
    ЗАМЕНА МАСЛА В ДВС
  </h1>

  <p class="mb-4">
    Замена масла в двигателе внутреннего сгорания (ДВС) — одна из ключевых процедур, 
    обеспечивающих долгий срок службы и надежную работу автомобиля. Со временем моторное масло 
    теряет свои эксплуатационные свойства: смазывающие и охлаждающие функции снижаются, 
    в масле накапливаются загрязнения и продукты износа двигателя.
  </p>

  <img 
    src="/images/zamena_masla_v_dvs_images/maslo.png"
    alt="Моторное масло"
    class="mx-auto mb-6 rounded shadow-md w-full"
  />

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



  <div class="grid gap-6 mt-8">

    <!-- Признаки -->
    <div class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-red-600 mb-3">
        ⚠️ Признаки необходимости замены масла
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><span class="font-semibold">Изменение цвета и консистенции.</span> 
            Масло стало тёмным или непрозрачным.</li>
        <li><span class="font-semibold">Изменение вязкости.</span> 
            Капля на щупе падает не так, как должна.</li>
        <li><span class="font-semibold">Напоминания в авто.</span> 
            Система сообщает о необходимости замены.</li>
      </ul>
    </div>

    <!-- Что даст замена -->
    <div class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-green-600 mb-3">
        ✅ Что даёт своевременная замена масла
      </h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Предотвращает износ деталей двигателя</li>
        <li>Снижает трение и перегрев</li>
        <li>Улучшает работу и экономичность мотора</li>
        <li>Защищает от коррозии и отложений</li>
      </ul>
    </div>

    <!-- Периодичность -->
    <div class="bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 rounded-lg shadow p-6">
      <h2 class="text-lg font-bold text-yellow-600 mb-3">
        ⏱ Периодичность замены
      </h2>
      <p>
        Обычно рекомендуется менять масло каждые <b>7–15 тыс. км</b> или раз в год. 
        В сложных условиях (городской режим, холодный климат, короткие поездки) интервал сокращается.
      </p>
    </div>

    <!-- Как проводится -->
<div class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6">
  <h2 class="text-lg font-bold text-blue-600 mb-3">
    ⚙️ Как проводится замена в техцентре АВТОГЕО
  </h2>
  <ul class="list-disc pl-6 space-y-2">
    <li>Сливается (или откачивается) старое масло</li>
    <li>Меняется масляный фильтр</li>
    <li>Заливается свежее масло по регламенту</li>
    <li>Проверяется уровень и герметичность</li>
    <li>Используются сертифицированные масла и детали</li>
  </ul>
</div>


  </div>

  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на замену масла позвоните по телефону 
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <label class="flex items-center gap-2 cursor-pointer">
    <input id="consentCheckbox" type="checkbox" class="w-4 h-4">
    <span id="consentText" class="text-xs text-gray-500">
    Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </span>
  </label>

  </div>

<script>
  const checkbox = document.getElementById('consentCheckbox');
  const text = document.getElementById('consentText');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      text.classList.add('opacity-0', 'translate-y-4', 'h-0', 'overflow-hidden');
    } else {
      text.classList.remove('opacity-0', 'translate-y-4', 'h-0', 'overflow-hidden');
    }
  });
</script>

<style>
  /* чтобы работали translate и opacity в Tailwind */
  #consentText {
    transition: all 0.5s ease-in-out;
  }
</style>


  
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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером-приемщиком.<br />
    **Цены действительны при нормальном состоянии резьбовых соединений.
  </p>
</div>
