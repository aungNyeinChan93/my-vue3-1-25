import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useTestStore = defineStore("test", () => {
  const testData = ref([]);
  const fetchData = async (url) => {
    const response = await axios.get(url);
    const { data } = await response;
    testData.value = data;
  };
  return { testData, fetchData };
});
