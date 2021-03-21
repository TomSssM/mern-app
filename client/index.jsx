import { MESSAGE } from '../config';
import { join } from '../shared';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['>', MESSAGE], ' ');

  return element;
}

document.body.appendChild(component());
