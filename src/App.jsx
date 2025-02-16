import { useState } from "react";
import logo_white from "./assets/noire-w.png";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiChevronRight,
  FiGlobe,
  FiChevronLeft,
  FiChevronDown,
  FiInstagram,
  FiTwitter,
  FiFacebook,
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const product = {
  brand: "Noire",
  name: {
    en: "Classic Cotton Shirt",
    ml: "ക്ലാസിക് കോട്ടൺ ഷർട്ട്",
  },
  description: {
    en: "Elevate your wardrobe with our timeless cotton shirt. Featuring a sophisticated design, premium materials, and expert tailoring for the perfect fit. This shirt is perfect for both casual and formal occasions, offering unmatched comfort and style.",
    ml: "ഞങ്ങളുടെ കാലാതീതമായ കോട്ടൺ ഷർട്ടുമായി നിങ്ങളുടെ വാർഡ്രോബ് ഉയർത്തുക. സോഫിസ്റ്റിക്കേറ്റഡ് ഡിസൈൻ, പ്രീമിയം മെറ്റീരിയലുകൾ, പെർഫെക്റ്റ് ഫിറ്റിനായുള്ള എക്സ്പേർട്ട് ടെയ്‌ലറിംഗ് എന്നിവ ഉൾപ്പെടുന്നു. ഈ ഷർട്ട് കാഷ്വൽ, ഫോർമൽ ഇവന്റുകൾക്ക് അനുയോജ്യമാണ്, അതുല്യമായ ആരാമവും സ്റ്റൈലും നൽകുന്നു.",
  },
  variants: [
    {
      color: "White",
      images: [
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
      ],
      price: 1999,
    },
    {
      color: "Black",
      images: [
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
      ],
      price: 2199,
    },
    {
      color: "Navy",
      images: [
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
      ],
      price: 2099,
    },
  ],
  sizes: ["S", "M", "L", "XL"],
  offers: {
    en: [
      "10% off on first purchase",
      "Free shipping on orders over ₹2000",
      "30-day return policy",
    ],
    ml: [
      "ആദ്യ വാങ്ങലിന് 10% കിഴിവ്",
      "₹2000-ന് മുകളിലുള്ള ഓർഡറുകൾക്ക് സൗജന്യ ഷിപ്പിംഗ്",
      "30 ദിവസത്തെ റിട്ടേൺ പോളിസി",
    ],
  },
  reviews: [
    {
      id: 1,
      user: "Sarah M.",
      rating: 5,
      comment: {
        en: "Perfect fit and amazing quality!",
        ml: "പെർഫെക്റ്റ് ഫിറ്റും അതിശയിക്കുന്ന ഗുണമേന്മയും!",
      },
      date: "2024-02-15",
    },
    {
      id: 2,
      user: "John D.",
      rating: 4,
      comment: {
        en: "Great shirt, slightly long sleeves",
        ml: "കൊള്ളാം, സ്ലീവ് അല്പം നീളമുള്ളതാണ്",
      },
      date: "2024-02-10",
    },
    {
      id: 3,
      user: "Emma R.",
      rating: 5,
      comment: {
        en: "Exactly what I was looking for!",
        ml: "ഞാൻ തിരയുന്നത് തന്നെയാണ്!",
      },
      date: "2024-02-08",
    },
    {
      id: 4,
      user: "Michael P.",
      rating: 3,
      comment: {
        en: "Good quality but runs large",
        ml: "നല്ല ഗുണമേന്മ, പക്ഷേ വലുതാണ്",
      },
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
      name: "Linen Shirt",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 2,
      name: "Denim Shirt",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: 3,
      name: "Checked Shirt",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1620012253295-c15cc3b65d8f?auto=format&fit=crop&q=80&w=1000",
    },
  ],
};

