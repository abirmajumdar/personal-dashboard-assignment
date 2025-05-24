import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Academics from '@/components/Academics';
import Skills from '@/components/Skills';
import Extras from '@/components/Extras';
import Projects from '@/components/Projects';
import Certification from '@/components/Certification';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">
        <Profile />
        <Academics />
        <Skills />
        <Projects/>
        <Extras />
        <Certification/>

      </main>
    </div>
  );
}
