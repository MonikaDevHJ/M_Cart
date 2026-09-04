"use client";

import { useForm } from "@/app/context/FormContext";
import { useState, useEffect } from "react";

const StepClient = () => {
  const { state, dispatch } = useForm();
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    if (search.length < 3) {
      setLocations([]);
      return;
    }

    const fetchLocations = async () => {
      const res = await fetch(`/api/location?q=${search}`);
      const data = await res.json();

      setLocations(data);
    };
    fetchLocations();
  }, [search]);

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Seller Information</h2>

        <p className="text-gray-500 mt-2">
          Enter your seller and business details
        </p>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="ComPany Name"
          value={state.client.name}
          onChange={(e) =>
            dispatch({
              type: "SET_CLIENT",
              payload: { name: e.target.value }
            })
          }
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
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
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
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
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <input
          type="text"
          placeholder="Business Name"
          value={state.client.BussinessName}
          onChange={(e) =>
            dispatch({
              type: "SET_CLIENT",
              payload: { BussinessName: e.target.value }
            })
          }
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        />

        <input
          type="text"
          placeholder="GST Number"
          className="border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
          value={state.client.gstNumber}
          onChange={(e) =>
            dispatch({
              type: "SET_CLIENT",
              payload: { gstNumber: e.target.value }
            })
          }
        />

        <div className="relative">
          <input
            type="text"
            placeholder="Store Location"
            className="w-full border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
            value={state.client.Location}
            onChange={(e) => {
              setSearch(e.target.value);

              dispatch({
                type: "SET_CLIENT",
                payload: { Location: e.target.value }
              });
            }}
          />

          {search && locations.length > 0 && (
            <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {locations.map((location) => (
                <div
                  key={location}
                  onClick={() => {
                    setSearch("");

                    dispatch({
                      type: "SET_CLIENT",
                      payload: { Location: location }
                    });
                  }}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TEXTAREA */}
      <textarea
        rows={5}
        placeholder="Business Description..."
        className="w-full border border-gray-500 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300"
        value={state.client.Description}
        onChange={(e) =>
          dispatch({
            type: "SET_CLIENT",
            payload: { Description: e.target.value }
          })
        }
      />

      {/* BUTTON */}
      <button
        onClick={() => dispatch({ type: "NEXT_STEP" })}
        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-[1.01] transition-all duration-300 text-white py-5 rounded-2xl font-semibold text-lg shadow-lg"
      >
        Continue →
      </button>
    </div>
  );
};

export default StepClient;
