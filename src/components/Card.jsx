export const Card = ({ image, caption, title, intro, author }) => {
  return (
    <article className="flex gap-4 pt-4 pb-4 first:pt-0 md:flex-col md:group-[.tertiary]:first:pt-4 md:group-[.tertiary]:w-1/3 lg:group-[.tertiary]:w-full lg:group-[.tertiary]:first:pt-0 lg:group-[.tertiary]:pb-0">
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
        <h2 className="font-bold md:text-lg lg:text-xl">{title}</h2>
        <p className="hidden md:block text-sm text-gray-600 mb-1">{intro}</p>
        <p className="text-xs italic font-serif">
          By <span className="text-blue-600">{author}</span>
        </p>
      </section>
    </article>
  );
};
