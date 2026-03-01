import { Zap, Wrench, Settings, Home, Laptop, Anchor, ShoppingBag, Recycle } from 'lucide-react';

export const categories = [
    {
      id: 'electrical',
      name: 'Electrical & Automation',
      icon: Zap,
      items: [
        {
          title: 'SWITCH GEAR',
          image: '/images/categories/e1.webp',
          link: '/categories/switch-gear'
        },
        {
          title: 'AUTOMATION & CONTROL EQUIPMENTS',
          image: '/images/categories/e2.webp',
          link: '/categories/automation-control'
        },
        {
          title: 'WIRES & CABLES',
          image: '/images/categories/e3.webp',
          link: '/categories/wires-cables'
        },
        {
          title: 'SWITCH & SOCKETS',
          image: '/images/categories/e4.webp',
          link: '/categories/switch-sockets'
        },
        {
          title: 'ELECTRONICS & LIGHTING',
          image: '/images/categories/e5.webp',
          link: '/categories/electronics-lighting'
        }
      ]
    },

    {
      id: 'tools',
      name: 'Tools & Equipments',
      icon: Wrench,
      items: [
        {
          title: 'HAND TOOLS',
          image: '/images/categories/to1.webp',
          link: '/categories/hand-tools'
        },
        {
          title: 'POWER TOOLS',
          image: '/images/categories/to2.webp',
          link: '/categories/power-tools'
        },
        {
          title: 'CUTTING TOOLS',
          image: '/images/categories/to3.webp',
          link: '/categories/cutting-tools'
        },
        {
          title: 'MEASURING TOOLS',
          image: '/images/categories/to4.webp',
          link: '/categories/measuring-tools'
        },
        {
          title: 'FASTENING TOOLS',
          image: '/images/categories/to5.webp',
          link: '/categories/fastening-tools'
        }
      ]
    },

    {
      id: 'industrial',
      name: 'Industrial Equipments & Components',
      icon: Settings,
      items: [
        {
          title: 'MACHINERY',
          image: '/images/categories/i1.webp',
          link: '/categories/machinery'
        },
        {
          title: 'BEARINGS',
          image: '/images/categories/i2.webp',
          link: '/categories/bearings'
        },
        {
          title: 'HYDRAULIC COMPONENTS',
          image: '/images/categories/i3.webp',
          link: '/categories/hydraulic-components'
        },
        {
          title: 'MOTORS',
          image: '/images/categories/i4.webp',
          link: '/categories/motors'
        },
        {
          title: 'GENERATORS',
          image: '/images/categories/i5.webp',
          link: '/categories/generators'
        }
      ]
    },

    {
      id: 'construction',
      name: 'Construction & Building Material',
      icon: Home,
      items: [
        {
          title: 'HVAC SYSTEMS',
          image: '/images/categories/co1.webp',
          link: '/categories/hvac-systems'
        },
        {
          title: 'FIRE & SAFETY',
          image: '/images/categories/co2.webp',
          link: '/categories/fire-safety'
        },
        {
          title: 'BUILDING MATERIALS',
          image: '/images/categories/co3.webp',
          link: '/categories/building-materials'
        },
        {
          title: 'PLUMBING SYSTEMS',
          image: '/images/categories/co4.webp',
          link: '/categories/plumbing-systems'
        },
        {
          title: 'CONSTRUCTION TOOLS & EQUIPMENTS',
          image: '/images/categories/co5.webp',
          link: '/categories/construction-tools'
        }
      ]
    },

    {
      id: 'technology',
      name: 'Technology & Power Solution',
      icon: Laptop,
      items: [
        {
          title: 'IT EQUIPMENTS',
          image: '/images/categories/t1.webp',
          link: '/categories/it-equipments'
        },
        {
          title: 'BATTERIES',
          image: '/images/categories/t2.webp',
          link: '/categories/batteries'
        },
        {
          title: 'NETWORKING DEVICES',
          image: '/images/categories/t3.webp',
          link: '/categories/networking-devices'
        },
        {
          title: 'DATA STORAGE',
          image: '/images/categories/t4.webp',
          link: '/categories/data-storage'
        }
      ]
    },

    {
      id: 'maritime',
      name: 'Maritime & Aviation',
      icon: Anchor,
      items: [
        {
          title: 'OIL & GAS EQUIPMENTS',
          image: '/images/categories/m1.webp',
          link: '/categories/oil-gas'
        },
        {
          title: 'MARINE SUPPLIES',
          image: '/images/categories/m2.webp',
          link: '/categories/marine-supplies'
        },
        {
          title: 'AEROSPACE & AIRCRAFT MATERIALS',
          image: '/images/categories/m3.webp',
          link: '/categories/aerospace-materials'
        }
      ]
    },

    {
      id: 'consumer',
      name: 'Consumers Goods & Lifestyle',
      icon: ShoppingBag,
      items: [
        {
          title: 'GARMENTS',
          image: '/images/categories/c1.webp',
          link: '/categories/garments'
        },
        {
          title: 'COSMETICS & PERSONAL CARECARE',
          image: '/images/categories/c2.webp',
          link: '/categories/cosmetics'
        },
        {
          title: 'TOYS & GAMES',
          image: '/images/categories/c3.webp',
          link: '/categories/toys-games'
        },
        {
          title: 'KIDS ESSENTIALS',
          image: '/images/categories/c4.webp',
          link: '/categories/kids-essentials'
        },
        {
          title: 'FOOTWEAR',
          image: '/images/categories/c5.webp',
          link: '/categories/footwear'
        }
      ]
    },

    {
      id: 'scrap',
      name: 'Recycleable materials',
      icon: Recycle,
      items: [
        {
          title: 'GARMENTS',
          image: '/images/categories/c1.webp',
          link: '/categories/scrap-garments'
        },
        {
          title: 'COSMETICS & PERSONAL CARE',
          image: '/images/categories/c2.webp',
          link: '/categories/scrap-cosmetics'
        },
        {
          title: 'TOYS & GAMES',
          image: '/images/categories/c3.webp',
          link: '/categories/scrap-toys'
        },
        {
          title: 'KIDS ESSENTIALS',
          image: '/images/categories/c4.webp',
          link: '/categories/scrap-kids'
        },
        {
          title: 'FOOTWEAR',
          image: '/images/categories/c5.webp',
          link: '/categories/scrap-footwear'
        }
      ]
    }
  ];


  export const services = [
    { id: 1, name: 'Electronics Scrap Buyer in Dubai', href: '#' },
    { id: 2, name: 'Metal Scrap Buyer in Dubai, UAE', href: '#' },
    { id: 3, name: 'Copper Scrap Buyer in Dubai', href: '#' },
    { id: 4, name: 'Computer Scrap Buyer in Dubai', href: '#' },
    { id: 5, name: 'We buy dead stocks', href: '#' },
    { id: 6, name: 'Services', href: '#' },
    { id: 7, name: 'Surplus Electrical Supply', href: '#' },
    { id: 8, name: 'Preferred Stock', href: '#' },
    { id: 9, name: 'Scrap Buyer in Mussafah', href: '#' },
    { id: 10, name: 'Free Collection', href: '#' },
    { id: 11, name: 'Scrap Buyer in Sharjah', href: '#' },
    { id: 12, name: 'Scrap Buyer in Jebel Ali', href: '#' },
    { id: 13, name: 'Scrap Buyer in Al Quoz', href: '#' },
    { id: 14, name: 'Scrap Buyer in Abu Dhabi', href: '#' },
    { id: 15, name: 'Scrap Buyer Near Me', href: '#' },
    { id: 16, name: 'Electronic Scrap Buyers Near Me', href: '#' },
    { id: 17, name: 'E-waste', href: '#' },
    { id: 18, name: 'Cosmetics', href: '#' },
    { id: 19, name: 'Free Valuation', href: '#' },
  ];