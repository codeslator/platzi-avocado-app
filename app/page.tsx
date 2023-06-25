import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-center">
      <Link href="/yes-or-not" className="text-[#45A688]">¿Deberia comer un avo hoy?</Link>
    </section>
  );
};
