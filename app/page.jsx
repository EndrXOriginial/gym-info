import Image from "next/image";
import { Button } from "./components/buttons/buttons";
import { Teko } from 'next/font/google';

const teko = Teko({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Home() {
  return (
    <>
    <header className="hero">
      <div className="hero-media">
      </div>
      <div className={`hero-content ${teko.className}`}>
        <h1 className="hero-content-title">Now</h1>
        <Image 
        src={'/dude.png'}
        alt="Muscly man flexing his arm downwards."
        width={546}
        height={831}
        className='hero-content-img'/>
        <Image 
        src={'/now.svg'}
        alt="Outline of Now text that overlaps above the image of the man"
        width={830}
        height={282}
        className="hero-content-now"/>
      </div>
    </header>
    </>
  );
}
