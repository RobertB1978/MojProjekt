import Link from "next/link"; 
import { motion } from "framer-motion"; 

export default function Home() {
  return (
    <section className="h-screen bg-gradient-to-r from-black to-gray-900 flex flex-col items-center justify-center text-white text-center px-8">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-5xl font-bold"
      >
        Witaj w MójProjekt!
      </motion.h1>
      <p className="mt-4 text-xl">Twoja aplikacja AI – analiza, automatyzacja, cyberbezpieczeństwo.</p>
      
      <div className="mt-6 space-x-4">
        <Link href="/dashboard">
          <button className="bg-blue-500 px-6 py-3 text-lg rounded hover:bg-blue-600 transition">
            Panel użytkownika
          </button>
        </Link>
        <Link href="/pricing">
          <button className="bg-gray-700 px-6 py-3 text-lg rounded hover:bg-gray-800 transition">
            Cennik
          </button>
        </Link>
      </div>
    </section>
  );
}
