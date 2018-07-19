
export class Produit {

  public name: string;
  public detail: string;
  public photos: string[];
  public price: string;

  constructor(name: string, detail: string, photos: string[], price: string) {
    this.name = name;
    this.detail = detail;
    this.photos = photos;
    this.price = price;
  }

}
