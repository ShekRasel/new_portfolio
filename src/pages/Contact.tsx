import { useState, type FormEvent } from "react";
import { FiArrowUpRight, FiCopy, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Reveal } from "src/components/Reveal";
import { profile } from "src/data/profile";

const email = import.meta.env.VITE_CONTACT_EMAIL?.trim() || profile.email;

export const Contact = () => {
  const [service, setService] = useState("Web development");
  const [status, setStatus] = useState("");
  const [brief, setBrief] = useState("");
  const clearPreparedMessage = () => {
    setStatus("");
    setBrief("");
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = "Hi Rasel,\n\n" + data.get("message") + "\n\nInterested in: " + service + "\n\n" + data.get("name") + "\n" + data.get("email");
    setBrief(message);
    setStatus("Opening your email app. Review the draft and send it there. If nothing opens, copy your message below and email me directly.");
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent("Project inquiry: " + service) + "&body=" + encodeURIComponent(message);
  };
  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setStatus("Message copied. Paste it into an email to " + email + ".");
    } catch {
      setStatus("Select and copy your message below, then email it to " + email + ".");
    }
  };
  return (
    <section className="page-width page-section contact-page">
      <Reveal className="section-heading">
        <div><div className="eyebrow">LET’S MAKE SOMETHING GREAT</div><h1 className="page-title">Your next idea.<br /><span className="serif-accent">Our next conversation.</span></h1></div>
      </Reveal>
      <div className="contact-grid">
        <Reveal className="contact-info">
          <p className="contact-intro">Have a project in mind, an opportunity, or just want to say hello? I’d love to hear from you.</p>
          <div className="contact-methods">
            <a href={"mailto:" + email}><FiMail /><div><span className="mono">DROP ME A LINE</span><strong>{email}</strong></div><FiArrowUpRight /></a>
            <a href={"tel:" + profile.phone}><FiPhone /><div><span className="mono">GIVE ME A CALL</span><strong>{profile.phoneLabel}</strong></div><FiArrowUpRight /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /><div><span className="mono">LET’S CONNECT</span><strong>Find me on LinkedIn</strong></div><FiArrowUpRight /></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /><div><span className="mono">FOLLOW THE WORK</span><strong>github.com/ShekRasel</strong></div><FiArrowUpRight /></a>
          </div>
          <div className="contact-location"><FiMapPin aria-hidden="true" /><span>{profile.location}</span></div>
          <div className="contact-note"><span aria-hidden="true">✳</span><p>Big ideas or small details.<br />Every good project starts somewhere.</p></div>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          <form onSubmit={submit} onChange={clearPreparedMessage} className="contact-form">
            <h2>Tell me a little about it<span className="olive-dot">.</span></h2>
            <fieldset>
              <legend>I’m interested in…</legend>
              <div className="interest-options">
                {["Web development", "Frontend", "UI / UX", "Something else"].map(item => (
                  <label key={item} className={service === item ? "interest-option selected" : "interest-option"}>
                    <input type="radio" name="service" value={item} checked={service === item} onChange={() => setService(item)} />{item}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="form-row">
              <div className="form-field"><label htmlFor="contact-name">Your name <span>*</span></label><input id="contact-name" name="name" placeholder="Alex Morgan" autoComplete="name" required maxLength={100} /></div>
              <div className="form-field"><label htmlFor="contact-email">Email address <span>*</span></label><input id="contact-email" name="email" type="email" placeholder="alex@example.com" autoComplete="email" required maxLength={254} /></div>
            </div>
            <div className="form-field"><label htmlFor="contact-message">A little about your project <span>*</span></label><textarea id="contact-message" name="message" placeholder="Tell me about your idea, your goals, and what you need." rows={5} required minLength={10} maxLength={4000} /></div>
            <button className="button button-dark form-submit" type="submit">Prepare email <FiArrowUpRight /></button>
            <p className="form-hint">Opens a draft in your email app. You review it and send it.</p>
            {status && <div className="form-status" role="status"><FiMail /><p>{status}</p></div>}
            {brief && (
              <div className="prepared-message">
                <label htmlFor="prepared-message">Your prepared message</label>
                <textarea id="prepared-message" value={brief} readOnly rows={7} onFocus={event => event.target.select()} />
                <button className="text-link" type="button" onClick={copyMessage}>Copy message <FiCopy /></button>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};
