import React from "react";
import ProductCard from "./ProductCard";
import taffeta from "../assets/taffeta Labels.png";
import satin from "../assets/satin Labels.png";
import cotton from "../assets/cotton labels.png";
import barcode from "../assets/barcode-stickers.jpeg";
import woven from "../assets/woven Labels.png";
import wovenPatch from "../assets/woven patches.png";
import sticker from "../assets/Heat Transfer Sticker.png";
import carton from "../assets/carton-stickers.jpeg";
import Hang from "../assets/Hang tag.png";
import PhotoCard from "../assets/photo  card.png"

const productData: {
  [key: string]: {
    image: string;
    shortDescription: string;
    fullDescription: string;
  };
} = {
  "Taffeta Labels": {
    image: taffeta,
    shortDescription: "Durable taffeta labels for long-lasting quality.",
    fullDescription: `Material: Durable Nylon Taffeta 
Label Types: Printed
Colors Available: White
Sizes: Customizable sizes as per your requirements
Printing Options: Rotary Printing
Finish: Soft and durable for long-lasting quality
Usage: Ideal for clothing, accessories, home textiles, and other garments`,
  },
  "Satin Labels": {
    image: satin,
    shortDescription: "Smooth labels with elegant shine.",
    fullDescription:
     `Material: High-quality Satin
Label Types: Printed
Colors Available: Glossy White, Black, and Custom Colors
Sizes: Customizable sizes as per your requirements
Printing Options: Screen printing and offset printing
Finish: Soft and durable for long-lasting quality
Usage: Ideal for clothing, accessories, home textiles, and other garments`,
  },
  "Cotton Labels": {
    image: cotton,
    shortDescription: "Soft, breathable everyday labels.",
    fullDescription:
     `Material: 100% Natural Cotton \n
Label Types: Printed
Colors Available: White, Off-White, and Custom Colors
Sizes: Customizable sizes as per your requirements
Printing Options: Rotary Printing
Finish: Soft and durable for long-lasting quality
Usage: Ideal for clothing, accessories, home textiles, and other garments`,
  },
  "Barcode Stickers": {
    image: barcode,
    shortDescription: "Reliable stickers for inventory.",
    fullDescription:
      "Barcode stickers are durable, highly adhesive, and perfect for retail and inventory management.",
  },
  "Woven Labels": {
    image: woven,
    shortDescription: "Durable labels with intricate designs.",
    fullDescription:
     `Material: Premium Polyester
Label Types: Damask, Satin, and Taffeta
Colors Available: Unlimited Custom Colors
Sizes: Fully customizable sizes as per your requirements
Weave Density: High-density weaving for intricate designs
Finish: Soft and durable for long-lasting quality
Usage: Ideal for clothing, accessories, home textiles, and other garments`,
  },
  "Woven Patches": {
    image: wovenPatch,
    shortDescription: "High-quality polyester woven patches for your clothing brand.",
    fullDescription:
     `Material: High-quality Polyester
Patch Types: Sew-on, Iron-on
Colors Available: Customizable with unlimited color options
Sizes: Fully customizable
Weave Density: High-density weaving for intricate designs
Finish: Soft and durable for long-lasting quality
Usage: Ideal for clothing labels, jackets, hats, bags, uniforms, and accessories`,
  },
  "Heat Transfer Labels": {
    image: sticker,
    shortDescription: "Permanent labels without stitching.",
    fullDescription:
    `Material: Premium Quality Heat Transfer Vinyl or Ink
Application: Applied with heat press or iron
Colors Available: Customizable in various colors, including full-color prints
Durability: Wash-proof, fade-resistant, and long-lasting
Finish: Smooth, seamless, and tagless feel
Usage: Ideal for clothing labels on t-shirts, sportswear, innerwear, and activewear`,
  },
  "Carton Stickers": {
    image: carton,
    shortDescription: "Vibrant, durable packaging stickers.",
    fullDescription:
      "Carton stickers are perfect for packaging, with vibrant printing and strong adhesion for secure handling.",
  },
   "Hang Tags": {
    image: Hang,
    shortDescription: "High-quality paper, cardboard, or plastic hang tags for your clothing brand.",
    fullDescription:
     `Material: High-quality Paper, Cardboard, or Plastic
Tag Types: Custom shapes and sizes, with single or double-sided printing
Colors Available: Customizable with unlimited color options
Sizes: Fully customizable
Finish: Matte, Glossy, Embossed, or other finishes
Usage: Ideal for clothing labels, jacket, hats, bags, uniforms, and accessories`,
  },
 "Photo Card": {
    image: PhotoCard,
    shortDescription: "High-quality cardstock photo cards for your clothing brand.",
    fullDescription:
     `Material: High-quality Cardstock
Card Types: Custom sizes, single or double-sided
Colors Available: Full-color, monochrome, or custom designs
Finish: Matte, Glossy, or Textured
Customization: Personalized with brand logos, images, and product information
Usage: Ideal for clothing labels, product packaging, thank-you notes, and brand storytelling`,
  },
};

const Products: React.FC = () => {
  return (
    <section id="products" className="max-w-7xl mx-auto py-16 px-6 bg-white">
      <h3 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        Our Products
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Object.keys(productData).map((name, i) => (
          <ProductCard
            key={name}
            name={name}
            image={productData[name].image}
            shortDescription={productData[name].shortDescription}
            fullDescription={productData[name].fullDescription}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
