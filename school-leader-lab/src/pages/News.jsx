import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader.jsx'
import { Calendar, ArrowRight, User } from 'lucide-react'

const newsItems = [
  { date: '15 août 2026', title: '3 Rings School Of Circus Arts obtient l\'EIN fédéral 47-4079081', excerpt: 'Nous sommes fiers d\'annoncer l\'obtention officielle de notre numéro d\'identification fiscale fédéral (EIN 47-4079081), consolidant notre statut d\'organisation à but non lucratif 501(c)(3) dédiée aux arts du cirque.', author: 'Marc Lemaire', category: 'Institution' },
  { date: '3 juillet 2026', title: 'Lancement de la cohorte d\'automne 2026', excerpt: 'Les inscriptions sont ouvertes pour notre prochaine session de formation. Quatre programmes certifiants disponibles, dont le nouveau module avancé sur les techniques aériennes et la sécurité scénique.', author: 'Sophie Bernard', category: 'Admissions' },
  { date: '22 juin 2026', title: '94% de réussite à la certification pour la promotion 2026', excerpt: 'Les résultats de la session de printemps 2026 confirment l\'excellence de nos formations avec un taux de certification de 94% et une satisfaction globale de 96%.', author: 'Dr. Karim Mansouri', category: 'Résultats' },
  { date: '10 mai 2026', title: 'Nouveau partenariat avec l\'école nationale de cirque partenaire', excerpt: '3 Rings School Of Circus Arts signe un accord de partenariat triennal pour offrir des bourses d\'études aux jeunes artistes indépendants.', author: 'Lucas Vasseur', category: 'Partenariats' },
  { date: '18 avril 2026', title: 'Mise à jour de la politique de confidentialité et des règles de sécurité', excerpt: 'Conformément aux exigences fédérales et aux normes de sécurité sous chapiteau, nous avons actualisé nos protocoles de formation et notre politique de protection des données.', author: 'Claire Delorme', category: 'Juridique' },
]

function News() {
  return (
    <>
      <Helmet>
        <title>Actualités — 3 Rings School Of Circus Arts</title>
        <meta name="description" content="Actualités et annonces de 3 Rings School Of Circus Arts. EIN 47-4079081. Programmes, résultats, partenariats et vie institutionnelle." />
      </Helmet>
      <div className="bg-primary-900 text-white py-16">
        <div className="container-main px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">Les dernières nouvelles de 3 Rings School Of Circus Arts : programmes, résultats, partenariats et annonces institutionnelles.</p>
        </div>
      </div>
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeader title="Nos dernières annonces" subtitle="Restez informé de l'actualité de l'école et de l'évolution de nos programmes de formation aux arts du cirque." />
          <div className="max-w-3xl mx-auto space-y-6">
            {newsItems.map((news, i) => (
              <article key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded-full">{news.category}</span>
                  <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" />{news.date}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary-700 transition-colors cursor-pointer">{news.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-4">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1"><User className="w-3 h-3" />Par {news.author}</span>
                  <button className="text-sm font-medium text-primary-700 hover:text-primary-800 flex items-center gap-1">Lire la suite <ArrowRight className="w-4 h-4" /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
