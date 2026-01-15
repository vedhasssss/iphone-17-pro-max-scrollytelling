export default function FeaturesSection() {
  const features = [
    {
      title: "A18 Pro Chip",
      description: "The most powerful chip ever in a smartphone. Lightning-fast processing with 6-core CPU and next-gen GPU for pro-level performance.",
      icon: "⚡",
      gradient: "from-yellow-500/10 to-orange-500/10"
    },
    {
      title: "Titanium Design",
      description: "Aerospace-grade titanium construction with Ceramic Shield glass. Incredibly strong, remarkably light, beautifully refined.",
      icon: "💎",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "ProMotion XDR Display",
      description: "6.9-inch Super Retina XDR display with 120Hz adaptive refresh rate. True-to-life colors with HDR support.",
      icon: "📱",
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Advanced Camera System",
      description: "48MP main camera with 8K video recording. Computational photography powered by AI for stunning shots every time.",
      icon: "📸",
      gradient: "from-pink-500/10 to-rose-500/10"
    },
    {
      title: "All-Day Battery Life",
      description: "Up to 29 hours of video playback. Fast charging and wireless charging for ultimate convenience.",
      icon: "🔋",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      title: "iOS 20",
      description: "The world's most advanced mobile operating system with intuitive features and privacy built-in.",
      icon: "🚀",
      gradient: "from-indigo-500/10 to-violet-500/10"
    }
  ];

  return (
    <section className="relative bg-[#050505] py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white/90 tracking-tighter mb-6">
            What is iPhone 17 Pro Max?
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            The pinnacle of innovation. Every detail meticulously crafted to deliver an 
            unprecedented mobile experience that pushes the boundaries of what's possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white/90 mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Overview */}
        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md p-12 rounded-[2rem] border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[2rem]" />
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white/90 mb-12 text-center tracking-tight">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm mb-2 uppercase tracking-wider">Display</p>
                <p className="text-white/90 font-semibold text-xl">6.9" ProMotion</p>
              </div>
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm mb-2 uppercase tracking-wider">Chip</p>
                <p className="text-white/90 font-semibold text-xl">A18 Pro</p>
              </div>
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📸</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm mb-2 uppercase tracking-wider">Camera</p>
                <p className="text-white/90 font-semibold text-xl">48MP + 8K</p>
              </div>
              <div className="text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔋</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm mb-2 uppercase tracking-wider">Battery</p>
                <p className="text-white/90 font-semibold text-xl">29hrs Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
