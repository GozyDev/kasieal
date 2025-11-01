import { articles } from "@/lib/data";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  console.log('SLUG',slug)
  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-5 pt-[150px] pb-24 text-neutral-900">
      {/* HEADER */}
      <div className="flex flex-col gap-2 mb-8">
        <p className="text-sm text-gray-500">
          {article.date} • {article.badge}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          {article.title}
        </h1>
        <p className="text-gray-600 text-sm mt-1">By {article.author}</p>
      </div>

      {/* FEATURE IMAGE */}
      <img
        src={article.image}
        alt={article.title}
        className="rounded-2xl w-full object-cover shadow-md mb-6"
      />

      {/* PREAMBLE */}
      {article.preamble && (
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          {article.preamble}
        </p>
      )}

      {/* SECTIONS */}
      <div className="space-y-10">
        {article.sections?.map((section, i) => (
          <div key={i} className="space-y-3">
            {section.title && (
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
            )}
            {section.content && (
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            )}
            {section.bullets && (
              <ul className="list-disc list-inside text-gray-700 pl-4 space-y-1">
                {section.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* CONCLUSION */}
      {article.conclusion && (
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Final Thoughts
          </h3>
          <p className="text-gray-700 leading-relaxed">{article.conclusion}</p>
        </div>
      )}

      
    </div>
  );
}
