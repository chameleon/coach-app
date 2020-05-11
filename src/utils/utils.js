var formatPhoneNumber = function (phoneNumberString) {
  // export function formatPhoneNumber(phoneNumberString) {
  // assumes 10 numbers input only
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ")" + match[2] + "-" + match[3];
  }
  return null;
};

exports.formatPhoneNumber = formatPhoneNumber;
