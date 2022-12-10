export const noSpecialChars = /[^\w\sㄱ-힣]|[\_]/g;
export function hasSpecialChars(value: string) {
  return noSpecialChars.test(value) === true;
}
