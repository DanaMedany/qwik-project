import { component$ } from "@builder.io/qwik";
import Card from "../card/card";

export default component$(() => {
  const productsCard = [
    {
      id: 1,
      name: "Espresso",
      title: "Short, dark and handsome",
      description:
        "The heartbeat of all our coffees. It begins with our Espresso. We craft one simple shot of our intense roast for the most elegant of drinks.",
      price: 20,
      image:
        "https://neurosciencenews.com/files/2023/07/espresso-alzheimers-neuroscience.jpg.webp",
    },
    {
      id: 2,
      name: "Americano",
      title: "Simple and oh-so smooth",
      description:
        "Our intense signature espresso softened with hot water. That's it. Enjoy it straight up, or add a splash of milk, it's up to you.",
      price: 30,
      image:
        "https://mocktail.net/wp-content/uploads/2022/03/homemade-Iced-Americano-recipe_1.jpg",
    },
    {
      id: 3,
      name: "Magic",
      title: "Short and strong",
      description:
        "The purest double ristretto extraction of our signature blend with textured milk finished with a florette.",
      price: 25,
      image:
        "https://cftproastingco.com.au/wp-content/uploads/2023/09/what-is-a-magic-coffee-how-do-i-order-it-melbourne.png",
    },
    {
      id: 4,
      name: "Latte",
      title: "Loved by everyone",
      description:
        "We combine our signature espresso with a creamy milk or dairy alternative of your choice for the ideal drink to sip when it's served hot or cold.",
      price: 40,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/Latte_with_winged_tulip_art.jpg",
    },
    {
      id: 5,
      name: "Flat White",
      title: "Rich and good-looking",
      description:
        "An expert combination of rich espresso and velvety milk, signed off with a beautiful florette handcrafted by your barista.",
      price: 50,
      image:
        "https://www.foodandwine.com/thmb/xQZv2CX6FO5331PYK7uGPF1we9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Flat-White-FT-BLOG0523-b11f6273c2d84462954c2163d6a1076d.jpg",
    },
    {
      id: 6,
      name: "Cappuccino",
      title: "Famously frothy",
      description:
        "A special treat made out of intense espresso, foamed milk and decadent chocolate dusting, if that's how you like it. Enjoy it hot or ice cold.",
      price: 40,
      image:
        "https://methodicalcoffee.com/cdn/shop/articles/cap.jpg?v=1684507364",
    },
    {
      id: 7,
      name: "Cortado",
      title: "A little luxury",
      description:
        "It all starts with the purest essence of espresso and textured milk. We even sign it off with a little heart, from us to you.",
      price: 20,
      image:
        "https://methodicalcoffee.com/cdn/shop/articles/cortado.jpg?v=1701124707",
    },
    {
      id: 8,
      name: "Mocha",
      title: "A chocolatey treat",
      description:
        "For those who like their coffee a little bit extra. Expertly steamed chocolate milk blended with espresso.",
      price: 10,
      image:
        "https://www.thespruceeats.com/thmb/POPhcPYBWx7fNJu8Bc7YjS-Flso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-hero-01-1-f8fb7ebd74914895b61366f6fc1d4b05.jpg",
    },
  ];

  return (
    <div id="products" class="grid min-h-screen place-items-center">
      <div class="mx-auto my-[40px] flex max-w-[1200px] flex-wrap gap-3 ">
        {productsCard.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
});
