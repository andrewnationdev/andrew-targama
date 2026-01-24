export default function AboutPage(){
    return (
        <div className="min-h-screen py-12 px-4 sm:px-8 bg-slate-700">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl text-white font-bold mb-6">Sobre o Targama</h1>

                <div className="bg-slate-800/40 p-6 rounded-lg shadow-sm text-slate-200">
                    <p className="mb-4">
                        O Targama é uma aplicação de tradução pensada para ser rápida, simples e prática.
                        Ela oferece traduções diretamente na interface, permite salvar traduções favoritas
                        localmente no navegador e prioriza uma experiência limpa e responsiva em dispositivos móveis e desktop.
                    </p>

                    <h2 className="text-lg text-white font-semibold mt-4 mb-2">Recursos</h2>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                        <li>Tradução de texto com detecção automática de idioma.</li>
                        <li>Seleção de idioma de destino com suporte a várias línguas.</li>
                        <li>Salvar e gerenciar traduções favoritas no armazenamento local.</li>
                        <li>Layout responsivo e design minimalista.</li>
                    </ul>

                    <h2 className="text-lg text-white font-semibold mt-4 mb-2">Privacidade e dados</h2>
                    <p className="mb-4">Favoritos são armazenados localmente no seu navegador; o aplicativo não compartilha esses dados automaticamente.</p>

                    <h2 className="text-lg text-white font-semibold mt-4 mb-2">Tecnologia</h2>
                    <p className="mb-0">Construído com Next.js, Tailwind CSS e integrações de APIs de tradução para fornecer respostas rápidas e confiáveis.</p>
                </div>
            </div>
        </div>
    )
}