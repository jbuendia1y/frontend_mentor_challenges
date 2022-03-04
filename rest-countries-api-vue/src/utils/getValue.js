export function getValueFromObject(obj, string) {
  let ref = obj;
  const keys = string.split(".");
  console.log(ref);
  keys.forEach((key) => {
    ref = ref[key];
  });

  return ref;
}
