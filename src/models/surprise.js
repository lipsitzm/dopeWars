export class Surprise {
  threshold;
  serviceName;
  functionName;
  functionArguments;

  constructor(thresholdIn, serviceNameIn, functionNameIn, functionArgumentsIn) {
    this.threshold = thresholdIn;
    this.serviceName = serviceNameIn;
    this.functionName = functionNameIn;
    this.functionArguments = functionArgumentsIn;
  }

  get Threshold() {
    return this.threshold;
  }

  get ServiceName() {
    return this.serviceName;
  }

  get FunctionName() {
    return this.functionName;
  }

  get FunctionArguments() {
    return this.functionArguments;
  }
}
