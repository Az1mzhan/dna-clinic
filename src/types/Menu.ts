const defaultMenuListItem: MenuListItem[] = [
  {
    label: "Аллерголог-иммунолог",
  },
  {
    label: "Анестизиолог",
  },
  {
    label: "Аритмолог",
  },
  {
    label: "Артролог",
  },
  {
    label: "Бариатрический хирург",
  },
  {
    label: "Врач функциональной диагностики",
  },
  {
    label: "Врач превентивной медицины",
  },
  {
    label: "Вызов врача на дом",
  },
  {
    label: "Гастроэнтеролог",
  },
  {
    label: "Гематолог",
  },
  {
    label: "Гепатолог",
  },
  {
    label: "Гинеколог",
  },
  {
    label: "Дерматолог-венеролог",
  },
  {
    label: "Диетолог",
  },
  {
    label: "Инфекционист",
  },
  {
    label: "Кардиолог",
  },
  {
    label: "Косметолог",
  },
  {
    label: "Липидолог",
  },
  {
    label: "Логопед-дефектолог",
  },
  {
    label: "Маммолог",
  },
  {
    label: "Мануальный терапевт",
  },
  {
    label: "Миколог",
  },
  {
    label: "Невролог",
  },
  {
    label: "Нейрохирург",
  },
  {
    label: "Нефролог",
  },
  {
    label: "Нутрициолог",
  },
  {
    label: "Озонотерапевт",
  },
  {
    label: "Онкогинеколог",
  },
  {
    label: "Онколог",
  },
  {
    label: "Онкоуролог",
  },
  {
    label: "Остеопат",
  },
  {
    label: "Отоларинголог",
  },
  {
    label: "Офтальмолог",
  },
  {
    label: "Педиатр",
  },
  {
    label: "Пластический хирург",
  },
  {
    label: "Подолог",
  },
  {
    label: "Проктолог",
  },
  {
    label: "Психиатр",
  },
  {
    label: "Психолог",
  },
  {
    label: "Психотерапевт",
  },
  {
    label: "Пульмонолог",
  },
  {
    label: "Сексолог",
  },
  {
    label: "Сомнолог",
  },
  {
    label: "Сосудистый хирург",
  },
  {
    label: "Терапевт",
  },
  {
    label: "Торакальный хирург",
  },
  {
    label: "Травматолог-ортопед",
  },
  {
    label: "Трихолог",
  },
  {
    label: "УУЗИ-диагностика",
  },
  {
    label: "Уролог-андролог",
  },
  {
    label: "Физиотерапевт",
  },
  {
    label: "Флеболог",
  },
  {
    label: "Химиотерапевт",
  },
  {
    label: "Хирург",
  },
  {
    label: "Центр лечения болевого синдрома",
  },
  {
    label: "Центр психологии, психотерапии и логопедии",
  },
  {
    label: "Эндокринолог",
  },
  {
    label: "Эндоскопия",
  },
];

export const defaultMenus: Menu[] = [
  {
    mode: MenuMode.ADULTS,
    list: defaultMenuListItem,
  },
  {
    mode: MenuMode.KIDS,
    list: defaultMenuListItem,
  },
];

export enum MenuMode {
  ADULTS = "Взрослые врачи",
  KIDS = "Детские врачи",
}

interface MenuListItem {
  label: string;
  link?: string;
}

export interface Menu {
  mode: MenuMode;
  list: MenuListItem[];
}