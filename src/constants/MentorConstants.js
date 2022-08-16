import SupportImg from "../assets/images/Support.png";
import Step1 from "../assets/images/step1.png";
import Step2 from "../assets/images/step2.png";
import Step3 from "../assets/images/step3.png";
import Step4 from "../assets/images/step4.png";
import Step5 from "../assets/images/step5.png";
import Step6 from "../assets/images/step6.png";

const MentorConstants = {
  Steps: [
    {
      id: 1,
      text: "Заходиш на сайт або у бота",
      imageSrc: Step1.src,
    },
    {
      id: 2,
      text: "Вибераєш категорію яка тебе цікавить",
      imageSrc: Step2.src,
    },
    {
      id: 3,
      text: "Вибераєш ментора за рівнем та знаннями",
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
      title: "Sample",
      text: "Заходиш на сайт або у бота",
      imageSrc: SupportImg.src,
    },
    {
      id: 1,
      title: "Sample",
      text: "Вибераєш категорію яка тебе цікавить",
      imageSrc: SupportImg.src,
    },
    {
      id: 2,
      title: "Sample",
      text: "Вибераєш ментора за рівнем та знаннями",
      imageSrc: SupportImg.src,
    },
    {
      id: 3,
      title: "Sample",
      text: "Сплачуєш 20% від ціни",
      imageSrc: SupportImg.src,
    },
  ],
};

export default MentorConstants;
