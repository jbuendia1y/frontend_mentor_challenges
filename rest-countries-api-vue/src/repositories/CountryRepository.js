import { API_URL } from "../constants";

class CountryRepository {
  constructor() {
    this.API_URL = API_URL;
  }

  findAll() {
    return new Promise((resolve) => {
      fetch(this.API_URL + "/all")
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  }

  findOneByName(country) {
    return new Promise((resolve) => {
      fetch(this.API_URL + "/name/" + country.toLocaleLowerCase())
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    });
  }
}

export default new CountryRepository();
