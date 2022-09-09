export function GetBase64(string) {
  return btoa(unescape(encodeURIComponent(string)));
}
export function GetEncyptedSHA1Base64(string) {
  var crypto = require("crypto");
  return crypto.createHash("sha1").update(string).digest("base64");
}
