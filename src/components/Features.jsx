import {
  FaChartLine,
  FaCloudSunRain,
  FaRobot,
  FaMapMarkedAlt,
  FaCalculator,
  FaBell,
} from 'react-icons/fa'

const features = [
  {
    icon: FaChartLine,
    title: 'Market Rate Tracker',
    description:
      'Real-time and historical market prices from local mandis with price comparisons across regions and predictive trends.',
  },
  {
    icon: FaCloudSunRain,
    title: 'Weather Integration',
    description:
      'Hyper-local weather forecasts and climate pattern analysis to help plan planting and harvesting activities.',
  },
  {
    icon: FaRobot,
    title: 'AI Predictions',
    description:
      'Machine learning models analyze historical data to forecast price fluctuations and optimal selling periods.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Localized Insights',
    description:
      'District-specific dashboards showing production trends, price movements, and community reports.',
  },
  {
    icon: FaCalculator,
    title: 'Yield Calculator',
    description:
      'Estimate potential yields and profits based on crop selection, input costs, and market conditions.',
  },
  {
    icon: FaBell,
    title: 'Smart Alerts',
    description:
      'Get notified about price spikes, weather warnings, and optimal planting/harvesting windows.',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Smart Farming
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Farmmi combines cutting-edge technology with agricultural expertise
            to deliver actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:-translate-y-2 hover:shadow-md hover:border-accent-green transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-light-green to-primary-green rounded-xl flex items-center justify-center text-dark-green text-2xl mb-5">
                <feature.icon />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
