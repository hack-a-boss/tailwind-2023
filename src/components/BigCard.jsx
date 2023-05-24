export const BigCard = ({ image, caption, title, intro, author }) => {
  return (
    <article className="flex gap-4 md:flex-col md:pb-8">
      {image ? (
        <picture className="w-1/2 md:w-full">
          <img src={image} alt={title} className="w-full" />
        </picture>
      ) : null}

      <section className="w-1/2 md:w-full md:text-center">
        {caption ? (
          <p className="bg-vox-yellow inline uppercase font-bold text-xs">
            {caption}
          </p>
        ) : null}
        <h2 className="font-bold md:text-4xl">{title}</h2>
        <p className="hidden md:block md:italic md:font-serif">{intro}</p>
        <p className="text-xs italic font-serif">
          By <span className="text-blue-600">{author}</span>
        </p>
      </section>
    </article>
  );
};
