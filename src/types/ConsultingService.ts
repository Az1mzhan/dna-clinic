export const defaultConsultingService: ConsultingService = {
  label: "Прием (осмотр, консультация) врача-трансфузиолога первичный",
  price: 2500,
};

export interface ConsultingService {
  label: string;
  price: number;
}
