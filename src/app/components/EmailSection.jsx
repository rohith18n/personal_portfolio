"use client";
import React, { useState, useEffect } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import WhatsAppIcon from "../../../public/whatsapp-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a resize handler
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // ✅ Store submitted form data for comparison
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      setSubmittedData(formData); // ✅ Save snapshot of sent data
    }

    setLoading(false);
  };

  // ✅ Compare current form data to submitted snapshot
  const isSameAsSubmitted =
    emailSubmitted &&
    submittedData &&
    formData.email === submittedData.email &&
    formData.subject === submittedData.subject &&
    formData.message === submittedData.message;

  return (
    <section
    id="contact"
    className={
      isMobile
        ? "md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        : "grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    }
    >
      

      <div className="z-10">
          <div className={isMobile ? "mb-8" : ""}>

        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I’m always open to new opportunities and conversations. Whether you
          have a question, a project in mind, or just want to say hi, feel free
          to reach out. I’ll do my best to get back to you soon!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/rohith18n">
            <Image src={GithubIcon} alt="Github Icon" 
            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"

            />
          </Link>
          <Link href="http://www.linkedin.com/in/rohith-18n">
            <Image src={LinkedinIcon} alt="Linkedin Icon" 
            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"

            />
          </Link>
          <Link href="https://instagram.com/rohithh___n">
            <Image src={InstagramIcon} alt="Instagram Icon" 
            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
            />
          </Link>
          <Link href="https://wa.me/919061624061?text=Hello%20there!">
            <Image src={WhatsAppIcon} alt="WhatsApp Icon"
            className="transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"

            />
          </Link>
          </div>
        </div>
   
  </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="What’s this about?"
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Type your message.."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading || isSameAsSubmitted}
            className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full flex items-center justify-center ${
              loading || isSameAsSubmitted ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50"></span>
            ) : emailSubmitted && isSameAsSubmitted ? (
              "Message Sent"
            ) : (
              "Send Message"
            )}
          </button>

          {emailSubmitted && !isSameAsSubmitted && (
            <p className="text-yellow-400 text-sm mt-2"></p>
          )}
          {emailSubmitted && isSameAsSubmitted && (
            <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
