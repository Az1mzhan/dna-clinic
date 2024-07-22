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
    bgColor: "#F9D100",
  },
  {
    title: "Как получить результаты",
    icon: results,
    bgColor: "#EA9023",
  },
  {
    title: "Цены",
    icon: cost,
    bgColor: "#00AE5B",
  },
];

export interface AnalysisLink {
  title: string;
  icon: string;
  bgColor: string;
}
