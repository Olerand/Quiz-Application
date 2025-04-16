import { Quiz } from "./reducers/quiz";

export const initialState: Quiz[] = [
    {
      name: "Основы JavaScript",
      description: "Проверь базовые знания по JavaScript.",
      imgUrl: "https://avatars.mds.yandex.net/i?id=0bf5c655682bbe14a236ac2754bac954a9b1f901-5538185-images-thumbs&n=13",
      date: "2025-04-15",
      points: 100,
      done: false,
      text: "JavaScript - это язык программирования, который позволяет вам создавать динамически обновляемый контент на веб-страницах. Он является одной из основных технологий веба наряду с HTML и CSS. Этот тест проверит ваши базовые знания по JavaScript, включая типы данных, методы массивов, объявление переменных и замыкания.",
      questions: [
        {
          title: "Что выведет typeof NaN?",
          answer: 1,
          options: ["number", "NaN", "undefined", "object"]
        },
        {
          title: "Какой результат у '5' - 2?",
          answer: 0,
          options: ["3", "'3'", "'52'", "NaN"]
        },
        {
          title: "Что делает метод Array.prototype.map()?",
          answer: 3,
          options: [
            "Удаляет элементы массива",
            "Сортирует массив",
            "Изменяет массив на месте",
            "Создаёт новый массив"
          ]
        },
        {
          title: "Как объявить переменную?",
          answer: 2,
          options: ["varName", "let = varName", "let varName", "variable varName"]
        },
        {
          title: "Что такое замыкание (closure)?",
          answer: 1,
          options: [
            "Функция без параметров",
            "Функция с доступом к внешним переменным",
            "Функция внутри массива",
            "Конструктор"
          ]
        }
      ]
    },
    {
      name: "HTML и CSS",
      description: "Проверь знания верстки.",
      imgUrl: "https://i.ytimg.com/vi/48FS3Zq1Esg/maxresdefault.jpg",
      date: "2025-04-12",
      points: 100,
      done: false,
      text: "HTML и CSS - это основные технологии для создания веб-страниц. HTML (HyperText Markup Language) определяет структуру и содержание страницы, а CSS (Cascading Style Sheets) отвечает за её внешний вид и оформление. Этот тест проверит ваши знания основных HTML-тегов, CSS-свойств и принципов вёрстки.",
      questions: [
        {
          title: "Какой тег для заголовка 1 уровня?",
          answer: 0,
          options: ["<h1>", "<header>", "<title>", "<head>"]
        },
        {
          title: "Что делает свойство color в CSS?",
          answer: 1,
          options: ["Меняет фон", "Меняет цвет текста", "Меняет ширину", "Меняет границы"]
        },
        {
          title: "Как задать класс элементу в HTML?",
          answer: 2,
          options: ["id='name'", "style='class'", "class='name'", "type='class'"]
        },
        {
          title: "Что делает тег <img>?",
          answer: 0,
          options: ["Вставляет изображение", "Добавляет видео", "Создаёт ссылку", "Создаёт таблицу"]
        },
        {
          title: "Какой селектор выбирает все элементы <p>?",
          answer: 3,
          options: ["#p", ".p", "*p", "p"]
        }
      ]
    },
    {
      name: "Git и GitHub",
      description: "Основы систем контроля версий.",
      imgUrl: "https://i.ytimg.com/vi/Z_YgTWe3JIs/maxresdefault.jpg",
      date: "2025-04-10",
      points: 100,
      done: false,
      text: "Git - это распределённая система контроля версий, которая позволяет отслеживать изменения в исходном коде и координировать работу нескольких разработчиков. GitHub - это платформа для хостинга проектов с использованием Git. Этот тест проверит ваши знания основных команд Git и принципов работы с репозиториями.",
      questions: [
        {
          title: "Как инициализировать репозиторий?",
          answer: 0,
          options: ["git init", "git start", "git create", "git repo"]
        },
        {
          title: "Как посмотреть статус репозитория?",
          answer: 1,
          options: ["git check", "git status", "git log", "git state"]
        },
        {
          title: "Как закоммитить изменения?",
          answer: 3,
          options: ["git save", "git add", "git stage", "git commit"]
        },
        {
          title: "Что делает git clone?",
          answer: 2,
          options: [
            "Создаёт коммит",
            "Отправляет на сервер",
            "Копирует удалённый репозиторий",
            "Удаляет ветку"
          ]
        },
        {
          title: "Как создать новую ветку?",
          answer: 1,
          options: ["git switch", "git branch", "git fork", "git split"]
        }
      ]
    },
    {
      name: "React",
      description: "Базовые вопросы по React.js",
      imgUrl: "https://i.pinimg.com/originals/b3/8e/e8/b38ee84e7d6fdbe2d91604462df9fc43.jpg",
      date: "2025-04-11",
      points: 100,
      done: false,
      text: "React - это популярная JavaScript-библиотека для создания пользовательских интерфейсов. Она позволяет создавать компонентные UI и эффективно обновлять DOM при изменении данных. Этот тест проверит ваши знания основных концепций React, включая JSX, хуки, пропсы и жизненный цикл компонентов.",
      questions: [
        {
          title: "Что такое JSX?",
          answer: 2,
          options: ["CSS фреймворк", "Формат JSON", "Синтаксис расширения JS", "Браузер"]
        },
        {
          title: "Какой хук используется для состояния?",
          answer: 0,
          options: ["useState", "useEffect", "useContext", "useRef"]
        },
        {
          title: "Как передать пропсы в компонент?",
          answer: 1,
          options: ["useProps", "через атрибуты", "props.push", "props.send"]
        },
        {
          title: "Что делает useEffect?",
          answer: 3,
          options: [
            "Изменяет DOM",
            "Создаёт компонент",
            "Объявляет переменную",
            "Выполняет эффект после рендера"
          ]
        },
        {
          title: "Что возвращает компонент React?",
          answer: 0,
          options: ["JSX", "HTML", "DOM", "CSS"]
        }
      ]
    },
    {
      name: "TypeScript",
      description: "Начальный уровень по TypeScript.",
      imgUrl: "https://avatars.mds.yandex.net/i?id=a356feb51f71ce18c3489ddba62db095_l-5485758-images-thumbs&n=13",
      date: "2025-04-09",
      points: 100,
      done: false,
      text: "TypeScript - это строго типизированный язык программирования, который расширяет возможности JavaScript, добавляя статическую типизацию. Он помогает выявлять ошибки на этапе разработки и улучшает поддержку кода. Этот тест проверит ваши базовые знания TypeScript, включая типы, интерфейсы и операторы.",
      questions: [
        {
          title: "Как объявить переменную с типом string?",
          answer: 2,
          options: ["let str;", "let str = string", "let str: string", "let string = str"]
        },
        {
          title: "Что такое интерфейс?",
          answer: 0,
          options: [
            "Описание формы объекта",
            "Функция",
            "Массив",
            "Тип переменной"
          ]
        },
        {
          title: "Как задать необязательное поле в интерфейсе?",
          answer: 1,
          options: ["name:", "name?:", "name!:", "name=undefined"]
        },
        {
          title: "Что делает оператор 'as'?",
          answer: 2,
          options: ["Проверяет тип", "Создаёт тип", "Приводит тип", "Удаляет тип"]
        },
        {
          title: "Тип для массива строк?",
          answer: 0,
          options: ["string[]", "[]string", "array<string>", "list<string>"]
        }
      ]
    }
  ];