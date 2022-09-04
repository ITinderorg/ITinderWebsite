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
  static async GetMentorsByCategory(
    categoryid = 0,
    pageSize = 9,
    pageNumber = 1
  ) {
    console.log(`page: ${pageNumber}`);
    let res;
    if (categoryid == 0) {
      res = await this.GetMentors(pageSize, pageNumber);
      return res;
    } else {
      res = await axios.get(
        APIConfigs.ITmentor.endpoint +
          "/mentor/getMentorsByCategory?categoryId=" +
          categoryid +
          "&pageNumber=" +
          pageNumber +
          "&pageSize=" +
          pageSize
      );
      console.log(res.data);
      return res.data;
    }
  }
  static async GetMentors(pageSize = 9, pageNumber = 1) {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint +
        "/mentor/getMentors?pageNumber=" +
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
  static async GetMentorsCount(categoryid) {
    let res = await axios.get(
      APIConfigs.ITmentor.endpoint +
        "/mentor/getMentorsCount?categoryId=" +
        categoryid
    );
    console.log(`mentors count: ${res.data}`);
    return res.data;
  }
  static async SendMentorForm(form) {
    return null; // TODO
  }
}
