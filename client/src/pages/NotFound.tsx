// Editorial Booking Desk direction: utility states stay calm, tactile, and human, with bone paper, ink navy, sea-glass action, and coral markers.
import { ArrowUpRight, CircleAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-header">
        <a className="brand-lockup" href="/" aria-label="Return to Kayla Jade Blueeyed home">
          <span className="brand-seal brand-seal-fallback">KJB</span>
          <span className="brand-name"><span>Kayla Jade</span><span>Blueeyed</span></span>
        </a>
        <span className="availability-pill"><span className="status-dot" /> Independent / considered / available</span>
      </div>
      <div className="not-found-content">
        <span className="section-index">Desk note <span>/</span> 404</span>
        <div className="not-found-rule" />
        <div className="not-found-grid">
          <div className="not-found-mark"><CircleAlert size={24} strokeWidth={1.4} /><span>Not on the desk</span></div>
          <div>
            <h1 className="not-found-title">That room<br /><em>isn&apos;t open.</em></h1>
            <p className="not-found-copy">The page you were looking for has moved, or it was never part of this conversation. Let&apos;s bring you back to a clear place.</p>
            <a className="button button-primary" href="/">Return to the profile <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
      <div className="not-found-footer"><span>KJB / Direct line</span><span>Made for clear yeses.</span></div>
    </main>
  );
}
