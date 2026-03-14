import type{ EventItem } from "./types";

export const TIME_LINE: EventItem[] = [
  { 
    id: 1,
    title: 'Технологии',
    year_start: 1980,
    year_end: 1986,
    events: [
      { date: 1980, description: 'Sinclair Research выпускает домашний компьютер ZX80' },
      { date: 1981, description: 'IBM выпускает свой первый персональный компьютер IBM PC' },
      { date: 1983, description: 'Motorola представляет первый коммерческий мобильный телефон DynaTAC 8000X' },
      { date: 1984, description: 'Apple выпускает Macintosh с графическим интерфейсом и мышью' },
      { date: 1985, description: 'Microsoft выпускает первую версию Windows 1.0' },
      { date: 1986, description: 'Intel представляет процессор 80386, первый 32-битный микропроцессор для ПК' }
    ],
  },

  { 
    id: 2,
    title: 'Кино',
    year_start: 1987,
    year_end: 1991,
    events: [
      { date: 1987, description: '"Хищник" / Predator, США (реж. Джон Мактирнан)' },
      { date: 1988, description: '"Кто подставил кролика Роджера" / Who Framed Roger Rabbit, США (реж. Роберт Земекис)' },
      { date: 1989, description: '"Назад в будущее 2" / Back to the Future Part II, США (реж. Роберт Земекис)' },
      { date: 1990, description: '"Крепкий орешек 2" / Die Hard 2, США (реж. Ренни Харлин)' },
      { date: 1991, description: '"Семейка Аддамс" / The Addams Family, США (реж. Барри Зонненфельд)' }
    ],
  },

  { 
    id: 3,
    title: 'Литература',
    year_start: 1992,
    year_end: 1997,
    events: [
      { date: 1992, description: 'Нобелевская премия по литературе — Дерек Уолкотт' },
      { date: 1993, description: 'публикация романа "Партнёры" Марианны Уэбстер' },
      { date: 1994, description: '"Бессонница" — роман Стивена Кинга' },
      { date: 1995, description: 'Нобелевская премия по литературе — Шеймас Хини' },
      { date: 1996, description: 'Нобелевская премия по литературе — Вислава Шимборская' }
    ],
  },

  { 
    id: 4,
    title: 'Театр',
    year_start: 1999,
    year_end: 2004,
    events: [
      { date: 1999, description: 'премьера балета "Золушка" в постановке Жан-Кристофа Майо' },
      { date: 2000, description: 'возобновлено издание журнала "Театр"' },
      { date: 2001, description: 'открытие Московского международного театрального фестиваля' },
      { date: 2002, description: 'премьера трилогии Тома Стоппарда "Берег утопии", Лондон' },
      { date: 2003, description: 'премьера "Гамлета" в постановке Питера Брука, Париж' }
    ],
  },

  { 
    id: 5,
    title: 'Спорт',
    year_start: 2006,
    year_end: 2014,
    events: [
      { date: 2006, description: 'Италия выиграла чемпионат мира по футболу в Германии' },
      { date: 2008, description: '29-е летние Олимпийские игры прошли в Пекине' },
      { date: 2009, description: 'Усэйн Болт установил мировой рекорд на 100 м — 9.58' },
      { date: 2012, description: 'Летние Олимпийские игры прошли в Лондоне' },
      { date: 2014, description: 'зимние Олимпийские игры прошли в Сочи' },
      { date: 2014, description: 'Германия выиграла чемпионат мира по футболу в Бразилии' }
    ],
  },

  { 
    id: 6,
    title: 'Наука',
    year_start: 2015,
    year_end: 2022,
    events: [
      { date: 2015, description: 'частное солнечное затмение, наблюдавшееся в Южной Африке и Антарктиде' },
      { date: 2016, description: 'телескоп Hubble обнаружил одну из самых удалённых галактик' },
      { date: 2017, description: 'Tesla представила электрический грузовик Tesla Semi' },
      { date: 2018, description: 'запуск космического аппарата Parker Solar Probe для изучения Солнца' },
      { date: 2019, description: 'Google объявил о создании 53-кубитного квантового компьютера' },
      { date: 2020, description: 'корабль Crew Dragon успешно завершил первый пилотируемый полёт' }
    ],
  },
];