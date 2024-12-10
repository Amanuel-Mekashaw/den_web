export default function DataLossPrevention() {
  return (
    <section className="pt-[3px]">
      {/* <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4" data-aos="fade-up">Data Loss Prevention</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">Protecting sensitive information and preventing data breaches</p>
        <div className="flex space-x-4">
          <a href="/request_demo" className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
        </div>
      </div> */}
      {/* How it works section */}
      <section id="how-it-works" className="pt-24 lg:pt-32 py-10 sm:py-32 relative overflow-hidden"
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div> */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-white">How It Works</h3>
            <p className="text-lg leading-8 text-white mt-6" data-aos="fade-right">
              Our Data Loss Prevention solution integrates seamlessly into your existing IT infrastructure. It begins by identifying and classifying sensitive data across your network. Real-time monitoring tools then track data movement and usage, flagging any suspicious activity. Advanced analytics provide insights into potential threats, while policy enforcement ensures that only authorized users can access and manipulate critical data.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pl-6 mt-8 lg:mt-0" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-lg">
              <img src="../images/overview/products overview/dlpmain.drawio.png" className="w-full h-auto object-cover" alt="Core Zero Trust Diagram" />
            </div>
          </div>
        </div>
      </section>
      {/* Overview section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Overview</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8" data-aos="fade-up">
            Data Loss Prevention (DLP) encompasses a suite of tools and processes designed to prevent the loss, unauthorized access, and misuse of sensitive data. Our DLP solutions help organizations comply with regulations, protect their reputation, and ensure that critical information remains secure.
          </p>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Why DLP?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The rise in data breaches and cyber attacks makes DLP essential. It protects sensitive information from falling into the wrong hands and helps maintain customer trust.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">DLP Techniques</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Effective DLP strategies use a combination of encryption, access control, data masking, and user activity monitoring to safeguard data.
              </p>
            </div>
          </div>
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
                Our solution continuously monitors data activity to detect and respond to potential threats immediately, ensuring proactive protection.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Data Classification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Automatically classify and categorize data based on its sensitivity level, ensuring that appropriate security measures are applied.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Policy Enforcement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implement and enforce security policies to control access, usage, and sharing of sensitive data, preventing unauthorized access.
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
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensure your organization meets all relevant data protection regulations, such as GDPR, HIPAA, and CCPA, avoiding hefty fines and legal repercussions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Data Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Protect the integrity and confidentiality of your data, ensuring that it remains accurate and unaltered from unauthorized access.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-white mb-2">Cost Savings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mitigate the financial impact of data breaches by preventing them. Save on costs related to fines, legal actions, and damage to your brand's reputation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to action */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-up">Ready to Protect Your Data?</h2>
          <div className="flex justify-center" data-aos="fade-up">
            <a  href="/request_demo" className="inline-flex items-center rounded bg-white text-primary py-[10px] px-6 font-heading text-base hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
          </div>
        </div>
      </section>

    </section>
  );
}