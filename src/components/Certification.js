// pages/certification.js
import data from '@/data/info.json';

export default function CertificationPage() {

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">My Certification</h1>
      
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">{data.certifications[0].title}</h2>
        <img 
          src={data.certifications[0].image} 
          alt={""} 
          className="w-full max-w-xl rounded-lg border shadow"
        />
      </div>
    </section>
  );
}
