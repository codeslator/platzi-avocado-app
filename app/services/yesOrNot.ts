export const getYesOrNot = async () => {
  const response = await fetch('http://localhost:3000/api/yes-or-not');
  const data = await response.json();
  return data;
};