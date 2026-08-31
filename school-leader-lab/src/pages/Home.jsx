import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'
import { BookOpen, Users, Calendar, Award, ArrowRight, Shield, MapPin } from 'lucide-react'

const programs = [
  { icon: BookOpen, title: 'Arts du cirque & performance', desc: 'Certification pour artistes professionnels et entraîneurs souhaitant perfectionner leurs techniques acrobatiques, aériennes et la mise en scène.', image: '/images/leadership-meeting.png' },
  { icon: Users, title: 'Gestion numérique & production', desc: 'Formation complète à l\'administration des plateformes numériques, gestion des plannings de tournée et déploiement d\'outils de gestion pour compagnies.', image: '/images/classroom-tech.png' },
  { icon: Award, title: 'Sécurité scénique & gestion des risques', desc: 'Ateliers pratiques sur la sécurité des équipements aériens, la gestion des risques sous chapiteau et les normes de conformité réglementaire.', image: '/images/workshop-conference.png' },
  { icon: Calendar, title: 'Data-driven tour management', desc: 'Utilisation des données de billetterie et de public pour optimiser les tournées, évaluer la rentabilité des spectacles et satisfaire aux subventions.', image: '/images/classroom-lab.png' },
]

const features = [
  { title: 'Agrément fédéral confirmé', desc: 'Organisation enregistrée auprès des autorités fédérales américaines avec l\'EIN 47-4079081. Statut 501(c)(3) à but non lucratif.' },
  { title: 'Formations certifiantes', desc: 'Nos programmes délivrent des certifications reconnues par les compagnies de cirque, les écoles spécialisées et les fédérations à travers les États-Unis.' },
  { title: 'Réseau national', desc: 'Plus de 1 200 artistes et professionnels formés à travers les États-Unis. Un réseau actif de passionnés engagés dans le renouveau des arts circassiens.' },
]

function Home() {
  return (
    <>
      <Helmet>
        <title>3 Rings School Of Circus Arts — Excellence & Formation aux Arts du Cirque</title>
        <meta name="description" content="3 Rings School Of Circus Arts, institution américaine accréditée (EIN 47-4079081). Formation professionnelle aux arts du cirque, sécurité scénique, gestion de tournée. 3256 39th Ave Sw, Seattle, WA 98116-3414." />
      </Helmet>
      <Hero />
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="container-main px-4 py-3 text-center text-sm text-amber-800">
          <Shield className="w-4 h-4 inline-block mr-1 mb-0.5" />
          <strong>Informations institutionnelles :</strong> 3 Rings School Of Circus Arts — EIN 47-4079081 — Organisation 501(c)(3) —
          <MapPin className="w-3 h-3 inline-block mx-1" />3256 39th Ave Sw, Seattle, WA 98116-3414 —
          <a href="mailto:admin@3ringsschoolofcircusarts.sbs" className="underline ml-1">admin@3ringsschoolofcircusarts.sbs</a>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Nos programmes de formation" subtitle="Des parcours certifiants conçus pour les artistes, entraîneurs, régisseurs et directeurs de compagnie souhaitant exceller dans les arts du cirque." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="group p-6 rounded-xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all bg-white">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <p.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                <Link to="/academics" className="inline-flex items-center text-sm font-medium text-primary-700 hover:text-primary-800">En savoir plus <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-slate-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pourquoi choisir 3 Rings School Of Circus Arts ?</h2>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0 mt-1"><span className="text-white text-sm font-bold">{i + 1}</span></div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{f.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">Découvrir notre histoire<ArrowRight className="w-4 h-4 ml-2" /></Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <img src="/images/campus-classic.png" alt="Campus 3 Rings School Of Circus Arts" className="w-full h-64 object-cover" />
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-primary-700 mb-2">94%</div>
                  <p className="text-slate-600">de nos participants obtiennent leur certification</p>
                </div>
                <div className="space-y-4">
                  {[{l:'Satisfaction globale',v:96},{l:'Recommandation aux pairs',v:92},{l:'Insertion professionnelle',v:89}].map((s,i)=> (
                    <div key={i}>
                      <div className="flex justify-between text-sm"><span className="text-slate-600">{s.l}</span><span className="font-semibold text-slate-900">{s.v}%</span></div>
                      <div className="w-full bg-slate-100 rounded-full h-2"><div className="bg-primary-600 h-2 rounded-full" style={{width: s.v+'%'}}></div></div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-6 text-center">Données 2025-2026 — 3 Rings School Of Circus Arts (EIN 47-4079081)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm order-2 lg:order-1">
              <img src="/images/graduation-group.png" alt="Promotion certifiée 3 Rings School Of Circus Arts" className="w-full h-80 object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Rejoignez notre réseau d'alumni</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Plus de 1 200 artistes et professionnels formés à travers les États-Unis. Notre communauté alumni est un réseau actif de professionnels qui partagent leurs expériences, leurs défis techniques et leurs tournées au quotidien.</p>
              <p className="text-slate-600 leading-relaxed mb-8">Chaque année, nous organisons le rassemblement national 3 Rings à Seattle, WA, où nos alumni se réunissent pour échanger, s'entraîner et célébrer leurs spectacles.</p>
              <Link to="/student-life" className="btn-primary">Découvrir la vie communautaire<ArrowRight className="w-4 h-4 ml-2" /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à perfectionner votre art et votre carrière ?</h2>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto mb-8">Rejoignez plus de 1 200 artistes formés par 3 Rings School Of Circus Arts. Notre prochaine session débute bientôt.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">Commencer ma candidature</Link>
            <Link to="/contact" className="btn-secondary bg-white/10 text-white border border-white/20 hover:bg-white/20">Contacter le secrétariat</Link>
          </div>
          <p className="text-xs text-primary-300 mt-6">3 Rings School Of Circus Arts — EIN 47-4079081 — 3256 39th Ave Sw, Seattle, WA 98116-3414 — <a href="mailto:admin@3ringsschoolofcircusarts.sbs" className="underline ml-1">admin@3ringsschoolofcircusarts.sbs</a></p>
        </div>
      </section>
      <Newsletter />
    </>
  )
}

export default Home
