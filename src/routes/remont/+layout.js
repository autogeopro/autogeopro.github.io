/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url }) => {
  const slug = url.pathname.split("/").pop();

  const titles = {
    dvigatel: "Ремонт двигателя",
    transmissiya: "Ремонт трансмиссии",
    hodovaya: "Ремонт ходовой части",
    tormoznaya: "Ремонт тормозной системы",
    vihlopnaya: "Ремонт выхлопной системы",
    ohlazhdeniya: "Ремонт системы охлаждения",
    toplivnaya: "Ремонт топливной системы",
    otopleniya: "Ремонт системы отопления",
    electrooborudovanie: "Ремонт электрооборудования",
    electronnie: "Ремонт электронных систем",
  };

  return {
    title: titles[slug] ?? "Ремонт",
  };
};
