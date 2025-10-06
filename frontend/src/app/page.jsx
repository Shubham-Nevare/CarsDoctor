import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <Image
        src="/logo.webp" // 👈 place your image in the public folder (e.g., /public/car-repair.png)
        alt="Cars Doctor Logo"
        width={250}
        height={250}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">🚗 Cars Doctor</h1>
      <p className="text-lg text-gray-600 mb-8">
        Our website is currently under construction.<br />
        We're tuning up our engines — launching soon!
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:info@carsdoctor.com"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          Notify Me
        </a>
      </div>
    </main>
  );
}