function App() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("White");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState("en");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [sortReviewsBy, setSortReviewsBy] = useState("rating");
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

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

  const handleAddToCart = () => {
    toast.success(
      `${product.name[language]} (${selectedColor}, ${selectedSize}) added to cart!`,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const sortedReviews = [...product.reviews].sort((a, b) => {
    if (sortReviewsBy === "rating") {
      return b.rating - a.rating;
    } else if (sortReviewsBy === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-[#908180] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">
                <img className="h-16" src={logo_white} alt="" />
              </span>
            </div>
            <div className="flex items-center">
              <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#908180] focus:ring-white">
                  <FiGlobe className="h-5 w-5" />
                  <FiChevronDown className="ml-1 w-4 h-4" />
                </Menu.Button>
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setLanguage("en")}
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-[#908180] w-full text-left`}
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
                        } block px-4 py-2 text-sm text-[#908180] w-full text-left`}
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
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-2 text-sm text-[#908180]">
        <a href="#" className="hover:text-[#706060]">
          {language === "en" ? "Home" : "ഹോം"}
        </a>
        <FiChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-[#706060]">
          {language === "en" ? "Fashion" : "ഫാഷൻ"}
        </a>
        <FiChevronRight className="w-4 h-4" />
        <a href="#" className="hover:text-[#706060]">
          {language === "en" ? "Shirts" : "ഷർട്ടുകൾ"}
        </a>
        <FiChevronRight className="w-4 h-4" />
        <span className="text-[#706060]">{product.name[language]}</span>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="space-y-4">
            <div className="relative aspect-w-3 aspect-h-4">
              <img
                src={selectedVariant.images[currentImageIndex]}
                alt={product.name[language]}
                className="w-full h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {selectedVariant.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-w-1 aspect-h-1 transition-opacity duration-300 ease-in-out ${
                    currentImageIndex === index ? "ring-2 ring-[#908180]" : ""
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
              <p className="text-xl font-medium text-[#908180]">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold text-[#706060] mt-1">
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
                <span className="text-[#908180]">
                  ({product.reviews.length} reviews)
                </span>
              </div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-[#706060]">
                  ₹{selectedVariant.price}
                </span>
              </div>
            </div>

            <p className="text-[#908180] leading-relaxed">
              {showFullDescription
                ? product.description[language]
                : `${product.description[language].substring(0, 150)}...`}
              <button
                onClick={toggleDescription}
                className="text-[#706060] font-semibold hover:underline ml-2"
              >
                {showFullDescription
                  ? language === "en"
                    ? "See Less"
                    : "കുറച്ച് കാണിക്കുക"
                  : language === "en"
                  ? "See More"
                  : "കൂടുതൽ കാണിക്കുക"}
              </button>
            </p>

            {/* Available Offers */}
            <div className="bg-[#f5f5f5] p-4 rounded-lg">
              <h3 className="text-sm font-medium text-[#706060] mb-2">
                {language === "en" ? "Available Offers" : "ലഭ്യമായ ഓഫറുകൾ"}
              </h3>
              <ul className="space-y-2">
                {product.offers[language].map((offer, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-[#908180]"
                  >
                    <span className="text-green-600 mr-2">•</span>
                    {offer}
                  </li>
                ))}
              </ul>
            </div>



            {/* Color Selection */}
            <div>
            <h3 className="text-sm font-medium text-[#706060] mb-2">
            {language === "en" ? "Color" : "നിറം"}
              </h3>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.color}
                    onClick={() => setSelectedColor(variant.color)}
                    className={`py-2 text-sm font-medium rounded-md ${
                      selectedColor === variant.color
                        ? "bg-[#908180] text-white"
                        : "bg-[#f5f5f5] text-[#908180] hover:bg-[#e0e0e0]"
                    }`}
                  >
                    {variant.color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-[#706060]">
                {language === "en" ? "Size" : "വലിപ്പം"}
              </h3>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? "bg-[#908180] text-white"
                        : "bg-[#f5f5f5] text-[#908180] hover:bg-[#e0e0e0]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setIsSizeChartOpen(true)}
                className="mt-2 text-sm text-[#908180] hover:underline"
              >
                {language === "en" ? "View Size Chart" : "വലിപ്പം ചാർട്ട് കാണുക"}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full py-3 px-8 flex items-center justify-center gap-2 bg-[#908180] text-white rounded-md hover:bg-[#706060] transition"
              >
                <FiShoppingBag className="w-5 h-5" />
                {language === "en" ? "Add to Cart" : "കാർട്ടിലേക്ക് ചേർക്കുക"}
              </button>
              <button className="w-full py-3 px-8 flex items-center justify-center gap-2 border border-[#908180] text-[#908180] rounded-md hover:bg-[#f5f5f5] transition">
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
          <h2 className="text-2xl font-bold text-[#706060] mb-8">
            {language === "en" ? "Customer Reviews" : "ഉപഭോക്തൃ അവലോകനങ്ങൾ"}
          </h2>

          {/* Rating Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl font-bold text-[#706060]">
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
                  <p className="text-sm text-[#908180] mt-1">
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
                  <Bar dataKey="count" fill="#908180" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Review Filter/Sort */}
          <div className="mb-8">
            <label className="text-sm font-medium text-[#706060] mr-2">
              {language === "en" ? "Sort by:" : "ക്രമം:"}
            </label>
            <select
              value={sortReviewsBy}
              onChange={(e) => setSortReviewsBy(e.target.value)}
              className="p-2 border rounded-md text-sm text-[#908180]"
            >
              <option value="rating">
                {language === "en" ? "Rating" : "റേറ്റിംഗ്"}
              </option>
              <option value="date">
                {language === "en" ? "Date" : "തീയതി"}
              </option>
            </select>
          </div>

          {/* Review Comments */}
          <div className="space-y-8">
            {sortedReviews.map((review) => (
              <div key={review.id} className="border-b border-[#e0e0e0] pb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-[#706060]">{review.user}</p>
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
                  <span className="text-sm text-[#908180]">{review.date}</span>
                </div>
                <p className="text-[#908180] mt-2">
                  {review.comment[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#706060] mb-8">
            {language === "en" ? "You May Also Like" : "നിങ്ങൾക്ക് ഇഷ്ടപ്പെട്ടേക്കാം"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.relatedProducts.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-w-1 aspect-h-1 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:opacity-75 transition"
                  />
                </div>
                <h3 className="text-lg font-medium text-[#706060]">
                  {item.name}
                </h3>
                <p className="text-[#908180]">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#908180] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div className="">
              <img src={logo_white} alt="" className="h-32 " />
              <div className="flex space-x-4 mt-4 text-center ">
                <a href="#" className="hover:text-[#706060] transition">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#706060] transition">
                  <FiTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#706060] transition">
                  <FiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-[#706060] transition">
                    {language === "en" ? "Home" : "ഹോം"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#706060] transition">
                    {language === "en" ? "Shop" : "ഷോപ്പ്"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#706060] transition">
                    {language === "en" ? "About Us" : "ഞങ്ങളെക്കുറിച്ച്"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-[#706060] transition">
                    {language === "en" ? "Contact" : "ബന്ധപ്പെടുക"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="mt-4 text-sm">
                {language === "en"
                  ? "Subscribe to get updates on new arrivals and exclusive offers."
                  : "പുതിയ ആഗമനങ്ങളും എക്സ്ക്ലൂസീവ് ഓഫറുകളും സ്വീകരിക്കാൻ സബ്‌സ്‌ക്രൈബ് ചെയ്യുക."}
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder={language === "en" ? "Your email" : "നിങ്ങളുടെ ഇമെയിൽ"}
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-[#706060]"
                />
                <button className="bg-[#706060] px-4 py-2 rounded-r-md hover:bg-[#605050] transition">
                  {language === "en" ? "Subscribe" : "സബ്‌സ്‌ക്രൈബ് ചെയ്യുക"}
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#706060] mt-8 pt-8 text-center text-sm">
            © 2024 Noire. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Size Chart Modal */}
      {isSizeChartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-2xl">
            <h2 className="text-xl font-bold text-[#706060] mb-4">
              {language === "en" ? "Size Chart" : "വലിപ്പം ചാർട്ട്"}
            </h2>
            <img
              src="https://via.placeholder.com/800x400?text=Size+Chart"
              alt="Size Chart"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setIsSizeChartOpen(false)}
              className="mt-4 bg-[#908180] text-white px-4 py-2 rounded-md hover:bg-[#706060] transition"
            >
              {language === "en" ? "Close" : "അടയ്ക്കുക"}
            </button>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default App;