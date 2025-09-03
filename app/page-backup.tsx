'use client'

export default function Home() {
  const buyKaspa = () => {
    window.open('https://www.kucoin.com/trade/KAS-USDT', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      
      {/* Floating Buy Buttons scattered across the page */}
      <div className="absolute inset-0">
        
        {/* Top left area */}
        <button onClick={buyKaspa} className="buy-button floating absolute top-20 left-20 text-lg">
          🚀 BUY KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed absolute top-32 left-80 text-2xl">
          💎 BUY KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute top-16 left-1/2 text-xl">
          ⚡ GET KASPA
        </button>
        
        {/* Top right area */}
        <button onClick={buyKaspa} className="buy-button floating-delayed-2 absolute top-24 right-32 text-lg">
          🔥 BUY KASPA NOW
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating absolute top-40 right-80 text-xl">
          💰 KASPA
        </button>
        
        {/* Middle left */}
        <button onClick={buyKaspa} className="buy-button floating-delayed absolute top-1/3 left-16 text-2xl">
          🎯 BUY KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute top-1/2 left-64 text-lg">
          ⭐ KASPA
        </button>
        
        {/* Center area */}
        <button onClick={buyKaspa} className="buy-button floating absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
          🌟 BUY KASPA 🌟
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed-2 absolute top-2/3 left-1/3 text-xl">
          🚀 GET KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute top-1/3 right-1/3 text-lg">
          💎 KASPA NOW
        </button>
        
        {/* Middle right */}
        <button onClick={buyKaspa} className="buy-button floating-delayed absolute top-1/3 right-20 text-xl">
          ⚡ BUY KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating absolute top-1/2 right-72 text-lg">
          🔥 KAS
        </button>
        
        {/* Bottom left */}
        <button onClick={buyKaspa} className="buy-button floating-delayed-2 absolute bottom-32 left-24 text-xl">
          💰 BUY KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute bottom-48 left-96 text-lg">
          🎯 KASPA
        </button>
        
        {/* Bottom center */}
        <button onClick={buyKaspa} className="buy-button floating absolute bottom-20 left-1/2 transform -translate-x-1/2 text-2xl">
          ⭐ BUY KASPA ⭐
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed absolute bottom-40 left-1/3 text-lg">
          🚀 GET KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute bottom-36 right-1/3 text-xl">
          💎 BUY KAS
        </button>
        
        {/* Bottom right */}
        <button onClick={buyKaspa} className="buy-button floating-delayed-2 absolute bottom-28 right-20 text-lg">
          ⚡ KASPA NOW
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating absolute bottom-44 right-80 text-xl">
          🔥 BUY KASPA
        </button>
        
        {/* More scattered buttons */}
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute top-2/3 left-20 text-lg">
          💰 KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed absolute top-3/4 right-40 text-xl">
          🎯 BUY KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating absolute top-1/4 left-2/3 text-lg">
          ⭐ GET KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed-2 absolute bottom-1/3 left-1/2 text-xl">
          🌟 KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute top-3/5 right-1/4 text-lg">
          🚀 BUY KAS
        </button>
        
        {/* Even more buttons for maximum coverage */}
        <button onClick={buyKaspa} className="buy-button floating absolute top-1/6 left-1/4 text-lg">
          💎 KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed absolute top-5/6 right-1/5 text-xl">
          ⚡ BUY KASPA
        </button>
        
        <button onClick={buyKaspa} className="buy-button pulse-kaspa absolute bottom-1/4 right-2/3 text-lg">
          🔥 GET KAS
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating-delayed-2 absolute top-2/5 left-3/4 text-xl">
          💰 KASPA NOW
        </button>
        
        <button onClick={buyKaspa} className="buy-button floating absolute bottom-3/5 left-2/5 text-lg">
          🎯 BUY KASPA
        </button>
        
      </div>
      
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
    </div>
  )
}
