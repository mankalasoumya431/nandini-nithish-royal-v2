import { Monogram } from '../Monogram/Monogram';
import { LotusMotif } from '../LotusMotif/LotusMotif';
import type { WeddingData } from '../../types/wedding';
import './Footer.css';

interface FooterProps {
  data: WeddingData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="footer">
      <LotusMotif
        className="footer__lotus footer__lotus--left"
        size={110}
        flip
      />

      <LotusMotif
        className="footer__lotus footer__lotus--right"
        size={110}
        flip
      />
  <p className="footer__invited-by">Invited by {data.familyName}</p>
      <Monogram size={48} className="footer__monogram" />

    

      {/* <p className="footer__names">
        {data.couple.bride.personName} &amp; {data.couple.groom.personName}
      </p> */}

      <p className="footer__hosts">{data.hosts}</p>
      <p className="footer__hosts footer__hosts--telugu">{data.hostsTelugu}</p>

      <p className="footer__hashtag">{data.hashtag}</p>

      <p className="footer__note">
        With best compliments from: Near & Dear
      </p>
    </footer>
  );
}