export const Card = ({ image, caption, title, intro, author }) => {
  return (
    <article className="flex gap-4 pt-4 pb-4 first:pt-0 last:pb-0 md:flex-col">
      {image ? (
        <picture className="w-1/3 md:w-full md:hidden">
          <img src={image} alt={title} />
        </picture>
      ) : null}

      <section className="w-2/3 md:w-full">
        {caption ? (
          <p className="bg-vox-yellow inline uppercase font-bold text-xs">
            {caption}
          </p>
        ) : null}
        <h2 className="font-bold">{title}</h2>
        <p className="hidden">{intro}</p>
        <p className="text-xs">
          By <span className="text-blue-600">{author}</span>
        </p>
      </section>
    </article>
  );
};
