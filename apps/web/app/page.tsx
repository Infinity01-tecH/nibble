'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    // load year
    const yearEl = document.getElementById("ds-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    // visibility observer
    const reveals = Array.from(document.querySelectorAll(".ds-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ds-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    reveals.forEach((item) => observer.observe(item));

    // form logic
    const form = document.getElementById("waitlist-form") as HTMLFormElement | null;
    const input = document.getElementById("waitlist-email") as HTMLInputElement | null;
    const button = document.getElementById("waitlist-submit") as HTMLButtonElement | null;
    const label = button?.querySelector(".ds-btn-label") as HTMLElement | null;
    const feedback = document.getElementById("waitlist-feedback") as HTMLElement | null;

    function setState(state: string) {
      if (!input || !button || !label || !feedback) return;
      const done = state === "success" || state === "duplicate";
      input.disabled = state === "submitting" || done;
      button.disabled = state === "submitting" || done;
      label.textContent = state === "submitting" ? "Joining…" : done ? "You’re on the list" : "Join the waitlist";
      feedback.textContent = {
        idle: "Just product updates. No noise, and you can unsubscribe anytime.",
        success: "You’re on the list. We’ll keep you posted.",
        duplicate: "You’re already on the list. We’ll be in touch.",
        error: "That didn’t go through. Please try again.",
      }[state] ?? "Just product updates. No noise, and you can unsubscribe anytime.";
      feedback.classList.toggle("ds-form-error", state === "error");
    }

    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!input?.value.trim() || !input.checkValidity()) {
        input?.reportValidity();
        return;
      }
      setState("submitting");
      try {
        const key = "sb_publishable_C4au3_MqFtwcm3q9tYjx7Q_kuMvstws";
        const response = await fetch("https://xebmkurnvdfenizqwnox.supabase.co/rest/v1/waitlist_signups", {
          method: "POST",
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ email: input.value.trim().toLowerCase() }),
        });
        if (response.ok) setState("success");
        else if (response.status === 409 || (await response.text()).toLowerCase().includes("duplicate")) setState("duplicate");
        else setState("error");
      } catch {
        setState("error");
      }
    });
    input?.addEventListener("input", () => {
      if (feedback?.classList.contains("ds-form-error")) setState("idle");
    });
  }, []);
  useEffect(() => {
    // load year
    const yearEl = document.getElementById("ds-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    // visibility observer
    const reveals = Array.from(document.querySelectorAll(".ds-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("ds-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    reveals.forEach((item) => observer.observe(item));

    // form logic
    const form = document.getElementById("waitlist-form") as HTMLFormElement | null;
    const input = document.getElementById("waitlist-email") as HTMLInputElement | null;
    const button = document.getElementById("waitlist-submit") as HTMLButtonElement | null;
    const label = button?.querySelector(".ds-btn-label") as HTMLElement | null;
    const feedback = document.getElementById("waitlist-feedback") as HTMLElement | null;

    function setState(state: string) {
      if (!input || !button || !label || !feedback) return;
      const done = state === "success" || state === "duplicate";
      input.disabled = state === "submitting" || done;
      button.disabled = state === "submitting" || done;
      label.textContent = state === "submitting" ? "Joining…" : done ? "You’re on the list" : "Join the waitlist";
      feedback.textContent = {
        idle: "Just product updates. No noise, and you can unsubscribe anytime.",
        success: "You’re on the list. We’ll keep you posted.",
        duplicate: "You’re already on the list. We’ll be in touch.",
        error: "That didn’t go through. Please try again.",
      }[state] ?? "Just product updates. No noise, and you can unsubscribe anytime.";
      feedback.classList.toggle("ds-form-error", state === "error");
    }

    form?.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!input?.value.trim() || !input.checkValidity()) {
        input?.reportValidity();
        return;
      }
      setState("submitting");
      try {
        const key = "sb_publishable_C4au3_MqFtwcm3q9tYjx7Q_kuMvstws";
        const response = await fetch("https://xebmkurnvdfenizqwnox.supabase.co/rest/v1/waitlist_signups", {
          method: "POST",
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify({ email: input.value.trim().toLowerCase() }),
        });
        if (response.ok) setState("success");
        else if (response.status === 409 || (await response.text()).toLowerCase().includes("duplicate")) setState("duplicate");
        else setState("error");
      } catch {
        setState("error");
      }
    });
    input?.addEventListener("input", () => {
      if (feedback?.classList.contains("ds-form-error")) setState("idle");
    });
  }, []);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('Just product updates. No noise, and you can unsubscribe anytime.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    // Simulate successful waitlist signup
    setStatus('success');
    setMessage("You're on the list! We'll notify you when Nibble launches for Android.");
    setEmail('');
  };

  return (
    <main className="ds-site" id="top">
      <header className="ds-header">
        <a className="ds-brand" href="#top" aria-label="Nibble home">
          <span className="ds-brand-icon" aria-hidden="true">N<span>↗</span></span>
          <span>nibble<span className="ds-brand-accent">.</span></span>
        </a>
        <p className="ds-header-note">TAKE BACK CONTROL</p>
        <a className="ds-header-cta" href="#waitlist">Get early access
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
        </a>
      </header>

      <section className="ds-hero" aria-labelledby="hero-title">
        <p className="ds-eyebrow"><span></span> KNOW WHERE IT GOES</p>
        <h1 id="hero-title">Your data is running out.<br /><span>Find out who’s eating it.</span></h1>
        <p className="ds-hero-sub">See which apps use your mobile data, block the ones you choose, and make every gigabyte go further.</p>
        <a className="ds-hero-button" href="#waitlist">Get early access
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
        <p className="ds-platform-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
          Android first. Made for the way you use data.
        </p>

        <div className="ds-stage" aria-label="Illustrative preview of the Nibble app">
          <div className="ds-carrier ds-carrier-mtn" aria-label="MTN"><span className="ds-mtn-mark">MTN</span></div>
          <div className="ds-carrier ds-carrier-airtel" aria-label="Airtel">airtel</div>
          <div className="ds-carrier ds-carrier-glo" aria-label="Glo">glo</div>
          <div className="ds-phone-wrap">
            <div className="ds-phone">
              <div className="ds-phone-screen">
                <div className="ds-status-bar"><span>9:41</span><span className="ds-island"></span><span className="ds-status-symbols" aria-hidden="true">▂▄▆ ◉ ▭</span></div>
                <div className="ds-phone-content">
                  <div className="ds-phone-nav"><span>‹ Overview</span><span>•••</span></div>
                  <p className="ds-greeting">Good morning, Alex</p>
                  <h2>Your data,<br />under control<span>.</span></h2>
                  <div className="ds-usage-panel">
                    <div className="ds-usage-top"><span>DATA USED THIS MONTH</span><span>October⌄</span></div>
                    <div className="ds-usage-number">8.6 <span>GB</span></div>
                    <div className="ds-usage-track"><span></span></div>
                    <div className="ds-usage-bottom"><span>8.6 GB used</span><span>15 GB plan</span></div>
                  </div>
                  <div className="ds-apps-heading">
                    <div><span className="ds-phone-overline">THE BREAKDOWN</span><h3>Who’s using your data?</h3></div>
                    <span className="ds-see-all">See all →</span>
                  </div>
                  <div className="ds-phone-apps">
                    <div className="ds-phone-app">
                      <span className="ds-phone-app-icon ds-icon-music" aria-hidden="true">♪</span>
                      <div className="ds-phone-app-details">
                        <div className="ds-phone-app-line"><strong>TikTok</strong><b>2.4 GB</b></div>
                        <span className="ds-phone-app-category">Entertainment</span>
                        <div className="ds-phone-app-track"><span style={{width:'88%'}}></span></div>
                      </div>
                    </div>
                    <div className="ds-phone-app">
                      <span className="ds-phone-app-icon ds-icon-video" aria-hidden="true">▶</span>
                      <div className="ds-phone-app-details">
                        <div className="ds-phone-app-line"><strong>YouTube</strong><b>1.8 GB</b></div>
                        <span className="ds-phone-app-category">Video</span>
                        <div className="ds-phone-app-track"><span style={{width:'68%'}}></span></div>
                      </div>
                    </div>
                    <div className="ds-phone-app">
                      <span className="ds-phone-app-icon ds-icon-social" aria-hidden="true">◎</span>
                      <div className="ds-phone-app-details">
                        <div className="ds-phone-app-line"><strong>Instagram</strong><b>940 MB</b></div>
                        <span className="ds-phone-app-category">Social</span>
                        <div className="ds-phone-app-track"><span style={{width:'42%'}}></span></div>
                      </div>
                    </div>
                    <div className="ds-phone-app">
                      <span className="ds-phone-app-icon ds-icon-browser" aria-hidden="true">✳</span>
                      <div className="ds-phone-app-details">
                        <div className="ds-phone-app-line"><strong>Safari</strong><b>610 MB</b></div>
                        <span className="ds-phone-app-category">Browser</span>
                        <div className="ds-phone-app-track"><span style={{width:'29%'}}></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ds-stage-fade" aria-hidden="true"></div>
          <p className="ds-preview-note">A little more control, right in your pocket.</p>
        </div>
      </section>

      <section className="ds-problem" id="the-problem" aria-labelledby="problem-title">
        <div className="ds-section-inner ds-problem-inner">
          <div className="ds-problem-copy ds-reveal">
            <p className="ds-eyebrow ds-eyebrow-light">SOUND FAMILIAR?</p>
            <h2 id="problem-title">15 GB.<br />Gone in 6 days.<br /><span>And no idea why.</span></h2>
            <p>You bought a bundle to last the month. A few scrolls, a few videos later, your balance says otherwise—and there’s no clear answer.</p>
            <a className="ds-text-link ds-text-link-light" href="#how-it-works">There’s a better way
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </a>
          </div>
          <div className="ds-problem-stats ds-reveal" aria-label="A familiar mobile data experience">
            <div className="ds-problem-stat"><strong>15 <span>GB</span></strong><span>A month’s plan</span></div>
            <div className="ds-problem-stat"><strong>6 <span>days</span></strong><span>Until it’s gone</span></div>
            <div className="ds-problem-stat"><strong>0</strong><span>Clues where it went</span></div>
            <p className="ds-example-note">An all-too-familiar example—not industry statistics.</p>
          </div>
        </div>
      </section>

      <section className="ds-how" id="how-it-works" aria-labelledby="how-title">
        <div className="ds-section-inner">
          <div className="ds-section-heading ds-reveal">
            <p className="ds-eyebrow">THREE STEPS. THAT’S IT.</p>
            <h2 id="how-title">See it. Stop it. <span>Save it.</span></h2>
            <p>Finally, your data has a plan.</p>
          </div>
          <div className="ds-steps">
            <article className="ds-step ds-reveal">
              <span className="ds-step-number">01</span>
              <span className="ds-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg></span>
              <h3>See</h3>
              <p>Know exactly which apps are using your mobile data—and how much.</p>
            </article>
            <article className="ds-step ds-reveal">
              <span className="ds-step-number">02</span>
              <span className="ds-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg></span>
              <h3>Block</h3>
              <p>Choose the apps you want to pause on mobile data with one tap.</p>
            </article>
            <article className="ds-step ds-reveal">
              <span className="ds-step-number">03</span>
              <span className="ds-step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg></span>
              <h3>Save</h3>
              <p>Keep better track of your usage and stay in control for longer.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-features" id="features" aria-labelledby="features-title">
        <div className="ds-section-inner">
          <div className="ds-section-heading ds-section-heading-left">
            <p className="ds-eyebrow">MORE CONTROL, LESS SURPRISE</p>
            <h2 id="features-title">Your data. <span>Your call.</span></h2>
            <p>The useful details, without the guesswork.</p>
          </div>
          <div className="ds-feature-grid">
            <article className="ds-feature ds-reveal">
              <span className="ds-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg></span>
              <span className="ds-feature-number">01 / CONTROL</span>
              <h3>Block app by app</h3>
              <p>Pause mobile data for the apps you choose. The rest keep working like normal.</p>
              <div className="ds-mini-control"><span className="ds-mini-app-mark">♪</span><span>TikTok</span><span className="ds-mini-toggle"><i></i></span></div>
            </article>
            <article className="ds-feature ds-reveal">
              <span className="ds-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg></span>
              <span className="ds-feature-number">02 / CLARITY</span>
              <h3>Find the data hogs</h3>
              <p>Get a clear, ranked breakdown of which apps use the most mobile data.</p>
              <div className="ds-mini-ranking">
                <span><i></i><b>Video</b><em>42%</em></span>
                <span><i></i><b>Social</b><em>28%</em></span>
              </div>
            </article>
            <article className="ds-feature ds-reveal">
              <span className="ds-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg></span>
              <span className="ds-feature-number">03 / PROGRESS</span>
              <h3>Track your usage</h3>
              <p>See how your data use is adding up against the bundle you bought.</p>
              <div className="ds-mini-usage"><span>THIS MONTH</span><b>8.6 <small>GB used</small></b><i><i></i></i></div>
            </article>
            <article className="ds-feature ds-reveal">
              <span className="ds-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg></span>
              <span className="ds-feature-number">04 / BACKGROUND</span>
              <h3>Tame background data</h3>
              <p>Spot apps using mobile data when you’re not even looking at them.</p>
              <div className="ds-mini-background"><span><span className="ds-background-dot"></span> Background use</span><b>VISIBLE</b></div>
            </article>
          </div>
        </div>
      </section>

      <section className="ds-pulse" id="insights" aria-labelledby="insights-title">
        <div className="ds-section-inner">
          <div className="ds-pulse-head ds-reveal">
            <p className="ds-eyebrow">YOUR WEEK, AT A GLANCE</p>
            <h2 id="insights-title">Small signals. <span>Smarter habits.</span></h2>
            <p>Nibble turns everyday usage into clear, useful cues—before your bundle disappears.</p>
          </div>
          <div className="ds-insight-grid">
            <article className="ds-insight ds-reveal"><span className="ds-insight-kicker">TODAY</span><strong>1.2 <small>GB</small></strong><p>Used across 14 apps</p><div className="ds-spark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article>
            <article className="ds-insight ds-insight-dark ds-reveal"><span className="ds-insight-kicker">TOP MOVER</span><strong>+38%</strong><p>Video use since Monday</p><div className="ds-insight-note"><span>▶</span> YouTube is trending up</div></article>
            <article className="ds-insight ds-reveal"><span className="ds-insight-kicker">QUIET WIN</span><strong>640 <small>MB</small></strong><p>Saved from background use</p><div className="ds-saved-line"><span></span><b>Protected</b></div></article>
          </div>
        </div>
      </section>

      <section className="ds-plan" id="planning" aria-labelledby="planning-title">
        <div className="ds-section-inner ds-plan-inner">
          <div className="ds-plan-copy ds-reveal">
            <p className="ds-eyebrow">PLAN AHEAD, WITHOUT THE MATH</p>
            <h2 id="planning-title">Nibble helps your bundle <span>keep pace.</span></h2>
            <p>Set your bundle size and renewal date. Nibble keeps an eye on the pace, then gives you a quiet heads-up when today’s usage could cost you later.</p>
            <ul><li><span>01</span> Daily pace matched to your bundle</li><li><span>02</span> Timely alerts before you run low</li><li><span>03</span> Simple suggestions you can act on</li></ul>
          </div>
          <div className="ds-plan-demo ds-reveal" aria-label="Illustrative data plan forecast">
            <div className="ds-plan-demo-top"><span>BUNDLE FORECAST</span><b>On track</b></div>
            <div className="ds-plan-ring"><div><strong>19</strong><span>days left</span></div></div>
            <div className="ds-plan-metrics"><div><span>Remaining</span><strong>6.4 GB</strong></div><div><span>Daily pace</span><strong>337 MB</strong></div></div>
            <p><span>✓</span> At this pace, your data reaches renewal day.</p>
          </div>
        </div>
      </section>

      <section className="ds-trust" id="privacy" aria-labelledby="trust-title">
        <div className="ds-section-inner ds-trust-inner">
          <div className="ds-trust-copy ds-reveal">
            <p className="ds-eyebrow">YOUR PHONE. YOUR BOUNDARIES.</p>
            <h2 id="trust-title">Data control shouldn’t mean giving up <span>privacy.</span></h2>
            <p>Nibble needs Android’s system network-control permission to see app-level data use and apply the controls you choose. The work happens on your device—not by sending your traffic through our servers.</p>
            <div className="ds-privacy-promise">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              <p><strong>Private by design.</strong> Messages, browsing history, and passwords are never collected.</p>
            </div>
          </div>
          <div className="ds-trust-list ds-reveal">
            <div className="ds-trust-row">
              <span className="ds-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg></span>
              <div><h3>What it uses</h3><p>Android’s network-control permission to understand data use by app and apply your choices.</p></div>
              <svg className="ds-trust-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div className="ds-trust-row">
              <span className="ds-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
              <div><h3>What stays yours</h3><p>Your messages, browsing history, and passwords. They’re not part of this.</p></div>
              <svg className="ds-trust-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div className="ds-trust-row">
              <span className="ds-trust-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></span>
              <div><h3>No traffic detour</h3><p>Your connection isn’t routed through our servers to see which apps are using data.</p></div>
              <svg className="ds-trust-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <p className="ds-trust-footnote">Android may show a system indicator when network-control access is active. You stay in charge of your permissions.</p>
          </div>
        </div>
      </section>

      <section className="ds-faq" id="faq" aria-labelledby="faq-title">
        <div className="ds-section-inner ds-faq-inner">
          <div className="ds-section-heading ds-section-heading-left">
            <p className="ds-eyebrow">GOOD QUESTIONS</p>
            <h2 id="faq-title">Before you <span>join.</span></h2>
            <p>Here’s what you might be wondering.</p>
          </div>
          <div className="ds-faq-list ds-reveal">
            <details className="ds-faq-item">
              <summary>Does Nibble work on iPhone? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
              <p>We’re starting with Android. iPhone support isn’t available right now.</p>
            </details>
            <details className="ds-faq-item">
              <summary>Will Nibble be free? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
              <p>Pricing hasn’t been announced yet. Join the waitlist and we’ll share the details as they’re ready.</p>
            </details>
            <details className="ds-faq-item">
              <summary>Does the app use my mobile data too? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
              <p>Nibble is designed to stay lightweight. The usage view on this page is an illustrative preview of the product.</p>
            </details>
            <details className="ds-faq-item">
              <summary>Which mobile networks will it work with? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
              <p>It’s designed for Android mobile data, not a single carrier. MTN, Airtel, and Glo are examples shown here—not a list of confirmed launch partners.</p>
            </details>
            <details className="ds-faq-item">
              <summary>Why does it need a network permission? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></summary>
              <p>Android requires network-control access for app-level usage visibility and controls. Your data traffic doesn’t need to pass through our servers.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="ds-cta" id="waitlist" aria-labelledby="cta-title">
        <div className="ds-cta-inner ds-reveal">
          <p className="ds-eyebrow ds-eyebrow-light">MAKE YOUR DATA LAST LONGER</p>
          <h2 id="cta-title">Take back control.<br /><span>Keep more of your data.</span></h2>
          <p className="ds-cta-sub">Get the first update when Nibble is ready for Android.</p>
          <form className="ds-waitlist-form" id="waitlist-form" onSubmit={handleSubmit} noValidate>
            <label className="ds-sr-only" htmlFor="waitlist-email">Your email address</label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              maxLength={320}
              aria-describedby="waitlist-feedback"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" id="waitlist-submit">
              <span className="ds-btn-label">Join the waitlist</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <p id="waitlist-feedback" className="ds-form-feedback" aria-live="polite" style={{ color: status === 'error' ? 'var(--ds-highlight)' : status === 'success' ? '#a3ffb3' : 'inherit' }}>
              {message}
            </p>
          </form>
          <p className="ds-cta-privacy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            Your email stays yours. No spam, ever.
          </p>
        </div>
      </section>

      <footer className="ds-footer">
        <div className="ds-footer-main">
          <a className="ds-brand" href="#top" aria-label="Nibble home">
            <span className="ds-brand-icon" aria-hidden="true">N<span>↗</span></span>
            <span>nibble<span className="ds-brand-accent">.</span></span>
            <span className="ds-brand-footer-label">An Infinity product</span>
          </a>
          <nav className="ds-footer-nav" aria-label="Footer navigation">
            <a href="#features">Features</a>
            <a href="#privacy">Privacy</a>
            <a href="#faq">FAQ</a>
            <a href="#waitlist">Join the waitlist
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </a>
          </nav>
        </div>
        <div className="ds-footer-bottom">
          <span>© <span id="ds-year">2026</span> Nibble</span>
          <span>Android first. <span className="ds-footer-dot">·</span> An Infinity product.</span>
        </div>
      </footer>
    </main>
  );
}
