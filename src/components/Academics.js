import data from '@/data/info.json';

export default function Academics() {
  return (
    <section id="academics" className="my-10 py-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Academics & Experience</h2>
      <ul className="list-disc pl-5 text-gray-800">
        {data.academics.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}