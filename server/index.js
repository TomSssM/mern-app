import { join } from '../shared';

const a = Promise.resolve();
const b = new Map();

class Babel extends Map {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
}

console.log(a);
console.log(b);
console.log(new Babel());
console.log(join(['a', 'b', 'c'], ' '));
