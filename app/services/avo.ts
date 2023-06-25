export const fetchAvos = async () => {
  const response = await fetch('http://localhost:3000/api/avo');
  const data = await response.json();
  return data;
}

export const fetchAvoById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/avo/${id}`);
  const data = await response.json();
  return data;
}