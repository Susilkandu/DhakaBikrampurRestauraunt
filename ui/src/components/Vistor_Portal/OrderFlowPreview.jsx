import { useState } from "react";

const dishes = [
  { id: 1, name: "Chicken Biryani", price: 13 , imgLink :"Chicken_Biryani.jpg"},
  { id: 1, name: "Chicken Meat", price: 14 , imgLink :"Chicken_Meat.jpg"},
  { id: 1, name: "Chicken Wings", price: 12 , imgLink :"Chicken_Wings.jpg"},
  { id: 1, name: "Grilled Chicken", price: 11 , imgLink :"Grilled_Chicken.jpg"},
  { id: 1, name: "Mutton Biryani", price: 16 , imgLink :"Mutton_Biryani.jpg"},
  { id: 1, name: "Mutton Meat", price: 17 , imgLink :"Mutton_Meat.jpg"},
  { id: 1, name: "Kacchi Biryani", price: 18 , imgLink :"Kacchi_Biryani.jpg"},
  { id: 1, name: "Duck Curry", price: 12 , imgLink :"Duck_Curry.jpg"},
  { id: 1, name: "Beef Biryani", price: 12 , imgLink :"Beef_Biryani.jpg"},
  { id: 1, name: "Beef Meat", price: 12 , imgLink :"Beef_Meat.jpg"},
  { id: 1, name: "Combos Chicken", price: 12 , imgLink :"Combos_Chicken.jpg"}
];

export default function OrderFlowPreview() {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    const existing = cart.find((item) => item.id === dish.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === dish.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...dish, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-orange-500 p-6 border-t-2">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#121241]">
        What's on your plate today? 🍽️
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dish Cards */}
        <div className="max-h-screen overflow-scroll">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Popular Dishes</h3>
          <div className="space-y-4">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="h-40 md:h-60 flex justify-center items-center rounded-2xl overflow-hidden cursor-zoom-in transition-transform duration-500 hover:scale-150">
                <img src={dish.imgLink} alt="w-full h-full object-fit object-center" />
                </div>
                <div className="group w-lg text-center">
                <div>
                  <h4 className="text-lg font-bold text-[#2C3E50]">{dish.name}</h4>
                  <p className="text-green-600 font-medium">SAR {dish.price}</p>
                </div>
                <button
                  onClick={() => addToCart(dish)}
                  className="bg-[#e42508] hover:bg-[#1a1a5c] text-white px-4 py-2 rounded-xl flex items-center m-auto cursor-pointer gap-2"
                >
                  <i class="bi bi-bag-plus"></i> Add
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="max-h-4/5 bg-white rounded-2xl shadow-xl p-6 ">
          <h3 className="text-xl font-bold mb-4 text-[#121241]">🛒 Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items added yet.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      SAR {item.price} × {item.qty} = SAR {item.price * item.qty}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              ))}

              <div className="text-right mt-4">
                <p className="text-lg font-bold text-green-600">
                  Total: SAR {totalPrice}
                </p>
              </div>

              <div className="pt-4">
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl text-lg font-semibold transition"
                >
                  Proceed to Order ➡️
                </button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  You're just one step away from deliciousness! 😋
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
