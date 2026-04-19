import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, X, 
  Mail, Phone, MapPin, ChevronRight, CheckCircle2, 
  Home, Maximize, PenTool, Clock
} from 'lucide-react';
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("Sending...");
    const formData = new FormData(event.target);

    // Provide the access key here
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    formData.append("subject", "New Lead from Tekton Spaces Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus("Success");
        event.target.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus("Error");
      }
    } catch (err) {
      setFormStatus("Error");
    }
  };

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for navigation links
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Social Links Configuration (Update these URLs with your friend's actual profiles)
  const socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://www.instagram.com/_tektonconstruction_?igsh=ajlpNWU2dzhrN3dw",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen selection:bg-emerald-700 selection:text-white">
      {/* Ensure smooth scrolling behavior across the app */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* --- HEADER & NAVIGATION --- */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={(e) => scrollToSection(e, 'home')}>
              {/* TO USE YOUR UPLOADED LOGO IMAGE: Uncomment the img tag below and remove the text layout div */}
              {/* <img src="/logo.png" alt="Tekton Spaces Logo" className="h-10 md:h-12" /> */}
              
              {/* Text Fallback matching the brand logo */}
              <div className="flex flex-col items-start justify-center leading-none">
                <div className={`text-2xl md:text-3xl font-extrabold tracking-widest ${isScrolled ? 'text-emerald-800' : 'text-white'}`}>
                  TEKTON
                </div>
                <div className={`text-[0.65rem] md:text-xs font-bold tracking-[0.25em] mt-1 ${isScrolled ? 'text-stone-500' : 'text-stone-300'}`}>
                  SPACES
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
              {['Home', 'Approach', 'Finishes', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-emerald-700 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-200'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop Socials */}
            <div className="hidden md:flex items-center space-x-4">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${isScrolled ? 'text-slate-600' : 'text-slate-200'} hover:text-emerald-700 transition-colors`}>
                <Facebook size={20} />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`${isScrolled ? 'text-slate-600' : 'text-slate-200'} hover:text-emerald-700 transition-colors`}>
                <Instagram size={20} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${isScrolled ? 'text-slate-600' : 'text-slate-200'} hover:text-emerald-700 transition-colors`}>
                <Linkedin size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-emerald-700`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Home', 'Approach', 'Finishes', 'Portfolio', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="block px-3 py-4 text-base font-medium text-slate-800 hover:text-emerald-700 hover:bg-slate-50 border-b border-slate-100"
                >
                  {item}
                </a>
              ))}
              <div className="flex space-x-6 pt-6 px-3">
                <a href={socialLinks.facebook} className="text-slate-500 hover:text-emerald-700"><Facebook size={24} /></a>
                <a href={socialLinks.instagram} className="text-slate-500 hover:text-emerald-700"><Instagram size={24} /></a>
                <a href={socialLinks.linkedin} className="text-slate-500 hover:text-emerald-700"><Linkedin size={24} /></a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT --- */}
      <main>
        
        {/* HERO SECTION */}
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
          {/* Background Image Setup */}
          <div className="absolute inset-0 z-0">
            {/* INSERT YOUR HERO IMAGE HERE */}
            <img 
              src="/images/hero-home.jpg" 
              alt="Modern architectural garden room" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
            <span className="text-stone-300 font-semibold tracking-widest uppercase mb-4 block">Tekton Spaces</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Built to Last
            </h1>
            <p className="text-xl md:text-3xl text-slate-100 font-medium mb-4 max-w-3xl mx-auto">
              Garden rooms & home extensions, properly constructed.
            </p>
            <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto">
              Every Tekton Spaces build is made to measure, properly constructed, and delivered with the care you'd expect from an established construction company.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-sm font-medium transition-all w-full sm:w-auto text-center"
              >
                Get a Free Quote
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => scrollToSection(e, 'portfolio')}
                className="bg-transparent border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-sm font-medium transition-all w-full sm:w-auto text-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>

        {/* APPROACH & PROCESS SECTION */}
        <section id="approach" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                {/* INSERT YOUR APPROACH/PROCESS IMAGE HERE */}
                <div className="relative group">
                  <img src="/images/garden-rooms-extensions.jpg" alt="Tekton Construction process" className="rounded-lg shadow-2xl z-10 relative transition-transform duration-500 group-hover:-translate-y-2" />
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-stone-300 rounded-lg z-0 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Our Approach</h2>
                <div className="w-20 h-1 bg-emerald-700 mb-8 mt-4"></div>
                
                <div className="bg-slate-50 border-l-4 border-emerald-700 p-6 rounded-r-lg mb-8 shadow-sm">
                  <p className="text-xl text-slate-700 font-medium italic leading-relaxed">
                    "A true creative partnership — uncovering what your spaces need to feel like and bringing that vision to life."
                  </p>
                </div>
                
                <h3 className="text-sm font-bold tracking-widest text-stone-500 uppercase mb-4 flex items-center">
                  <span className="w-8 h-px bg-stone-300 mr-3"></span> Our Process
                </h3>
                <div className="space-y-4">
                  <p className="text-slate-700 text-lg font-semibold">
                    Every project is fully custom-built around you.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    We design and build bespoke timber frame garden rooms, studios and living spaces — each one created from the ground up to suit your site, your style and how you want to use the space. Built using high-performance timber frame construction, every Tekton space is engineered for long-term durability, comfort and year-round use.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    From structural framing to precision finishes, we apply the same standards and attention to detail used across all Tekton Construction projects. The result is a space that feels solid, comfortable and seamlessly part of your home — built to last.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERSTITIAL BANNER */}
        <section className="relative py-20 bg-emerald-950 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/garden-rooms-extensions.jpg" alt="Architectural detail" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <p className="text-2xl md:text-4xl text-white font-light tracking-wide leading-relaxed">
              Designed for life. Engineered for performance. <br className="hidden md:block" />
              <span className="font-semibold text-emerald-400">Delivered with precision.</span>
            </p>
          </div>
        </section>

        {/* FINISHES SECTION */}
        <section id="finishes" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Finishes</h2>
              <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
              <p className="text-xl font-medium text-emerald-800 mb-4">
                Premium materials. Built to last.
              </p>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                Every Tekton space is finished to a high standard, inside and out — using materials chosen for durability, performance and a clean, modern finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* External Finishes */}
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                  <Home className="text-emerald-700" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">External Finishes</h3>
                <ul className="space-y-5">
                  {[
                    "Acrylic render finishes",
                    "Natural cedar and Siberian larch cladding",
                    "Composite cladding options",
                    "Full-height glazing (aluminium options available)"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-stone-400 mr-4 shrink-0 mt-1" size={22} />
                      <span className="text-slate-700 text-lg leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Internal Finishes */}
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-stone-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition-colors">
                  <PenTool className="text-stone-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Internal Finishes</h3>
                <ul className="space-y-5">
                  {[
                    "High-quality laminate flooring",
                    "Plastered and painted interiors",
                    "Bespoke joinery and fitted storage (optional)",
                    "High-performance insulation for year-round comfort"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-stone-400 mr-4 shrink-0 mt-1" size={22} />
                      <span className="text-slate-700 text-lg leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <p className="text-lg md:text-xl font-light relative z-10 leading-relaxed">
                All finishes can be tailored to suit your style and how you want to use the space. <br className="hidden md:block my-2"/>
                <strong className="font-semibold text-emerald-300">Every detail is chosen not just for how it looks, but for how it performs — creating a space that feels solid, comfortable and built to last.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-24 bg-slate-950 text-white border-b border-emerald-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
                <div className="w-20 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-slate-400 max-w-xl text-lg">
                  Take a look at some of the stunning spaces we've recently created for our clients across Ireland.
                </p>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* INSERT YOUR PORTFOLIO IMAGES HERE */}
              {[
                { src: "/images/garden-room-modern.jpg", title: "Modern Garden Studio" },
                { src: "/images/garden-room-lshape.jpg", title: "L-Shaped Timber Extension" },
                { src: "/images/hero-home.jpg", title: "Bespoke Home Office" },
                { src: "/images/steves-2.png", title: "Evening Garden Room" },
                { src: "/images/craftsmanship.jpg", title: "Precision Core Structure" },
                { src: "/images/garden-rooms-extensions.jpg", title: "Heritage Stone Extension" }
              ].map((project, index) => (
                <div key={index} className="group relative h-72 md:h-80 overflow-hidden bg-slate-800 rounded-xl cursor-pointer shadow-lg">
                  <img src={project.src} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link 
                to="/portfolio" 
                className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white px-10 py-5 rounded-sm font-medium tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Full Portfolio & Case Studies
              </Link>
            </div>

          </div>
        </section>

        {/* PRICING SECTION (REDESIGNED) */}
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
              <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Pricing tailored strictly to your project, with no hidden surprises.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="flex flex-col md:flex-row">
                
                {/* Price Display Side */}
                <div className="md:w-5/12 bg-emerald-900 p-10 md:p-12 text-center text-white flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <p className="text-emerald-300 font-medium tracking-widest uppercase mb-4 text-sm relative z-10">Projects Typically Range From</p>
                  <div className="text-4xl lg:text-5xl font-extrabold mb-4 relative z-10 whitespace-nowrap">
                    €1,400 <span className="text-2xl text-emerald-500 font-medium mx-1">—</span> €2,000
                  </div>
                  <p className="text-emerald-100 text-lg relative z-10 bg-emerald-950/50 px-4 py-2 rounded-full">per square metre</p>
                </div>

                {/* Details Side */}
                <div className="md:w-7/12 p-8 md:p-12 bg-white grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start">
                     <Home className="text-stone-400 mr-4 shrink-0 mt-1" size={24}/>
                     <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-1">Intended Use</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">Garden room or live-in space requirements.</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <CheckCircle2 className="text-stone-400 mr-4 shrink-0 mt-1" size={24}/>
                     <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-1">Insulation Level</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">Overall specification and energy performance.</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <Maximize className="text-stone-400 mr-4 shrink-0 mt-1" size={24}/>
                     <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-1">External Finish</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">Render, cladding or custom combination.</p>
                     </div>
                  </div>
                  <div className="flex items-start">
                     <PenTool className="text-stone-400 mr-4 shrink-0 mt-1" size={24}/>
                     <div>
                       <h4 className="font-bold text-slate-900 text-lg mb-1">Internal Fit-Out</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">Bespoke interior requirements and joinery.</p>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-emerald-700 mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Ready to start your next project? Contact us today for a free consultation and quote.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 p-8 md:p-12 rounded-xl shadow-sm border border-slate-100">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Required</label>
                    <select id="service" name="service" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 outline-none transition-colors">
                      <option value="Garden Room">Garden Room</option>
                      <option value="Home Extension">Home Extension</option>
                      <option value="Interior Refit">Interior Refit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea id="message" name="message" required rows="4" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-emerald-700 focus:border-emerald-700 outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                  </div>

                  {formStatus === "Success" && (
                    <div className="bg-emerald-50 text-emerald-800 p-4 rounded-md border border-emerald-200">
                      Message sent successfully! We will be in touch soon.
                    </div>
                  )}
                  {formStatus === "Error" && (
                    <div className="bg-red-50 text-red-800 p-4 rounded-md border border-red-200">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button type="submit" disabled={formStatus === "Sending..."} className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-4 rounded-md transition-colors flex justify-center items-center">
                    {formStatus === "Sending..." ? "Sending..." : "Send Message"} <ChevronRight size={20} className={`ml-2 ${formStatus === "Sending..." ? "hidden" : "block"}`} />
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-900 text-white rounded-xl p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="text-emerald-500 mt-1 mr-4 shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-lg">Location</h4>
                        <p className="text-slate-400 mt-1">Meath, Ireland</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="text-emerald-500 mt-1 mr-4 shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-lg">Phone</h4>
                        <p className="text-slate-400 mt-1">085 745 3382</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-emerald-500 mt-1 mr-4 shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <p className="text-slate-400 mt-1">info@tektonspaces.ie</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="text-emerald-500 mt-1 mr-4 shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-lg">Hours</h4>
                        <p className="text-slate-400 mt-1">Mon — Fri: 8:00 — 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-slate-800">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href={socialLinks.facebook} className="bg-slate-800 p-3 rounded-full hover:bg-emerald-700 transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href={socialLinks.instagram} className="bg-slate-800 p-3 rounded-full hover:bg-emerald-700 transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href={socialLinks.linkedin} className="bg-slate-800 p-3 rounded-full hover:bg-emerald-700 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex flex-col items-start leading-none mb-2">
                <div className="text-2xl font-extrabold tracking-widest text-white">
                  TEKTON
                </div>
                <div className="text-[0.65rem] font-bold tracking-[0.25em] mt-1 text-stone-500">
                  SPACES
                </div>
              </div>
              <p className="text-sm">Premium Bespoke Spaces in Ireland.</p>
            </div>
            
            <div className="flex space-x-6 text-sm mb-6 md:mb-0">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-emerald-600 transition-colors">Home</a>
              <a href="#approach" onClick={(e) => scrollToSection(e, 'approach')} className="hover:text-emerald-600 transition-colors">Approach</a>
              <a href="#finishes" onClick={(e) => scrollToSection(e, 'finishes')} className="hover:text-emerald-600 transition-colors">Finishes</a>
              <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-emerald-600 transition-colors">Portfolio</a>
              <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-emerald-600 transition-colors">Pricing</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-emerald-600 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Tekton Spaces. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Developed securely for Firebase.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
