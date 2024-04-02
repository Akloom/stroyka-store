interface StrapiResponse<T> {
  data: T;
  meta: any
}

export type IDocsResponse = StrapiResponse<IDocs[]>

export interface IDocs {
  id: number;
  name: string;
  file: {
    url: string;
    ext: string;
    size: number;
  };
}