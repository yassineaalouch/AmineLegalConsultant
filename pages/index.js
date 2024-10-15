// pages/index.js
import Link from 'next/link';
import PresentationCard from '../components/PresentationCard';
import NavBar from '../components/NavBar';
import Services from '../components/Services';
import Experiences from '@/components/Experience';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar/>
      <PresentationCard/>
      <div className='p-6'>
        {/* Section de Présentation du Consultant */}
        <Experiences/>

        {/* Section des Services Juridiques */}
        <Services/>
        {/* Call to Action */}
        <div className="text-center mt-10">
          <Link
            href="/request-consultation"
            className="inline-block bg-black text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Demander une Consultation
          </Link>
        </div>
      </div>
        <Footer/>
    </div>
  );
}
