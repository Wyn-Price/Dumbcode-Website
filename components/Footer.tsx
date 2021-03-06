import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-neutral-900 xl:px-60 lg:px-40 px-0 py-20">
      <div className="flex flex-row">
        <div className="text-neutral-700 text-xs mx-4 w-1/6">
          <h1 className="text-3xl">Stay Connected</h1>
          <p>Join our community of over 500 users following our mod. We post updates on all our products on our media locations.</p>
          <a className="text-blue-500"><Link href="/discord">Discord</Link></a><br />
          <a className="text-blue-500" href="https://twitter.com/dumbcodemc">Twitter</a><br />
          <a className="text-blue-500" href="https://www.deviantart.com/projectnublar">Devianart</a><br />
          <a className="text-blue-500" href="https://www.youtube.com/channel/UCjGWjtS8OMznjzTzpxQ0QYQ">YouTube</a><br />
        </div>
        <div className="text-neutral-700 text-xs mx-4 w-1/3">
          <h1 className="text-3xl">Our Mission</h1>
          <p>The DumbCode <a className="text-blue-500"><Link href="/team">Team</Link></a> is commited to bringing high quality content to members of our comminity and expanding our community to new interested people. We believe in equal opportunity to contributors and we will strive to create a fair workplace while keeping the progress organized and thought out.</p>
        </div>
        <div className="mx-4 w-1/6">
          <div className="text-neutral-700 text-xs">
            <h1 className="text-3xl">Our Stuff</h1>
          </div>
          <div className="text-neutral-700 text-xs">
            <p className="my-0">Mods</p>
            <a className="text-blue-500"><Link href="../mod/projectnublar">Project: Nublar</Link></a><br />
            <a className="text-blue-500"><Link href="/mod/dumblibrary">Dumb Library</Link></a><br />
          </div>
          <br />
          <div className="text-neutral-700 text-xs">
            <p className="my-0">Tools</p>
            <a className="text-blue-500"><Link href="/studio">Dumbcode Studio</Link></a><br />
            <a className="text-blue-500"><Link href="/mod/gradlehook">Gradlehook</Link></a><br />
          </div>
        </div>
        <div className="mx-4 w-1/3">
          <div className="text-neutral-700 text-xs">
            <h1 className="text-3xl">Disclaimer and Legalities</h1>
            <p>DumbCode is in no way affiliated with Minecraft or its owners Mojang Studios.Our content licenses are placed under their corresponding code repositories and should be treated as true pieces of software.</p>
          </div>
          <div className="text-neutral-700 text-xs">DumbCode Website updated 2020.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;