import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const state = useStore({ scrolled: false });

  return (
    <div
      class={`fixed right-0 top-0 z-50 flex w-full items-center justify-between p-4 text-2xl text-white sm:p-8 sm:text-4xl ${state.scrolled ? "bg-slate-900" : ""}`}
      document:onScroll$={() => {
        if (window.scrollY > 0) {
          state.scrolled = true;
        } else {
          state.scrolled = false;
        }
      }}
    >
      <a href="/" class="font-bold">
        Logo
      </a>
      <div class="sm:text-3xl">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
});
