export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-kaspa-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-kaspa-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="bg-gradient-to-r from-kaspa-primary to-kaspa-secondary text-white font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform duration-300"
        >
          🚀 Back to Buy Kaspa
        </a>
      </div>
    </div>
  )
}
