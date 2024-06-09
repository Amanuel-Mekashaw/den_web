export default function DenovoCoreZeroTrust() {
  return (
    <section className="pt-[3px]">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4" data-aos="fade-up">Denovo Core Zero Trust</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          Denovo Security's Core Zero Trust framework is designed to enhance your organization's security by strictly verifying every access request, whether inside or outside your network. By assuming that every request is potentially harmful, Denovo's Zero Trust approach minimizes the risk of breaches and unauthorized access.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8">Demo On Demand</a>
        </div>
      </div>
      {/* Overview Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Overview</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8" data-aos="fade-up">
            Denovo Security's Core Zero Trust framework redefines traditional security models by assuming that every access request, regardless of its origin, could be a potential threat. This approach minimizes the risk of security breaches by implementing strict verification protocols, enforcing least-privilege access, and maintaining continuous monitoring. By doing so, Denovo ensures that your critical assets and data remain protected from unauthorized access.
          </p>
        </div>
      </section>
      {/* Key features section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-700 dark:text-white mb-6" data-aos="fade-up">Key Features</h2>
          <div className="flex flex-wrap justify-center space-x-4" data-aos="fade-up">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Continuous Verification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensures that all access requests are continuously verified, reducing the risk of unauthorized access and potential breaches.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Least-Privilege Access</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enforces least-privilege access principles, ensuring that users only have access to the resources necessary for their roles.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Comprehensive Monitoring</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintains comprehensive monitoring of all activities, providing visibility into access patterns and potential security incidents.
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
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Enhanced Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Significantly reduces the risk of security breaches by strictly verifying all access requests and minimizing the attack surface.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Helps organizations meet regulatory requirements by enforcing strict access controls and maintaining comprehensive audit logs.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-md max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Operational Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamlines security operations by automating the verification process and reducing the need for manual intervention.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How it works section */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img src="../images/overview/homepage overview/Denovo Core.drawio (1).png" alt="AI-Powered Threat Analysis Diagram" className="rounded shadow-md mx-auto md:mx-0" />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-gray-700 dark:text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Denovo Security's Core Zero Trust framework operates by strictly verifying every access request, regardless of its origin. The framework continuously monitors network traffic and user activity, applying least-privilege access principles to ensure that users have only the access they need. Comprehensive monitoring provides visibility into access patterns and potential security incidents, allowing for prompt identification and response to threats. This approach not only enhances security but also reduces the complexity and overhead associated with traditional security models.
            </p>
          </div>
        </div>
      </section>
      {/* Call to action section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-aos="fade-up">Ready to Implement Zero Trust?</h2>
          <div className="flex justify-center" data-aos="fade-up">
            <a href="#" className="inline-flex items-center rounded bg-white text-primary py-[10px] px-6 font-heading text-base hover:bg-opacity-90 md:py-[14px] md:px-8">Get Started</a>
          </div>
        </div>
      </section>

    </section>

  );
}
