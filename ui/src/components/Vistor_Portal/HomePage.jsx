import {React, useEffect, useState} from 'react'
export default function HomePage() {
  const dishes = [
    {
      name: "Chicken Biryani",
      image: "Chicken_Biryani.jpg",
      tag: "🔥 Most Ordered",
      description: "Char-grilled, smoky, and infused with rich spices.",
    },
    {
      name: "Beef Biryani",
      image: "Beef_Biryani.jpg",
      tag: "🔥 Most Ordered",
      description: "Tender beef pieces layered with saffron rice and slow-cooked to perfection — the ultimate crowd favorite.",
    },
    {
      name: "Chicken Meat",
      image: "Chicken_Meat.jpg",
      tag: "⭐ Chef's Favorite",
      description: "Creamy tomato gravy with tender chicken pieces.",
    },
    {
      name: "Mutton Biryani",
      image: "Mutton_Biryani.jpg",
      tag: "❤️ Loved by Locals",
      description: "Slow-cooked with aromatic spices and juicy mutton.",
    },
    {
      name: "Mutton Meat",
      image: "Mutton_Meat.jpg",
      tag: "❤️ Loved by Locals",
      description: "Slow-cooked with aromatic spices and juicy mutton.",
    },
    {
      name: "Beef Meat",
      image: "Beef_Meat.jpg",
      tag: "🥩 Rich & Juicy",
      description: "Succulent beef chunks marinated in traditional spices and slow-cooked for that melt-in-your-mouth experience.",
    },
    {
      name: "Kacchi Biryani",
      image: "Kacchi_Biryani.jpg",
      tag: "👑 Royal Choice",
      description: "A heritage recipe with raw marinated meat cooked in fragrant basmati rice — rich, layered, and luxurious.",
    },
    {
      name: "Duck Curry",
      image: "Duck_Curry.jpg",
      tag: "🌶️ Spicy Indulgence",
      description: "Bold and flavorful duck curry simmered in fiery masala gravy — made for true spice lovers.",
    },
  ];
  const menuData = {
    Chicken: [
      {
        name: "Char-Grilled Chicken",
        description: "Succulent and smoky chicken grilled to perfection.",
        price: "12 SAR",
        tags: ["🔥 Spicy", "⭐ Popular"],
        image: "Grilled_Chicken.jpg",
      },
      {
        name: "Crispy Chicken Wings",
        description: "Golden fried wings tossed in house special sauce.",
        price: "13 SAR",
        tags: ["🌶️ Medium", "🍗 Juicy"],
        image: "Chicken_Wings.jpg",
      },
    ],
    Mutton: [
      {
        name: "Slow-Cooked Mutton Curry",
        description: "Rich, tender mutton simmered in traditional spices.",
        price: "15 SAR",
        tags: ["🔥 Spicy", "🥘 Traditional"],
        image: "Mutton_Meat.jpg",
      },
    ],
    Combos: [
      {
        name: "Family Biryani Combo",
        description: "Biryani + Chicken Curry + Dessert. Best for 4!",
        price: "21 SAR",
        tags: ["💰 Best Value", "🍽️ Family Favorite"],
        image: "Combos_Chicken.jpg",
      },
    ],
  };
  
  const getTimeLeft = () => {
    const targetDate = new Date().getTime() + 10000000; // Fake countdown for urgency
    const now = new Date().getTime();
    const distance = targetDate - now;
  
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    return { hours, minutes, seconds, distance };
  };
  
  const reviews = [
    {
      name: "Rajjak Ahmed",
      rating: 5,
      image: "/customer/Rajjak.jpg",
      text: "Best butter chicken I’ve ever had! Will definitely come back.",
    },
    {
      name: "Abdul Shad",
      rating: 5,
      image: "/customer/Abdul.jpg",
      text: "My go-to for midnight mutton cravings! Perfectly spiced every time.",
    },
  ];
  const [activeCategory, setActiveCategory] = useState("Chicken");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
   // Update countdown every second
   useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='rel'> 
      <div className="parallax-section relative overflow-hidden rounded-2xl " >
        <img src="show.jpg" className='w-full md:h-[500px] object-cover rounded-2xl ' alt="" />
        <div className='absolute inset-0 bg-[#0000009f] bg-opacity-60 z-10 rounded-2xl'></div>
        <div className="absolute inset-0 text-center p-5 z-20  ">
          <h1 className="display-3 fw-bold text-white italic winkyRough text-[1.5rem] md:text-7xl">Dhaka Bikrampur restauraunt</h1>
          <h2 className="display-3 fw-bold mt-2 text-orange-500 italic md:text-2xl"> A meal is not just food — it’s a gift. Let us serve you the flavors of <i class="bi bi-house-heart-fill  text-2xl md:text-8xl"></i>.</h2>
       </div>
    </div>
{/* Signature of Dishe's*/}
<section id="menu" className="bg-[#f9f5f0] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Best-Selling Meaty Delights
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Carefully crafted dishes to awaken your cravings 🍗
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform hover:scale-105 duration-300 group"
            >
              <div className="relative">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <span className="absolute top-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md">
                  {dish.tag}
                </span>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
{/* Story Behind the Sizzle */}
<section className="bg-[#fff7f2] py-16 px-4 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#332211] mb-6">
            🧡 The Story Behind the Sizzle
          </h2>
          <p className="text-[#5c4636] text-lg leading-relaxed mb-4">
            Our passion for non-veg delights comes from the heart of our home —
            where grandma's secrets met dad’s fire-cooked dreams.
          </p>
          <p className="text-[#5c4636] text-lg leading-relaxed mb-4">
            We source only the <b className="text-2xl text-orange-900">freshest local meats</b>, grind our <b className="text-2xl text-red-900">own spices
            from ancient recipes</b>, and prepare every dish the <b className="text-2xl text-green-500">authentic way</b>
            — no shortcuts, just love and time.
          </p>
          <p className="text-[#5c4636] text-lg leading-relaxed">
            Every bite connects you to our roots. It's more than food — it’s
            emotion served warm.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/restaurant/Rustic_Kitchen.jpg"
            alt="Rustic Kitchen"
            className="rounded-2xl shadow-xl object-cover h-48 md:h-60 w-full"
          />
          <img
            src="/restaurant/Chef_Cooking.jpg"
            alt="Chef Cooking"
            className="rounded-2xl shadow-xl object-cover h-48 md:h-60 w-full"
          />
        </div>
      </div>
    </section>
    <section className="bg-[#f8f2e3] py-12 px-4 md:px-16">
      {/* Menu Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#332211] mb-4">🍽️ Explore Our Signature Menu</h2>
        <p className="text-[#5c4636] text-lg mb-6">Crafted to make your cravings unforgettable</p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-orange-100 text-orange-800 hover:bg-orange-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dishes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory].map((dish, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#2c1b0d]">{dish.name}</h3>
                <p className="text-[#5c4636] text-sm mt-1 mb-2">{dish.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {dish.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#2c1b0d]">{dish.price}</span>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition">
                    Order Now 🍴
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Limited-Time Offers Section */}
      <div className="bg-[#fffaf5] py-8 px-4 rounded-lg mb-12 text-center">
        <h3 className="text-2xl font-bold text-[#332211]">Today’s Specials – Don’t Miss Out!</h3>
        <p className="text-[#5c4636] text-lg mb-4">Only 7 plates of Lamb Raan left today!</p>
        <div className="text-xl font-bold text-red-600 mb-4">
          <span>Limited Time Offer</span>
        </div>
        <div className="text-2xl font-semibold text-[#2c1b0d]">
          <span>{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
        </div>
        <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full text-lg hover:bg-orange-600 transition">
          Grab It Now! 🍽️
        </button>
      </div>

      {/* Customer Reviews Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#332211] mb-6">Customer Reviews</h2>
        <div className="flex justify-center gap-8 overflow-hidden">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md w-80 p-6 transition-all duration-300 hover:scale-[1.05]"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-30 h-25 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-bold text-[#2c1b0d]">{review.name}</h3>
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-[#5c4636]">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
