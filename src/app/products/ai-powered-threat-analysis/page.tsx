export default function AiPoweredThreatAnalysis() {
  return (
    <section className="pt-[3px]">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4" data-aos="fade-up">AI-Powered Threat Analysis</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">Advanced AI-powered threat analysis engines identifying hidden patterns and anomalies to prevent security breaches much faster.</p>
        <div className="flex space-x-4">
          <a href="/request_demo" className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
        </div>
      </div>
      {/* How it works */}
      <section id="how-it-works" className="py-10 sm:py-32 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div> */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-white">How It Works</h3>
            <p className="text-xl lg:text-2xl leading-8 text-white mt-6" data-aos="fade-right">
              Denovo Security's AI-powered threat analysis engine continuously monitors network traffic and data flows, applying sophisticated AI algorithms to detect patterns and anomalies. When the AI identifies a potential threat, it triggers an immediate alert and begins the process of threat neutralization. This system operates 24/7, acting as a tireless security analyst that can sift through vast amounts of data to find even the subtlest indicators of an attack. This approach not only enhances security but also reduces the workload on human security analysts.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pl-6 mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="../images/overview/homepage overview/Denovo Core.drawio (1).png" className="w-full h-auto object-cover" alt="Core Zero Trust Diagram" />
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Overview</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8" data-aos="fade-up">
            Denovo Security's AI-powered threat analysis engine represents the cutting edge of cybersecurity technology. Utilizing artificial intelligence, it continuously monitors and analyzes vast amounts of data in real-time. This allows it to identify patterns and anomalies that traditional methods might miss, enabling faster detection of potential security threats and proactive response to neutralize them before they can cause damage.
          </p>
        </div>
      </section>
      {/* Key Features section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Key Features</h2>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously monitors data to provide real-time analysis and threat detection, ensuring immediate response to potential threats.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Pattern Recognition</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Utilizes advanced AI algorithms to identify patterns and anomalies that might be missed by traditional security measures, enhancing threat detection capabilities.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Proactive Threat Neutralization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Allows for proactive responses to identified threats, neutralizing them before they can cause any damage, thereby significantly reducing the risk of security breaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Benefits</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded shadow-md p-6 max-w-sm">
            {/* <svg className="h-12 w-12 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v-6m0 14v2m0-6v2m0 14v2M3 12l7 7 7-7" />
            </svg> */}
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Enhanced Security Posture</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Strengthens your overall security by identifying and mitigating threats quickly, preventing breaches and data loss.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded shadow-md p-6 max-w-sm">
            {/* <svg className="h-12 w-12 text-green-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a2 2 0 100-4 2 2 0 100 4zm0 0v2m0-10v2m3 8v-4m0-4v-4m6 8a2 2 0 100-4 2 2 0 100 4zm0 0v2m0-10v2m0-4v-4" />
            </svg> */}
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Resource Efficiency</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Frees up security professionals for strategic tasks by automating threat analysis, improving operational efficiency.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 rounded shadow-md p-6 max-w-sm">
            {/* <svg className="h-12 w-12 text-orange-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 00-3-3V9l-4-4m0 0L4 9v1a3 3 0 003 3h1a3 3 0 003 3v1l4 4m0 0l4-4v-1a3 3 0 00-3-3h-1a3 3 0 00-3-3z" />
            </svg> */}
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Rapid Incident Response</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Quickly responds to security incidents, reducing downtime and minimizing damage through automated responses.
            </p>
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-up">Ready to Enhance Your Security?</h2>
          <div className="flex justify-center" data-aos="fade-up">
            <a href="#" className="inline-flex items-center rounded bg-white text-primary py-[10px] px-6 font-heading text-base hover:bg-opacity-90 md:py-[14px] md:px-8">Get Started</a>
          </div>
        </div>
      </section>

    </section>
  );
}