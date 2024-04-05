import { useState } from "react";

const bottomBarData = [
  {
    section: "Carpets",
    sectionData: [
      {
        category: "Material-Based Categories",
        subcategories: [
          "Wool Carpets",
          "Nylon Carpets",
          "Polyester Carpets",
          "Polypropylene Carpets",
          "Silk Carpets",
          "Cotton Carpets",
          "Jute Carpets",
          "Sisal Carpets",
          "Bamboo Carpets",
        ],
      },
      {
        category: "Style-Based Categories",
        subcategories: [
          "Traditional/Oriental Carpets",
          "Modern/Contemporary Carpets",
          "Transitional Carpets",
          "Geometric Pattern Carpets",
          "Floral Pattern Carpets",
          "Abstract Pattern Carpets",
          "Shag Carpets",
          "Berber Carpets",
          "Kilim Carpets",
          "Persian Carpets",
        ],
      },
      {
        category: "Size-Based Categories",
        subcategories: ["Small Area Rugs", "Medium Area Rugs", "Large Area Rugs", "Oversized Area Rugs", "Runner Rugs"],
      },
      {
        category: "Purpose-Based Categories",
        subcategories: [
          "Indoor Carpets",
          "Outdoor Carpets",
          "High-Traffic Area Carpets",
          "Pet-Friendly Carpets",
          "Kids' Room Carpets",
          "Office Carpets",
          "Stair Carpets",
          "Kitchen Carpets",
        ],
      },
      {
        category: "Color-Based Categories",
        subcategories: [
          "Neutral Color Carpets",
          "Bold Color Carpets",
          "Multi-color Carpets",
          "Monochrome Carpets",
          "Pastel Color Carpets",
        ],
      },
      {
        category: "Price Range-Based Categories",
        subcategories: ["Budget Carpets", "Mid-Range Carpets", "Luxury/High-End Carpets"],
      },
      {
        category: "Special Features-Based Categories",
        subcategories: [
          "Eco-Friendly Carpets",
          "Stain-Resistant Carpets",
          "Anti-Slip Carpets",
          "Noise-Reducing Carpets",
          "Hypoallergenic Carpets",
        ],
      },
      {
        category: "Customization Options",
        subcategories: ["Custom Size Carpets", "Custom Design Carpets", "Custom Material Carpets"],
      },
    ],
  },
  {
    section: "Antiques",
    sectionData: [
      {
        category: "Time Period",
        subcategories: [
          "Ancient Antiques",
          "Medieval Antiques",
          "Renaissance Antiques",
          "Baroque Antiques",
          "Victorian Antiques",
          "Art Nouveau Antiques",
          "Art Deco Antiques",
          "Mid-Century Modern Antiques",
        ],
      },
      {
        category: "Origin",
        subcategories: [
          "European Antiques",
          "Asian Antiques",
          "African Antiques",
          "Middle Eastern Antiques",
          "American Antiques",
        ],
      },
      {
        category: "Type",
        subcategories: [
          "Furniture Antiques",
          "Ceramic Antiques",
          "Glassware Antiques",
          "Silverware Antiques",
          "Jewelry Antiques",
          "Textile Antiques",
          "Weaponry Antiques",
          "Numismatic Antiques",
          "Photographic Antiques",
          "Scientific Antiques",
          "Musical Instrument Antiques",
          "Decorative Arts Antiques",
        ],
      },
      {
        category: "Style",
        subcategories: [
          "Baroque Style Antiques",
          "Rococo Style Antiques",
          "Neoclassical Style Antiques",
          "Gothic Revival Style Antiques",
          "Arts and Crafts Style Antiques",
          "Art Nouveau Style Antiques",
          "Art Deco Style Antiques",
          "Mid-Century Modern Style Antiques",
        ],
      },
      {
        category: "Material",
        subcategories: [
          "Wooden Antiques",
          "Metal Antiques",
          "Porcelain Antiques",
          "Bronze Antiques",
          "Marble Antiques",
          "Ivory Antiques",
          "Textile Antiques",
          "Glass Antiques",
        ],
      },
      {
        category: "Usage",
        subcategories: ["Functional Antiques", "Decorative Antiques", "Collectible Antiques", "Architectural Antiques"],
      },
      {
        category: "Specialty",
        subcategories: ["Rare Antiques", "Signed Antiques", "Antique Reproductions"],
      },
    ],
  },
  {
    section: "Decoratives",
    sectionData: [
      {
        category: "Home Decor",
        subcategories: [
          "Vases",
          "Candles & Candleholders",
          "Decorative Bowls & Plates",
          "Sculptures & Figurines",
          "Decorative Mirrors",
          "Decorative Clocks",
          "Decorative Boxes & Baskets",
          "Wall Decor",
          "Decorative Accents",
        ],
      },
      {
        category: "Textiles & Fabrics",
        subcategories: ["Throw Pillows", "Blankets & Throws", "Curtains & Drapes", "Table Linens", "Rugs & Mats"],
      },
      {
        category: "Art & Wall Decor",
        subcategories: [
          "Paintings",
          "Prints & Posters",
          "Canvas Art",
          "Wall Decals & Stickers",
          "Wall Tapestries",
          "Wall Sculptures",
          "Framed Art",
        ],
      },
      {
        category: "Decorative Accents",
        subcategories: [
          "Artificial Plants & Flowers",
          "Decorative Pillows",
          "Scented Candles & Diffusers",
          "Decorative Trays",
          "Ornaments & Decorative Objects",
          "Bookends",
          "Decorative Statues",
        ],
      },
      {
        category: "Holiday Decor",
        subcategories: [
          "Christmas Decor",
          "Halloween Decor",
          "Thanksgiving Decor",
          "Easter Decor",
          "Valentine's Day Decor",
          "Hanukkah Decor",
          "New Year's Eve Decor",
        ],
      },
      {
        category: "Seasonal Decor",
        subcategories: ["Spring Decor", "Summer Decor", "Fall Decor", "Winter Decor"],
      },
    ],
  },
  {
    section: "Popular",
    sectionData: [
      {
        category: "Popular Carpets",
        subcategories: [
          "Handmade Carpets",
          "Vintage Carpets",
          "Designer Carpets",
          "Persian Carpets",
          "Shag Carpets",
          "Modern Carpets",
        ],
      },
      {
        category: "Popular Antiques",
        subcategories: ["Antique Rugs", "Antique Textiles", "Antique Furniture", "Antique Decorative Items"],
      },
      {
        category: "Popular Rugs",
        subcategories: ["Area Rugs", "Runner Rugs", "Round Rugs", "Oval Rugs", "Square Rugs"],
      },
      {
        category: "Popular Decoratives",
        subcategories: [
          "Wall Hangings",
          "Tapestries",
          "Throw Pillows",
          "Curtains & Drapes",
          "Table Runners",
          "Decorative Bowls",
        ],
      },
    ],
  },
  {
    section: "Sale",
    sectionData: [
      {
        category: "Carpets On Sale",
        subcategories: [
          "Handmade Carpets",
          "Vintage Carpets",
          "Designer Carpets",
          "Persian Carpets",
          "Shag Carpets",
          "Modern Carpets",
        ],
      },
      {
        category: "Antiques On Sale",
        subcategories: ["Antique Rugs", "Antique Textiles", "Antique Furniture", "Antique Decorative Items"],
      },
      {
        category: "Rugs On Sale",
        subcategories: ["Area Rugs", "Runner Rugs", "Round Rugs", "Oval Rugs", "Square Rugs"],
      },
      {
        category: "Decoratives On Sale",
        subcategories: ["Wall Art", "Sculptures", "Vases", "Candles & Holders", "Mirrors", "Clocks"],
      },
    ],
  },
];

const Bottombar = () => {
  const [open, setOpen] = useState(-1);

  return (
    <div className="justify-evenly hidden sm:flex relative shadow-md">
      {bottomBarData.map((data, index) => (
        <>
          <p
            className="font-bold text-default-600 cursor-pointer hover:text-black px-[2rem] py-[1rem]"
            onMouseEnter={() => setOpen(index)}
            onMouseLeave={() => setOpen(-1)}
          >
            {data.section}
          </p>
          <div
            className={
              open === index
                ? "absolute w-full top-[3.5rem] z-[10] px-[5rem] py-[2rem] flex flex-wrap gap-x-[3rem] gap-y-[2rem] justify-between bg-white border"
                : "hidden"
            }
            onMouseEnter={() => setOpen(index)}
            onMouseLeave={() => setOpen(-1)}
          >
            {data.sectionData.map((dataSection) => (
              <div>
                <p className="font-bold text-[red]">{dataSection.category}</p>
                <ul>
                  {dataSection.subcategories.map((categoriesData) => (
                    <li className="cursor-pointer hover:translate-x-1 transition text-sm italic">{categoriesData}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Bottombar;
