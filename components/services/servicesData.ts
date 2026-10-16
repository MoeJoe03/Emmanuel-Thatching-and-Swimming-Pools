export interface ServiceItem {
  id: string;
  num: string;
  serviceTag: string; // e.g., "SERVICE 01"
  navLabel: string;   // e.g., "Thatching"
  title: string;      // e.g., "THATCH ROOFING & REPAIRS ."
  summary: string;    // Italic serif summary line
  handleList: string[]; // 6 items for the 2-column checklist
  image: any;
  phone: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "thatch",
    num: "01",
    serviceTag: "SERVICE 01",
    navLabel: "Thatching",
    title: "THATCH ROOFING & REPAIRS .",
    summary: "Complete thatch roof builds, custom lapas, re-thatching, combing, and fire-retardant sealing. Built to withstand Gauteng weather.",
    handleList: [
      "New Thatch Lapas & Gazebos",
      "Leak Repairs & Ridge Capping",
      "Re-thatching & Deep Combing",
      "SABS Fire-Retardant Spray",
      "Lightning Conductor Masts",
      "CCA Gum Pole Structural Work"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/thatch.jpg",
    phone: "+27 63 325 2012"
  },
  {
    id: "pools",
    num: "02",
    serviceTag: "SERVICE 02",
    navLabel: "Swimming Pools",
    title: "SWIMMING POOLS & RENOVATIONS .",
    summary: "Custom in-ground concrete pools, smooth Marblite resurfacing, fiberglass relining, and pipe repairs. Built to last.",
    handleList: [
      "New Concrete & Gunite Pools",
      "Underground Leak Detection",
      "Premium Marblite Resurfacing",
      "Sand Filter & Pump Overhauls",
      "Marine Fiberglass Relining",
      "Salt Chlorinator Conversions"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/services/pool_services_image.jpeg" ,
    phone: "+27 63 325 2012"
  },
  {
    id: "building",
    num: "03",
    serviceTag: "SERVICE 03",
    navLabel: "Building & Renovations",
    title: "BUILDING & RENOVATIONS .",
    summary: "Turnkey room additions, braai room enclosures, boundary walls, and masonry work when your home or property calls for it.",
    handleList: [
      "Custom Braai Room Additions",
      "Boundary & Retaining Walls",
      "Patio & Veranda Enclosures",
      "Foundation Trenching & Slabs",
      "Open-Plan Wall Removals",
      "Structural Lintels & Plastering"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/services/building_services.jpeg" ,
    phone: "+27 63 325 2012"
  },
  {
    id: "harvey",
    num: "04",
    serviceTag: "SERVICE 04",
    navLabel: "Harvey Tile",
    title: "HARVEY TILE INSTALLATION .",
    summary: "Direct thatch-over stone-coated steel tiles. Keep your cozy thatch interior while lowering insurance and eliminating maintenance.",
    handleList: [
      "Direct Thatch-Over Conversions",
      "Hail & Severe Storm Proofing",
      "Class-A Fireproof Outer Shell",
      "Valley & Chimney Flashings",
      "Thermal Insulation Foil Layers",
      "Insurance Premium Reductions"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/harvey_tile_installation_three_rivers.jpg",
    phone: "+27 63 325 2012"
  },
  {
    id: "decking",
    num: "05",
    serviceTag: "SERVICE 05",
    navLabel: "Decking",
    title: "DECKING & REPAIRS .",
    summary: "Custom deck installations, replacements, and repairs. Full framing, railings, staining, and sealing for decks built to last.",
    handleList: [
      "Natural Hardwood Decking (Balau)",
      "Deck Replacements & Restorations",
      "Wood-Plastic Composite (WPC)",
      "Framing & Structural Sub-bases",
      "Poolside Cantilevered Copings",
      "Pergolas, Railings & Steps"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/decking_benoni.jpg",
    phone: "+27 63 325 2012"
  },
  {
    id: "painting",
    num: "06",
    serviceTag: "SERVICE 06",
    navLabel: "Painting",
    title: "PAINTING & REPAIRS .",
    summary: "Commercial-grade exterior weather coatings, interior finishes, and polyester-membrane roof waterproofing.",
    handleList: [
      "UV-Resistant Exterior Painting",
      "Interior Wall & Ceiling Luxury Finish",
      "Flat Roof & Parapet Waterproofing",
      "High-Pressure Hydro-Jet Wash Prep",
      "Timber Gum Pole Protective Sealing",
      "Plaster Hairline Crack Repairs"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/painting.jpg",
    phone: "+27 63 325 2012"
  },
  {
    id: "paving",
    num: "07",
    serviceTag: "SERVICE 07",
    navLabel: "Paving",
    title: "PAVING & REPAIRS .",
    summary: "Precision driveways, patios, and pool surrounds laid on compacted G5 foundations with reinforced concrete haunching.",
    handleList: [
      "Heavy-Duty Driveway Paving",
      "Sunken Paving Leveling & Lifting",
      "Non-Slip Bullnose Pool Copings",
      "Walkways & Braai Patios",
      "Concrete Haunching Edge Beams",
      "Ant-Proof Joint Re-sanding"
    ],
    image: "https://ddxckxosuhnaolrwcsan.supabase.co/storage/v1/object/public/Emmanuel%20Thatching/images/paving.jpg",
    phone: "+27 63 325 2012"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "FREE ESTIMATE",
    description: "Give us a call. We'll come out, assess the work, and put an honest number on it. No fees, no pressure."
  },
  {
    num: "02",
    title: "CLEAR SCOPE",
    description: "We walk you through the materials, the timeline, and exactly what's included. No vague line items."
  },
  {
    num: "03",
    title: "QUALITY BUILD",
    description: "Emmanuel and the crew get to work. Clean job sites, honest communication, no disappearing acts."
  },
  {
    num: "04",
    title: "WALKTHROUGH",
    description: "We don't leave until you're happy. Final inspection, clean up, and a handshake. The way it should be."
  }
];
