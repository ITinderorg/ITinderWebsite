const HomeConstants = {
  Pricings: [
    {
      id: 1,
      title: "Джун",
      price: 100,
      currency: "$",
    },
    {
      id: 2,
      title: "Мідл",
      price: 400,
      currency: "$",
    },
    {
      id: 3,
      title: "Сіньйор",
      price: 800,
      currency: "$",
    },
    {
      id: 4,
      title: "Трейні",
      price: 1,
      currency: "$",
      class: "center",
    },
  ],
  Goals: [
    {
      month: "Травень",
      points: [
        "1-th Зародилася ідея ITinder",
        "<br />",
        "5-th Початок створення боту",
      ],
      complete: true,
    },
    {
      month: "Червень",
      points: ["10-th Тестування", "<br />", "25-th Початок створення сайту"],
      complete: true,
    },
    {
      month: "Липень",
      points: [
        "- Закриття beta-версії",
        "- Запуск в прод",
        "- Баг-фіксинг",
        "- Будуємо комьюніті",
      ],
      complete: true,
    },
    {
      month: "Серпень",
      points: [
        "Додати : ",
        "- Англійську мову",
        "- Статистику",
        "- Роширити стек",
      ],
      complete: false,
    },
    {
      month: "Вересень",
      points: [
        "Додати преміум аккаунти в ITinder-bot",
        "<br />",
        "Створення веб-версії додатку",
      ],
      complete: false,
    },
    {
      month: "Жовтень",
      points: ["Розробка концепції Hire2Earn - наймай, щоб заробляти"],
      complete: false,
    },
  ],
};

export default HomeConstants;
