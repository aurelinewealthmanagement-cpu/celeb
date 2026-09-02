// Cool Editorial Annual direction: the Contact page is a crisp direct-line intake sheet with midnight framing, lavender panel space, cobalt action, and saffron markers.
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, CheckCircle2, Mail } from "lucide-react";
import SiteChrome from "@/components/SiteChrome";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mbgjoabk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return <SiteChrome><section className="inner-page contact-page">
    <div className="page-hero page-hero-wide"><div><div className="page-eyebrow">Contact / 04</div><h1 className="page-title">Bring the right<br /><em>question.</em></h1></div><div className="page-hero-note"><span>Direct line</span><p>For bookings, collaborations, press, or a room you are still imagining.</p></div></div>
    <div className="contact-panel"><div className="contact-panel-copy"><span className="section-kicker">Say what you need to make</span><h2>Let&apos;s make the<br /><em>next step clear.</em></h2><p>Share what you already know. There is no perfect brief required; useful context is enough to start.</p><div className="contact-detail"><Mail size={18} /><span>hello@kaylajadeblueeyed.com<br /><small>Replies within 2–3 working days</small></span></div></div><div className="contact-form-column">{submitted ? <div className="confirmation-card" role="status"><div className="confirmation-icon"><Check size={22} /></div><span className="section-kicker">Message received</span><h3>That is a clear place to start.</h3><p>The desk has your note. A considered reply will follow at the email address you shared.</p><button className="text-link" type="button" onClick={() => setSubmitted(false)}>Send another note <ArrowUpRight size={15} /></button></div> : <form className="booking-form" onSubmit={handleSubmit}><label className="field-label"><span>Your name</span><input required name="name" type="text" placeholder="First and last name" /></label><label className="field-label"><span>Email</span><input required name="email" type="email" placeholder="you@company.com" /></label><label className="field-label"><span>Company or outlet <small>(optional)</small></span><input name="company" type="text" placeholder="Where the work lives" /></label><label className="field-label"><span>Message</span><textarea required name="message" rows={5} placeholder="Context, timing, and the useful question..." /></label><button className="button button-primary button-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send to the desk"} {!isSubmitting && <ArrowUpRight size={16} />}</button><p className="form-footnote"><CheckCircle2 size={13} /> Your information stays with this conversation.</p></form>}</div></div>
  </section></SiteChrome>;
}
