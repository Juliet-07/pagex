import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  state: string;
  lga: string;
  reference: string;
  userCategory: string;
}

const Form = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const { handleSubmit, register, reset, setValue, watch } =
    useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    const url = `${apiURL}/waitlist`;
    try {
      const response = await axios.post(url, data);
      console.log(response, "response");
      alert(response.data.message);
      reset();
    } catch (error) {
      console.error("Error in API call:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const userCategoryOptions = [
    { value: "Smallholder farmer", label: "Smallholder farmer" },
    { value: "Commercial farmer", label: "Commercial farmer" },
    { value: "Food processor", label: "Food processor" },
    { value: "Agro-waste processor", label: "Agro-waste processor" },
    {
      value: "Offtakers/suppliers of farm produce",
      label: "Offtakers/suppliers of farm produce",
    },
    {
      value: "Offtakers/suppliers of processed food items",
      label: "Offtakers/suppliers of processed food items",
    },
    { value: "Credit provider", label: "Credit provider" },
    { value: "Online learning platform", label: "Online learning platform" },
    { value: "Logistics provider", label: "Logistics provider" },
    {
      value: "Agricultural farm equipment/tools",
      label: "Agricultural farm equipment/tools",
    },
    {
      value: "Agricultural inputs provider",
      label: "Agricultural inputs provider",
    },
    {
      value: "OTHER agricultural services",
      label: "OTHER agricultural services",
    },
  ];

  const referralOptions = [
    { value: "Word of mouth", label: "Word of mouth" },
    { value: "Google search", label: "Google search" },
    { value: "WhatsApp", label: "WhatsApp" },
    { value: "LinkedIn", label: "LinkedIn" },
    { value: "Instagram", label: "Instagram" },
    { value: "Tiktok", label: "Tiktok" },
  ];

  // Get current form values
  const formValues = watch();

  return (
    <div className="mx-auto md:max-w-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Message Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Text input fields */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-bold text-[#00000080]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#B5B2B2] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="Melanie"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-[#00000080]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#B5B2B2] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="natalie@gmail.com"
          />
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-bold text-[#00000080]"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            {...register("state", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#B5B2B2] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="e.g. Ogun"
          />
        </div>

        <div>
          <label
            htmlFor="lga"
            className="block text-sm font-bold text-[#00000080]"
          >
            Local Government
          </label>
          <input
            type="text"
            id="lga"
            {...register("lga", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#B5B2B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="LGA"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-bold text-[#00000080]"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
            className="mt-1 block w-full px-3 py-2 border border-[#B5B2B2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="Phone number"
          />
        </div>

        {/* Select fields */}
        <div>
          <label className="block text-sm font-bold text-[#00000080] mb-1">
            Who are you and how do you want to engage with PAGEX?
          </label>
          <Select
            options={userCategoryOptions}
            value={userCategoryOptions.find(
              (option) => option.value === formValues.userCategory
            )}
            onChange={(selected) =>
              setValue("userCategory", selected?.value || "")
            }
            className="basic-select"
            classNamePrefix="select"
            placeholder="Select user category..."
            isClearable
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#B5B2B2",
                "&:hover": { borderColor: "#B5B2B2" },
                minHeight: "42px",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#17913BCC",
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#00000080] mb-1">
            How did you hear about PAGEX?
          </label>
          <Select
            options={referralOptions}
            value={referralOptions.find(
              (option) => option.value === formValues.reference
            )}
            onChange={(selected) =>
              setValue("reference", selected?.value || "")
            }
            className="basic-select"
            classNamePrefix="select"
            placeholder="Select referral source..."
            isClearable
            styles={{
              control: (base) => ({
                ...base,
                borderColor: "#B5B2B2",
                "&:hover": { borderColor: "#B5B2B2" },
                minHeight: "42px",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#17913BCC",
              }),
            }}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#379E23] text-white py-2 px-4 w-full rounded-md hover:bg-[#2a7d19] transition-colors disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
