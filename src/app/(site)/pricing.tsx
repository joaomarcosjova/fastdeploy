"use client";

import { Check } from "lucide-react";
import type React from "react";

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="min-h-screen bg-[#0F0F0F] text-white px-4 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FFBE18] font-medium mb-4">Preços</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
           Economize horas de código repetitivo,
          <br />
          entregue rápido e obtenha lucro!
          </h2>
          <p className="text-green-500 flex items-center justify-center gap-2">
            <span className="inline-block">🎉</span>
            100% grátis para sempre!
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-xl bg-zinc-900 p-6 border border-green-500/50 relative">
            <div className="absolute -top-3 right-6 bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
              Grátis
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Edition</h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-xl line-through text-gray-500">$125</span>
                <span className="text-6xl font-bold">0</span>
                <span className="text-zinc-500">USD</span>
              </div>
              <p className="text-green-500 text-sm mt-2">
               Grátis para sempre, sem cartão de crédito.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Feature>NextJS boilerplate</Feature>
              <Feature>SEO & Blog</Feature>
              <Feature>Mailgun emails</Feature>
              <Feature>Stripe / Lemon Squeezy</Feature>
              <Feature>MongoDB / Supabase</Feature>
              <Feature>Google OAuth & Magic Links</Feature>
              <Feature>Componentes e animações</Feature>
              <Feature>ChatGPT solicita termos e privacidade</Feature>
              <Feature>Atualizações regulares</Feature>
            </div>

            <button
              onClick={() =>
                window.open("https://github.com/joaomarcosjova/fastdeploy/", "_blank")
              }
              className="w-full bg-green-500 hover:bg-green-400 transition-colors text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2"
            >
              <span>⚡</span> Comece agora
            </button>
            <p className="text-center text-zinc-500 text-sm mt-4">
              Junte-se a milhares de desenvolvedores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span className="text-zinc-300">{children}</span>
    </div>
  );
}
