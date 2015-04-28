export class CityInfo {
  name;
  availabilityThreshold;

  constructor(nameIn, avThresh) {
    this.name = nameIn;
    this.availabilityThreshold = avThresh;
  }

  get Name() {
    return this.name;
  }

  get AvailabilityThreshold() {
    return this.availabilityThreshold;
  }
}
