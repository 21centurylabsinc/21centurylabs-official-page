import MuxPlayer from '@mux/mux-player-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      <MuxPlayer
        playbackId="MzxsvndUxmByKanU601BHU3H24jPu8VgJnC0126buF00pU"
        autoPlay="muted"
        loop
        muted
        playsInline
        placeholder="blur"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ aspectRatio: 'unset' }}
      />

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Streamlined Experience</h1>
        <p className="text-lg text-gray-200">Powered by high-performance video streaming.</p>
      </div>
    </div>
  );
}