import {
  ErrorMsg,
  IProduct,
  IReference,
  ProductUpdate,
  SucessMsg,
} from "./interfaces";

class ProductList implements IReference {
  private productList: IProduct[] = [];
  private id: number = 1;

  private verifyId(id: number): number {
    return this.productList.findIndex(
      (product) => product.id === id
    );
  }

  createProduct(data: { name: string; price: number }): IProduct {
    const newProduct: IProduct = {
      id: this.id++,
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.productList.push(newProduct);

    return newProduct;
  }

  getProducts(): IProduct[] {
    return this.productList;
  }

  getOneProduct(id: number): IProduct | undefined {
    const productId = this.verifyId(id)

    if (productId === -1) {
      return undefined;
    }

    return this.productList[productId];
  }

  updateProduct(id: number, data: ProductUpdate): IProduct | undefined {
    const productId = this.verifyId(id)

    if (productId === -1) {
      return undefined;
    }

    const update = {
      ...this.productList[productId],
      ...data,
      updatedAt: new Date(),
    };

    this.productList.splice(productId, 1, update);

    return update;
  }

  deleteProduct(id: number): ErrorMsg | SucessMsg {
    const productId = this.verifyId(id)

    if (productId === -1) {
      return { error: "Produto não encontrado." };
    }

    this.productList.splice(productId, 1);
    return { message: "Product sucessfully deleted." };
  }
}

export const productList = new ProductList();
