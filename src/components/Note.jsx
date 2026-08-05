import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

export default function Note() {
  const [ref, visible] = useReveal();
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
    <section
      id="note"
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""}`}
    >
      <h2 className="section__title">05. Leave a Note</h2>
      <p>
        Got feedback, a question, or just want to say hi? Drop a note below —
        it lands straight in my inbox.
      </p>

      {status === "sent" ? (
        <p className="note__success">
          Message sent — thanks for reaching out. I&apos;ll get back to you
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
        >
          <input type="hidden" name="form-name" value="leave-a-note" />
          <p className="note-form__honeypot">
            <label>
              Leave this field blank
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="note-form__row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your note..."
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="btn btn--primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Note"}
          </button>
          {status === "error" && (
            <p className="note__error">
              Something went wrong — try again, or email me directly.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
