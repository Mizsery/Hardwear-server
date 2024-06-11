import { TypeProduct } from '@prisma/client';

export const Products = [
  {
    name: 'Джинсы',
    description:
      'Джинсы прямого кроя. Выполнены из 100% хлока. Модель унисекс. Дополнены металлическими пуговицами с лого бренда и жакроновой этикетской с лого',
    price: '5000',
    image: '/uploads/bruk.jpg',
    category: {
      connect: {
        category: 'Джинсы'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Широкие брюки Anteater',
    description:
      'Широкие брюки Anteater из серии Wide с защипами и большими прямоугольными карманами сзади, на правом располагается фирменная вышивка Tag',
    price: '5200',
    image: '/uploads/brukAnt.jpg',
    category: {
      connect: {
        category: 'Брюки'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Джинсы Anteater',
    description:
      'Джинсы Anteater базовые, широкого кроя из плотного денима и свободная посадка абсолютно не ограничивают в движении, создают полный комфорт.',
    price: '4899',
    image: '/uploads/jeansAnt.jpg',
    category: {
      connect: {
        category: 'Джинсы'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Джинсы Dissident',
    description:
      'Джинсы Dissident свободного кроя из плотного варенного денима. Брендинг выполнен вышивкой на карманах. На пояс пришита кожанная бирка',
    price: '4999',
    image: '/uploads/jeansDis.jpg',
    category: {
      connect: {
        category: 'Джинсы'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Шорты ЗАПОРОЖЕЦ Ping-Pong',
    description:
      'Шорты ЗАПОРОЖЕЦ Ping-Pong от российского бренда Запорожец, выполненная из мягкой и приятной хлопковой ткани. Традиционный силуэт, прямой крой',
    price: '2000',
    image: '/uploads/shortPing.jpg',
    category: {
      connect: {
        category: 'Шорты'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },

  // Футболки
  {
    name: 'Футболка Anteater',
    description: 'Футболка Anteater свободного кроя из 100% хлопка',
    price: '2599',
    image: '/uploads/tshirtAnt.jpg',
    category: {
      connect: {
        category: 'Футболки'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Футболка Rice',
    description:
      'Футболка Rice свободного кроя с круглым воротом из 100% хлопка высокого качества для комфортных образов на каждый день. Принт выполнен методом шелкографии, которая надолго сохранит принт в первоначальном виде',
    price: '2799',
    image: '/uploads/tshirtRice.jpg',
    category: {
      connect: {
        category: 'Футболки'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Базовая футболка Молодось',
    description: 'Базовая футболка Молодость выполнена из плотного 100% хлопка, оверсайз кроя',
    price: '2399',
    image: '/uploads/tshirt.jpg',
    category: {
      connect: {
        category: 'Футболки'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Футболка Supertzar',
    description:
      'Футболка supertzar. Футболка премиального качества, свободного кроя. приятный к телу, легкий, дышащий материал. благодаря высокому качеству изделие не теряет форму после многочисленных стирок. принт нанесен методом шелкографии',
    price: '2899',
    image: '/uploads/tshirtSuper.jpg',
    category: {
      connect: {
        category: 'Футболки'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Футболка Uniform',
    description:
      'Футболка uniform выполнена из премиум 100% хлопка, имеют слегка свободный оверсайз крой. На футболке нанесен принт "хамелеон" меняющим цвет в зависимости от интенсивности цвета',
    price: '2899',
    image: '/uploads/tshirtUni.jpg',
    category: {
      connect: {
        category: 'Футболки'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },

  // Худи
  {
    name: 'Худи Uniform',
    description:
      'Худи Uniform из футера повышенной плотности насыщенного черного цвета с плотным капюшоном со шнурком, карманом и манжетами на рукавах и внизу изделия',
    price: '3199',
    image: '/uploads/hoodieUniform.jpg',
    category: {
      connect: {
        category: 'Худи'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Худи Special',
    description:
      'Худи Special пошит из ткани без начеса, имеет посадку "оверсайз" со спущенной линией плеча. Ткань класса Премиум и металлическая фурнитура c двойным замком, комбинированный крой, на груди минималистичная нашивка',
    price: '3699',
    image: '/uploads/hoodieSpecZip.jpg',
    category: {
      connect: {
        category: 'Худи'
      }
    },
    sizes: {
      connect: [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Оверсайз худи Special',
    description:
      'Оверсайз худи Special в черном цвете со светоотражающим принтом на груди. Свободный мешковатый фит, спущенная линия плеча, петельчатая изнанка',
    price: '3399',
    image: '/uploads/hoodieSpecZip.jpg',
    category: {
      connect: {
        category: 'Худи'
      }
    },
    sizes: {
      connect: [{ size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Худи Dissident',
    description:
      'Худи Dissident из плотного хлопка, выкрашенное техникой полимерного крашения. Умеренный оверсайз крой. Нанесение выполнено шелкографией',
    price: '3499',
    image: '/uploads/hoodieDis.jpg',
    category: {
      connect: {
        category: 'Худи'
      }
    },
    sizes: {
      connect: [{ size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },
  {
    name: 'Оверсайз худи One Two',
    description:
      'Оверсайз худи One Two сочетающая в себе оверсайз, корейский вайб и универсальность. Базовый аутфит актуальный на все случаи жизни',
    price: '3299',
    image: '/uploads/hoodieOne.jpg',
    category: {
      connect: {
        category: 'Худи'
      }
    },
    sizes: {
      connect: [{ size: 'M' }, { size: 'L' }, { size: 'XL' }]
    },
    typeProduct: TypeProduct.Wear
  },

  // Рюкзак
  {
    name: 'Рюкзак Hook',
    description:
      'Рюкзак hook среднего размера. Основное отделение на молнии, дополнительный объемный карман также на молнии. Внутри основного отделения есть карман для ноутбука. Лямки регулируются стропами с пластиковыми фиксаторами. Присутствует жаккард этикетка на внешнем кармане, принт спереди выполнен сублимацией',
    price: '2999',
    image: '/uploads/bagpackHook.jpg',
    category: {
      connect: {
        category: 'Рюкзаки'
      }
    },
    typeProduct: TypeProduct.Accessories
  },
  {
    name: 'Рюкзак Oldy',
    description:
      'Рюкзак от российской марки Oldy, выполненный из плотной нейлоновой ткани. Традиционная форма с вместительным основным отделением, накладным карманом и отсеком для ноутбука. Регулируемые лямки дополнены мягкой вставкой для обеспечения дополнительного комфорта. Рюкзак украшен силиконовым пятачком для карабина и небольшой нашивкой с фирменным логотипом бренда',
    price: '2999',
    image: '/uploads/bagpackOldy.jpg',
    category: {
      connect: {
        category: 'Рюкзаки'
      }
    },
    typeProduct: TypeProduct.Accessories
  },

  // Сумки
  {
    name: 'Сумка мессенджер HOOK Вельвет',
    description:
      'Сумка мессенджер HOOK Вельвет. Аккуратная и комфортная сумка вместит в себя паспорт, кошелек, телефон, ключи и другие мелочи. Два отделения на молнии - большое основное и поменьше на внешней стороне',
    price: '1499',
    image: '/uploads/bagHook.jpg',
    category: {
      connect: {
        category: 'Сумки'
      }
    },
    typeProduct: TypeProduct.Accessories
  },
  {
    name: 'Мессенджер Anteater',
    description:
      'Мессенджер Anteater – удобная сумка среднего размера, которая носится на плече через тело по диагонали',
    price: '1599',
    image: '/uploads/bagAnt.jpg',
    category: {
      connect: {
        category: 'Сумки'
      }
    },
    typeProduct: TypeProduct.Accessories
  },
  {
    name: 'Сумка-шоппер Dissident',
    description:
      'Сумка-шоппер Dissident из плотного хлопка с ручками средней длины и дополнительными маленькими ручками. Нанесение выполнено шелкографией',
    price: '1599',
    image: '/uploads/ShopperDis.jpg',
    category: {
      connect: {
        category: 'Сумки'
      }
    },
    typeProduct: TypeProduct.Accessories
  }
];

export const categories = [
  { category: 'Футболки' },
  { category: 'Брюки' },
  { category: 'Джинсы' },
  { category: 'Сумки' },
  { category: 'Рюкзаки' },
  { category: 'Худи' },
  { category: 'Шорты' }
];

export const sizes = [{ size: 'S' }, { size: 'M' }, { size: 'L' }, { size: 'XL' }];
