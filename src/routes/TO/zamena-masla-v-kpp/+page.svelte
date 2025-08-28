<script>
  let contacts = {
    phone: "+7 (999) 135-35-35"
  };

  let priceList = [
    { name: "Замена масла в МКПП", price: "от 1350 руб." },
    { name: "Замена масла в АКПП", price: "от 1350 руб." }
  ];
</script>

<div class="max-w-[900px] mx-auto text-sm md:text-base text-gray-900 leading-relaxed p-6">
  <h1 class="text-xl font-bold text-center mb-4 text-red-600">
    ЗАМЕНА МАСЛА В КПП
  </h1>
  
  <p class="mb-4">
    Масло в коробке передач выполняет важную роль — обеспечивает смазку деталей, охлаждение и защиту от износа. 
    Со временем масло теряет свои свойства, загрязняется микрочастицами и теряет вязкость, что может привести 
    к повышенному трению, перегреву и поломкам КПП (АКПП).
  </p>
  <img src="/images/zamena_masla_v_kpp_images/kpp.png" 
  alt="Замена масла в КПП" 
  class="mx-auto mb-4 rounded shadow-md">

  <h2 class="font-semibold mt-4 mb-2">● Причины необходимости замены масла в КПП (АКПП)</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li><span class="text-green-600 font-semibold">В механической коробке передач</span> со временем накапливаются продукты износа (стружка, бронза, латунь и др.), ухудшающие свойства масла.</li>
    <li><span class="text-green-600 font-semibold">Ухудшается охлаждение.</span> Старое масло теряет способность эффективно охлаждать детали при интенсивном движении</li>
    <li><span class="text-green-600 font-semibold">Попадание пыли и воды.</span>Они могут проникать в коробку передач через специальный сапун, например, при езде по бездорожью</li>


    <li><span class="text-black-600 font-semibold">В автоматической коробке передач (АКПП)</span> 
      <div class="max-w-[900px] mx-auto p-6 flex flex-col md:flex-row items-start gap-6">
 
  <img src="/images/zamena_masla_v_kpp_images/korobka_avtomat.png" 
       alt="Изображение АКПП" 
       class="w-full md:w-1/3 rounded shadow-md">

  
  <div class="text-sm md:text-base text-gray-900 leading-relaxed">
    <p>
      Находится много пар трения, которые со временем изнашиваются. 
      Загрязнённое масло приводит к быстрому износу подшипников, шестерней, фрикционов и других элементов. 
      Засорение фильтра. Продукты износа забивают фильтрующий элемент, что снижает давление жидкости и нарушает работу механизмов. 
      Искажение показаний датчиков. Стружка, налипшая на датчики скорости вращения валов, может вызывать сбои в системе управления АКПП.
    </p>
  </div>
</div>
</li>
  </ul>

  <h2 class="font-semibold mt-4 mb-2">● Своевременная замена масла в коробке передач</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Предотвратит износ шестерней и подшипников</li>
    <li>Снизит риск перегрева и заклинивания</li>
    <li>Обеспечит плавное переключение передач</li>
    <li>Продлит срок службы трансмиссии</li>
  </ul>

  <h2 class="font-semibold mt-4 mb-2">● Когда проводить замену масла</h2>
  <p class="mb-4">
    Обычно рекомендуется менять масло в КПП каждые <b>40–60 тыс. км</b>. 
    В тяжёлых условиях эксплуатации интервал сокращается.
  </p>

  <p class="text-blue-600 font-semibold mb-4">
    Доверьте замену масла в коробке передач специалистам техцентра АВТОГЕО – 
    и трансмиссия вашего автомобиля будет работать без сбоев долгие годы!
  </p>

  <div class="bg-gray-100 border rounded-md p-4 mb-4">
    <p class="mb-2">
      Чтобы записаться на замену масла в КПП (АКПП) позвоните по телефону 
      <b class="text-blue-600">{contacts.phone}</b> или закажите обратный звонок.
    </p>
    <p class="text-xs text-gray-500">
      □ Выражаю Согласие на обработку персональных данных в соответствии с условиями Политики конфиденциальности
    </p>
  </div>

  <h2 class="font-semibold mt-4 mb-2">● Как проходит замена масла в коробке передач в техцентре АВТОГЕО</h2>
  <ul class="list-disc pl-6 space-y-1">
    <li>Сливается старое масло из КПП</li>
    <li>Меняется фильтр (если предусмотрен)</li>
    <li>Заливается качественное масло по спецификации производителя</li>
    <li>Проверяется уровень и герметичность</li>
    <li>Используются только сертифицированные масла</li>
  </ul>

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
    *Стоимость работ, не указанных в прайсе, оговариваются отдельно с мастером-приемщиком.<br />
    **Цены действительны при условии нормального состояния резьбовых соединений.
  </p>
</div>
