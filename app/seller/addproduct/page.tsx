"use client";

import { FormProvider } from "@/app/context/FormContext";
import { useForm } from "@/app/context/FormContext";
import StepClient from "./stepclient";
import StepProduct from "./stepproduct";
import Preview from "./Preview";

const FormSteps = () => {
  const { state } = useForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 py-10 px-4">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto bg-white rounded-[35px] shadow-2xl overflow-hidden">

        {/* TOP HEADER */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 md:px-14 py-10 text-white">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                M-Cart Seller Hub
              </h1>

              <p className="mt-3 text-blue-100 text-lg">
                Register your store and start selling products online
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">

              <p className="text-sm text-blue-100 mb-2">
                Registration Progress
              </p>

              <div className="text-3xl font-bold">
                Step {state.step} / 3
              </div>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="mt-8">

            <div className="flex justify-between text-sm mb-3 text-blue-100">
              <span>Seller Info</span>
              <span>Product Details</span>
              <span>Review</span>
            </div>

            <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">

              <div
                className={`h-full bg-white rounded-full transition-all duration-500
                ${
                  state.step === 1
                    ? "w-[33%]"
                    : state.step === 2
                    ? "w-[66%]"
                    : "w-full"
                }`}
              />
            </div>
          </div>
        </div>

        {/* FORM CONTENT */}
        <div className="p-6 md:p-14">

          {state.step === 1 && <StepClient />}
          {state.step === 2 && <StepProduct />}
          {state.step === 3 && <Preview />}

        </div>
      </div>
      
    </div>
  );
};

export default function Page() {
  return (
    <FormProvider>
      <FormSteps />
    </FormProvider>
  );
}