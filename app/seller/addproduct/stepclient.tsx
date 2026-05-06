"use client";

import { useForm } from "@/app/context/FormContext";

const StepClient = () => {
  const { state, dispatch } = useForm();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Client Details</h2>

      {/* Name */}
      <input
        type="text"
        placeholder="Client Name"
        value={state.client.name}
        onChange={(e) =>
          dispatch({
            type: "SET_CLIENT",
            payload: { name: e.target.value }
          })
        }
        className="border p-2 mb-3 w-full"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={state.client.email}
        onChange={(e) =>
          dispatch({
            type: "SET_CLIENT",
            payload: { email: e.target.value }
          })
        }
        className="border p-2 mb-3 w-full"
      />

      {/* Phone */}
      <input
        type="text"
        placeholder="Phone"
        value={state.client.phone}
        onChange={(e) =>
          dispatch({
            type: "SET_CLIENT",
            payload: { phone: e.target.value }
          })
        }
        className="border p-2 mb-4 w-full"
      />

      {/* Next Button */}
      <button
        onClick={() => dispatch({ type: "NEXT_STEP" })}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default StepClient;