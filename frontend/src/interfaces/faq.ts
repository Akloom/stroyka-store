interface StrapiResponse<T> {
  data: T;
  meta: any
}

export type IFaqResponse = StrapiResponse<IFaq[]>

export interface IFaq {
  id: number;
  question: string;
  answer: string;
}