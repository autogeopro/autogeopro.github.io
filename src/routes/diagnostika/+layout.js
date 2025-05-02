/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url }) => {
  const slug = url.pathname.split("/").pop();

  const titles = {
    "kompyuternaya-diagnostika": "Компьютерная диагностика",
    "diagnostika-dvigatelya": "Диагностика двигателя",
    "diagnostika-podveski-i-razval-shozhdeniya":
      "Диагностика подвески и развал-схождения",
    "kompleksnaya-diagnostika": "Комплексная диагностика",
  };

  return {
    title: titles[slug] ?? "Диагностика",
  };
};
