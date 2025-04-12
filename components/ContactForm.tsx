"use client";

import type React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }));
  };

  return (
    <div className="pb-20 bg-black text-[#00E0FF]">
      <h2 className="text-2xl font-bold mb-6 text-[#00E0FF]">Work inquiries</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-[#00E0FF] text-[#00E0FF] 
                     rounded-tr-xl rounded-bl-xl focus:outline-none focus:shadow-[0_0_10px_rgba(0,224,255,0.5)] 
                     placeholder-[#00E0FF]/50 transition-all"
            required
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-[#00E0FF] text-[#00E0FF] 
                     rounded-tr-xl rounded-bl-xl focus:outline-none focus:shadow-[0_0_10px_rgba(0,224,255,0.5)] 
                     placeholder-[#00E0FF]/50 transition-all"
            required
          />
        </div>

        <div className="relative">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-[#00E0FF] text-[#00E0FF] 
                     rounded-tr-xl rounded-bl-xl focus:outline-none focus:shadow-[0_0_10px_rgba(0,224,255,0.5)] 
                     placeholder-[#00E0FF]/50 transition-all"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-[#00E0FF] text-[#00E0FF] 
                     rounded-tr-xl rounded-bl-xl focus:outline-none focus:shadow-[0_0_10px_rgba(0,224,255,0.5)] 
                     placeholder-[#00E0FF]/50 transition-all"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-[#00E0FF] text-[#00E0FF] 
                     rounded-tr-xl rounded-bl-xl focus:outline-none focus:shadow-[0_0_10px_rgba(0,224,255,0.5)] 
                     placeholder-[#00E0FF]/50 transition-all resize-none min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-4">
          <p className="font-medium text-[#00E0FF]">Budget</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "budget-1", value: "$75 - $1K" },
              { id: "budget-2", value: "$1K - $10K" },
              { id: "budget-3", value: "$10K - $50K" },
              { id: "budget-4", value: "More than $50K" },
            ].map((option) => (
              <div key={option.id} className="flex items-center gap-2">
                <div className="relative">
                  <input
                    type="radio"
                    id={option.id}
                    name="budget"
                    value={option.value}
                    checked={formData.budget === option.value}
                    onChange={() => handleBudgetChange(option.value)}
                    className="sr-only peer peer-checked:bg-[#00E0FF]/20 
                               peer-checked:shadow-[0_0_8px_rgba(0,224,255,0.6)]"
                  />
                  <div
                    className="h-5 w-5 border border-[#00E0FF] rounded-tr-md rounded-bl-md peer-checked:bg-[#00E0FF]/20 
                               peer-checked:shadow-[0_0_8px_rgba(0,224,255,0.6)] transition-all"
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-transparent peer-checked:text-[#00E0FF]">
                    {formData.budget === option.value && (
                      <div className="h-2 w-2 bg-[#00E0FF] rounded-tr-sm rounded-bl-sm"></div>
                    )}
                  </div>
                </div>
                <Label
                  htmlFor={option.id}
                  className="cursor-pointer text-[#00E0FF]"
                >
                  {option.value}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="relative bg-black text-[#00E0FF] border border-[#00E0FF] font-medium py-3 px-8 
                     rounded-tr-xl rounded-bl-xl hover:bg-[#00E0FF]/10 hover:shadow-[0_0_15px_rgba(0,224,255,0.6)] 
                     transition-all overflow-hidden group"
          >
            <span className="relative z-10">Let's work together</span>
            <span
              className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/0 via-[#00E0FF]/30 to-[#00E0FF]/0 
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            ></span>
          </button>
        </div>
      </form>
    </div>
  );
}
