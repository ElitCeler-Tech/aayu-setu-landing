import { Iphone } from "./ui/iphone";

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 flex flex-col lg:flex-row items-center justify-between gap-12 relative isolate">
      {/* Top Left Gradient Circle */}
      <div className="absolute w-[457px] h-[457px] rounded-full opacity-50 pointer-events-none -z-10 bg-gradient-to-b from-[rgba(0,111,104,0.1)] to-[#3A8177] blur-[100px] top-[-0.07px] left-[-198px]" />

      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[#346E6A]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          An AI-Driven Healthcare Assistant
        </div>

        <h1 className="text-5xl font-medium font-heading bg-[linear-gradient(90.52deg,#2D645D_4.83%,#5BCABC_98.02%)] bg-clip-text text-transparent leading-[1.1] mb-6">
          Predict Health Risks. <br />
          Prevent Disease. <br />
          Live Better.
        </h1>

        <p className="text-base text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          AyusSetu brings fragmented paper and digital health records together
          and uses AI to predict future health risks—enabling early,
          personalized preventive care.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg border border-black hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.7 8.5c-.6-1.5-1.9-2.2-3.2-2.3-1.4-.1-2.9.8-3.6.8-.8 0-2.1-.8-3.4-.8-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.6 1.3 10.1.9 1.3 1.9 2.7 3.3 2.7 1.3 0 1.8-.8 3.4-.8 1.6 0 2.1.8 3.4.8 1.4 0 2.4-1.3 3.3-2.6 1-1.5 1.5-3 1.5-3s-1.2-.5-1.2-2.9c0-2.2 1.9-3.3 1.9-3.3zM12.9 6.3c.7-.9 1.2-2.1 1.1-3.3-1.1 0-2.4.7-3.2 1.6-.7.8-1.2 2-1.1 3.2 1.2.1 2.5-.6 3.2-1.5z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80">
                Download on the
              </div>
              <div className="text-sm font-bold leading-tight">App Store</div>
            </div>
          </button>
          <button className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M11.66 12L3.29 2.18A.41.41 0 0 0 3 2.43v19.14a.42.42 0 0 0 .29.25l8.37-9.82z"
              />
              <path
                fill="#FBBC04"
                d="M17.73 15.6l-6.07-3.6 6.07-3.6a.43.43 0 0 1 .53.07L22 12l-3.74 3.53a.43.43 0 0 1-.53.07z"
              />
              <path
                fill="#4285F4"
                d="M18.26 8.4L11.66 12 3.29 2.18A.38.38 0 0 1 4 2l14.26 6.4z"
              />
              <path
                fill="#34A853"
                d="M18.26 15.6L4 22a.38.38 0 0 0-.71-.18L11.66 12l6.6 3.6z"
              />
            </svg>
            <div className="text-left">
              <div className="text-[10px] leading-tight opacity-80">
                GET IT ON
              </div>
              <div className="text-sm font-bold leading-tight">Google Play</div>
            </div>
          </button>
        </div>
      </div>

      {/* Right Content - Phone Images */}
      <div className="flex-1 relative w-full h-[400px] lg:h-[600px] flex justify-center items-center mt-12 lg:mt-0">
        {/* Gradient Circle */}
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-50 pointer-events-none -z-10 bg-gradient-to-b from-[rgba(0,111,104,0.1)] to-[#3A8177] blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Phone 1 - Left */}
        <div className="absolute left-1/2 top-1/2 w-[180px] sm:w-[210px] lg:w-[230px] -translate-x-[110%] -translate-y-1/2 z-10 transition-transform duration-500 hover:scale-105 hover:z-30">
          <Iphone
            src="/left-phone.png"
            className="w-full h-auto drop-shadow-2xl -rotate-7"
          />
        </div>

        {/* Phone 2 - Right */}
        <div className="absolute left-1/2 top-1/2 w-[180px] sm:w-[210px] lg:w-[230px] translate-x-[10%] -translate-y-1/2 z-20 transition-transform duration-500 hover:scale-105 hover:z-30">
          <Iphone
            src="/right-phone.png"
            className="w-full h-auto drop-shadow-2xl rotate-7"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
