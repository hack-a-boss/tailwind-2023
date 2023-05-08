import { BigCard } from "./BigCard";
import { Card } from "./Card";

export const Layout = () => {
  const news = {
    main: [
      {
        image: "https://picsum.photos/600/400",
        caption: "Gun violence",
        title: "Another mass shooting in Texas",
        intro:
          "Nine are dead, including the suspected assailant, after a shooting at an Allen, Texas, mall.",
        author: "Ellen Ioanes",
      },
      {
        image: "https://picsum.photos/600/400?random=1",
        title: "The rising Republican movement to defund public libraries",
        intro:
          "Libraries bolster democracy. Republicans want to get rid of them.",
        author: "Fabiola Cineas",
      },
    ],
    secondary: [
      {
        image: "https://picsum.photos/600/400?random=2",
        caption: "The Vox guide to HBO Succession",
        title: "On Succession, Sisyphus rolls the rock uphill",
        intro: "Please please please let Kendall get what he wants this time.",
        author: "Whizy Kim",
      },
      {
        image: "https://picsum.photos/600/400?random=3",

        title:
          "Serbia’s populist president pledges “disarmament” after mass shootings",
        intro:
          "Gun control measures could further erode civil liberties under President Aleksandar Vucic.",
        author: "Ellen Ioanes",
      },
      {
        image: "https://picsum.photos/600/400?random=4",

        title:
          "The Kohinoor diamond isn’t on display at the coronation. Colonialism still is.",
        intro:
          "Camilla chose not to wear the Queen Mother’s crown, but its ill-gotten jewel is still worth talking about.",
        author: "Lavanya Ramanathan",
      },
    ],
    terciary: [
      {
        image: "https://picsum.photos/600/400?random=5",

        title: "Please don’t turn to ChatGPT for moral advice. Yet.",
        intro:
          "AI for the moral enhancement of humans? Sounds tempting. But we shouldn’t be so quick to automate our reasoning.",
        author: "Sigal Samuel",
      },
      {
        image: "https://picsum.photos/600/400?random=6",

        title:
          "A Covid outbreak at a CDC conference is ironic. But is it a big deal?",
        intro: "3 takeaways about the current state of the pandemic.",
        author: "Keren Landman",
      },
      {
        image: "https://picsum.photos/600/400?random=7",

        title: "The GOP knife fight in the race for Kentucky’s governorship",
        intro:
          "The wild primary in the most important election of 2023 pits a future GOP star against a megadonor.",
        author: "Ben Jacobs",
      },
    ],
  };

  return (
    <section className="p-4 grid gap-4 md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-4">
      {/* Main */}
      <section className="md:col-start-2 md:col-end-4 divide-y">
        <BigCard {...news.main[0]} />
        <Card {...news.main[1]} />
      </section>

      {/* Secondary */}
      <section className="md:col-start-1 md:row-start-1 divide-y">
        {news.secondary.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </section>

      {/* Terciary */}
      <section className="md:col-start-1 md:col-end-4 lg:col-start-4 lg:col-end-5 md:flex">
        {news.terciary.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </section>
    </section>
  );
};
