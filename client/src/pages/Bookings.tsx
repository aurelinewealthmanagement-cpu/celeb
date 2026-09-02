// Cool Editorial Annual direction: the Bookings page is an organized service index with midnight panels, cobalt actions, saffron numbering, and calm editorial copy.
import { ArrowUpRight, Check, Clock3, FileText, Users } from "lucide-react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

const bookings = [
  { number: "01", title: "Hosted conversations", copy: "Moderation, interviews, panels, and live conversations with a composed point of view.", icon: Users },
  { number: "02", title: "Brand collaborations", copy: "Thoughtful partnerships shaped around a real audience, a clear brief, and a reason to exist.", icon: FileText },
  { number: "03", title: "Private appearances", copy: "Selective rooms, intimate events, and personal appearances where presence matters most.", icon: Clock3 },
];

export default function Bookings() {
  return <SiteChrome><section className="inner-page bookings-page">
    <div className="page-hero page-hero-wide"><div><div className="page-eyebrow">Bookings / 02</div><h1 className="page-title">Make something<br /><em>worth arriving for.</em></h1></div><div className="page-hero-note booking-note"><span>Availability</span><strong>Currently accepting select projects for 2026.</strong><p>Share the shape of the work. The desk will reply with the clearest next step.</p></div></div>
    <div className="booking-intro"><p className="large-copy">The right collaboration is not a transaction. It is a room with a purpose, a point of view, and enough care in the details.</p><Link className="button button-primary" href="/contact">Tell us about the room <ArrowUpRight size={16} /></Link></div>
    <div className="page-divider" />
    <div className="services-heading"><span className="section-kicker">What is on the desk</span><h2 className="section-title">Clear formats.<br /><em>Good energy.</em></h2></div>
    <div className="booking-list">{bookings.map(({ number, title, copy, icon: Icon }) => <article className="booking-card" key={number}><div className="booking-card-top"><span className="booking-number">{number}</span><Icon size={22} strokeWidth={1.4} /></div><h3>{title}</h3><p>{copy}</p><Link className="text-link" href="/contact">Ask about this format <ArrowUpRight size={15} /></Link></article>)}</div>
    <div className="process-panel"><div><span className="section-kicker">A better handoff</span><h2 className="section-title">From first note<br /><em>to final yes.</em></h2></div><div className="process-steps"><div><span>01</span><strong>Share the shape</strong><p>Timing, audience, deliverables, and the useful question.</p></div><div><span>02</span><strong>Find the fit</strong><p>We clarify scope, availability, and what a good outcome looks like.</p></div><div><span>03</span><strong>Open the room</strong><p>Once the details are clear, the work can begin with confidence.</p></div></div></div>
    <div className="booking-footer-cta"><p>Have a project in mind but not the right category yet?</p><Link className="button button-dark" href="/contact">Start with the details <ArrowUpRight size={16} /></Link></div>
  </section></SiteChrome>;
}
