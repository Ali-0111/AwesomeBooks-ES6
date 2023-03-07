export const saveLocal = (arr) => {
  localStorage.setItem('data', JSON.stringify(arr));
};

export function collectionMethod() {
  const data = localStorage.getItem('data');
  return data ? JSON.parse(data) : [];
}