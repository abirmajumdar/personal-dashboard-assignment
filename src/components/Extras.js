import data from '@/data/info.json';
 
export default function Extras() {
  return (
    <section id="extras" className="my-10 p-3">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Goals, Hobbies & Certifications</h2>
      <ul className="list-disc pl-5 text-gray-800">
        {data.extras.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}