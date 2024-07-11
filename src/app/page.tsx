import { url } from "inspector";
import Link from "next/link";
import { db } from "~/server/db";

const imageUrls = [
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/e2882937-dbb9-4d6d-8e64-c6261ce20a6f-j9jw6t.08.56.jpg",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/2232f6f7-297e-4030-be22-74f8eabbabb5-xedt2r.png",
  "https://uploadthing-prod-sea1.s3.us-west-2.amazonaws.com/387abc6a-7b71-4fcc-8666-0bc21bf809a8-hsiicv.png",
];

const images = imageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => <div key={post.id}>{post.name}</div>)}

      {[...images, ...images].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt={"Images"} />
        </div>
      ))}
    </div>
  );
}
