import {db} from "~/server/db";
import {SignedIn, SignedOut} from "@clerk/nextjs";
import {getImages} from "~/server/queries";

export default async function HomePage() {
  const images = await getImages();
  
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
