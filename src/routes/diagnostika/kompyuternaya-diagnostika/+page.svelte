<script>
  let contacts = { phone: "+7 (999) 135-35-35" };

  let priceList = [
    { name: "Компьютерная диагностика", price: "от 1350 руб." },
    { name: "Комплексная диагностика", price: "от 1000 руб." }
  ];
</script>

<div  id="diagnostics" class="max-w-[1000px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">

  <h1  class="text-2xl font-bold text-center mb-8 text-red-600">
    КОМПЬЮТЕРНАЯ ДИАГНОСТИКА
  </h1>

  <p class="mb-8">
    Компьютерная диагностика – это современный метод выявления неисправностей автомобиля с помощью специализированного
    оборудования и программного обеспечения. Она позволяет быстро и точно определить причины сбоев в работе двигателя,
    электронных систем, подвески, тормозов и других узлов.
  </p>

  <!-- Преимущества -->
  <section class="bg-gradient-to-r from-green-50 to-white border-l-4 border-green-500 rounded-lg shadow p-6 mb-8">
    <h2 class="text-lg font-bold text-green-600 mb-4">✅ Преимущества компьютерной диагностики</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Оперативное выявление ошибок и проблем без разборки деталей</li>
      <li>Точная диагностика электронных систем и датчиков</li>
      <li>Возможность программного сброса ошибок и адаптации систем</li>
      <li>Предотвращение серьезных поломок и экономия на ремонте</li>
    </ul>
  </section>

  <!-- Картинка -->
  <div class="mb-8">
    <img
      src="/images/Diagnostika/pc_diagnostik.png"
      alt="Компьютерная диагностика автомобиля"
      class="w-full rounded-lg shadow"
      loading="lazy"
    />
  </div>

  <!-- Как проходит -->
  <section class="bg-gradient-to-r from-blue-50 to-white border-l-4 border-blue-500 rounded-lg shadow p-6 mb-8">
    <h2 class="text-lg font-bold text-blue-600 mb-4">⚙️ Как проходит диагностика</h2>
    <ul class="list-disc pl-6 space-y-2">
      <li>Подключение диагностического сканера к бортовому компьютеру автомобиля</li>
      <li>Считывание и анализ кодов ошибок систем управления</li>
      <li>Проверка параметров работы двигателя, трансмиссии, ABS, подушек безопасности и других модулей</li>
      <li>Выдача детального отчета с рекомендациями по ремонту</li>
    </ul>
  </section>

  <!-- Почему важно -->
  <section class="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-lg shadow p-6 mb-8">
    <h2 class="text-lg font-bold text-red-600 mb-4">❗ Почему важно делать диагностику вовремя</h2>
    <p>
      Регулярная компьютерная диагностика помогает обнаружить скрытые проблемы на ранней стадии, повысить безопасность
      и продлить срок службы автомобиля. Обратитесь в наш автосервис, где опытные мастера проводят полный комплекс
      диагностики с гарантией качества и точности результатов.
    </p>
  </section>

  <!-- Контакты -->
  <div class="bg-gray-100 border rounded-md p-4 my-6">
    <p class="mb-2">
      Чтобы записаться на компьютерную диагностику позвоните по телефону
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <label class="flex items-center gap-2 cursor-pointer">
    <input id="consentCheckbox" type="checkbox" class="w-4 h-4">
    <span id="consentText" class="text-xs text-gray-500">
    Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </span>
  </label>
  </div>

  <!-- Таблица -->
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
    *Стоимость работ, не указанных в прайсе, оговаривается с мастером-приемщиком.<br />
    **Цены действительны при нормальном состоянии резьбовых соединений.
  </p>
</div>
