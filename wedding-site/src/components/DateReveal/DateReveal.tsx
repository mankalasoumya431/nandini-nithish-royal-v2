import type { WeddingData } from '../../types/wedding';
import { useReveal } from '../../hooks/useReveal';
import { Countdown } from '../Countdown/Countdown';
import { Divider } from '../Divider/Divider';
import './DateReveal.css';

interface DateRevealProps {
  data: WeddingData;
}

export function DateReveal({ data }: DateRevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <>
      <Divider />
      <section className="section date-reveal" aria-label="Wedding date">
        <div ref={ref} className="reveal">
          <span className="section__eyebrow">Save the Date</span>
          <h2 className="section__title">
            {data.weddingDisplayDate}
            <span className="section__title-telugu">{data.weddingDay}</span>
          </h2>
          <p className="date-reveal__time">
            Muhurtham {data.weddingTime}
            {data.muhurthamNote ? ` · ${data.muhurthamNote}` : ''}
          </p>
          {data.panchangamTelugu && <p className="date-reveal__panchangam">{data.panchangamTelugu}</p>}

          <Countdown weddingDate={data.weddingDate} weddingTime={data.weddingTime} />
        </div>
      </section>
    </>
  );
}
