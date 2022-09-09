export default class ImageHelper {
  static GetBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callback(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  static GetByteArray(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      let array = reader.result.substring(23);
      callback(array);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
}
