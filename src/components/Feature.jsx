export default function Feature() {
    return (
      <div id="about">
        {/* About Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h2 className="text-5xl font-extrabold tracking-tight text-green-600 sm:text-6xl">
              About Our Products
            </h2>
            <p className="mt-2 text-lg text-gray-900 font-semibold tracking-wide uppercase">
              Sustainable Solutions for a Better Tomorrow
            </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We carefully curate and verify eco-friendly products that meet our strict environmental standards.
              </p>
            </div>
  
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {/* Feature 1 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    🌱
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Verified Products</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                  Partners with certified brands for authentic claims
                  and provide seamless shopping suggestions.
                  </p>
                </div>
  
                {/* Feature 2 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    ♻️
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Sustainable Alternatives</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                  Detects everyday products (e.g., stationery, home
                    decor) and suggests sustainable alternatives
                  </p>
                </div>
  
                {/* Feature 3 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    🌍
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Carbon Neutral</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    We offset our carbon footprint through various environmental initiatives.
                  </p>
                </div>
  
                {/* Feature 4 */}
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    💚
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Affiliate Marketing</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                  Generates revenue through affiliate marketing by
 linking users to eco-friendly products for easy
 purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }