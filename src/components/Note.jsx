import { useState } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Note() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "leave-a-note", ...form }),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="note" className="note">
      <div className="note__intro" data-reveal>
        <h3>Leave a note</h3>
        <p>
          Feedback, a question, or just saying hi. It lands straight in my
          inbox.
        </p>
      </div>

      {status === "sent" ? (
        <p className="note__success" role="status">
          Message sent. Thanks for reaching out, I&apos;ll get back to you
          soon.
        </p>
      ) : (
        <form
          name="leave-a-note"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="note-form"
          data-reveal
          style={{ "--i": 1 }}
        >
          <input type="hidden" name="form-name" value="leave-a-note" />
          <p className="note-form__honeypot">
            <label>
              Leave this field blank
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="note-form__wide">
            <span>Your note</span>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <div className="note-form__wide note-form__actions">
            <button type="submit" className="button" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send note"}
            </button>
            {status === "error" && (
              <p className="note__error" role="alert">
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
