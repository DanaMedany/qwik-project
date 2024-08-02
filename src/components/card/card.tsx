import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type cardProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const storeCoffeeData = (props: cardProps) => {
  localStorage.setItem("coffee", JSON.stringify(props));
};

export default component$((props: cardProps) => {
  const { title, name, price, image } = props;

  return (
    <Link href="/checkout">
      <div
        class="relative mx-auto flex w-[90%] transform cursor-pointer flex-col gap-2 overflow-hidden border border-gray-300 transition-transform hover:scale-105 sm:h-[220px] sm:w-[290px]"
        onClick$={() => storeCoffeeData({ ...props })}
      >
        <img
          src={image}
          alt={name}
          width={100}
          height={100}
          class="h-full w-full object-cover object-[top_center]"
        />
        <div class="absolute inset-0 flex flex-col justify-end bg-gray-800 bg-opacity-70 p-4 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
          <h1 class="text-lg font-semibold">{name}</h1>
          <h3 class="text-sm">{title}</h3>
          <h3 class="text-xl font-bold">${price}</h3>
        </div>
      </div>
    </Link>
  );
});
