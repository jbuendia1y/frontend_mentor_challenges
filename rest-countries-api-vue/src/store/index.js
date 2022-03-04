import { reactive } from "vue";
import CountryRepository from "../repositories/CountryRepository";

const state = reactive({
  countries: null,
  data: null,
  filters: {},
});

const methods = {
  getAll: async function () {
    if (!state.countries && state.data) state.countries = state.data;
    if (!state.data && !state.countries) {
      state.countries = await CountryRepository.findAll();
      state.data = state.countries;
    }
  },
  setFilter(field, value) {
    if (!value) {
      delete state.filters[field];
    } else if (value.length == 0) {
      delete state.filters[field];
    } else {
      state.filters = { ...state.filters, [field]: value.toLocaleLowerCase() };
    }
    const keys = Object.getOwnPropertyNames(state.filters);

    state.countries = state.data.filter((item) => {
      for (const key of keys) {
        if (key === "name") {
          if (
            !item.name.official.toLocaleLowerCase().includes(state.filters[key])
          )
            return false;
        } else {
          if (!item[key].toLocaleLowerCase().includes(state.filters[key]))
            return false;
        }
      }
      return true;
    });
  },
};

export default { state, methods };
