const messages = {
  idle: "Just product updates. No noise, and you can unsubscribe anytime.",
  success: "You’re on the list. We’ll keep you posted.",
  duplicate: "You’re already on the list. We’ll be in touch.",
  error: "That didn’t go through. Please try again.",
};

const year = document.getElementById("ds-year");
if (year) year.textContent = String(new Date().getFullYear());

const reveals = [...document.querySelectorAll(".ds-reveal")];
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ds-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
reveals.forEach((item) => observer.observe(item));

const form = document.getElementById("waitlist-form");
const input = document.getElementById("waitlist-email");
const button = document.getElementById("waitlist-submit");
const label = button?.querySelector(".ds-btn-label");
const feedback = document.getElementById("waitlist-feedback");

function setState(state) {
  if (!input || !button || !label || !feedback) return;
  const done = state === "success" || state === "duplicate";
  input.disabled = state === "submitting" || done;
  button.disabled = state === "submitting" || done;
  label.textContent = state === "submitting" ? "Joining…" : done ? "You’re on the list" : "Join the waitlist";
  feedback.textContent = messages[state] ?? messages.idle;
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
      headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
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
