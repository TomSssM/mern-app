import cable from './assets/cable.jpg';
import hardDrive from './assets/hard-drive.jpg';
import keyboard from './assets/keyboard.jpg';
import monitor from './assets/monitor.jpg';
import ssdExternal from './assets/ssd.webp';
import ssd from './assets/ssdCover.webp';
import hddInternal from './assets/hddInternal.jpg';
import hddExternal from './assets/hddExternal.jpg';
import hdd from './assets/hdd.jpg';
import hddSiliconPowerYellow from './assets/hddSiliconPowerYellow.jpg';
import hddToshibaGray from './assets/hddToshibaGray.jpg';
import wirelessKeyboard from './assets/wirelessKeyboard.webp';
import screen from './assets/screen.jpg';

const data = [
  {
    id: '123',
    name: 'Жесткие диски',
    image: hardDrive,
    categories: [
      {
        id: '113',
        name: 'SSD',
        image: ssd,
        imageProps: {
          size: 'full',
        },
        products: [
          {
            id: '1131',
            name: '500 ГБ SSD диск Samsung 870 EVO (MZ-77E500BW)',
            image: ssdExternal,
            params: [
              {
                name: 'Объем',
                value: '500 ГБ',
              },
              {
                name: 'Интерфейс диска',
                value: 'SATA3 6.0 Гбит/с',
              },
              {
                name: 'Макс. скорость чтения, Мб/с',
                value: 560,
              },
              {
                name: 'Макс. скорость записи, Мб/с',
                value: 530,
              },
            ],
            price: [
              {
                currency: 'RUB',
                value: '5990',
              },
              {
                currency: 'BYN',
                value: '204',
              },
            ],
          },
        ],
      },
      {
        id: '117',
        name: 'HDD',
        image: hdd,
        imageProps: {
          size: 'full',
        },
        categories: [
          {
            id: '1771',
            name: 'Внешние',
            image: hddExternal,
            products: [
              {
                id: '17711',
                name: 'Внешний HDD Silicon Power Armor A10 500 ГБ',
                image: hddSiliconPowerYellow,
                params: [
                  {
                    name: 'Емкость',
                    value: '500 ГБ',
                  },
                  {
                    name: 'Макс. скорость интерфейса',
                    value: '60 МБ/с',
                  },
                  {
                    name: 'Вес',
                    value: '200 г',
                  },
                ],
                price: [
                  {
                    currency: 'RUB',
                    value: '170000',
                  },
                  {
                    currency: 'BYN',
                    value: '5788',
                  },
                ],
              },
              {
                id: '17712',
                name:
                  'Внешний накопитель Toshiba Canvio Premium HDTW220EB3AA 2TB',
                image: hddToshibaGray,
                params: [
                  {
                    name: 'Объём',
                    value: '2 ТБ',
                  },
                  {
                    name: 'Питание',
                    value: 'USB',
                  },
                  {
                    name: 'Материал корпуса',
                    value: 'металл',
                  },
                  {
                    name: 'Разъем подключения к компьютеру',
                    value:
                      'USB 3.2 Gen1 Type-A (5 Гбит/с), USB 3.2 Gen1 Type-C (5 Гбит/с)',
                  },
                  {
                    name: 'Цвет',
                    value: 'серый',
                  },
                  {
                    name: 'Длина',
                    value: '109 мм',
                  },
                  {
                    name: 'Ширина',
                    value: '78 мм',
                  },
                ],
                price: [
                  {
                    currency: 'RUB',
                    value: '169000',
                  },
                  {
                    currency: 'BYN',
                    value: '5754',
                  },
                ],
              },
            ],
          },
          {
            id: '1772',
            name: 'Внутренние',
            image: hardDrive,
            products: [
              {
                id: '17721',
                name:
                  'Жесткий диск SEAGATE Barracuda ST2000DM008, 2ТБ, HDD, SATA III, 3.5"',
                image: hddInternal,
                params: [
                  {
                    name: 'Объем накопителя',
                    value: '2 ТБ',
                  },
                  {
                    name: 'Интерфейс',
                    value: 'SATA III',
                  },
                  {
                    name: 'Скорость вращения шпинделя',
                    value: '7200 об/мин',
                  },
                ],
                price: [
                  {
                    currency: 'RUB',
                    value: '6190',
                  },
                  {
                    currency: 'BYN',
                    value: '210',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '456',
    name: 'Мониторы',
    image: monitor,
    products: [
      {
        id: '4561',
        name: 'Монитор ASUS VA24DQ 23.8',
        image: screen,
        params: [
          {
            name: 'Размер экрана',
            value: '23.8 "',
          },
          {
            name: 'Разрешение экрана',
            value: '1920x1080',
          },
          {
            name: 'Соотношение сторон экрана',
            value: '16:9',
          },
        ],
        price: [
          {
            currency: 'RUB',
            value: '9990',
          },
          {
            currency: 'BYN',
            value: '340',
          },
        ],
      },
    ],
  },
  {
    id: '789',
    name: 'Клавиатуры',
    image: keyboard,
    products: [
      {
        id: '7891',
        name: 'Клавиатура Logitech Wireless Touch Keyboard K400 Plus Black USB',
        image: wirelessKeyboard,
        params: [
          {
            name: 'Тип',
            value: 'Мембранная',
          },
          {
            name: 'Подключение',
            value: 'Беспроводная (радиоканал)',
          },
          {
            name: 'Количество клавиш',
            value: 85,
          },
          {
            name: 'Источник питания',
            value: '2xAA',
          },
          {
            name: 'Особенности',
            value: 'Регулятор уровня громкости, тачпад',
          },
          {
            name: 'Размеры',
            value: '354x24x140 мм',
          },
          {
            name: 'Вес',
            value: '380 г',
          },
        ],
      },
    ],
    price: [
      {
        currency: 'RUB',
        value: '2840',
      },
      {
        currency: 'BYN',
        value: '97',
      },
    ],
  },
  {
    id: '112',
    name: 'Кабеля',
    imageProps: {
      position: {
        y: 'top',
        x: 'left',
      },
    },
    image: cable,
    products: [],
  },
];

export default data;
