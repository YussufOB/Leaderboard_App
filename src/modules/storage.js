export default class Storage {
  constructor() {
    this.store = [];
  }

  static setItems(obj) {
    localStorage.setItem('LeaderBoard', JSON.stringify(obj));
  }

  static getItems() {
    this.store = JSON.parse(localStorage.getItem('LeaderBoard') || '[]');
    return this.store;
  }
}