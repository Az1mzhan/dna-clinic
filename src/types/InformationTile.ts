import { SxProps } from "@mui/material";

export const defaultInformationTiles: InformationTile[] = [
  {
    title: "Дистанционные консультации",
    descriptions: [
      "Пациентам ДНК Клиники доступны дистанционные консультации со своим лечащим врачом. Этой услугой могут воспользоваться пациенты, которые уже были в клинике на первичном приеме и дальнейшее общение предпочитают вести в дистанционном формате.",
      "Не выходя из дома, вы можете удаленно получить полноценную консультацию и ответы на все свои вопросы, а также расшифровку результатов анализов, контроль за ходом лечения и корректировку схемы терапии при необходимости.",
    ],
    isDetails: true,
    width: "540px",
    titleSxProperties: {
      fontWeight: 600,
      lineHeight: "34px",
    },
    tileSxProperties: {
      height: "353px",
      borderRadius: "30px",
    },
    descriptionContainerSxProperties: {
      gap: "18px",
    },
    descriptionSxProperties: {
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "18px",
    },
  },
  {
    title: "Вызов врача на дом",
    descriptions: [
      "Если состояние вашего здоровья не позволяет посетить клинику, вы можете вызвать врача на дом. При необходимости на дом приедет не только терапевт, но и узкий специалист, в услугах которого вы нуждаетесь.",
      "Возможно также взятие анализов и проведение диагностических обследований и различных медицинских процедур на дому.",
    ],
    isDetails: true,
    width: "540px",
    titleSxProperties: {
      fontWeight: 600,
      lineHeight: "34px",
    },
    tileSxProperties: {
      height: "353px",
      borderRadius: "30px",
    },
    descriptionContainerSxProperties: {
      gap: "18px",
    },
    descriptionSxProperties: {
      fontWeight: 600,
      fontSize: "15px",
      lineHeight: "18px",
    },
  },
  {
    title: "Круглосуточная запись на прием",
    descriptions: [
      "Мы ценим ваше время - ко всем специалистам есть предварительная запись. Звонки принимаются круглосуточно.",
      "Так же записаться на прием ко врачу вы можете воспользовавшись специальной формой online записи на нашем сайте.",
    ],
    isDetails: false,
    width: "1124px",
    titleSxProperties: {
      fontWeight: "bold",
      lineHeight: "61px",
    },
    tileSxProperties: {
      height: "188px",
      borderRadius: "18px",
    },
    descriptionContainerSxProperties: {
      gap: "18px",
    },
    descriptionSxProperties: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
];

export interface InformationTile {
  title: string;
  descriptions: string[];
  isDetails?: boolean;
  width?: string;
  titleSxProperties?: SxProps;
  tileSxProperties?: SxProps;
  descriptionContainerSxProperties?: SxProps;
  descriptionSxProperties?: SxProps;
  height?: string;
  borderRadius?: string;
}
