export default function Partnership() {
    return (
      <div className="bg-gray-100 dark:bg-gray-800">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img src="https://www.svgrepo.com/show/426192/cogs-settings.svg" alt="Logo" className="mb-8 h-40" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">Page is under Development</h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
        <div className="flex space-x-4">
          <a href="/about/contact" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600">Contact Us</a>
        </div>
      </div>
    </div>
    );
  }