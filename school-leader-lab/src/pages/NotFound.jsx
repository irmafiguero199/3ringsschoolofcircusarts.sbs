import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page non trouvée — 3 Rings School Of Circus Arts</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center px-4">
          <AlertTriangle className="w-16 h-16 text-slate-300 mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page non trouvée</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">La page que vous recherchez n'existe pas ou a été déplacée. Vérifiez l'URL ou retournez à l'accueil.</p>
          <Link to="/" className="btn-primary inline-flex"><Home className="w-4 h-4 mr-2" />Retour à l'accueil — 3 Rings School Of Circus Arts</Link>
          <p className="text-xs text-slate-400 mt-8">3 Rings School Of Circus Arts — EIN 47-4079081 — 3256 39th Ave Sw, Seattle, WA 98116-3414</p>
        </div>
      </div>
    </>
  )
}

export default NotFound
