"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Provider = "Jio" | "Airtel" | "VI" | "Bsnl";

const RechargeForm = () => {
  const [selectedProvider, setSelectedProvider] = useState<Provider>("Jio");
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const handleProviderChange = (provider: Provider) => {
    setSelectedProvider(provider);
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\+91\s?\d{0,10}$/.test(value) || /^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setError("");
    } else if (value === "") {
      setMobileNumber("");
      setError("");
    } else {
      setError("Please enter a valid 10-digit mobile number");
    }
  };

  const handleRecharge = () => {
    if (!mobileNumber || (mobileNumber.length !== 10 && !mobileNumber.startsWith("+91"))) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    // In a real app, this would send the recharge request
    alert(`Recharging ${selectedProvider} number: ${mobileNumber}`);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl py-4 px-6">
      <div className="text-[#5F259F] flex items-center text-[17px] font-bold w-fit mx-auto mb-8">
        <span className="border-b-2 border-primary pb-1">Mobile Recharge</span>
      </div>

      <div>
        <label className="text-[13px] ml-1 font-bold mt-5 block">Select Network Provider</label>
        <div className="mt-2 flex justify-between gap-2">
          <button
            className={`border-2 ${selectedProvider === "Jio"
              ? "bg-[#5F259F] text-white"
              : "border-[#5F259F] text-[#5F259F]"}
              rounded px-4 py-1 text-[14px] font-bold flex-1`}
            onClick={() => handleProviderChange("Jio")}
          >
            <input
              type="radio"
              id="jio"
              name="provider"
              className="sr-only"
              checked={selectedProvider === "Jio"}
              onChange={() => {}}
            />
            Jio
          </button>

          <button
            className={`border-2 ${selectedProvider === "Airtel"
              ? "bg-[#5F259F] text-white"
              : "border-[#5F259F] text-[#5F259F]"}
              rounded px-4 py-1 text-[14px] font-bold flex-1`}
            onClick={() => handleProviderChange("Airtel")}
          >
            <input
              type="radio"
              id="airtel"
              name="provider"
              className="sr-only"
              checked={selectedProvider === "Airtel"}
              onChange={() => {}}
            />
            Airtel
          </button>

          <button
            className={`border-2 ${selectedProvider === "VI"
              ? "bg-[#5F259F] text-white"
              : "border-[#5F259F] text-[#5F259F]"}
              rounded px-4 py-1 text-[14px] font-bold flex-1`}
            onClick={() => handleProviderChange("VI")}
          >
            <input
              type="radio"
              id="vi"
              name="provider"
              className="sr-only"
              checked={selectedProvider === "VI"}
              onChange={() => {}}
            />
            VI
          </button>

          <button
            className={`border-2 ${selectedProvider === "Bsnl"
              ? "bg-[#5F259F] text-white"
              : "border-[#5F259F] text-[#5F259F]"}
              rounded px-4 py-1 text-[14px] font-bold flex-1`}
            onClick={() => handleProviderChange("Bsnl")}
          >
            <input
              type="radio"
              id="bsnl"
              name="provider"
              className="sr-only"
              checked={selectedProvider === "Bsnl"}
              onChange={() => {}}
            />
            Bsnl
          </button>
        </div>

        <div className="mt-3">
          <label htmlFor="mobile" className="text-[13px] ml-1 font-bold block">Mobile Number</label>
          <Input
            id="mobile"
            placeholder="+91 xxxxx xxxxx"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="mt-1 px-3 py-2 rounded-md text-base"
          />
          {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>

        <div className="mt-5">
          <Button
            onClick={handleRecharge}
            className="bg-[#5F259F] hover:bg-[#5F259F]/90 py-6 w-full text-[15px] rounded-xl font-bold text-white"
          >
            Recharge
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RechargeForm;
