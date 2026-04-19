import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Portfolio() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      src: "/images/garden-room-modern.jpg",
      title: "Modern Garden Studio in Trim, Meath",
      specs: ["High-Spec Insulation", "Flat Roof Design", "Aluminium Glazing"],
      description: "This bespoke garden studio was designed and installed for a client seeking a dedicated, quiet workspace separate from the main house. Built using premium timber framing and advanced acoustic insulation, the structure ensures a thermally efficient, year-round environment. The exterior is finished in an elegant white acrylic render perfectly contrasted against vertical timber slat detailing, while the expansive double-glazed sliding doors allow maximum natural light to flood the interior. A sleek, modern pathway connects the space directly to the home, establishing it as a seamless extension of the property's living area."
    },
    {
      src: "/images/garden-room-lshape.jpg",
      title: "L-Shaped Timber Extension",
      specs: ["Custom Shape", "Siberian Larch Cladding", "Composite Decking Steps"],
      description: "Designed to maximize the usable space in a uniquely shaped garden, this L-shaped garden room operates simultaneously as a home office and a lounge area. The exterior features stunning, vertically aligned Siberian larch cladding which provides exceptional natural durability and a rich, warm aesthetic that will weather beautifully over time. The structural wrap ensures high thermal performance, blocking out winter cold and summer heat. Precision-engineered tiered composite decking steps flawlessly bridge the elevation gap between the garden room and the lawn, creating an inviting, professional entryway."
    },
    {
      src: "/images/hero-home.jpg",
      title: "Bespoke Home Office & Retreat",
      specs: ["Anthracite Framing", "Integrated Lighting", "Landscaped Surround"],
      description: "This flagship build perfectly encapsulates the Tekton Spaces standard of premium construction. Nestled beautifully beside a custom landscaped crushed-stone garden, the room boasts massive panoramic sliding doors framed in heavy-duty anthracite aluminium. The deep overhang creates a subtle canopy that protects the entryway from the harsh Irish weather. Inside, the space is fully plastered, painted, and fitted with high-quality laminate flooring, running seamlessly into bespoke internal joinery. This garden building operates fully independently of the main home, providing the absolute perfect hideaway for focus or relaxation."
    },
    {
      src: "/images/steves-2.png",
      title: "Evening Garden Room Illumination",
      specs: ["Architectural Lighting", "Extended Canopy", "Seamless Finish"],
      description: "A garden room shouldn't just look good in the daylight. This project highlights our precision approach to integrated architectural lighting. Beautifully positioned exterior downlights are embedded directly into the structural soffit, gently washing the crisp render and highlighting the bespoke timber cladding elements. Because every build uses premium SIPs (Structural Insulated Panels) and Mannok PIR insulation boards, the internal temperature is completely stabilized, meaning this illuminated space operates as a cozy, energy-efficient sanctuary long after the sun goes down in the Irish countryside."
    },
    {
      src: "/images/craftsmanship.jpg",
      title: "Precision Core Structure & Insulation",
      specs: ["Mannok PIR Boards", "A-Rated Insulation", "Structural Integrity"],
      description: "What happens behind the walls is just as important as the final finish. This image showcases our rigorous internal engineering workflow. Here, we are applying high-performance Mannok PIR (Polyisocyanurate) insulation panels tightly between the stud framing of the ceiling structure. This creates a continuous, unbroken thermal envelope that achieves an exceptional A-rated energy performance. By completely eliminating thermal bridging, our garden rooms drastically cut down heating costs and prevent dampness, ensuring the structure feels solid, dry, and comfortable no matter what the Irish winter brings."
    },
    {
      src: "/images/garden-rooms-extensions.jpg",
      title: "Heritage Stone Extension",
      specs: ["Modern-Traditional Blend", "Dining Space", "Full Height Glazing"],
      description: "At Tekton Spaces, our expertise goes beyond standalone garden rooms; we masterfully execute complex home extensions. This incredible project required bridging a contemporary timber-clad structure against a stunning traditional Irish stone house. The sleek, vertically slatted timber facade brings a sharp, modern juxtaposition to the historic brickwork. Custom full-height sliding glass doors open the entire corner of the extension, flooding the new dining space with sunlight and seamlessly merging the indoor kitchen with the outdoor patio. The structural integration required meticulous weatherproofing and a foundation engineered for absolute permanence."
    }
  ];

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen selection:bg-emerald-700 selection:text-white">
      
      {/* Header */}
      <header className="bg-slate-950 py-6 sticky top-0 z-50 shadow-md border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex flex-col items-start justify-center leading-none hover:opacity-80 transition-opacity">
            <div className="text-2xl md:text-3xl font-extrabold tracking-widest text-white">
              TEKTON
            </div>
            <div className="text-[0.65rem] md:text-xs font-bold tracking-[0.25em] mt-1 text-stone-300">
              SPACES
            </div>
          </Link>
          <Link to="/" className="text-emerald-400 hover:text-emerald-300 flex items-center font-medium transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Title */}
      <div className="bg-emerald-950 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/garden-rooms-extensions.jpg')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Case Studies & Portfolio</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our deep-dive project breakdowns to learn exactly how Tekton Spaces engineers and builds premium, enduring structures across Ireland.
          </p>
        </div>
      </div>

      {/* Portfolio Projects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {projects.map((project, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl shrink-0 group">
              <img 
                src={project.src} 
                alt={project.title} 
                className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h2>
              <div className="w-16 h-1 bg-emerald-700 mb-6"></div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.specs.map((spec, i) => (
                  <span key={i} className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {spec}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed bg-white p-6 md:p-8 rounded-xl border border-slate-100 shadow-sm relative">
                {project.description}
              </p>
              
              <div className="mt-8">
                <Link to="/" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-800 hover:underline group">
                  <CheckCircle2 size={20} className="mr-2 group-hover:scale-110 transition-transform" /> Discuss a similar project with us
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-6 font-medium text-lg text-stone-300">Ready to start your completely custom build?</p>
          <Link to="/" className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white px-10 py-4 rounded-sm font-medium transition-colors tracking-wide">
            Get your Free Quote
          </Link>
          <div className="mt-16 text-xs border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center opacity-70">
            <p>&copy; {new Date().getFullYear()} Tekton Spaces. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Premium Garden Rooms & Extensions in Meath, Ireland.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
