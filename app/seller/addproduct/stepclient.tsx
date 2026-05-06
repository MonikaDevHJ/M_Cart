"use client";

import { useForm } from "@/app/context/FormContext";

const StepClient = () => {
  const { state, dispatch } = useForm();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Client Details
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={state.client.name}
          onChange={(e) =>
            dispatch({
              type: "SET_CLIENT",
              payload: { name: e.target.value }
            })
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={state.client.email}
          onChange={(e) =>
            dispatch({
              type: "SET_CLIENT",
              payload: { email: e.target.value }
            })
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={state.client.phone}
          onChange={(e) =>
            dispatch({
              type: "SET_CLIENT",
              payload: { phone: e.target.value }
            })
          }
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        onClick={() => dispatch({ type: "NEXT_STEP" })}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
      >
        Continue →
      </button>
    </div>
  );
};

export default StepClient;