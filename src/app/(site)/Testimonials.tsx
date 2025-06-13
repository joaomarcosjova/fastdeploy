import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const testimonials = [
  {
    name: "João Ferreira",
    rating: 5,
    text: "Lancei minha startup em apenas um dia e fiz meus primeiros $100 online! A configuração foi simples, <span class='font-bold text-yellow-400'>eu estava com tudo funcionando mais rápido</span> do que jamais imaginei.",
    role: "Criador",
    avatar:
      "https://pbs.twimg.com/profile_images/1784563357300740096/2DyzEa9d_400x400.jpg",
  },
  {
    name: "Leonardo",
    rating: 5,
    text: "Chega de pensar demais ou configurar infinitamente <span class='font-bold text-green-400'>É só clonar, ajustar e lançar.</span> FastDeploy tornou tudo fluido e sem estresse!",
    role: "Fundador",
    avatar:
      "https://pbs.twimg.com/profile_images/1804234365817212928/n077GepN_400x400.jpg",
  },
  {
    name: "Gabriel",
    text: "FastDeploy é, sem dúvida, <span class='font-bold text-blue-400'>o melhor boilerplate open-source para SaaS!</span> É a base ideal para startups que querem agir rápido e romper barreiras.",
    role: "Desenvolvedor",
    avatar:
      "https://pbs.twimg.com/profile_images/1757317042644918272/z22hY3Ji_400x400.jpg",
  },
  {
    name: "Yuri Gouveia",
    rating: 4,
    text: "Sem o FastDeploy, eu ainda estaria lutando com Stripe e configurações de email! <span class='font-bold text-purple-400'>Economizou inúmeras horas</span> e me permitiu escalar com facilidade. ⚡️",
    role: "Empreendedor",
    avatar:
      "https://pbs.twimg.com/profile_images/1761628238323802112/pXIc00nu_400x400.jpg",
  },
  {
    name: "Mateus Moreira",
    text: "Lancei com o boilerplate do FastDeploy e <span class='font-bold text-pink-400'>conquistei 5 novos clientes</span>! Obrigado @FastDeploy",
    role: "Fundador",
    avatar:
      "https://pbs.twimg.com/profile_images/1865828164947099648/v0SAw6WI_400x400.jpg",
  },
  {
    name: "Tiago Fernandes",
    rating: 5,
    text: "Usei o FastDeploy para construir meu SaaS e, <span class='font-bold text-orange-400'>em apenas duas semanas, já tinha meu primeiro MRR.</span> Facilitou tudo 10x.",
    role: "Criador",
    avatar:
      "https://pbs.twimg.com/profile_images/1854135042152247311/9u2s6TX__400x400.jpg",
  },
  {
    name: "Sara Almeida",
    rating: 4,
    text: "O FastDeploy me ajudou a <span class='font-bold text-teal-400'>transformar minha ideia em realidade</span> em tempo recorde. O suporte da comunidade é incrível!",
    role: "Construtora independente",
    avatar:
      "https://pbs.twimg.com/profile_images/1878117566222041088/_AtC29wQ_400x400.jpg",
  },
  {
    name: "Alex Costa",
    text: "Como desenvolvedor solo, o FastDeploy foi um divisor de águas. <span class='font-bold text-indigo-400'>Lancei dois produtos</span> só no último mês!",
    role: "Desenvolvedor Full-Stack",
    avatar:
      "https://pbs.twimg.com/profile_images/1830918748439506958/E4cv0RQf_400x400.jpg",
  },
  {
    name: "Emílio Mittov",
    rating: 5,
    text: "O boilerplate do FastDeploy me salvou <span class='font-bold text-red-400'>semanas de desenvolvimento</span>. Agora posso focar em crescer minha base de usuários em vez de brigar com o código.",
    role: "Fundador de SaaS",
    avatar:
      "https://pbs.twimg.com/profile_images/1884948973007319040/JYnP4PK2_400x400.jpg",
  },
];

  return (
    <div
      id="wall-of-love"
      className="min-h-screen bg-[#0F0F0F] text-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            1209 criadores criaram ferramentas <br /> de IA, SaaS e muito mais
          </h1>
          <p className="text-gray-400 text-lg">
            Ganharam o seu primeiro dinheiro online e alguns até deixaram o emprego!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-[1.4px] border-zinc-800 p-6 flex flex-col"
            >
              <div className="flex-grow">
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                )}

                <p
                  className="text-gray-300 mb-6"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                ></p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-700 mt-auto">
                <Avatar>
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-base text-zinc-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
