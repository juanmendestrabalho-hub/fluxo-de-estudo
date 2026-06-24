
export const save = (k, v) =>
  localStorage.setItem(k, JSON.stringify(v));

export const load = (k) =>
  JSON.parse(localStorage.getItem(k));
