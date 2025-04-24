import { Quiz } from "./reducers/quiz";

export const initialState: Quiz[] = [
  {
    name: "Основы JavaScript",
    description: "Проверь базовые знания по JavaScript.",
    imgUrl: "https://avatars.mds.yandex.net/i?id=0bf5c655682bbe14a236ac2754bac954a9b1f901-5538185-images-thumbs&n=13",
    date: "2025-04-15",
    points: 100,
    userPoints: 0,
    done: false,
    text: "JavaScript - это язык программирования, который позволяет вам создавать динамически обновляемый контент на веб-страницах...",
    trophyUrl: "https://files.svgcdn.io/twemoji/trophy.svg",
    questions: [
      { title: "Что выведет typeof NaN?", answer: 1, userAnswer: null, options: ["number", "NaN", "undefined", "object"] },
      { title: "Какой результат у '5' - 2?", answer: 0, userAnswer: null, options: ["3", "'3'", "'52'", "NaN"] },
      { title: "Что делает метод Array.prototype.map()?", answer: 3, userAnswer: null, options: ["Удаляет элементы массива", "Сортирует массив", "Изменяет массив на месте", "Создаёт новый массив"] },
      { title: "Как объявить переменную?", answer: 2, userAnswer: null, options: ["varName", "let = varName", "let varName", "variable varName"] },
      { title: "Что такое замыкание (closure)?", answer: 1, userAnswer: null, options: ["Функция без параметров", "Функция с доступом к внешним переменным", "Функция внутри массива", "Конструктор"] }
    ]
  },
  {
    name: "HTML и CSS",
    description: "Проверь знания верстки.",
    imgUrl: "https://i.ytimg.com/vi/48FS3Zq1Esg/maxresdefault.jpg",
    date: "2025-04-12",
    points: 100,
    userPoints: 0,
    done: false,
    text: "HTML и CSS - это основные технологии для создания веб-страниц...",
    trophyUrl: "https://files.svgcdn.io/noto/trophy.svg",
    questions: [
      { title: "Какой тег для заголовка 1 уровня?", answer: 0, userAnswer: null, options: ["<h1>", "<header>", "<title>", "<head>"] },
      { title: "Что делает свойство color в CSS?", answer: 1, userAnswer: null, options: ["Меняет фон", "Меняет цвет текста", "Меняет ширину", "Меняет границы"] },
      { title: "Как задать класс элементу в HTML?", answer: 2, userAnswer: null, options: ["id='name'", "style='class'", "class='name'", "type='class'"] },
      { title: "Что делает тег <img>?", answer: 0, userAnswer: null, options: ["Вставляет изображение", "Добавляет видео", "Создаёт ссылку", "Создаёт таблицу"] },
      { title: "Какой селектор выбирает все элементы <p>?", answer: 3, userAnswer: null, options: ["#p", ".p", "*p", "p"] }
    ]
  },
  {
    name: "Git и GitHub",
    description: "Основы систем контроля версий.",
    imgUrl: "https://i.ytimg.com/vi/Z_YgTWe3JIs/maxresdefault.jpg",
    date: "2025-04-10",
    points: 100,
    userPoints: 0,
    done: false,
    text: "Git - это распределённая система контроля версий...",
    trophyUrl: "https://files.svgcdn.io/whh/cat.svg",
    questions: [
      { title: "Как инициализировать репозиторий?", answer: 0, userAnswer: null, options: ["git init", "git start", "git create", "git repo"] },
      { title: "Как посмотреть статус репозитория?", answer: 1, userAnswer: null, options: ["git check", "git status", "git log", "git state"] },
      { title: "Как закоммитить изменения?", answer: 3, userAnswer: null, options: ["git save", "git add", "git stage", "git commit"] },
      { title: "Что делает git clone?", answer: 2, userAnswer: null, options: ["Создаёт коммит", "Отправляет на сервер", "Копирует удалённый репозиторий", "Удаляет ветку"] },
      { title: "Как создать новую ветку?", answer: 1, userAnswer: null, options: ["git switch", "git branch", "git fork", "git split"] }
    ]
  },
  {
    name: "React",
    description: "Базовые вопросы по React.js",
    imgUrl: "https://i.pinimg.com/originals/b3/8e/e8/b38ee84e7d6fdbe2d91604462df9fc43.jpg",
    date: "2025-04-11",
    points: 100,
    userPoints: 0,
    done: false,
    text: "React - это популярная JavaScript-библиотека для создания пользовательских интерфейсов...",
    trophyUrl: "https://files.svgcdn.io/twemoji/sports-medal.svg",
    questions: [
      { title: "Что такое JSX?", answer: 2, userAnswer: null, options: ["CSS фреймворк", "Формат JSON", "Синтаксис расширения JS", "Браузер"] },
      { title: "Какой хук используется для состояния?", answer: 0, userAnswer: null, options: ["useState", "useEffect", "useContext", "useRef"] },
      { title: "Как передать пропсы в компонент?", answer: 1, userAnswer: null, options: ["useProps", "через атрибуты", "props.push", "props.send"] },
      { title: "Что делает useEffect?", answer: 3, userAnswer: null, options: ["Изменяет DOM", "Создаёт компонент", "Объявляет переменную", "Выполняет эффект после рендера"] },
      { title: "Что возвращает компонент React?", answer: 0, userAnswer: null, options: ["JSX", "HTML", "DOM", "CSS"] }
    ]
  },
  {
    name: "TypeScript",
    description: "Начальный уровень по TypeScript.",
    imgUrl: "https://avatars.mds.yandex.net/i?id=a356feb51f71ce18c3489ddba62db095_l-5485758-images-thumbs&n=13",
    date: "2025-04-09",
    points: 100,
    userPoints: 0,
    done: false,
    text: "TypeScript - это строго типизированный язык программирования...",
    trophyUrl: "https://files.svgcdn.io/skill-icons/typescript.svg",
    questions: [
      { title: "Как объявить переменную с типом string?", answer: 2, userAnswer: null, options: ["let str;", "let str = string", "let str: string", "let string = str"] },
      { title: "Что такое интерфейс?", answer: 0, userAnswer: null, options: ["Описание формы объекта", "Функция", "Массив", "Тип переменной"] },
      { title: "Как задать необязательное поле в интерфейсе?", answer: 1, userAnswer: null, options: ["name:", "name?:", "name!:", "name=undefined"] },
      { title: "Что делает оператор 'as'?", answer: 2, userAnswer: null, options: ["Проверяет тип", "Создаёт тип", "Приводит тип", "Удаляет тип"] },
      { title: "Тип для массива строк?", answer: 0, userAnswer: null, options: ["string[]", "[]string", "array<string>", "list<string>"] }
    ]
  },
  {
    name: "Вопросы с подвохом",
    description: "Юмор, логика и немного абсурда.",
    imgUrl: "https://avatars.mds.yandex.net/i?id=8e1f9d41c3ed75dc343bb71ad55fdcd9e0158ed1-4837630-images-thumbs&n=13",
    date: "2025-04-22",
    points: 100,
    userPoints: 0,
    done: false,
    text: "Иногда правильный ответ — тот, который вызывает улыбку.",
    trophyUrl: "https://files.svgcdn.io/twemoji/brain.svg",
    questions: [
      { title: "Что будет, если чайник поставить на голову?", answer: 1, userAnswer: null, options: ["Вскипит мозг", "Будет чайник на голове", "Ты станешь умнее", "Он закипит"] },
      { title: "Что тяжелее: килограмм ваты или килограмм железа?", answer: 2, userAnswer: null, options: ["Железо", "Вата", "Одинаково", "Зависит от погоды"] },
      { title: "Можно ли съесть 10 яиц натощак?", answer: 0, userAnswer: null, options: ["Только одно, потом уже не натощак", "Нет", "Да", "Если варёные"] },
      { title: "Что нельзя сделать перед завтраком?", answer: 3, userAnswer: null, options: ["Поспать", "Выпить воду", "Прогуляться", "Позавтракать"] },
      { title: "У какого животного нет задних лап?", answer: 1, userAnswer: null, options: ["Кенгуру", "Змея", "Черепаха", "Курица"] }
    ]
  },
  {
    name: "Загадки на логику",
    description: "Проверь свою логику и внимательность.",
    imgUrl: "https://avatars.mds.yandex.net/get-entity_search/2334190/1139980570/S88x88Smart_2x",
    date: "2025-04-23",
    points: 100,
    userPoints: 0,
    done: false,
    text: "Логические загадки могут помочь развить твои аналитические способности. Попробуй решить их!",
    trophyUrl: "https://files.svgcdn.io/twemoji/trophy.svg",
    questions: [
      { title: "Какое слово начинается с 'Е', заканчивается на 'Е', а внутри имеет только одну букву?", answer: 0, userAnswer: null, options: ["Конверт", "Еж", "Едок", "Экран"] },
      { title: "У кого на свете больше всего друзей?", answer: 3, userAnswer: null, options: ["Человек", "Собака", "Птица", "Тень"] },
      { title: "Я всегда перед вами, но вы меня не видите. Что это?", answer: 2, userAnswer: null, options: ["Ветер", "Свет", "Будущее", "Тень"] },
      { title: "Как можно ловить воду с помощью ведра и без использования ведра?", answer: 1, userAnswer: null, options: ["Ловить дождь", "С помощью отверстий", "Использовать капельницу", "С помощью воронки"] },
      { title: "Что можно разбить, но невозможно удержать?", answer: 0, userAnswer: null, options: ["Обещание", "Стекло", "Яйцо", "Сердце"] }
    ]
  }
  

];
localStorage.data = localStorage.data ?? JSON.stringify(initialState)

