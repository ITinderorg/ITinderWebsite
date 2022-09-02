import GlobalConstants from "../../constants/GlobalConstants";
import APIConfigs from "../../constants/APIConfigs";
import axios from "axios";

export default class ITmentorAPI {
  static async GetCategories() {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint + "/mentor/getAllCategories"
    );
    // Prepending "All" option (maybe we should move this outside API method)
    let data = [{ id: 0, name: "Всі" }, ...res.data];

    return data;
  }
  static async GetMentorByCategory() {
    return null; // TODO
  }
  static async GetAllMentors() {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint + "/mentor/getAllMentors"
    );

    return res.data;
    return [
      {
        id: 1,
        name: "Володимир Дубров",
        categoryid: 1,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vel neque minus corporis eaque nesciunt aut quis unde accusantium molestiae harum, doloribus, nam laudantium, eius vero in. Atque, reiciendis amet.",
        skills: ".NET",
        position: "Senior .NET Engineer",
        price: 100,
      },
      {
        id: 2,
        name: "Олександр Вілки",
        categoryid: 2,
        description: "test description",
        skills: ".NET, React, Angular",
        position: "Middle Frontend Developer",
        price: 200,
      },
      {
        id: 3,
        name: "Василій Чубка",
        categoryid: 2,
        description: "test description",
        skills: "Java",
        position: "Junior Java Developer",
        price: 300,
      },
      {
        id: 4,
        name: "Іван Мазепа",
        categoryid: 1,
        description: "test description",
        skills: "Army team lead",
        position: "Hetman of Zaporizhian Host",
        price: 400,
      },
    ];
  }
  static async GetMentorById(id) {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint + "/mentor/getMentorById?id=" + id
    );

    return res.data;
    return {
      id: 1,
      name: "Володимир Дубров",
      categoryid: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit vel neque minus corporis eaque nesciunt aut quis unde accusantium molestiae harum, doloribus, nam laudantium, eius vero in. Atque, reiciendis amet.",
      skills: ".NET",
      position: "Senior .NET Engineer",
      price: 100,
      comments: "",
    };
  }
  static async SendMentorForm(form) {
    return null; // TODO
  }
}
