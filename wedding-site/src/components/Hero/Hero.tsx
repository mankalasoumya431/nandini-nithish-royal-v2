import { PhotoFrame } from '../PhotoFrame/PhotoFrame';
import { LotusMotif } from '../LotusMotif/LotusMotif';
import type { WeddingData } from '../../types/wedding';
import { useReveal } from '../../hooks/useReveal';
import './Hero.css';

interface HeroProps {
  data: WeddingData;
}

export function Hero({ data }: HeroProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="hero section" aria-label="Wedding invitation">
      <LotusMotif className="hero__lotus hero__lotus--left" size={140} />
      <LotusMotif className="hero__lotus hero__lotus--right" size={140} flip />
      <div ref={ref} className="reveal hero__inner">
      <img src='images/ganesha.png' style={{height:'50px'}}></img>

        <p className="hero__sacred hero__sacred--telugu">{data.sacredText}</p>
        <p className="hero__sacred hero__sacred--translit">{data.sacredTransliteration}</p>

        <div className="hairline hero__rule" />

        {/* <p className="hero__eyebrow">{data.invitationHeading}</p> */}
      
   <PhotoFrame
          src={data.heroPhotoUrl}
          alt={`${data.couple.groom.personName} and ${data.couple.bride.personName}`}
          initial={`${data.couple.bride.personName.charAt(0)} & ${data.couple.groom.personName.charAt(0)}`}
          shape="arch"
          className="hero__photo"
        />
        <h1 className="hero__names">
          <span className="hero__name">{data.couple.bride.personName}</span>
          <span className="hero__weds">weds</span>
          <span className="hero__name">{data.couple.groom.personName}</span>
        </h1>

        <p className="hero__names-telugu">
          {data.couple.bride.personTelugu} &nbsp;·&nbsp; {data.couple.groom.personTelugu}
        </p>
         

        <p className="hero__message">{data.invitationMessage}</p>

        {data.shloka && <p className="hero__shloka">{data.shloka}</p>}

        <div className="hero__date-pill">
          <span>{data.weddingDisplayDate}</span>
          <span className="hero__date-pill-dot" aria-hidden="true">
            •
          </span>
          <span>{data.weddingTime}</span>
        </div>
      </div>
    </section>
  );
}
