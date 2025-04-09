"use client"

import type React from "react"

import { useState } from "react"
import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBudgetChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Work inquiries</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-gray-200 focus:border-[#00E0FF] focus:outline-none transition-colors"
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-gray-200 focus:border-[#00E0FF] focus:outline-none transition-colors"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-gray-200 focus:border-[#00E0FF] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-gray-200 focus:border-[#00E0FF] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border-b border-gray-200 focus:border-[#00E0FF] focus:outline-none transition-colors resize-none min-h-[100px]"
            required
          />
        </div>

        <div className="space-y-4">
          <p className="font-medium">Budget</p>
          <RadioGroup
            value={formData.budget}
            onValueChange={handleBudgetChange}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="budget-1"
                name="budget"
                value="$75 - $1K"
                checked={formData.budget === "$75 - $1K"}
                onChange={() => handleBudgetChange("$75 - $1K")}
                className="h-4 w-4 border-gray-300 text-[#00E0FF] focus:ring-[#00E0FF]"
              />
              <Label htmlFor="budget-1" className="cursor-pointer">
                $75 - $1K
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="budget-2"
                name="budget"
                value="$1K - $10K"
                checked={formData.budget === "$1K - $10K"}
                onChange={() => handleBudgetChange("$1K - $10K")}
                className="h-4 w-4 border-gray-300 text-[#00E0FF] focus:ring-[#00E0FF]"
              />
              <Label htmlFor="budget-2" className="cursor-pointer">
                $1K - $10K
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="budget-3"
                name="budget"
                value="$10K - $50K"
                checked={formData.budget === "$10K - $50K"}
                onChange={() => handleBudgetChange("$10K - $50K")}
                className="h-4 w-4 border-gray-300 text-[#00E0FF] focus:ring-[#00E0FF]"
              />
              <Label htmlFor="budget-3" className="cursor-pointer">
                $10K - $50K
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="budget-4"
                name="budget"
                value="More than $50K"
                checked={formData.budget === "More than $50K"}
                onChange={() => handleBudgetChange("More than $50K")}
                className="h-4 w-4 border-gray-300 text-[#00E0FF] focus:ring-[#00E0FF]"
              />
              <Label htmlFor="budget-4" className="cursor-pointer">
                More than $50K
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-6">
          <Button
            type="submit"
            className="bg-[#00E0FF] hover:bg-[#00c8e6] text-black font-medium py-3 px-8 rounded-md transition-colors"
          >
            Let's work together
          </Button>
        </div>
      </form>
    </div>
  )
}
