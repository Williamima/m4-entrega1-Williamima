export interface IProduct {
  id: number;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ErrorMsg {
  error: string;
}
export interface SucessMsg {
  message: string;
}

export type ProductCreate = Omit<IProduct, "id" | "createdAt" | "updatedAt">;
export type ProductUpdate = Partial<ProductCreate>;

export interface IReference {
  createProduct(data: { name: string; price: number }): IProduct;

  getProducts(): IProduct[];

  getOneProduct(id: number): IProduct | undefined;

  updateProduct(
    id: number,
    data: { name: string; price: number }
  ): IProduct | undefined;

  deleteProduct(id: number): ErrorMsg | SucessMsg;
}
