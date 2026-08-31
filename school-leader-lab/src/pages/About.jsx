import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Target, Eye, Heart, Shield, Award, Calendar } from 'lucide-react'

const timeline = [
  { year: '2018', title: 'Fondation', desc: 'Création de 3 Rings School Of Circus Arts à Seattle, WA, avec pour mission de promouvoir l\'excellence et le développement des arts du cirque.' },
  { year: '2019', title: 'Première certification', desc: 'Lancement du programme de formation acrobatique avancé, accrédité par les autorités de tutelle de l\'État de Washington.' },
  { year: '2020', title: 'Partenariat National', desc: 'Obtention de partenariats majeurs avec les fédérations nationales de spectacles et des arts vivants.' },
  { year: '2022', title: 'Expansion nationale', desc: 'Déploiement des programmes dans 30 États américains. Plus de 500 artistes et professionnels formés.' },
  { year: '2024', title: 'Agrément fédéral', desc: 'Obtention de l\'EIN fédéral 47-4079081 et reconnaissance officielle comme organisation 501(c)(3) à but non lucratif.' },
  { year: '2026', title: 'Leader national', desc: '3 Rings School Of Circus Arts compte plus de 1 200 alumni dans 48 États, devenant une référence nationale dans les arts du cirque.' },
]

const values = [
  { icon: Target, title: 'Excellence', desc: 'Nous visons l\'excellence dans chaque discipline, chaque spectacle et chaque accompagnement personnalisé.' },
  { icon: Eye, title: 'Innovation', desc: 'Intégration des techniques modernes d\'entraînement et de sécurité pour préparer les artistes aux défis de la scène actuelle.' },
  { icon: Heart, title: 'Accessibilité', desc: 'Nous croyons que chaque talent, quel que soit son parcours ou son origine, mérite une formation artistique de premier plan.' },
  { icon: Shield, title: 'Intégrité', desc: 'Transparence totale sur notre statut, nos agréments (EIN 47-4079081) et nos résultats.' },
]

function About() {
  return (
    <>
      <Helmet>
        <title>À propos — 3 Rings School Of Circus Arts</title>
        <meta name="description" content="Découvrez l\'histoire de 3 Rings School Of Circus Arts, institution américaine fondée en 2018 à Seattle, WA. EIN 47-4079081. Organisation 501(c)(3) dédiée aux arts du cirque." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À propos de 3 Rings School Of Circus Arts</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Institution américaine accréditée dédiée au développement des arts du cirque et de la performance depuis 2018.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre histoire</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">3 Rings School Of Circus Arts a été fondée en 2018 à Seattle, WA, par un collectif d'artistes de cirque, metteurs en scène et pédagogues convaincus que la maîtrise technique et la créativité sont indissociables.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Face à l'évolution des arts vivants aux États-Unis, nous avons identifié un besoin critique : offrir aux artistes et professionnels de la scène des formations continues de haut niveau, ancrées dans la rigueur sécuritaire et artistique.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Depuis notre création, nous avons formé plus de 1 200 professionnels dans 48 États américains. Notre organisation, enregistrée sous l\'EIN fédéral <strong>47-4079081</strong>, est reconnue comme organisation à but non lucratif 501(c)(3) par l\'Internal Revenue Service.</p>
                <p className="text-slate-600 leading-relaxed">Notre siège administratif est situé au <strong>3256 39th Ave Sw, Seattle, WA 98116-3414, United States</strong>. Nous opérons principalement en mode hybride, combinant modules théoriques en ligne et résidences d'entraînement dans nos espaces partenaires à travers le pays.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="/images/campus-classic.png" alt="Campus 3 Rings School Of Circus Arts" className="w-full h-56 object-cover" />
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Informations institutionnelles</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Nom légal :</span><p className="text-slate-600">3 Rings School Of Circus Arts</p></div></li>
                  <li className="flex items-start gap-3"><Award className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">EIN fédéral :</span><p className="text-slate-600 font-mono">47-4079081</p></div></li>
                  <li className="flex items-start gap-3"><Calendar className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Année de fondation :</span><p className="text-slate-600">2018</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Statut juridique :</span><p className="text-slate-600">Organisation 501(c)(3) à but non lucratif</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Adresse administrative :</span><p className="text-slate-600">3256 39th Ave Sw, Seattle, WA 98116-3414, United States</p></div></li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" /><div><span className="font-semibold text-slate-900">Domaine officiel :</span><p className="text-slate-600">3ringsschoolofcircusarts.sbs</p></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <SectionHeader title="Nos valeurs fondamentales" subtitle="Les principes qui guident chacune de nos actions et chacun de nos programmes." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4"><v.icon className="w-5 h-5 text-primary-700" /></div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Notre parcours" subtitle="Les étapes clés qui ont façonné 3 Rings School Of Circus Arts depuis sa fondation en 2018." />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-8 pb-8 last:pb-0 border-l-2 border-primary-200 last:border-transparent">
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full mb-2">{item.year}</span>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <img src="/images/school-exterior.png" alt="Établissement partenaire 3 Rings School Of Circus Arts" className="w-full h-80 object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre impact national</h2>
              <p className="text-slate-600 leading-relaxed mb-6">De la côte Est à la côte Ouest, 3 Rings School Of Circus Arts accompagne les artistes et compagnies dans leur quête d'excellence. Nos programmes s'adaptent aux réalités de chaque troupe, école de cirque et centre culturel.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Nous collaborons activement avec les institutions artistiques et maintenons des partenariats solides avec plus de 80 structures à travers le pays.</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">48</div>
                  <div className="text-xs text-slate-500">États</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">80+</div>
                  <div className="text-xs text-slate-500">Partenaires</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 text-center">
                  <div className="text-2xl font-bold text-primary-700">1,200+</div>
                  <div className="text-xs text-slate-500">Alumni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
