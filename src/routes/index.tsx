import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import "../global.css";
import Products from "../components/products/products";

export default component$(() => {
  return (
    <div class="h-full w-full ">
      <section class="relative flex">
        <img
          src="https://leavetheherdbehind.com/cdn/shop/files/banner-darker.png?v=1683910923&width=2560"
          alt="coffee-image"
          class="h-screen w-full object-cover"
        />

        <a
          href="#products"
          class="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-md border-2 border-solid border-white p-4 px-8 text-white after:absolute after:right-full after:top-0 after:h-full  after:w-full after:bg-white after:duration-300 hover:text-slate-900 hover:after:translate-x-full"
        >
          <h3 class="relative z-20">Shop coffee</h3>
        </a>
      </section>

      <Products />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Home Page",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
