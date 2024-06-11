export default function BrowserIsolation() {
  return (
    <section className="pt-[3px]">
      {/* <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4" data-aos="fade-up">Browser Isolation</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">Shielding devices by running web browsing remotely, stopping web threats before they reach you.</p>
        <div className="flex space-x-4">
          <a href="/request_demo" className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
        </div>
      </div> */}
      {/* How it works section */}
      <section id="how-it-works" className="py-10 sm:py-32 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div> */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-white">How It Works</h3>
            <p className="text-xl lg:text-2xl leading-8 text-white mt-6" data-aos="fade-right">
              Denovo Security Browser Isolation works by redirecting all web traffic through a secure, remote server. When a user initiates a web session, the browsing activity is executed in this isolated environment, away from the local device and network. Any malicious content encountered during the session is contained within the remote environment and does not reach the user’s endpoint. This method ensures that web-based threats are neutralized before they can cause harm.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pl-6 mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="../images/overview/homepage overview/Browser Isolation.drawio.png" className="w-full h-auto object-cover" alt="Core Zero Trust Diagram" />
            </div>
          </div>
        </div>
      </section>


      {/* Overview section */}
      <section className="py-8 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Overview</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8" data-aos="fade-up">
            Denovo Security Browser Isolation is designed to protect users and their devices from web-based threats. By isolating browsing activities in a secure, remote environment, it ensures that any malicious content encountered online does not reach the user's local network or device. This proactive approach significantly reduces the risk of malware infections and other web-based attacks.
          </p>
        </div>
      </section>
      {/* key features section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Key Features</h2>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Isolation of Web Sessions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All web sessions are executed in a secure, remote environment, ensuring that no malicious code can reach the user's local device or network.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Protection Against Web-Based Threats</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Denovo Security Browser Isolation protects users from a wide range of web-based threats, including malware, phishing attacks, and malicious websites.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Reduced Risk of Malware Infections</h3>
              <p className="text-gray-600 dark:text-gray-300">
                By isolating browsing activities, the solution reduces the risk of malware infections originating from internet browsing, ensuring a safer online experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Benefits</h2>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Enhanced Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prevents malicious code from compromising user endpoints by isolating web sessions, thereby enhancing overall security.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Helps organizations comply with cybersecurity regulations and standards by ensuring that browsing activities are secure and controlled.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">User Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintains a seamless user experience while providing robust protection, allowing users to browse the web without disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-up">Ready to Secure Your Browsing?</h2>
          <div className="flex justify-center" data-aos="fade-up">
            <a href="#" className="inline-flex items-center rounded bg-white text-primary py-[10px] px-6 font-heading text-base hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
          </div>
        </div>
      </section>

    </section>
  );
}
