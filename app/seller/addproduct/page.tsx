"use client";

import { FormProvider } from "@/app/context/FormContext";
import { useForm } from "@/app/context/FormContext";
import StepClient from "./stepclient";
import StepProduct from "./stepproduct";
import Preview from "./Preview";

const FormSteps = () => {
  const { state } = useForm();

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
      
      {/* STEP INDICATOR */}
      <div className="flex justify-between mb-8">
        {["Client", "Product", "Preview"].map((step, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-white 
              ${state.step === index + 1 ? "bg-blue-600" : "bg-gray-300"}`}
            >
              {index + 1}
            </div>
            <p className="text-sm mt-2 text-gray-600">{step}</p>
          </div>
        ))}
      </div>

      {/* STEP CONTENT */}
      {state.step === 1 && <StepClient />}
      {state.step === 2 && <StepProduct />}
      {state.step === 3 && <Preview />}
    </div>
  );
};

export default function Page() {
  return (
    <FormProvider>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
        <FormSteps />
      </div>
    </FormProvider>
  );
}