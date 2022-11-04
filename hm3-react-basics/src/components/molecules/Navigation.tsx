import ShopCart from "../icons/ShopCart";

const Navigation = () => {
  return (
    <nav className="bg-black py-5 px-10 flex flex-row justify-between sticky top-0 left-0 right-0 z-10">
      <p className="text-xl text-white">Магазин</p>
      <ShopCart />
    </nav>
  );
};

export default Navigation;
