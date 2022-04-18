import { makeAutoObservable } from 'mobx';

class store {
  constructor() {
    this._carInfo = [];
    makeAutoObservable(this);
  }

  setInfoCar(carInfo) {
    this._carInfo.push(carInfo);
  }

  get carInfo() {
    return this._carInfo;
  }

  deleteCar(entity) {
    const found = this._carInfo.find((item) => item.id === entity.id);
    if (found) this._carInfo = this._carInfo.filter((item) => item.id !== entity.id);
  }
}

export default new store();
