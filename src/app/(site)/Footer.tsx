export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0F0F0F] px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                ⚡ FastDeploy
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito,
               para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
               (S.Joao.3:16) </p>
            <div className="inline-flex items-center gap-2 rounded-md border border-zinc-500 bg-zinc-800/50 px-4 py-2 text-xs text-zinc-400">
              Built with ⚡ FastDeploy
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              🚀 Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#pricing" className="text-zinc-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/idee8/shipfree"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://shipfree.idee8.agency/docs"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              📜 Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/tos"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Terms of Servise
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/licenses"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </div>

          {/* By the Creator Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-zinc-400">
              🌎 By Kadosh Team
            </h3>
            <ul className="space-y-3 text-sm">
              {/* {["idee8.agency", "React AI", "Code Mentor"].map((item) => ( */}
              <li>
                <a
                  href="https://idee8.agency"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Idee8
                </a>
              </li>
              <li>
                <a
                  href="https://codementor.idee8.agency"
                  className="text-zinc-400 hover:text-white"
                  target="_blank"
                >
                  Code Mentor
                </a>
              </li>
              <li>
                <a
                  href="https://reactai.idee8.agency"
                  className="text-zinc-400 hover:text-white"
                  target="_blank"
                >
                  React AI
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © FastDeploy. All Rights Reserved. {" "}
          <a
            href="https://kadoshsoftwares.com"
            className="text-zinc-400 hover:text-white"
          >
            Kadosh Softwares
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
