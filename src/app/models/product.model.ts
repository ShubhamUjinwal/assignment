export class Product {
  blend_name: string;
  id: number;
  intensifier: string;
  notes: string;
  origin: string;
  uid: string;
  variety: string;

  constructor(
    blend_name: string,
    id: number,
    intensifier: string,
    notes: string,
    origin: string,
    uid: string,
    variety: string) {
      this.blend_name = blend_name;
      this.id = id;
      this.intensifier = intensifier;
      this.notes = notes;
      this.origin = origin;
      this.uid = uid;
      this.variety = variety;
  }
}