import "@formatjs/intl-listformat/polyfill";

export default function arrayToListFormat(array) {
  return new Intl.ListFormat("en").format(array);
}
