import { AvailablePill } from "./AvailablePill";

interface BookPreviewProps {
  title: string;
  author: string[];
  category: string[];
  available: string;
  cover?: string;
}

export function BookPreview({
  title,
  author,
  category,
  available,
  cover = "/src/assets/book-placeholder.png",
}: BookPreviewProps) {
  return (
    <article className="flex flex-row gap-4 justify-start items-center">
      <img
        className="aspect-322/418 max-h-30 rounded-md shadow border border-gray-300"
        src={cover}
        alt={`portada del libro ${title}`}
      />
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="opacity-50">{author.join(", ")}</p>
        <p className="opacity-50">{category.join(", ")}</p>
        <AvailablePill available={available} />
      </div>
    </article>
  );
}
