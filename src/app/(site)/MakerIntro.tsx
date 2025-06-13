export default function MakerIntro() {
  return (
    <div className="bg-[#212121] mb-8 text-gray-300 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative w-[200px] h-[200px] flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg flex flex-col items-center justify-center p-6 text-center"
              style={{ backgroundImage: "url('/face.jpg')" }}
            ></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-white">
              Lance sua ideia mais rápido 🚀
            </h1>
            <p className="text-base">
             Estávamos cansados ​​de passar semanas configurando em vez de realmente
            desenvolver. Cada projeto parecia um déjà vu — configurando a autenticação,
            configurando o Stripe, lidando com a entregabilidade de e-mails...
            </p>
            <p className="text-base">
              Então nós construímos{" "}
              <a
                href="#"
                className="text-white hover:text-gray-200 underline underline-offset-2"
              >
                FastDeploy
              </a>{" "}
              na <strong>Kadosh Softwares</strong> para remover esses obstáculos e ajudar
              os fundadores a lançar mais rápido.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-base">We created ShipFree for 3 reasons:</p>

          <ol className="space-y-4 list-decimal list-inside">
            <li className="text-base">
              <span className="font-semibold text-white">Economize tempo - </span> 
              pule a configuração repetitiva e comece a construir imediatamente.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">Evite dores de cabeça - </span> 
             chega de dificuldades com entrega de e-mails, pagamentos ou autenticação.
            </li>
            <li className="text-base">
              <span className="font-semibold text-white">
                Obtenha lucro mais rápido - 
              </span>
              quanto mais rápido você enviar, mais rápido você validará e ganhará.
            </li>
          </ol>

          <p className="text-base">
            Vários fundadores usaram o FastDeploy para{" "}
            <a
              href="#"
              className="text-white hover:text-gray-200 underline underline-offset-2"
            >
              lançar, conquistar clientes e gerar receita
            </a>
            - Role para baixo para ver o que eles dizem! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
