import { component$, useStore, useTask$, $ } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({
    title: "",
  });

  // Function to get coffee data
  const getCoffeeData = $(() => {
    const storedData = localStorage.getItem("coffee");
    console.log(storedData);
    try {
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.log("Error parsing coffee data:", error);
      return null;
    }
  });

  console.log(state.title);

  useTask$(({ track }) => {
    track(() => state.title);
    console.log("getCoffeeData render");
    const data = getCoffeeData();
    state.title = data?.title;
  });

  return <div class="text-black">{state.title || "No coffee selected"}</div>;
});
