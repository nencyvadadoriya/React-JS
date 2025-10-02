class ProductApiService {
  ProductUrl: string = "http://localhost:3000/products/";

  //fecth all  products
  async fetchAllProduct() {
    const res = await fetch(this.ProductUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    console.log(data);
    return data;
  }

  // add product
  async AddProductData(body: any) {
    const res = await fetch(this.ProductUrl, {
      method: "post",
      body: JSON.stringify(body)
    });

    return res.ok;
  }

  //delete prodcut
  async deleteProduct(id: string) {
    const res = await fetch(this.ProductUrl + id, {
      method: "delete"
    })
    return res.ok;
  }

  //fecth single product
  async fecthSingleProduct(id: string) {
    const res = await fetch(this.ProductUrl + id);
    const data = await res.json();
    return data;
  }


  //edit product
  async EditProduct(id: string, body: any) {
    const res = await fetch(this.ProductUrl + id, { method: "PATCH", body: JSON.stringify(body) })
    return res.ok;
  }  
}


export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: string;
  image: string;
  desc: string;
}

export const ProductApi = new ProductApiService();
