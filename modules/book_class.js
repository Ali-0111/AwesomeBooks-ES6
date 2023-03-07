export class Book {
    KEY='data';
  
    constructor() {
      this.collection = this.collectionMethod();
    }
  
    collectionMethod() {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    }

  }
  