// Cool Editorial Annual direction: the About page is a considered profile dossier with structured biography, cool surfaces, saffron markers, and a strong reading rhythm.
import { ArrowUpRight, CheckCircle2, Instagram, Send } from "lucide-react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

const principles = [
  ["01", "Curiosity", "Every room starts with a better question and enough space to follow it."],
  ["02", "Preparation", "The atmosphere can feel effortless because the details have been held carefully."],
  ["03", "Clarity", "A good collaboration should leave everyone more certain about the next move."],
];

export default function About() {
  return <SiteChrome><section className="inner-page about-page">
    <div className="page-hero page-hero-split"><div><div className="page-eyebrow">About / 01</div><h1 className="page-title">A thoughtful<br /><em>kind of presence.</em></h1></div><div className="page-hero-note"><span>Profile note</span><p>Creator, host, and careful keeper of the room.</p></div></div>
    <div className="about-intro"><div className="about-portrait"><img src="/images/image3.jpg" alt="Editorial portrait of Cherly Carr K Kaitlyn Krems" /><span>01 / Profile portrait</span></div><div className="about-copy"><span className="section-kicker">The short version</span><p className="large-copy">Cherly Carr K Kaitlyn Krems makes space for conversations that have somewhere to go.</p><p>Her work moves between hosting, creative direction, and the thoughtful architecture of a good collaboration. She is drawn to projects with a point of view: rooms that invite people in, leave them with something useful, and do not confuse volume for impact.</p><p>From a live conversation to a brand story, Cherly Carr K brings an attentive eye, a grounded presence, and the kind of preparation that lets the human part come forward.</p><div className="about-actions"><Link className="text-link" href="/contact">Start a considered conversation <ArrowUpRight size={15} /></Link><div className="about-socials"><a className="text-link" href="https://t.me/Unseenk4it" target="_blank" rel="noreferrer">Telegram <Send size={13} /></a><a className="text-link" href="https://www.instagram.com/cheryldeoliveira?stkn=a3gxbWpta3k5ZGlr" target="_blank" rel="noreferrer">Instagram <Instagram size={13} /></a></div></div></div></div>
    <div className="page-divider" />
    <div className="principles-heading"><div><span className="section-kicker">The working notes</span><h2 className="section-title">How the room<br /><em>gets held.</em></h2></div><p>Good work is felt in the details long before it is announced.</p></div>
    <div className="principles-grid page-principles">{principles.map(([number, title, copy]) => <div className="principle-item" key={number}><span className="principle-number">{number}</span><h3>{title}</h3><p>{copy}</p><CheckCircle2 size={16} /></div>)}</div>
    <div className="about-callout"><span className="section-kicker">In practice</span><p>“The best rooms do not ask people to perform a version of themselves. They give them a clearer way to arrive.”</p><span className="callout-signature">CCK / On making space</span></div>
  </section></SiteChrome>;
}
