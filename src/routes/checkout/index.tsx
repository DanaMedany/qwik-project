import { component$, useStore, $, useVisibleTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";

export default component$(() => {
  const state = useStore({
    title: "",
  });

  // Function to get coffee data
  const getCoffeeData = $(() => {
    const storedData = window.localStorage.getItem("coffee");
    console.log(storedData);
    try {
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.log("Error parsing coffee data:", error);
      return null;
    }
  });

  console.log(state.title);

  useVisibleTask$(({ track }) => {
    track(() => state.title);
    const update = async () => {
      const data = await getCoffeeData()!;
      console.log(data);
      state.title = data.title;
    };

    !isServer ? update() : null;
  });

  return <div class="text-black">{state.title || "No coffee selected"}</div>;
});
