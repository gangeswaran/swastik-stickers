import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  shortDescription,
  fullDescription,
  index,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group bg-white/20 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl  border border-amber-200/40 transition-all overflow-hidden relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105 shadow-inner"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>
        </div>

        <div className="p-6">
          <h4 className="text-xl font-extrabold text-amber-600 mb-2 tracking-wide bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
            {name}
          </h4>
          <p className="text-gray-700 text-sm mb-4">{shortDescription}</p>
        <button
  onClick={() => setIsOpen(true)}
  className="mt-2 inline-flex items-center text-amber-600 font-semibold hover:text-amber-500 transition-colors"
>
  Learn More
  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
</button>

        </div>
      </motion.div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm p-4">
          <motion.div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-amber-600 mb-4">{name}</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {fullDescription.split("\n").map((line, idx) => (
                <span key={idx} className="block mb-2">
                  {line.includes(":") ? (
                    <>
                      <span className="font-semibold">{line.split(":")[0]}:</span>{" "}
                      {line.split(":")[1].trim()}
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
