import {City} from './city';

export class CityList{

  constructor(){
    this.Cities = [];
    let cityNames = ["Dublin", "London", "Paris", "Amsterdam", "Munich", "Prague", "Rome", "Ibiza"];
    this.Cities = cityNames.map(cityName => {
      let city = new City();
      city.Name = cityName;
      return city;
    });
  }

  Update() {
    for(let city of this.Cities) {
      city.Update();
    }
  }
}
