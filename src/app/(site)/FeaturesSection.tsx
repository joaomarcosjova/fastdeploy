import {
  Mail,
  CreditCard,
  User,
  Database,
  FileJson,
  Paintbrush,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function FeaturesSection() {
  const features = [
  {
    id: "emails",
    icon: Mail,
    label: "Emails",
    content: {
      title: "Integração de Email",
      features: [
        "Modelos de email transacionais",
        "Fluxo de verificação de email",
        "Assinatura de newsletter",
        "Emails de boas-vindas automatizados",
        "Domínios de email personalizados",
        "Painel de análise de emails",
      ],
      timeSaved: "4 horas",
    },
  },
  {
    id: "payments",
    icon: CreditCard,
    label: "Pagamentos",
    content: {
      title: "Processamento de Pagamentos",
      features: [
        "Integração com Stripe",
        "Gerenciamento de assinaturas",
        "Faturamento baseado em uso",
        "Geração de faturas",
        "Análise de pagamentos",
        "Gestão de reembolsos",
      ],
      timeSaved: "6 horas",
    },
  },
  {
    id: "login",
    icon: User,
    label: "Login",
    content: {
      title: "Autenticação",
      features: [
        "Integração com login social",
        "Autenticação em dois fatores",
        "Fluxo de redefinição de senha",
        "Gerenciamento de sessões",
        "Controle de acesso baseado em papéis",
        "Autenticação com JWT",
      ],
      timeSaved: "5 horas",
    },
  },
  {
    id: "database",
    icon: Database,
    label: "Base de Dados",
    content: {
      title: "Configuração de Banco de Dados",
      features: [
        "Design de esquema",
        "Ferramentas de migração de dados",
        "Automação de backups",
        "Otimização de consultas",
        "Validação de dados",
        "Sincronização em tempo real",
      ],
      timeSaved: "7 horas",
    },
  },
  {
    id: "seo",
    icon: FileJson,
    label: "SEO",
    content: {
      title: "SEO",
      features: [
        "Estrutura completa de blog (exemplo)",
        "Todas as meta tags para ranquear no Google",
        "Tags OpenGraph para compartilhamento em redes sociais",
        "Geração automática de sitemap para acelerar indexação no Google",
        "Marcação de dados estruturados para Rich Snippets",
        "Componentes de UI otimizados para SEO",
      ],
      timeSaved: "8 horas",
    },
  },
  {
    id: "style",
    icon: Paintbrush,
    label: "Style",
    content: {
      title: "Sistema de Estilização",
      features: [
        "Configuração do Tailwind",
        "Suporte a modo escuro",
        "Componentes responsivos",
        "Biblioteca de animações",
        "Sistema de temas personalizados",
        "Tokens de design",
      ],
      timeSaved: "5 horas",
    },
  },
  {
    id: "more",
    icon: MoreHorizontal,
    label: "Mais",
    content: {
      title: "Funcionalidades Adicionais",
      features: [
        "Limitação de taxa de API",
        "Rastreamento de erros",
        "Monitoramento de performance",
        "Testes automatizados",
        "Pipeline de CI/CD",
        "Documentação",
      ],
      timeSaved: "4 horas",
    },
  },
];


  return (
    <div className="bg-[#212121] min-h-screen text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Turbine seu aplicativo, <br /> inicie e ganhe mais rápido 
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Faça login, processe pagamentos e envie e-mails na velocidade da luz. 
            Dedique seu tempo à construção da sua startup, não à integração de APIs.
          </p>
        </div>

        <Tabs defaultValue="seo" className="w-full">
          <TabsList className="h-auto flex flex-wrap justify-center gap-4 bg-transparent mb-8 bg-zinc-900">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-zinc-800 rounded-lg"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm text-white">{feature.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="space-y-8"
            >
              <div className="space-y-6">
                {feature.content.features.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-4">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-lg">
                    <span className="text-green-500">Tempo economizado: </span>
                    <span className="text-green-500">
                      {feature.content.timeSaved}
                    </span>
                  </span>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
