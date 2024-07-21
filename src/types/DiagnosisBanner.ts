import { CallbackFunctionVariadicAnyReturn } from "./CallbackFunctionVariadicAnyReturn";
import endoscopy from "../assets/endoscopy.svg";
import functionalDiagnosis from "../assets/functional_diagnosis.svg";

export const defaultDiagnosesBanners: DiagnosisBanner[] = [
  {
    title: "Эндоскопия",
    image: endoscopy,
    description:
      "Благодаря современному видеооборудованию эндоскопия дает возможность врачу провести тщательный визуальный осмотр слизистых оболочек внутренних органов пациента.",
    color: "#3C79FF",
    buttons: [
      { title: "Гастроскопия", width: "119px" },
      { title: "Колоноскопия", width: "132px" },
      { title: "Бронхоскопия", width: "146px" },
      { title: "Капсульная эндоскопия", width: "217px" },
    ],
  },
  {
    title: "Функциональная диагностика",
    image: functionalDiagnosis,
    description:
      "Методы функциональной диагностики направлены на определение функционального состояния жизненно важных органов и систем человека",
    color:
      "linear-gradient(0deg, rgba(161, 161, 161, 0.44) 0%, rgba(161, 161, 161, 0.44) 100%), #f00",
    textColor: "#e45b5b",
    buttons: [
      { title: "ЭКГ", width: "79px" },
      { title: "ЭЭГ", width: "79px" },
      { title: "ЭХОКГ", width: "98px" },
      { title: "Холтер", width: "98px" },
      { title: "ЭХО-ЭГ", width: "98px" },
      { title: "Тредмил-тест", width: "123px" },
      { title: "Велоэргометрия", width: "148px" },
      { title: "РЭГ", width: "80px" },
      { title: "КТГ", width: "80px" },
    ],
  },
];

export interface DiagnosisBanner {
  title: string;
  image: string;
  description: string;
  color: string;
  textColor?: string;
  buttons: Button[];
}

interface Button {
  title: string;
  width: string;
  onClick?: CallbackFunctionVariadicAnyReturn;
}
