import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images].map((image) => (
        <div key={image.id} className="w-48">
          <div className={"m-2"}>{image.name}</div>
          <img src={image.url} alt={"Images"} />
        </div>
      ))}
    </div>
  );
}
