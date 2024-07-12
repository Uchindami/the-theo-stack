import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  
  return (
  <>
    <SignedOut>
      <div className={"text-xl text-center"}> Please sign up/in</div>
    </SignedOut>
    <SignedIn>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
        <div key={image.id} className="w-48">
          <div className={"m-2"}>{image.name}</div>
          <img src={image.url} alt={"Images"}/>
        </div>
        ))}
      </div>
    </SignedIn>
  </>);}
