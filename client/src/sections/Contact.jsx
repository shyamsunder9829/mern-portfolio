import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center
      bg-linear-to-r from-purple-500 to-pink-500 dark:from-slate-600 dark:via-slate-700 dark:to-slate-900"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-full max-w-md dark:text-black"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-100"
          placeholder="Name"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-100"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-gray-100"
          placeholder="Message"
          required
        />

        <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded">
          Send
        </button>
      </form>
    </section>
  );
}
