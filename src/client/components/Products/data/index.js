import cable from './assets/cable.jpg';
import hardDrive from './assets/hard-drive.jpg';
import keyboard from './assets/keyboard.jpg';
import monitor from './assets/monitor.jpg';

const data = [
  {
    id: 123,
    name: 'Жесткие диски',
    image: hardDrive,
  },
  {
    id: 456,
    name: 'Мониторы',
    image: monitor,
  },
  {
    id: 789,
    name: 'Клавиатуры',
    image: keyboard,
  },
  {
    id: 112,
    name: 'Кабеля',
    position: ['top', 'left'],
    image: cable,
  },
];

export default data;
