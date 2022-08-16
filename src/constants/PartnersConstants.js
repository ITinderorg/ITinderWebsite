import DiscountImg from "../assets/images/Discount.png";
import IncreaseImg from "../assets/images/Increase.png";
import PersonalImg from "../assets/images/Personal.png";
import SupportImg from "../assets/images/Support.png";
import StarImg from "../assets/images/Star.png";

const PartnersConstants = {
  Benefits: [
    {
      id: 1,
      title: "Знижки на кандидатів",
      text: "Знижка на кандидатів всіх рівнів 15% (окрім рівня Trainee)",
      imageSrc: DiscountImg.src,
    },
    {
      id: 2,
      title: "Більше можливостей",
      text: "Збільшення кількості доданих вакансій (4 → 10)",
      imageSrc: IncreaseImg.src,
    },
    {
      id: 3,
      title: "Персональні знижки",
      text: "Знижки на майбутні продукти ITinder",
      imageSrc: PersonalImg.src,
    },
    {
      id: 4,
      title: "Підтримка 24/7",
      text: "Вас буде додано до чату команди, де ви зможете задавати свої питання",
      imageSrc: SupportImg.src,
    },
    {
      id: 5,
      title: "Вакансії із зірочкою",
      text: "Ми будемо рекомендувати ваші вакансії",
      imageSrc: StarImg.src,
    },
  ],
  Pricings: [
    {
      id: 1,
      title: "Джун",
      oldPrice: 100,
      price: 85,
      currency: "$",
    },
    {
      id: 2,
      title: "Мідл",
      oldPrice: 400,
      price: 340,
      currency: "$",
    },
    {
      id: 3,
      title: "Сіньйор",
      oldPrice: 800,
      price: 680,
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
  Partners: [
    {
      id: 1,
      name: "Sample #1",
      description: "Description sample",
      imageName: "bitcoin.jpg",
    },
    {
      id: 2,
      name: "Sample #2",
      description: "Description sample",
      imageName: "bitcoin.jpg",
    },
    {
      id: 3,
      name: "Sample #3",
      description: "Description sample",
      imageName: "bitcoin.jpg",
    },
    {
      id: 4,
      name: "Sample #4",
      description: "Description sample",
      imageName: "bitcoin.jpg",
    },
  ],
};

export default PartnersConstants;
