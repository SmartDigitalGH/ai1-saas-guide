"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function EnrollPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#008792] mb-4">
          Enroll in The SaaS Business Guide
        </h1>
        <p className="text-lg text-center mb-10">
          Gain access to the complete guide, bonus templates, and exclusive founder insights. Brought to you by The AI1 Company.
        </p>

        <div className="flex justify-center mb-8">
          <iframe
            src="https://form.typeform.com/to/UuBnMVl3"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-xl border shadow-md"
            allowFullScreen
          ></iframe>
        </div>

        <section className="my-16">
          <h2 className="text-3xl font-semibold text-center text-[#008792] mb-6">
            What Founders Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["Lerato M.", "Kabelo T.", "Nomusa K.", "Themba D."].map((name, idx) => (
              <Card key={idx} className="shadow-lg">
                <CardContent className="p-6">
                  <p className="text-lg italic mb-2">
                    “Testimonial from {name} about working with AI1.”
                  </p>
                  <p className="font-semibold">— {name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <p className="text-sm text-center text-gray-500">
          Already signed up? Check your inbox for your access link. Questions? Contact us at hello@ai1.company
        </p>
      </div>
    </div>
  );
}
