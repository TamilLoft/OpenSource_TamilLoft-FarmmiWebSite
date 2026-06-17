import { FaDatabase, FaBrain, FaChartLine, FaHandshake } from 'react-icons/fa'

const steps = [
  {
    number: 1,
    icon: FaDatabase,
    title: 'Data Collection',
    description:
      'We aggregate real-time data from markets, weather stations, and government sources',
  },
  {
    number: 2,
    icon: FaBrain,
    title: 'AI Processing',
    description:
      'Our algorithms analyze patterns and predict future market and weather conditions',
  },
  {
    number: 3,
    icon: FaChartLine,
    title: 'Personalized Insights',
    description:
      'Farmers receive customized recommendations based on their location and crops',
  },
  {
    number: 4,
    icon: FaHandshake,
    title: 'Take Action',
    description:
      'Make informed decisions about planting, harvesting, and selling for maximum profit',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#f8faf8]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Farmmi Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Transforming agricultural data into actionable intelligence in just
            four simple steps
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-8 text-center border border-[#e0f2e0] shadow-sm hover:-translate-y-2 hover:shadow-lg hover:border-accent-green transition-all duration-300"
            >
              {/* Connector line — desktop only, hidden on last step */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent-green to-primary-green z-10" />
              )}

              <div className="flex flex-col items-center mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-dark-green to-deep-green text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#e8f5e9] to-[#c8e6c9] rounded-full flex items-center justify-center text-dark-green text-3xl shadow-sm">
                  <step.icon />
                </div>
              </div>

              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3 min-h-14 flex items-center justify-center">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
