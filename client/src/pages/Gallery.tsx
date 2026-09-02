// Cool Editorial Annual direction: the Gallery page is a spacious image index with cool blue surfaces, saffron captions, and a restrained art-book rhythm.
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import SiteChrome from "@/components/SiteChrome";

const images = [
  { src: "/images/image1.jpeg", alt: "Editorial portrait of Kayla Jade Blueeyed", title: "", note: "", className: "gallery-card-left-1" },
  { src: "/images/image2.jpeg", alt: "Kayla Jade Blueeyed at an editorial worktable", title: "", note: "", className: "gallery-card-left-2" },
  { src: "/images/image3.jpeg", alt: "Kayla Jade Blueeyed on a yacht", title: "", note: "", className: "gallery-card-left-3" },
  { src: "/images/image4.jpeg", alt: "Kayla Jade Blueeyed at the beach", title: "", note: "", className: "gallery-card-left-4" },
  { src: "/images/working_room.jpg", alt: "Sunlit creative studio with an editorial worktable", title: "The working room", note: "Studio study", className: "gallery-card-right-1" },
  { src: "/images/before_room.jpg", alt: "Quiet modern workspace prepared for a conversation", title: "Before the room opens", note: "Work in progress", className: "gallery-card-right-2" },
];

export default function Gallery() {
  return <SiteChrome><section className="inner-page gallery-page">
    <div className="page-hero page-hero-split"><div><div className="page-eyebrow">Gallery / 03</div><h1 className="page-title">A few frames<br /><em>from the room.</em></h1></div><div className="page-hero-note"><span>Image note</span><p>Natural light, real texture, and a point of view that leaves room for the person.</p></div></div>
    <div className="gallery-lede"><p className="large-copy">The gallery stays close to the work: portraits, pauses, and the quiet evidence of a day in motion.</p><p className="gallery-lede-small">For approved press and partnership assets, <Link className="text-link" href="/contact">contact the desk <ArrowUpRight size={15} /></Link></p></div>
    <div className="art-gallery">{images.map((image, i) => <figure className={`art-gallery-card ${image.className}`} key={i}><img src={image.src} alt={image.alt} loading="lazy" />{(image.note || image.title) && <figcaption>{image.note && <span>{image.note}</span>}{image.title && <strong>{image.title}</strong>}</figcaption>}</figure>)}<div className="gallery-quote"><span className="section-kicker">A small reminder</span><p>Attention changes the atmosphere. That is the work.</p><span className="gallery-mark">KJB <span>+</span></span></div></div>
    <div className="gallery-bottom"><span>Selected images / 2026</span><Link className="button button-primary" href="/contact">Request the media kit <ArrowUpRight size={16} /></Link></div>
  </section></SiteChrome>;
}
