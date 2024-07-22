export const defaultAnalysesGroup: AnalysesGroup[] = [
  {
    label: "Онкология",
    analyses: [
      {
        naming: "Гистология",
      },
      {
        naming: "Онкомаркеры",
      },
      {
        naming: "Цитология",
      },
    ],
  },
  {
    label: "Исследования крови",
    analyses: [
      {
        naming: "Клинические исследования",
      },
      {
        naming: "Биохимия",
      },
      {
        naming: "Иммунология",
      },
      {
        naming: "Гормоны",
      },
    ],
  },
  {
    label: "Исследования мочи",
    analyses: [
      {
        naming: "Биохимический анализ",
      },
      {
        naming: "Общий анализ мочи",
      },
      {
        naming: "Гормоны",
      },
    ],
  },
  {
    label: "Аллергии",
    analyses: [
      {
        naming: "Биохимический анализ",
      },
      {
        naming: "Общий анализ мочи",
      },
      {
        naming: "Гормоны",
      },
    ],
  },
];

interface Analysis {
  naming: string;
  link?: string;
}

export interface AnalysesGroup {
  label: string;
  analyses: Analysis[];
}
