import Image from 'next/image'

export default function Header() {
  return (
    <header
      className="text-center py-20 px-5 relative text-white"
      style={{
        background: 'url(/arctic_landscape.png) center/cover no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      <div className="relative z-10">
        <Image
          src="https://avatars.githubusercontent.com/u/78725490?v=4"
          alt="chevp profile pic"
          width={120}
          height={120}
          className="rounded-full border-4 border-accent mb-5 mx-auto"
        />
        <h1 className="text-4xl mb-2.5">chevp</h1>
        <p className="text-text text-base">Personal DevOps Projects | Arctic Code Adventures 🐧</p>
      </div>
    </header>
  )
}