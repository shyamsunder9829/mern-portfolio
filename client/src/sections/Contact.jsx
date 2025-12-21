import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully 🚀");

        // ✅ CLEAR FORM
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (error) {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center
      bg-linear-to-r from-purple-600 to-pink-600 px-6"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-3 rounded-lg
          hover:bg-pink-600 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
