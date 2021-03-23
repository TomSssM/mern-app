import { MESSAGE } from '../config';
import { join } from '../shared';
import { Button } from './Button';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['>', MESSAGE], ' ');
  element.innerHTML += Button();

  return element;
}

document.body.appendChild(component());
