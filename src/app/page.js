// import HeroSection from "@/components/landing/Hero";
// import AboutSection from "@/components/landing/About";
// import JustificationSection from "@/components/landing/about/About";
// // import MapSection from "@/components/landing/maps/ProjectMap";
// import MapSection from "@/components/landing/MapSection";

// import PublicKnowledgeSection from "@/components/landing/PublicKnowledgeSection";
// import TrainingSection from "@/components/landing/TrainingSection";

// import TrainingSection from "@/components/landing/TrainingSection";
import Dashboard from '@/components/forms_nivelacion_tierra/dashboard/Dashboard';


export default function HomePage() {
  return (
    <main>
      {/* <HeroSection />
      <AboutSection />
      <JustificationSection />
      <MapSection />
      <PublicKnowledgeSection />
      <TrainingSection /> */}
      <Dashboard />
    </main>
  );
}


// "use client";

// import dynamic from 'next/dynamic';
// import HeroSection from "@/components/landing/Hero";
// import AboutSection from "@/components/landing/About";
// import JustificationSection from "@/components/landing/about/About";
// import MapSection from "@/components/landing/maps/ProjectMap";
// import PublicKnowledgeSection from "@/components/landing/PublicKnowledgeSection";
// import TrainingSection from "@/components/landing/TrainingSection";

// // Importa WaterWave de forma dinámica sin SSR
// const WaterWave = dynamic(() => import('react-water-wave'), { ssr: false });

// export default function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       <WaterWave 
//         // imageUrl="/img/background.jpg"
//         dropRadius={20}
//         perturbance={0.02}
//         resolution={256}
//         interactive={true}
//       >
//         {() => (
//           <>
//             <AboutSection />
//             <JustificationSection />
//           </>
//         )}
//       </WaterWave>
//       <MapSection />
//       <PublicKnowledgeSection />
//       <TrainingSection />
//     </main>
//   );
// }
