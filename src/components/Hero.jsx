import heroImg from '../img/ui/heroimgframi.svg'

const stats = [
  { number: '10,000+', label: 'Farmers' },
  { number: '200+', label: 'Markets' },
  { number: '95%', label: 'Accuracy' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-36 md:py-28 bg-gradient-to-br from-light-green to-primary-green">
      {/* Decorative circles */}
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-accent-green/10 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent-green/10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-5 text-gray-900">
              Smart Agriculture{' '}
              <span className="text-dark-green">for Sustainable Farming</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Farmmi empowers farmers with real-time market intelligence, weather
              forecasts, and AI-driven insights to maximize profits and reduce
              risks.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#"
                className="bg-gradient-to-br from-dark-green to-deep-green text-white px-6 py-2.5 rounded-full font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 text-sm"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="bg-white text-dark-green border-2 border-dark-green px-6 py-2.5 rounded-full font-semibold hover:bg-dark-green hover:text-white transition-all duration-300 text-sm"
              >
                View Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white text-center px-4 py-4 rounded-lg shadow-sm"
                >
                  <div className="text-2xl font-bold text-dark-green font-heading">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroImg}
              alt="Farmmi Dashboard"
              className="w-full max-w-lg rounded-xl shadow-xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
