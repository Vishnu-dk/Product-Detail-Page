import { useState } from "react";
import logo from './assets/noire.png'
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiChevronRight,
  FiGlobe,
} from "react-icons/fi";
import { Menu } from "@headlessui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const product = {
  logos: logo,
  brand: "LUXE FASHION",
  name: {
    en: "Classic Wool Blend Coat",
    ml: "ക്ലാസിക് വൂൾ ബ്ലെൻഡ് കോട്ട്",
  },
  description: {
    en: "Elevate your winter wardrobe with our timeless wool blend coat. Featuring a sophisticated silhouette, premium materials, and expert tailoring for the perfect fit.",
    ml: "ഞങ്ങളുടെ കാലാതീതമായ വൂൾ ബ്ലെൻഡ് കോട്ടുമായി നിങ്ങളുടെ വിന്റർ വാർഡ്റോബ് ഉയർത്തുക. സോഫിസ്റ്റിക്കേറ്റഡ് സിൽഹൗറ്റ്, പ്രീമിയം മെറ്റീരിയലുകൾ, പെർഫെക്റ്റ് ഫിറ്റിനായുള്ള എക്സ്പേർട്ട് ടെയ്‌ലറിംഗ് എന്നിവ ഉൾപ്പെടുന്നു.",
  },
  variants: [
    {
      color: "Camel",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1591047139756-eec5a98f4fc4?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1591047139844-d85d9070c48c?auto=format&fit=crop&q=80&w=1000",
      ],
      price: 299.99,
    },
    {
      color: "Black",
      images: [
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e5?auto=format&fit=crop&q=80&w=1000",
      ],
      price: 319.99,
    },
    {
      color: "Navy",
      images: [
        "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1578932750294-f5075e85f44b?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1578932750294-f5075e85f44c?auto=format&fit=crop&q=80&w=1000",
      ],
      price: 309.99,
    },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  offers: {
    en: [
      "10% off on first purchase",
      "Free shipping on orders over $200",
      "30-day return policy",
    ],
    ml: [
      "ആദ്യ വാങ്ങലിന് 10% കിഴിവ്",
      "$200-ന് മുകളിലുള്ള ഓർഡറുകൾക്ക് സൗജന്യ ഷിപ്പിംഗ്",
      "30 ദിവസത്തെ റിട്ടേൺ പോളിസി",
    ],
  },
  reviews: [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: "Perfect fit and amazing quality!",
      date: "2024-02-15",
    },
    {
      id: 2,
      user: "John D.",
      rating: 4,
      comment: "Great coat, slightly long sleeves",
      date: "2024-02-10",
    },
    {
      id: 3,
      user: "Emma R.",
      rating: 5,
      comment: "Exactly what I was looking for!",
      date: "2024-02-08",
    },
    {
      id: 4,
      user: "Michael P.",
      rating: 3,
      comment: "Good quality but runs large",
      date: "2024-02-05",
    },
  ],
  ratingDistribution: [
    { rating: "5★", count: 45 },
    { rating: "4★", count: 32 },
    { rating: "3★", count: 12 },
    { rating: "2★", count: 5 },
    { rating: "1★", count: 2 },
  ],
  relatedProducts: [
    {
      id: 1,
      name: "Cashmere Sweater",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      name: "Leather Jacket",
      price: 349.99,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      name: "Trench Coat",
      price: 279.99,
      image:
        "https://images.unsplash.com/photo-1591047139780-5ae8ed72c393?auto=format&fit=crop&q=80&w=1000",
    },
  ],
};

