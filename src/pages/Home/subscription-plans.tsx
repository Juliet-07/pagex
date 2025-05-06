import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";

type Plan = {
  name: string;
  price: string;
  note1: string;
  description: string;
  note2: string;
  recommended?: boolean;
  features: string[];
  flexibility: string;
};

const monthlyPlans: Plan[] = [
  {
    name: "Roots",
    price: "₦1000.00",
    note1: "For small-scale producers & agribusinesses",
    description:
      "Welldone Comrade! You are building a strong, foundational business, PAGEX will be supporting you with the essential features you need to Blossom.",
    note2: "Grow Deep, Stand Strong!",
    features: [
      "Marketplace access",
      "Level 1 KYC and Profile Management",
      "Basic analytics",
      "Customer support",
      "Free access to learning resources",
      "Points and coupon system",
    ],
    flexibility: "Flexibility: Pause or cancel anytime",
  },
  {
    name: "Blossom",
    price: "₦1000.00",
    recommended: true,
    note1: "For mid-sized producers and growing agribusinesses",
    description:
      "You have come a long way, Ready to branch out?  Transition from growth to expansion, and reach new markets.",
    note2: "Blossom into New Markets.",
    features: [
      "Marketplace Access",
      "Expanded Product Listings",
      "Level 2 KYC and Profile Management",
      "Advanced Analytics",
      "Robust customer support",
      "Loan/Credit Access",
      "Points and coupon system",
      "Supply Chain Insights",
    ],
    flexibility: "Flexibility: Pause or cancel anytime",
  },
  {
    name: "Pinnacle",
    price: "₦1000.00",
    note1: "For large-scale producers and agribusinesses",
    description:
      "It's been a long road, and so far you have aced it. Now, it's time to dominate the market with our full support and advanced tools!",
    note2: "Reach the Peak of Market Leadership.",
    features: [
      "Marketplace Access",
      "Unlimited Product Listings",
      "Level 3 KYC and Profile Management",
      "Premium Analytics & Business intelligence",
      "Robust customer support",
      "Dedicated Account Management",
      "Loan/Credit Access",
      "Points and coupon system",
    ],
    flexibility: "Flexibility: Pause or cancel anytime",
  },
];

const yearlyPlans: Plan[] = monthlyPlans.map((plan) => ({
  ...plan,
  price: "₦800.00", // Apply 20% discount for yearly
}));

const PricingSection: React.FC = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const activePlans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  const getStarted = () => {
    navigate("/waitlist");
  };

  return (
    <section className="p-4 md:p-10 2xl:p-20 bg-white">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full bg-gray-100">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-primary-100 text-white"
                : "text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              billingCycle === "yearly"
                ? "bg-primary-100 text-white"
                : "text-gray-700"
            }`}
          >
            Yearly -20% off
          </button>
        </div>
      </div>

      {/* Billing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activePlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md bg-white relative ${
              plan.recommended ? "border-green-600" : ""
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                Recommended
              </div>
            )}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {plan.name}
              </h3>
              <p className="text-green-700 text-2xl font-bold mb-2">
                {plan.price}{" "}
                <span className="text-sm text-gray-600 font-normal">/month</span>
              </p>
            </div>
            <hr />
            <div className="my-2 space-y-2">
              <p className="text-black text-sm font-medium">{plan.note1}</p>
              <p className="text-[#151411]/60 text-sm md:text-base">
                {plan.description}
              </p>
              <p className=" text-black text-sm">{plan.note2}</p>
            </div>
            <button
              onClick={getStarted}
              className="w-full bg-primary-100 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition my-4 cursor-pointer"
            >
              Get Started
            </button>
            <ul className="space-y-4 text-sm text-gray-700 my-6">
              {plan.features.map((feature, idx) => (
                <>
                  <li key={idx} className="flex items-start gap-2">
                    <IoCheckmark size={20} color="#379E23" />
                    <span>{feature}</span>
                  </li>
                  <hr />
                </>
              ))}
            </ul>
            <p className="text-center py-4 text-xs md:text-sm">
              {plan.flexibility}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
