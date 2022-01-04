import axios from "axios";

export const ApiGetFilmsList = async () => {
  const result = await axios.get(`https://swapi.dev/api/films`);
  return result.data;
};

export const ApiGetFilmsListByLink = async (link) => {
  const result = await axios.get(link);
  return result.data;
};

export const ApiGetPeopleList = async (id) => {
  const idPeople = id ? id : "";
  const result = await axios.get(`https://swapi.dev/api/people/${idPeople}`);
  return result.data;
};
