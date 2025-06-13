"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O que recebo exatamente?",
    answer:
      "O iniciador do NextJS vem com todo o código boilerplate necessário para administrar um negócio online, incluindo sistema de pagamento, banco de dados, login, blog, componentes de interface do usuário e muito mais. O repositório está disponível nas versões JavaScript e TypeScript, com suporte tanto para o /app router quanto para o /pages router. A documentação detalhada ajuda você a configurar seu aplicativo do zero, escrever textos que vendem e realizar entregas com rapidez.",
  },
  {
    question: "Minha tech stack é diferente, ainda posso usar?",
    answer:
      "Sim, desde que se sinta confortável com o React e o NextJS. As bibliotecas são independentes. Pode utilizar o SendGrid em vez do Mailgun, o LemonSqueezy em vez do Stripe ou o Postgres em vez do MongoDB, por exemplo.",
  },
  {
    question: "Funciona com ferramentas de IA?",
    answer:
      "Não funciona apenas com IA, como também foi criado para ela. O FastDeploy vem com uma base de código completa, o que dá ao seu editor de código de IA um contexto real para criar recursos completos em segundos. Pode simplesmente pedir à sua IA para criar o recurso de que necessita, e ela irá gerar o código para si, utilizando a convenção de nomenclatura, a estrutura de ficheiros e as melhores práticas a que está habituado.",
  },
  {
    question: "É um modelo de website?",
    answer:
      "É mais do que apenas um modelo. Você pode copiar e colar seções para criar seu site rapidamente, como uma seção de preços, uma seção de perguntas frequentes e até mesmo um blog inteiro. Você também obtém diversos componentes de interface do usuário, como botões, modais, pop-ups, etc. O NextJS também inclui ferramentas úteis que você precisa para administrar um negócio online — processamento de pagamentos, e-mails, SEO, etc.",
  },
  {
    question: "FastDeploy inclui um banco de dados?",
    answer: "Sim! O FastDeploy oferece suporte nativo ao MongoDB e ao Supabase, prontos para uso.",
  },
  {
    question: "O FastDeploy é melhor do que ferramentas de IA como Lovable ou Bolt?",
    answer:
      "Lovable e Bolt são ótimas ferramentas se você quer criar uma landing page rapidamente. Mas elas não ajudam a lançar uma startup. O FastDeploy é um boilerplate completo para startups. Ele vem com um sistema de pagamento, um banco de dados, login, componentes de interface de usuário testados e comprovados e muito mais. Ele dá ao seu editor de código de IA contexto real para criar recursos completos em segundos. Reutilize o ShipFast em todos os projetos para não perder tempo reaprendendo uma nova configuração.",
  },
  {
    question: "Can I contribute to FastDeploy?",
    answer:
      "FastDeploy is open-source—we welcome contributions from developers worldwide.",
  },

  {
    question: "Existe algum custo extra?",
    answer:
      "Muitas plataformas de hospedagem, como a Vercel, permitem hospedar um projeto gratuitamente (front-end + back-end), e o MongoDB/Supabase oferece planos gratuitos — assim, você pode lançar o primeiro aplicativo por US$ 0/mês. Se você usar o cadastro do Magic Link, gastará US$ 1 por 1.000 usuários.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen bg-[#0F0F0F] px-4 py-12 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-medium text-white">
          Perguntas frequentes
        </h2>
        <p className="mb-12 text-center text-base text-zinc-500">
          Tem alguma outra dúvida? Entre em contato pelo {" "}
          <a
            href="mailto:info@kadoshsoftwares.com"
            target="_blank"
            className="text-zinc-200 hover:text-yellow-500 underline"
          >
            Email
          </a> {" "}
          ou {" "}
          <a
            href="https://wa.me/918699097087"
            target="_blank"
            className="text-zinc-200 hover:text-green-500 underline"
          >
             WhatsApp
          </a>
          .
        </p>

        <div className="space-y-[2px]">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between bg-zinc-900/50 px-6 py-4 text-left transition-colors hover:bg-zinc-900"
              >
                <span className="text-[16px] font-medium text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700">
                  <PlusIcon
                    className={`h-3 w-3 text-white transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-zinc-900/30 px-6 py-4 text-base text-zinc-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
