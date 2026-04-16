export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A2E]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#1A1A2E]/95 backdrop-blur-sm border-b border-[#E94560]/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">YesAI</h1>
          <button className="bg-[#E94560] hover:bg-[#E94560]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI That Says<br />
            <span className="text-[#E94560]">Yes</span> To Innovation
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Transform your business with intelligent automation and cutting-edge AI solutions that understand your needs and deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#E94560] hover:bg-[#E94560]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-[#E94560]/30">
              Start Free Trial
            </button>
            <button className="bg-[#0F3460] hover:bg-[#0F3460]/80 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-[#E94560]/30">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#16213E]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose YesAI?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#1A1A2E] p-8 rounded-xl border border-[#E94560]/20 hover:border-[#E94560]/50 transition-all">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Lightning Fast</h4>
              <p className="text-gray-400">
                Process complex queries in milliseconds with our optimized AI engine built for speed and efficiency.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#1A1A2E] p-8 rounded-xl border border-[#E94560]/20 hover:border-[#E94560]/50 transition-all">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Enterprise Security</h4>
              <p className="text-gray-400">
                Bank-level encryption and compliance standards protect your data with industry-leading security measures.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#1A1A2E] p-8 rounded-xl border border-[#E94560]/20 hover:border-[#E94560]/50 transition-all">
              <div className="w-12 h-12 bg-[#E94560] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Smart Customization</h4>
              <p className="text-gray-400">
                Tailor AI models to your specific needs with intuitive training tools and flexible deployment options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#0F3460] to-[#16213E] p-12 rounded-2xl border border-[#E94560]/30">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using YesAI to accelerate their business.
          </p>
          <button className="bg-[#E94560] hover:bg-[#E94560]/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-[#E94560]/30">
            Get Started Now →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E94560]/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2026 YesAI. Powered by innovation.</p>
        </div>
      </footer>
    </div>
  );
}
