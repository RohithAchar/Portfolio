"use client";

import { useState } from "react";
import Alert from "./Alert";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setLoading(true);

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setLoading(false);
    const result = await res.json();

    if (res.status === 200) {
      setStatus(200);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus(500);
    }
  };
  console.log(status);
  return (
    <div className="text-slate-400">
      {status === 200 && <Alert message={"Message sent successfully!"} />}
      {status === 500 && <Alert message={"Failed to send message."} />}
      <p className="text-slate-300 text-2xl font-semibold mt-8 mb-4">
        Contact me
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="bg-secondary/10 w-full p-2 rounded-lg mt-2 border border-accent/20"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jon Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="bg-secondary/10 w-full p-2 rounded-lg mt-2 border border-accent/20"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="xyz@gmail.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            className="bg-secondary/10 w-full p-2 rounded-lg mt-2 border border-accent/20"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-white p-4 rounded-lg mt-2 hover:bg-accent/90"
        >
          Send
        </button>
      </form>
    </div>
  );
}
