'use client';

import { useState } from 'react';

export default function Home() {
  const [showBTCModal, setShowBTCModal] = useState(false);

  const productTiers = [
    {
      name: "MZ-1312 Basic",
      price: "$199",
      description: "Entry-level streaming device with essential features",
      features: ["4K HDR Support", "Wi-Fi 6", "Voice Remote", "Basic Apps"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "MZ-1312 Premium", 
      price: "$399",
      description: "Advanced streaming with premium features",
      features: ["8K HDR Support", "Wi-Fi 6E", "Gaming Mode", "Premium Apps", "Enhanced Audio"],
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "MZ-1312 Elite",
      price: "$699", 
      description: "Ultimate streaming experience for professionals",
      features: ["8K HDR Pro", "Wi-Fi 7", "Pro Gaming", "All Apps", "Studio Audio", "AI Enhancement"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">MZ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-cyan-400 neon-glow">MAZLABZ.AI</h1>
              <p className="text-sm text-gray-400">Premium Streaming Technology</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#products" className="text-cyan-400 hover:text-cyan-300">Products</a>
            <a href="#about" className="text-cyan-400 hover:text-cyan-300">About</a>
            <a href="#podcast" className="text-cyan-400 hover:text-cyan-300">Podcast</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            The Future of Streaming
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience next-generation streaming technology with our MZ-1312 series. 
            Engineered for perfection, designed for the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition-all transform hover:scale-105">
              Explore Products
            </button>
            <a 
              href="https://open.spotify.com/show/your-podcast-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-cyan-500 px-8 py-3 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all transform hover:scale-105 neon-border"
            >
              Listen to Podcast
            </a>
          </div>
        </div>
      </section>

      {/* Product Tiers Section */}
      <section id="products" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-cyan-400 neon-glow">
            Choose Your Stream
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {productTiers.map((product, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-xl border border-gray-700 hover:border-gray-500 transition-all transform hover:scale-105 ${
                  product.popular ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/20' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-black">MZ</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                  <p className="text-3xl font-bold text-cyan-400 mb-4">{product.price}</p>
                  <p className="text-gray-400">{product.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowBTCModal(true)}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 px-6 py-3 rounded-lg text-black font-semibold hover:opacity-90 transition-all transform hover:scale-105"
                  >
                    Pay with BTC
                  </button>
                  <button className="w-full border border-gray-600 px-6 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-all">
                    Pay with Card (Coming Soon)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-cyan-400 neon-glow">About MAZLABZ.AI</h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We are at the forefront of streaming technology innovation. Our &ldquo;Neon Pigeon&rdquo; philosophy 
            combines sleek aesthetics with cutting-edge performance, delivering experiences that 
            transcend traditional entertainment boundaries.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-purple-400">Innovation</h4>
              <p className="text-gray-400">
                Pushing the boundaries of what&apos;s possible in streaming technology.
              </p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Excellence</h4>
              <p className="text-gray-400">
                Every device is crafted with precision and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-cyan-400 neon-glow">MAZLABZ Podcast</h3>
          <p className="text-xl text-gray-300 mb-8">
            Dive deep into the world of streaming technology, innovation, and digital culture.
          </p>
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-8 rounded-xl border border-gray-700">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-4xl">🎙️</span>
            </div>
            <h4 className="text-2xl font-bold mb-4">Latest Episodes Available</h4>
            <a 
              href="https://open.spotify.com/show/your-podcast-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 px-8 py-3 rounded-lg text-black font-semibold hover:bg-green-400 transition-all transform hover:scale-105"
            >
              <span className="mr-2">🎵</span>
              Listen on Spotify
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-sm font-bold">MZ</span>
            </div>
            <span className="text-xl font-bold text-cyan-400">MAZLABZ.AI</span>
          </div>
          <p className="text-gray-400 mb-4">© 2024 MAZLABZ.AI. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Premium streaming technology for the digital age.
          </p>
        </div>
      </footer>

      {/* BTC Payment Modal */}
      {showBTCModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Bitcoin Payment</h3>
              <p className="text-gray-300 mb-6">
                Send payment to the address below or scan the QR code
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <div className="w-32 h-32 bg-black mx-auto flex items-center justify-center text-white text-xs">
                  QR CODE
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-400 mb-2">Bitcoin Address:</p>
                <p className="font-mono text-sm text-orange-400 break-all">
                  bc1qexampleaddress123456789abcdef
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Payment will be confirmed within 1-3 confirmations
              </p>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setShowBTCModal(false)}
                className="flex-1 border border-gray-600 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </button>
              <button className="flex-1 bg-orange-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-orange-400">
                Copy Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
