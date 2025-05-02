/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url }) => {
  const slug = url.pathname.split("/").pop();

  const titles = {
    "zamena-masla-v-dvs": "Замена масла в ДВС",
    "zamena-masla-v-kpp": "Замена масла в КПП",
    "zamena-masla-v-reduktore": "Замена масла в Редукторе",
    "zamena-tormoznih-kolodok": "Замена тормозных колодок",
    "zamena-tormoznih-diskov": "Замена тормозных дисков",
    "zamena-filtrov": "Замена фильтров",
    "zamena-svechei": "Замена свечей",
    "zamena-zhidkostei-sistem-ohlazhdeniya":
      "Замена жидкостей систем охлаждения",
    "razval-shozhdenie": "Развал-схождение",
  };

  return {
    title: titles[slug] ?? "ТО",
  };
};
