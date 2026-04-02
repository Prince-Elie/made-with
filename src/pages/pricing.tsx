import React from 'react';
import Head from 'next/head';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents7 from '../components/custom-components/IndexSectionCustomComponents7';

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Parfait pour commencer à explorer GSAP.',
    features: [
      '10 effets accessibles',
      'Aperçu en ligne',
      'Documentation de base',
      'Mises à jour communautaires',
    ],
    cta: 'Commencer gratuitement',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'par mois',
    description: 'Accès complet à toute la collection.',
    features: [
      '60+ effets en accès total',
      'Code source téléchargeable (ZIP)',
      'Tutoriels étape par étape',
      'Nouveaux effets chaque semaine',
      'Support prioritaire',
    ],
    cta: 'Commencer avec Pro',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$79',
    period: 'par mois',
    description: 'Pour les équipes qui bougent vite.',
    features: [
      'Tout ce qui est inclus dans Pro',
      'Jusqu\'à 5 membres',
      'Licence commerciale',
      'Accès anticipé aux nouveaux effets',
      'Onboarding dédié',
    ],
    cta: 'Contacter l\'équipe',
    highlight: false,
  },
];

const PricingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pricing — Made With GSAP</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/shuffle-for-bootstrap.png" />
      </Head>
      <IndexSectionCustomComponents1 />
      <main className="bg-white">
        <section className="bg-black text-white py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-heading text-6xl md:text-8xl leading-none tracking-tight mb-4">Pricing</h1>
            <p className="text-zinc-400 text-lg">Simple, transparent. Pas de surprise.</p>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col gap-6 ${
                  plan.highlight
                    ? 'bg-black text-white ring-2 ring-lime-400 scale-105'
                    : 'border border-zinc-200'
                }`}
              >
                {plan.highlight && (
                  <span className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full self-start">
                    Populaire
                  </span>
                )}
                <div>
                  <h2 className={`font-heading text-2xl ${plan.highlight ? 'text-white' : 'text-black'}`}>{plan.name}</h2>
                  <p className={`text-sm mt-1 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.description}</p>
                </div>
                <div>
                  <span className="font-heading text-5xl">{plan.price}</span>
                  <span className={`text-sm ml-2 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={plan.highlight ? 'text-zinc-300' : 'text-zinc-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`text-center font-medium px-6 py-3 rounded-full transition-colors ${
                    plan.highlight
                      ? 'bg-lime-400 text-black hover:bg-lime-300'
                      : 'border border-zinc-300 text-black hover:border-black'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-50 border-t border-zinc-200">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl mb-4">Questions fréquentes</h2>
            <div className="space-y-6 text-left mt-10">
              {[
                { q: 'Puis-je annuler à tout moment ?', a: 'Oui, sans engagement. Votre accès reste actif jusqu\'à la fin de la période facturée.' },
                { q: 'Les effets sont-ils compatibles avec React/Next.js ?', a: 'Absolument. Chaque effet inclut un exemple vanilla JS + des notes pour l\'intégration dans des frameworks modernes.' },
                { q: 'Les mises à jour sont-elles incluses ?', a: 'Oui. Tous les nouveaux effets ajoutés pendant votre abonnement sont automatiquement disponibles.' },
                { q: 'Y a-t-il une licence commerciale ?', a: 'Le plan Team inclut une licence commerciale complète. Les plans Free et Pro sont pour usage personnel et projets clients.' },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-zinc-200 pb-6">
                  <h3 className="font-medium text-black mb-2">{q}</h3>
                  <p className="text-zinc-500 text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <IndexSectionCustomComponents7 />
    </>
  );
};

export default PricingPage;
