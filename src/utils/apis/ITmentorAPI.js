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
  static async GetAllMentors(pageSize = 9, pageNumber = 1) {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint +
        "/mentor/getAllMentors?pageNumber=" +
        pageNumber +
        "&pageSize=" +
        pageSize
    );

    return res.data;
  }
  static async GetMentorById(id) {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint + "/mentor/getMentorById?id=" + id
    );

    return res.data;
  }
  static async SendMentorForm(form) {
    return null; // TODO
  }
}
