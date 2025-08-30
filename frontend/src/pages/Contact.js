import React, { useState } from "react";
import axios from "axios";

// 1. API URL ko component ke bahar define karein
// Yeh environment variable se URL lega. Agar nahi milega, toh localhost use karega.
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // Can be: '', 'sending', 'sent', 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // 2. Dynamic API URL ka istemal karein
      await axios.post(`${API_URL}/api/contact`, form);
      setStatus("sent");
      // Form ko reset karein
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
    }
  };

  // Helper object for cleaner status messages in JSX
  const statusMessages = {
    sent: "Message Sent! Thank you.",
    sending: "Sending...",
    error: "Error sending. Please try again.",
  };

  return (
    <main className="page">
      <h1 className="page-title">Contact Us!</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* 3. Accessibility ke liye label add karein */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows="6"
          value={form.message}
          onChange={handleChange}
          required
        />

        <div className="form-footer">
          {/* 4. Sending ke dauran button ko disable karein */}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send"}
          </button>
          
          {/* Status message yahan dikhega */}
          {status && <span className={`status-${status}`}>{statusMessages[status]}</span>}
        </div>
      </form>
    </main>
  );
}