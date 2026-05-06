"use client";

import { FormProvider } from "@/app/context/FormContext";
import StepClient from "./stepclient";
import Stepproduct from "./stepproduct";
import Preview from "./Preview"
import { useForm } from "@/app/context/FormContext";

const FormSteps = () => {
  const { state } = useForm();

  if (state.step === 1) return <StepClient />;
  if(state.step === 2) return <Stepproduct/>;
  if(state.step === 3)  return <Preview/>

  return null;
};

export default function Page() {
  return (
    <FormProvider>
      <FormSteps />
    </FormProvider>
  );
}