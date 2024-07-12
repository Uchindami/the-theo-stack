"use client";

import {SignedIn, SignedOut, SignInButton, UserButton, UserProfile} from "@clerk/nextjs";
import {UploadButton} from "~/utils/uploadthing";
import {useRouter} from "next/navigation";

export default function TopNav() {
  const router = useRouter()
  return (
  <nav className={" flex , items-center, justify-between , p-4 , font-semibold , text-xl , border-b , w-full"}>
    <div>Gallery</div>
    <div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <div className={"flex "}>
          <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
            router.refresh()
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
          />
          <UserButton/>
        </div>

      </SignedIn>
    </div>
  </nav>
  )
}