import data from '@/data/info.json';

export default function Profile() {
  return (
    <section id="profile" className="my-8">
      <div className="flex flex-col items-center text-center">
        <img src="/photo.png" alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
        <p className="text-gray-600">{data.bio}</p>
        <p className="mt-2 text-blue-500">{data.contact}</p>
      </div>
    </section>
  );
}