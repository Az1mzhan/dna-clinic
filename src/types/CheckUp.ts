import checkUpOne from "../assets/check_up_1.svg";
import checkUpTwo from "../assets/check_up_2.svg";
import checkUpThree from "../assets/check_up_3.svg";

export const defaultCheckUps: CheckUp[] = [
  {
    type: CheckUpType.ADULTS,
    icon: checkUpOne,
  },
  {
    type: CheckUpType.KIDS,
    icon: checkUpTwo,
  },
  {
    type: CheckUpType.COMPLEX_OBSERVATIONS,
    icon: checkUpThree,
  },
];

export enum CheckUpType {
  ADULTS = "Check-Up для взрослых",
  KIDS = "Check-Up для детей",
  COMPLEX_OBSERVATIONS = "Комплексные обследования",
}

export interface CheckUp {
  type: CheckUpType;
  icon: string;
}
