export default class Estimate {
  id: number;
  name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
