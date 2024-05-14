// components/BrowserIsolation.js
export default function BrowserIsolation() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center mb-4">
                    <img src="https://via.placeholder.com/40" alt="Denovo Security Logo" className="h-10 w-10 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Denovo Security Browser Isolation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                    This technology adds an essential layer of security by isolating browsing activities from the local network and devices. Denovo Security's Browser Isolation prevents malicious code from reaching user endpoints by executing web sessions in a secure, remote environment, protecting against web-based threats and reducing the risk of malware infections from internet browsing.
                </p>
                <a href="#" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Learn More</a>
            </div>
        </div>
    );
}
