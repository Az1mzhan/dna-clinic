import flask from "../assets/flask.svg";
import flatBottomedFlask from "../assets/flat_bottomed_flask.svg";
import results from "../assets/results.svg";
import cost from "../assets/cost.svg";

export const defaultAnalysesLinks: AnalysisLink[] = [
  {
    title: "Сдача анализов на дому",
    icon: flask,
    bgColor: "#e45b5b",
  },
  {
    title: "Подготовка к сдаче анализов",
    icon: flatBottomedFlask,
    bgColor: "#f9d100",
  },
  {
    title: "Как получить результаты",
    icon: results,
    bgColor: "#ea9023",
  },
  {
    title: "Цены",
    icon: cost,
    bgColor: "#00ae5b",
  },
  {
    title: "Калькулятор анализов",
    description: "Быстрый поиск анализов и цен",
    bgColor: "#ea9023",
    isDetails: true,
  },
  {
    title: "Комплексные анализы",
    description: "Комплексная лабораторная диагностика",
    bgColor: "#00a355",
    isDetails: true,
  },
];

export interface AnalysisLink {
  title: string;
  description?: string;
  icon?: string;
  bgColor: string;
  isDetails?: boolean;
}
