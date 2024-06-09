export default function AaPolicyGen() {
  return (
    <section className="pt-[3px]">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4" data-aos="fade-up">AI-Assisted Policy Generation</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">AI automatically learning and updating security policies in real-time, ensuring both compliance and efficient adaptation to ever evolving threats.</p>
        <div className="flex space-x-4">
          <a href="#" className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
        </div>
      </div>
      {/* Overview section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Overview</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8" data-aos="fade-up">
            Denovo Security's AI-Assisted Automatic Policy Generation (AAPG) leverages the power of artificial intelligence to streamline the creation and updating of security policies. This tool continuously analyzes the threat landscape and regulatory requirements to generate relevant policies automatically. This ensures that organizations remain compliant with evolving regulations and can quickly adapt to new security challenges without the manual effort traditionally required.
          </p>
        </div>
      </section>
      {/* Key Features section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Key Features</h2>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">AI-Driven Policy Creation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizes advanced AI algorithms to automatically generate security policies that address the latest threats and regulatory requirements.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Continuous Updates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensures policies are always up-to-date by continuously analyzing the evolving threat landscape and updating policies accordingly.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Compliance Assurance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Helps organizations stay compliant with current regulations by automatically incorporating necessary regulatory requirements into the policies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* benefits section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Benefits</h2>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automates the policy generation process, saving valuable time and resources while ensuring policies are accurate and relevant.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Proactive Adaptation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enables organizations to proactively adapt to new security threats and regulatory changes without manual intervention.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Risk Reduction</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Reduces the risk of non-compliance and security breaches by ensuring policies are always aligned with the latest requirements and threats.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How it works section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img src="../images/overview/homepage overview/AI Assisted.drawio.png" alt="AI-Powered Threat Analysis Diagram" className="rounded shadow-md mx-auto md:mx-0" />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-700 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Denovo Security's AI-Assisted Automatic Policy Generation (AAPG) tool continuously monitors the threat landscape and regulatory environment. It uses advanced AI algorithms to analyze this data and automatically generate security policies that address current threats and comply with the latest regulations. As new threats emerge and regulations change, AAPG updates the policies in real-time, ensuring that organizations are always protected and compliant. This automated process eliminates the need for manual policy creation and updates, reducing the workload on security teams and minimizing the risk of human error.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}