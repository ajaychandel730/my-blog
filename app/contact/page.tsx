"use client";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Github, Linkedin, Mail, MessageSquare, Send, Twitter } from "lucide-react";
import { useState } from "react";

  const  ContactPage = ()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    alert("Thank you for your message! This is a demo form - in a real website, this would be sent to the blog owner.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:your.email@example.com",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/yourusername",
      color: "text-gray-800",
      bgColor: "bg-gray-100",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/yourusername",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <MessageSquare size={40} className="text-white" />
        </div>
        <h1 className="text-4xl mb-4">Get In Touch</h1>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hi? I'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl mb-6">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="mt-1"
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows={6}
                className="mt-1"
              />
            </div>

            <Button type="submit" className="w-full">
              <Send size={16} className="mr-2" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Social Links & Info */}
        <div>
          <h2 className="text-2xl mb-6">Connect With Me</h2>
          <p className="text-neutral-600 mb-8">
            You can also reach out to me on social media or via email. I'm always happy to connect 
            with fellow developers and readers!
          </p>

          <div className="space-y-4 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${link.bgColor} rounded-full flex items-center justify-center shrink-0`}>
                    <Icon className={link.color} size={24} />
                  </div>
                  <div>
                    <div>{link.name}</div>
                    <div className="text-sm text-neutral-500">@yourusername</div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="bg-neutral-50 rounded-lg p-6">
            <h3 className="text-xl mb-3">Response Time</h3>
            <p className="text-neutral-600 mb-4">
              I typically respond to messages within 24-48 hours. Thanks for your patience!
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Usually replies within a day</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <h2 className="text-2xl mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="mb-2">Can I request a blog topic?</h3>
            <p className="text-neutral-600">
              Absolutely! I love hearing what topics you'd like to learn about. Send me your suggestions!
            </p>
          </div>
          <div>
            <h3 className="mb-2">Do you offer consulting or freelance work?</h3>
            <p className="text-neutral-600">
              Feel free to reach out to discuss potential collaborations or projects.
            </p>
          </div>
          <div>
            <h3 className="mb-2">How can I support your work?</h3>
            <p className="text-neutral-600">
              Sharing my blog posts and providing feedback helps a lot. Your engagement is the best support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;