import Step1 from "../assets/images/step1.png";
import Step2 from "../assets/images/step2.png";
import Step3 from "../assets/images/step3.png";
import Step4 from "../assets/images/step4.png";
import Step5 from "../assets/images/step5.png";
import Step6 from "../assets/images/step6.png";
import OneVOne from "../assets/images/1v1.png";
import Experience from "../assets/images/experience.png";
import Motivation from "../assets/images/motivation.png";
import Individual from "../assets/images/individual.png";

const MentorConstants = {
  Steps: [
    {
      id: 1,
      text: "Заходиш на сайт або до бота",
      imageSrc: Step1.src,
    },
    {
      id: 2,
      text: "Обираєш категорію, що цікавить ",
      imageSrc: Step2.src,
    },
    {
      id: 3,
      text: "Обираєш ментора за рівнем та напрямком",
      imageSrc: Step3.src,
    },
    {
      id: 4,
      text: "Сплачуєш 20% від ціни",
      imageSrc: Step4.src,
    },
    {
      id: 5,
      text: "Назначаєш дату та час",
      imageSrc: Step5.src,
    },
    {
      id: 6,
      text: "Отримуєш важливі знання",
      imageSrc: Step6.src,
    },
  ],
  WhyPoints: [
    {
      id: 0,
      title: "Індивідуальність",
      text: "Ментор зможе підібрати матеріал індивідуально для тебе, щоб ти міг комфортно його опановувати",
      imageSrc: Individual.src,
    },
    {
      id: 1,
      title: "1-на-1",
      text: "На зустрічі ти зможеш задати ментору будь які питання та 100% отримаєш розгорнуту відповідь",
      imageSrc: OneVOne.src,
    },
    {
      id: 2,
      title: "Мотивація",
      text: "Розмова з ментором допомагає по-новому поглянути на свою професію і перезавантажитися",
      imageSrc: Motivation.src,
    },
    {
      id: 3,
      title: "Досвід",
      text: "Ментор - досвідчений професіонал своєї справи, на своєму шляху він зустрічав багато перешкод і точно має декілька порад",
      imageSrc: Experience.src,
    },
  ],
};

export default MentorConstants;
