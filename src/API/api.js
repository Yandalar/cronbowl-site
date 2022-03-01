export const getData = async () => {
  const request = await fetch(`${process.env.REACT_APP_API_URL}/data`);
  return await request.json();
};
