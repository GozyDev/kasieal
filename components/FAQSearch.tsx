import { Search } from "lucide-react";

export default function FAQSearch() {
  return (
    <section className="bg-purple-900 text-black py-16 lg:py-24 px-4 pt-[150px] lg:pt-[150px] ">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Got any <span className="text-white">questions?</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            We&apos;re here to assist you with anything related to Kaisel
          </p>
        </div>

        {/* Search Container */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full h-16 md:h-20 pl-8 pr-32 text-lg rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="absolute right-2 bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-6 rounded-full flex items-center gap-2 hover:from-purple-800 hover:to-purple-900 transition-all duration-300">
              <Search size={20} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>

        {/* Support Options */}
        {/* <div className="flex flex-wrap justify-center gap-6 mt-12">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm">
            <MessageCircle className="text-purple-600" size={20} />
            <span className="text-purple-800">Live Chat</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm">
            <Mail className="text-purple-600" size={20} />
            <span className="text-purple-800">support@kaisel.com</span>
          </div>
          
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-full shadow-sm">
            <Phone className="text-purple-600" size={20} />
            <span className="text-purple-800">+1 (555) 123-4567</span>
          </div>
        </div> */}

        {/* Popular Questions */}
        {/* <div className="mt-12">
          <p className="text-purple-800 mb-4">Popular questions:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "How to reset password?",
              "Payment methods",
              "Account setup",
              "Troubleshooting"
            ].map((question, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition-colors text-sm"
              >
                {question}
              </button>
            ))}
          </div>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-10 top-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute right-10 top-1/3 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
    </section>
  );
}