function App() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("Camel");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState("en");

  const selectedVariant = product.variants.find(
    (v) => v.color === selectedColor
  );
  const averageRating =
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedVariant.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedVariant.images.length) %
        selectedVariant.images.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-brand-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} className="h-14" alt="" />
              <span className="text-xl font-bold pl-8">NOIRE</span>
            </div>
            <div className="flex items-center">
              <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-500 focus:ring-white">
                  <FiGlobe className="h-6 w-6" />
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setLanguage("en")}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-brand-500 w-full text-left`}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setLanguage("ml")}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-brand-500 w-full text-left`}
                      >
                        മലയാളം
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-2 text-sm text-brand-400">
        <a href="#" className="hover:text-brand-500">
          Home
        </a>
        <FiChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-brand-500">
          Fashion
        </a>
        <FiChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-brand-500">
          Coats
        </a>
        <FiChevronRight className="w-4 h-4" />
        <span className="text-brand-500">{product.name[language]}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-w-3 aspect-h-4">
              <img
                src={selectedVariant.images[currentImageIndex]}
                alt={product.name[language]}
                className="w-full h-[600px] object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
              >
                →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {selectedVariant.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-w-1 aspect-h-1 ${
                    currentImageIndex === index ? "ring-2 ring-brand-500" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-24 object-cover rounded-md cursor-pointer hover:opacity-75 transition"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xl font-medium text-brand-400">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-brand-500 mt-1">
                {product.name[language]}
              </h1>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(averageRating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-brand-400">
                  ({product.reviews.length} reviews)
                </span>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-brand-500">
                  ${selectedVariant.price}
                </span>
              </div>
            </div>

            <p className="text-brand-400 leading-relaxed">
              {product.description[language]}
            </p>

            {/* Available Offers */}
            <div className="bg-brand-100 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-brand-500 mb-2">
                {language === "en" ? "Available Offers" : "ലഭ്യമായ ഓഫറുകൾ"}
              </h3>
              <ul className="space-y-2">
                {product.offers[language].map((offer, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-brand-400"
                  >
                    <span className="text-green-600 mr-2">•</span>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-brand-500">
                {language === "en" ? "Color" : "നിറം"}
              </h3>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.color}
                    onClick={() => setSelectedColor(variant.color)}
                    className={`py-2 text-sm font-medium rounded-md ${
                      selectedColor === variant.color
                        ? "bg-brand-500 text-white"
                        : "bg-brand-100 text-brand-500 hover:bg-brand-200"
                    }`}
                  >
                    {variant.color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-brand-500">
                {language === "en" ? "Size" : "വലിപ്പം"}
              </h3>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? "bg-brand-500 text-white"
                        : "bg-brand-100 text-brand-500 hover:bg-brand-200"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full py-3 px-8 flex items-center justify-center gap-2 bg-brand-500 text-white rounded-md hover:bg-brand-400 transition">
                <FiShoppingBag className="w-5 h-5" />
                {language === "en" ? "Add to Cart" : "കാർട്ടിലേക്ക് ചേർക്കുക"}
              </button>
              <button className="w-full py-3 px-8 flex items-center justify-center gap-2 border border-brand-300 text-brand-500 rounded-md hover:bg-brand-100 transition">
                <FiHeart className="w-5 h-5" />
                {language === "en"
                  ? "Add to Wishlist"
                  : "വിഷ്‌ലിസ്റ്റിലേക്ക് ചേർക്കുക"}
              </button>
            </div>
          </div>
        </div>

        {/* Product Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-500 mb-8">
            {language === "en" ? "Customer Reviews" : "ഉപഭോക്തൃ അവലോകനങ്ങൾ"}
          </h2>

          {/* Rating Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-brand-500">
                  {averageRating.toFixed(1)}
                </span>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(averageRating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-brand-400 mt-1">
                    {language === "en"
                      ? `Based on ${product.reviews.length} reviews`
                      : `${product.reviews.length} അവലോകനങ്ങളുടെ അടിസ്ഥാനത്തിൽ`}
                  </p>
                </div>
              </div>
            </div>

            {/* Rating Distribution Chart */}
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={product.ratingDistribution}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis type="number" />
                  <YAxis dataKey="rating" type="category" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#333333" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Review Comments */}
          <div className="space-y-8">
            {product.reviews.map((review) => (
              <div key={review.id} className="border-b border-brand-200 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-brand-500">{review.user}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-brand-400">{review.date}</span>
                </div>
                <p className="text-brand-400 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-500 mb-8">
            {language === "en"
              ? "You May Also Like"
              : "നിങ്ങൾക്ക് ഇഷ്ടപ്പെട്ടേക്കാം"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.relatedProducts.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-lg group-hover:opacity-75 transition"
                  />
                </div>
                <h3 className="text-lg font-medium text-brand-500">
                  {item.name}
                </h3>
                <p className="text-brand-400">${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
