import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
         <div className="min-h-screen w-full bg-[#0a0e1a] flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>

      <main className="z-10 text-center px-4 max-w-4xl">
        {/* Logo / Brand */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-2xl font-bold tracking-tighter text-white">
            Healthi<span className="text-cyan-400">Reach</span>
          </h2>
        </div>

        {/* Hero Section */}
        <h1 className="text-5xl font-sans md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          The future of <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Wellness
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          We’re building a smarter way to connect with your health. 
          Our platform is currently under deep development. Stay tuned.
        </p>

        

        {/* Social / Progress Footer */}
        <div className="mt-16 flex flex-col items-center gap-4">
          
          <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
            Launching 2026
          </p>
        </div>
      </main>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </div>
    </div>
  );
}
