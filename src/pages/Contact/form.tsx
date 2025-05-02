import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const Form = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const { handleSubmit, register, reset } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const url = `${apiURL}/contact`;
    try {
      const response = await axios.post(url, data);
      console.log(response, "response");

      alert(response.data.message);
      reset();
    } catch (error) {
      console.error("Error in API call:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto ">
      <h2 className="text-3xl font-bold mb-6">Message Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-bold text-[#00000080]"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            // name="firstName"
            {...register("firstName")}
            // onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-[#0000000D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23]  placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="Melanie"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-bold text-[#00000080]"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className="mt-1 block w-full px-3 py-2 bg-[#0000000D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23]  placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="Campbell"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-[#00000080]"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 bg-[#0000000D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23]  placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="natalie@gmail.com"
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
            {...register("phoneNumber")}
            className="mt-1 block w-full px-3 py-2 bg-[#0000000D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#379E23]  placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
            placeholder="Phone number"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-bold text-[#00000080]"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-[#0000000D] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#0000001A] placeholder:font-bold"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#379E23] text-white py-1 w-full lg:w-[40%] rounded-md hover:bg-green-600 transition-colors disabled:bg-gray-800"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
