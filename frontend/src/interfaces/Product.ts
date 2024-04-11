import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Meta, Published } from ".";
export interface ProductInfo extends Published {
    id: number;
    Price: number;
    title: string;
    content: BlocksContent;
    Image: {
        url: string;
      }; 
}

export interface ProductResponse {
    data: ProductInfo;
    meta: Meta
    };
    


 