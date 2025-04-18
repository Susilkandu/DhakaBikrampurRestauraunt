import React from "react";

const orderSteps = [
  { label: "Order Placed", icon: "📝" },
  { label: "Preparing", icon: "👨‍🍳" },
  { label: "On the Way", icon: "🚚" },
  { label: "Delivered", icon: "✅" },
];

const currentStep = 2; // Example: index of "On the Way"

const TrackOrder = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDE4] to-[#005AA7] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Track Your Order 🍽️
        </h2>

        <div className="flex flex-col gap-6">
          {orderSteps.map((step, index) => {
            const isCompleted = index <= currentStep;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl border ${
                  isCompleted
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 bg-gray-100"
                } transition duration-300`}
              >
                <div
                  className={`text-2xl ${
                    isCompleted ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {step.icon}
                </div>
                <span
                  className={`font-medium ${
                    isCompleted ? "text-green-800" : "text-gray-600"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          Having issues?{" "}
          <a href="tel:+966597228270" className="text-blue-600 hover:underline">
            Call Us
          </a>{" "}
          or{" "}
          <a
            href="mailto:DhakaBikrampurRestaurant@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
