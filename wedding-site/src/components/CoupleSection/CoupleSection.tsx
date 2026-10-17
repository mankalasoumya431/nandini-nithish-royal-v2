import type { FamilyInfo, WeddingData } from '../../types/wedding';
import { useReveal } from '../../hooks/useReveal';
import { Divider } from '../Divider/Divider';
import './CoupleSection.css';

interface CoupleSectionProps {
  data: WeddingData;
}

function CoupleBlock({
  person,
  role,
}: {
  person: FamilyInfo;
  role: string;
}) {
  const ref = useReveal<HTMLDivElement>();

  const prefix = role === 'Groom' ? 'చి.' : 'చి. ల. సౌ.';

  return (
    <div ref={ref} className="reveal couple__block">
      <span className="couple__role">{role}</span>

      <h3 className="couple__name">
        {person.personName}
      </h3>

      <p className="couple__name-telugu">
         {prefix}  {person.personTelugu}
      </p>

      <p className="couple__parents">
        {person.parents}
      </p>

      <p className="couple__parents-telugu">
        {person.parentsTelugu}
      </p>
    </div>
  );
}

export function CoupleSection({ data }: CoupleSectionProps) {
  return (
    <>
      <Divider />
      <section className="section couple" aria-label="About the couple">
        <span className="section__eyebrow">The Couple</span>
        <h2 className="section__title">
          Two families, one bond
          <span className="section__title-telugu">రెండు కుటుంబాలు, ఒక బంధం</span>
        </h2>

        <div className="couple__grid">
          <CoupleBlock person={data.couple.bride} role="Bride" />
          <div className="couple__amp" aria-hidden="true">
            &amp;
          </div>
          <CoupleBlock person={data.couple.groom} role="Groom" />
        </div>
      </section>
    </>
  );
}
