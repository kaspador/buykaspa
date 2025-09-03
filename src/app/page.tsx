import Image from 'next/image'

export default function Home() {
  const buyOptions = [
    {
      name: "KuCoin",
      url: "https://www.kucoin.com/trade/KAS-USDT",
      description: "Major exchange with high liquidity"
    },
    {
      name: "Gate.io", 
      url: "https://www.gate.io/trade/KAS_USDT",
      description: "Global cryptocurrency exchange"
    },
    {
      name: "MEXC",
      url: "https://www.mexc.com/exchange/KAS_USDT",
      description: "Fast and secure trading platform"
    },
    {
      name: "Bitget",
      url: "https://www.bitget.com/spot/KASUSDT",
      description: "Professional crypto trading"
    },
    {
      name: "Upbit",
      url: "https://upbit.com/exchange?code=CRIX.UPBIT.KRW-KAS",
      description: "Leading Korean exchange"
    },
    {
      name: "OKX",
      url: "https://www.okx.com/trade-spot/kas-usdt",
      description: "Global crypto exchange platform"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-[#70C7BA] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">K</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-['Rubik']">KASPA</h1>
              <p className="text-[#70C7BA] font-['Lato']">The fastest, most scalable cryptocurrency</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Rubik']">
          Buy <span className="text-[#70C7BA]">KASPA</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-['Lato']">
          Get started with the world's fastest blockDAG cryptocurrency. 
          Choose from our trusted exchange partners below.
        </p>

        {/* Buy Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {buyOptions.map((exchange, index) => (
            <a
              key={index}
              href={exchange.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-[#70C7BA] rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#70C7BA]/20"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#70C7BA] to-[#49EACB] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">₿</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-['Oswald']">
                    Buy on {exchange.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-['Lato']">
                    {exchange.description}
                  </p>
                </div>
                <button className="bg-[#70C7BA] hover:bg-[#49EACB] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 w-full">
                  Trade KAS →
                </button>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-800/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6 text-center font-['Rubik']">
            Why Choose Kaspa?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#70C7BA] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-['Oswald']">Fast</h4>
              <p className="text-gray-400 font-['Lato']">
                1 second confirmation times with instant finality
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#70C7BA] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">📈</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-['Oswald']">Scalable</h4>
              <p className="text-gray-400 font-['Lato']">
                High throughput without compromising decentralization
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#70C7BA] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🔒</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-['Oswald']">Secure</h4>
              <p className="text-gray-400 font-['Lato']">
                Proof-of-work consensus with advanced security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://kaspa.org" target="_blank" rel="noopener noreferrer" 
             className="text-[#70C7BA] hover:text-[#49EACB] transition-colors">
            Official Website
          </a>
          <a href="https://discord.gg/kaspa" target="_blank" rel="noopener noreferrer"
             className="text-[#70C7BA] hover:text-[#49EACB] transition-colors">
            Discord
          </a>
          <a href="https://github.com/kaspanet" target="_blank" rel="noopener noreferrer"
             className="text-[#70C7BA] hover:text-[#49EACB] transition-colors">
            GitHub
          </a>
        </div>
        <p className="text-gray-500 text-sm font-['Lato']">
          Built with ❤️ by the Kaspa Community
        </p>
        <p className="text-gray-600 text-xs mt-2 font-['Lato']">
          Always do your own research before investing in cryptocurrencies
        </p>
      </footer>
    </main>
  )
}