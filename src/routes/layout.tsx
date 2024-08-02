import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="flex flex-1 flex-col">
        <Slot />
      </main>
    </>
  );
});
