import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { BookOpen, Monitor, Users, BarChart3, Globe, Clock, CheckCircle } from 'lucide-react'

const programs = [
  {
    title: 'Certification Arts du Cirque & Performance Avancée', level: 'Niveau avancé', duration: '6 mois', format: 'Hybride',
    description: 'Programme phare de 3 Rings School Of Circus Arts conçu pour les artistes professionnels, entraîneurs et directeurs de troupes. Couvre la rigueur technique, la sécurité des équipements aériens, la mise en scène et la gestion de projets artistiques.',
    modules: ['Gouvernance et sécurité des disciplines aériennes et acrobatiques', 'Innovation artistique et mise en scène contemporaine', 'Gestion budgétaire et production de spectacles', 'Communication institutionnelle et relations avec les salles de spectacles', 'Évaluation et perfectionnement technique continu'],
  },
  {
    title: 'Gestion Numérique & Outils de Production Scénique', level: 'Niveau intermédiaire', duration: '3 mois', format: 'En ligne',
    description: 'Formation complète à l\'administration des outils numériques et collaboratifs pour les compagnies de cirque. Gestion des plannings, sécurité des données des artistes, déploiement logistique et conformité des tournées.',
    modules: ['Architecture et configuration des espaces de travail numériques', 'Gestion des utilisateurs, plannings et troupes', 'Sécurité des données et conformité des contrats', 'Collaboration et diffusion : outils de gestion de tournée', 'Support technique et gestion logistique des spectacles'],
  },
  {
    title: 'Sécurité Scénique et Gestion des Risques', level: 'Niveau avancé', duration: '2 mois', format: 'Présentiel intensif',
    description: 'Ateliers pratiques préparant les artistes et régisseurs à gérer les situations d\'urgence et les risques liés aux performances aériennes et acrobatiques tout en maintenant la sécurité des équipes et du public.',
    modules: ['Protocoles de sécurité et vérification du matériel d\'accroche', 'Communication d\'urgence avec les équipes techniques et les secours', 'Soutien psychologique et préparation mentale des artistes', 'Analyse de cas réels et simulations de spectacle', 'Gestion post-incident : inspection et reprise des représentations'],
  },
  {
    title: 'Data-Driven Tour Management pour Compagnies', level: 'Niveau intermédiaire', duration: '4 mois', format: 'Hybride',
    description: 'Maîtrise des outils d\'analyse pour optimiser les tournées, suivre la rentabilité des spectacles, identifier les tendances du public et satisfaire aux exigences des partenaires institutionnels.',
    modules: ['Collecte et structuration des données de billetterie et de tournée', 'Tableaux de bord et indicateurs de performance artistique (KPIs)', 'Analyse prédictive de l\'affluence et gestion des réservations', 'Rapports aux producteurs, conseils d\'administration et tutelles', 'Éthique des données et protection de la vie privée du public'],
  },
]

function Academics() {
  return (
    <>
      <Helmet>
        <title>Programmes de formation — 3 Rings School Of Circus Arts</title>
        <meta name="description" content="Découvrez les programmes certifiants de 3 Rings School Of Circus Arts : arts du cirque, formation acrobatique, gestion de production. EIN 47-4079081. Seattle, WA." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos programmes de formation</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Des parcours certifiants conçus par et pour les professionnels des arts du cirque, ancrés dans la rigueur de la scène américaine.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Catalogue des formations" subtitle="3 Rings School Of Circus Arts propose quatre programmes certifiants, chacun conçu pour répondre aux exigences du monde du cirque contemporain." />
          <div className="space-y-8">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary-50 text-primary-800 text-xs font-bold px-3 py-1 rounded-full">{p.level}</span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Clock className="w-3 h-3" />{p.duration}</span>
                    <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><Monitor className="w-3 h-3" />{p.format}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{p.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{p.description}</p>
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-3">Modules du programme</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {p.modules.map((m, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Notre pédagogie</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Apprentissage collaboratif</h3>
                <p className="text-sm text-slate-600">Cohorts de 15 à 20 artistes favorisant le partage d'expériences scéniques et de techniques entre professionnels.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><BarChart3 className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Approche par compétences</h3>
                <p className="text-sm text-slate-600">Chaque module vise des compétences mesurables et directement applicables sur scène et en tournée.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"><Globe className="w-6 h-6 text-primary-700" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">Outils numériques intégrés</h3>
                <p className="text-sm text-slate-600">Utilisation systématique d'outils de gestion de tournée, de tableaux de bord de production et de plateformes d'entraînement sécurisées.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academics
