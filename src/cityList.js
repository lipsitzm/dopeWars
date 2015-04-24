import {City} from './city';

export class CityList{

  constructor(){
    this.Cities = [];
    let cityInfos = [
      {
        Name: "Dublin",
        AvailableThreshold: .6
      },
      {
        Name: "London",
        AvailableThreshold: .8
      },
      {
        Name: "Paris",
        AvailableThreshold: .9
      },
      {
        Name: "Amsterdam",
        AvailableThreshold: .1
      },
      {
        Name: "Munich",
        AvailableThreshold: .6
      },
      {
        Name: "Prague",
        AvailableThreshold: .4
      },
      {
        Name: "Rome",
        AvailableThreshold: .5
      },
      {
        Name: "Ibiza",
        AvailableThreshold: 0
      }
    ];
    this.Cities = cityInfos.map(cityInfo => {
      let city = new City();
      city.Name = cityInfo.Name;
      city.AvailableThreshold = cityInfo.AvailableThreshold;
      return city;
    });
  }

  move(){
    alert('lame');
  }


  Update() {
    for(let city of this.Cities) {
      city.Update();
    }
  }
}
