import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref([]);
  const getData = async (url) => {
    const response = await axios.get(url);
    const { data } = response;
    todos.value = data;
  };
  return { todos, getData };
});
