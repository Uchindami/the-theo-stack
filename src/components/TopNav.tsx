import {SignedIn, SignedOut, SignInButton, UserButton, UserProfile} from "@clerk/nextjs";

export default function TopNav() {
  return (
  <nav className={" flex , items-center, justify-between , p-4 , font-semibold , text-xl , border-b , w-full"}>
    <div>Gallery</div>
    <div>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  </nav>
  )
}