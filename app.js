// Backend & WhatsApp Configuration
const ORDER_ENDPOINT = "https://script.google.com/macros/s/AKfycbzrYU6o630pM2fru_KOY4OObeRv343vJhzQepy13HMGExav8M6xeDCV96jEBtTYLnGr/exec";
const WHATSAPP = "918552969881";

// Delivery pricing constants
const STARTING_FEE = 20;
const EXTRA_PER_KM = 5;
const STARTING_DISTANCE = 1;

// Official Categories with Icons
const categories = [
  { id: "All", label: "All Products", icon: "🏪" },
  { id: "Snacks & Branded", label: "Snacks & Branded", icon: "🍟" },
  { id: "Daily Grocery", label: "Daily Grocery", icon: "🌾" },
  { id: "Vegetables & Fruits", label: "Veg & Fruits", icon: "🍅" },
  { id: "Dairy & Bread", label: "Milk, Dairy & Eggs", icon: "🥛" },
  { id: "Drinks & Beverages", label: "Cold Drinks & Tea", icon: "🥤" },
  { id: "Instant Food", label: "Maggi & Instant", icon: "🍜" },
  { id: "Medicine & Wellness", label: "Medicine & Wellness", icon: "💊" },
  { id: "Condoms & Intimate Care", label: "Condoms & Pads", icon: "🔒" },
  { id: "Home Appliances", label: "Home Appliances", icon: "🔌" },
  { id: "Household & Care", label: "Bath, Cleaning & Home", icon: "🧼" }
];

// Comprehensive Day-to-Day Catalog (95+ Products across Multi-Company Snacks, Grocery, Medicine, Condoms, Pads, Home Appliances)
const products = [
  // ==================== SNACKS & BRANDED (Multiple Companies) ====================
  { name: "Lay's India's Magic Masala", brand: "Lay's", unit: "50 g", price: 20, mrp: 20, emoji: "🥔", category: "Snacks & Branded" },
  { name: "Lay's Classic Salted Chips", brand: "Lay's", unit: "50 g", price: 20, mrp: 20, emoji: "🥔", category: "Snacks & Branded" },
  { name: "Lay's American Style Cream & Onion", brand: "Lay's", unit: "50 g", price: 20, mrp: 20, emoji: "🟢", category: "Snacks & Branded" },
  { name: "Lay's Spanish Tomato Tango", brand: "Lay's", unit: "50 g", price: 20, mrp: 20, emoji: "🍅", category: "Snacks & Branded" },
  { name: "Kurkure Masala Munch", brand: "Kurkure", unit: "75 g", price: 20, mrp: 20, emoji: "🌶️", category: "Snacks & Branded" },
  { name: "Kurkure Green Chutney Style", brand: "Kurkure", unit: "70 g", price: 20, mrp: 20, emoji: "🌶️", category: "Snacks & Branded" },
  { name: "Kurkure Yummy Cheese Puffcorn", brand: "Kurkure", unit: "55 g", price: 20, mrp: 20, emoji: "🧀", category: "Snacks & Branded" },
  { name: "Balaji Crunchem Masala Masti", brand: "Balaji", unit: "65 g", price: 20, mrp: 20, emoji: "🍟", category: "Snacks & Branded" },
  { name: "Balaji Simply Salted Wafers", brand: "Balaji", unit: "65 g", price: 20, mrp: 20, emoji: "🥔", category: "Snacks & Branded" },
  { name: "Balaji Chataka Pataka", brand: "Balaji", unit: "65 g", price: 15, mrp: 15, emoji: "🌶️", category: "Snacks & Branded" },
  { name: "Bingo! Mad Angles Achaari Masti", brand: "Bingo!", unit: "66 g", price: 20, mrp: 20, emoji: "📐", category: "Snacks & Branded" },
  { name: "Bingo! Tedhe Medhe Masala Tadka", brand: "Bingo!", unit: "75 g", price: 20, mrp: 20, emoji: "🥨", category: "Snacks & Branded" },
  { name: "Bingo! Original Style Chilli Sprinkled", brand: "Bingo!", unit: "50 g", price: 20, mrp: 20, emoji: "🍟", category: "Snacks & Branded" },
  { name: "Haldiram's Nagpur Aloo Bhujia", brand: "Haldiram's", unit: "150 g", price: 42, mrp: 45, emoji: "🥨", category: "Snacks & Branded" },
  { name: "Haldiram's Bhujia Sev", brand: "Haldiram's", unit: "150 g", price: 42, mrp: 45, emoji: "🥨", category: "Snacks & Branded" },
  { name: "Haldiram's Khatta Meetha Mixture", brand: "Haldiram's", unit: "150 g", price: 38, mrp: 40, emoji: "🥜", category: "Snacks & Branded" },
  { name: "Haldiram's Tasty Masala Peanuts", brand: "Haldiram's", unit: "150 g", price: 35, mrp: 38, emoji: "🥜", category: "Snacks & Branded" },
  { name: "Haldiram's Lite Chiwda", brand: "Haldiram's", unit: "150 g", price: 38, mrp: 40, emoji: "🌾", category: "Snacks & Branded" },
  { name: "Act II Golden Sizzle Popcorn", brand: "Act II", unit: "70 g", price: 25, mrp: 28, emoji: "🍿", category: "Snacks & Branded" },
  { name: "Parle-G Original Gluco Biscuits", brand: "Parle", unit: "250 g", price: 25, mrp: 25, emoji: "🍪", category: "Snacks & Branded" },
  { name: "Parle Monaco Salted Snack Biscuits", brand: "Parle", unit: "75 g", price: 15, mrp: 15, emoji: "🍪", category: "Snacks & Branded" },
  { name: "Parle Hide & Seek Chocolate Chip", brand: "Parle", unit: "100 g", price: 30, mrp: 35, emoji: "🍫", category: "Snacks & Branded" },
  { name: "Britannia Good Day Cashew Cookies", brand: "Britannia", unit: "100 g", price: 25, mrp: 28, emoji: "🍪", category: "Snacks & Branded" },
  { name: "Britannia Marie Gold Biscuits", brand: "Britannia", unit: "120 g", price: 20, mrp: 22, emoji: "🍪", category: "Snacks & Branded" },
  { name: "Cadbury Oreo Vanilla Cream", brand: "Cadbury", unit: "120 g", price: 35, mrp: 40, emoji: "🍪", category: "Snacks & Branded" },
  { name: "Cadbury Dairy Milk Chocolate", brand: "Cadbury", unit: "45 g", price: 40, mrp: 45, emoji: "🍫", category: "Snacks & Branded" },
  { name: "Nestlé KitKat 3 Finger Bar", brand: "Nestlé", unit: "28.5 g", price: 25, mrp: 25, emoji: "🍫", category: "Snacks & Branded" },

  // ==================== DAILY GROCERY & STAPLES ====================
  { name: "Aashirvaad Shudh Chakki Atta", brand: "Aashirvaad", unit: "5 kg", price: 245, mrp: 265, emoji: "🌾", category: "Daily Grocery" },
  { name: "Aashirvaad Select Wheat Flour", brand: "Aashirvaad", unit: "1 kg", price: 52, mrp: 58, emoji: "🌾", category: "Daily Grocery" },
  { name: "Fortune Sunlite Refined Sunflower Oil", brand: "Fortune", unit: "1 Litre", price: 142, mrp: 155, emoji: "🫗", category: "Daily Grocery" },
  { name: "Saffola Gold Blended Cooking Oil", brand: "Saffola", unit: "1 Litre", price: 165, mrp: 185, emoji: "🫗", category: "Daily Grocery" },
  { name: "India Gate Feast Rozana Basmati Rice", brand: "India Gate", unit: "1 kg", price: 95, mrp: 110, emoji: "🍚", category: "Daily Grocery" },
  { name: "Premium HMT Kolam Steam Rice", brand: "QuickBasket", unit: "1 kg", price: 62, mrp: 68, emoji: "🍚", category: "Daily Grocery" },
  { name: "Tata Sampann Unpolished Toor Dal", brand: "Tata", unit: "1 kg", price: 155, mrp: 175, emoji: "🫘", category: "Daily Grocery" },
  { name: "Yellow Moong Dal (Split)", brand: "QuickBasket", unit: "500 g", price: 65, mrp: 72, emoji: "🫘", category: "Daily Grocery" },
  { name: "Chana Dal Premium", brand: "QuickBasket", unit: "500 g", price: 48, mrp: 55, emoji: "🫘", category: "Daily Grocery" },
  { name: "Thick Poha (Kanda Poha Special)", brand: "QuickBasket", unit: "500 g", price: 32, mrp: 36, emoji: "🥣", category: "Daily Grocery" },
  { name: "Tata Salt Vacuum Evaporated Iodised", brand: "Tata", unit: "1 kg", price: 27, mrp: 28, emoji: "🧂", category: "Daily Grocery" },
  { name: "Madhur Pure & Hygienic Sugar", brand: "Madhur", unit: "1 kg", price: 48, mrp: 52, emoji: "🍬", category: "Daily Grocery" },
  { name: "Amul Pure Cow Ghee Pouch", brand: "Amul", unit: "500 ml", price: 315, mrp: 330, emoji: "🧈", category: "Daily Grocery" },
  { name: "Everest Tikhalal Chilli Powder", brand: "Everest", unit: "100 g", price: 48, mrp: 52, emoji: "🌶️", category: "Daily Grocery" },
  { name: "Everest Turmeric (Haldi) Powder", brand: "Everest", unit: "100 g", price: 36, mrp: 40, emoji: "🟡", category: "Daily Grocery" },
  { name: "Everest Garam Masala", brand: "Everest", unit: "50 g", price: 44, mrp: 48, emoji: "🍲", category: "Daily Grocery" },

  // ==================== VEGETABLES & FRUITS ====================
  { name: "Fresh Red Tomato (Tamatar)", brand: "Farm Fresh", unit: "1 kg", price: 25, mrp: 30, emoji: "🍅", category: "Vegetables & Fruits" },
  { name: "Fresh Potato (Aloo)", brand: "Farm Fresh", unit: "1 kg", price: 35, mrp: 40, emoji: "🥔", category: "Vegetables & Fruits" },
  { name: "Fresh Nashik Onion (Kanda)", brand: "Farm Fresh", unit: "1 kg", price: 40, mrp: 45, emoji: "🧅", category: "Vegetables & Fruits" },
  { name: "Green Chilli & Fresh Coriander Combo", brand: "Farm Fresh", unit: "200 g", price: 20, mrp: 25, emoji: "🌿", category: "Vegetables & Fruits" },
  { name: "Fresh Ginger & Garlic Pack", brand: "Farm Fresh", unit: "200 g", price: 35, mrp: 40, emoji: "🧄", category: "Vegetables & Fruits" },
  { name: "Fresh Robusta Banana", brand: "Farm Fresh", unit: "1 Dozen", price: 45, mrp: 50, emoji: "🍌", category: "Vegetables & Fruits" },
  { name: "Kashmiri Royal Apple", brand: "Farm Fresh", unit: "500 g", price: 95, mrp: 110, emoji: "🍎", category: "Vegetables & Fruits" },

  // ==================== DAIRY, BREAD & EGGS ====================
  { name: "Amul Taaza Toned Milk Pouch", brand: "Amul", unit: "500 ml", price: 28, mrp: 28, emoji: "🥛", category: "Dairy & Bread" },
  { name: "Amul Gold Full Cream Milk", brand: "Amul", unit: "500 ml", price: 34, mrp: 34, emoji: "🥛", category: "Dairy & Bread" },
  { name: "Amul Pasteurised Butter", brand: "Amul", unit: "100 g", price: 58, mrp: 60, emoji: "🧈", category: "Dairy & Bread" },
  { name: "Amul Fresh Malai Paneer", brand: "Amul", unit: "200 g", price: 88, mrp: 95, emoji: "🧀", category: "Dairy & Bread" },
  { name: "Amul Masti Dahi (Fresh Curd)", brand: "Amul", unit: "400 g", price: 35, mrp: 38, emoji: "🥣", category: "Dairy & Bread" },
  { name: "Fresh White Sandwich Bread", brand: "Britannia", unit: "400 g", price: 38, mrp: 40, emoji: "🍞", category: "Dairy & Bread" },
  { name: "Farm Fresh White Eggs", brand: "Protein Pack", unit: "6 Pieces", price: 45, mrp: 50, emoji: "🥚", category: "Dairy & Bread" },

  // ==================== DRINKS & BEVERAGES ====================
  { name: "Bisleri Mineral Water Bottle", brand: "Bisleri", unit: "1 Litre", price: 20, mrp: 20, emoji: "💧", category: "Drinks & Beverages" },
  { name: "Bisleri Mineral Water Family Pack", brand: "Bisleri", unit: "2 Litre", price: 30, mrp: 30, emoji: "🧴", category: "Drinks & Beverages" },
  { name: "Thums Up Strong Cola", brand: "Coca-Cola", unit: "750 ml", price: 40, mrp: 45, emoji: "🥤", category: "Drinks & Beverages" },
  { name: "Sprite Lemon-Lime Drink", brand: "Coca-Cola", unit: "750 ml", price: 40, mrp: 45, emoji: "🥤", category: "Drinks & Beverages" },
  { name: "Maaza Mango Drink", brand: "Coca-Cola", unit: "600 ml", price: 40, mrp: 42, emoji: "🥭", category: "Drinks & Beverages" },
  { name: "Sting Energy Drink", brand: "PepsiCo", unit: "250 ml", price: 20, mrp: 20, emoji: "⚡", category: "Drinks & Beverages" },
  { name: "Red Bull Energy Drink Can", brand: "Red Bull", unit: "250 ml", price: 125, mrp: 125, emoji: "🐂", category: "Drinks & Beverages" },
  { name: "Amul Kool Rose Lassi", brand: "Amul", unit: "200 ml", price: 25, mrp: 25, emoji: "🥛", category: "Drinks & Beverages" },
  { name: "Amul Spiced Masti Buttermilk", brand: "Amul", unit: "200 ml", price: 15, mrp: 15, emoji: "🥛", category: "Drinks & Beverages" },
  { name: "Tata Tea Agni / Gold Leaf Tea", brand: "Tata", unit: "250 g", price: 78, mrp: 85, emoji: "☕", category: "Drinks & Beverages" },
  { name: "Nescafé Classic Instant Coffee", brand: "Nestlé", unit: "24 g", price: 75, mrp: 80, emoji: "☕", category: "Drinks & Beverages" },

  // ==================== INSTANT FOOD ====================
  { name: "Maggi 2-Minute Masala Noodles", brand: "Maggi", unit: "70 g", price: 15, mrp: 15, emoji: "🍜", category: "Instant Food" },
  { name: "Maggi Masala Noodles 4-Pack", brand: "Maggi", unit: "280 g", price: 58, mrp: 60, emoji: "🍜", category: "Instant Food" },
  { name: "Sunfeast YiPPee! Magic Masala", brand: "YiPPee!", unit: "70 g", price: 15, mrp: 15, emoji: "🍝", category: "Instant Food" },
  { name: "Nissin Mazedaar Masala Cup Noodles", brand: "Nissin", unit: "70 g", price: 50, mrp: 55, emoji: "🥡", category: "Instant Food" },
  { name: "MTR 3-Minute Khatta Meetha Poha", brand: "MTR", unit: "60 g", price: 30, mrp: 35, emoji: "🍲", category: "Instant Food" },

  // ==================== MEDICINE & WELLNESS ====================
  { name: "Dolo 650mg Paracetamol Tablets", brand: "Micro Labs", unit: "15 Tablets", price: 32, mrp: 34, emoji: "💊", category: "Medicine & Wellness", discreet: true },
  { name: "Crocin Advance 500mg Fast Release", brand: "GSK", unit: "20 Tablets", price: 22, mrp: 25, emoji: "💊", category: "Medicine & Wellness", discreet: true },
  { name: "ENO Fruit Salt Lemon (6 Sachets)", brand: "ENO", unit: "30 g Pack", price: 58, mrp: 60, emoji: "🍋", category: "Medicine & Wellness", discreet: true },
  { name: "Electral WHO ORS Rehydration Pack", brand: "Electral", unit: "21.8 g", price: 22, mrp: 24, emoji: "💧", category: "Medicine & Wellness", discreet: true },
  { name: "Digene Acidity & Gas Relief Mint", brand: "Abbott", unit: "15 Tablets", price: 24, mrp: 27, emoji: "🌿", category: "Medicine & Wellness", discreet: true },
  { name: "Vicks VapoRub Cold & Cough Relief", brand: "Vicks", unit: "25 ml", price: 85, mrp: 92, emoji: "🫙", category: "Medicine & Wellness", discreet: true },
  { name: "Moov Fast Pain Relief Spray", brand: "Moov", unit: "50 g", price: 165, mrp: 179, emoji: "🧴", category: "Medicine & Wellness", discreet: true },
  { name: "Dettol Antiseptic First Aid Liquid", brand: "Dettol", unit: "125 ml", price: 78, mrp: 84, emoji: "🩺", category: "Medicine & Wellness", discreet: true },
  { name: "Johnson's Band-Aid Washproof Strips", brand: "Band-Aid", unit: "10 Strips", price: 30, mrp: 35, emoji: "🩹", category: "Medicine & Wellness", discreet: true },
  { name: "Dabur Pudin Hara Pearls", brand: "Dabur", unit: "10 Pearls", price: 28, mrp: 30, emoji: "🟢", category: "Medicine & Wellness", discreet: true },

  // ==================== CONDOMS, PADS & INTIMATE CARE ====================
  { name: "Durex Air Ultra Thin Condoms", brand: "Durex", unit: "10 Condoms", price: 215, mrp: 249, emoji: "🛡️", category: "Condoms & Intimate Care", discreet: true },
  { name: "Durex Extra Time Mutual Climax", brand: "Durex", unit: "10 Condoms", price: 225, mrp: 249, emoji: "🛡️", category: "Condoms & Intimate Care", discreet: true },
  { name: "Durex Extra Dots Dotted Condoms", brand: "Durex", unit: "3 Condoms", price: 85, mrp: 90, emoji: "🛡️", category: "Condoms & Intimate Care", discreet: true },
  { name: "Manforce 1500 Dots Strawberry Condoms", brand: "Manforce", unit: "10 Condoms", price: 90, mrp: 100, emoji: "🍓", category: "Condoms & Intimate Care", discreet: true },
  { name: "Manforce Litchi Flavoured Condoms", brand: "Manforce", unit: "3 Condoms", price: 30, mrp: 35, emoji: "🍒", category: "Condoms & Intimate Care", discreet: true },
  { name: "Skore Climax Delay & Dotted Condoms", brand: "Skore", unit: "10 Condoms", price: 110, mrp: 120, emoji: "⚡", category: "Condoms & Intimate Care", discreet: true },
  { name: "Whisper Ultra Clean XL+ Sanitary Pads", brand: "Whisper", unit: "15 Pads", price: 155, mrp: 175, emoji: "🌸", category: "Condoms & Intimate Care", discreet: true },
  { name: "Whisper Bindazzz Nights Koala XXL+", brand: "Whisper", unit: "7 Pads", price: 110, mrp: 125, emoji: "🌙", category: "Condoms & Intimate Care", discreet: true },
  { name: "Stayfree Secure Cottony Soft XL Pads", brand: "Stayfree", unit: "20 Pads", price: 125, mrp: 140, emoji: "🌸", category: "Condoms & Intimate Care", discreet: true },
  { name: "Stayfree Dry Max All Night XXL", brand: "Stayfree", unit: "7 Pads", price: 95, mrp: 105, emoji: "🌸", category: "Condoms & Intimate Care", discreet: true },
  { name: "Sofy Antibacteria Extra Long XL Pads", brand: "Sofy", unit: "15 Pads", price: 135, mrp: 150, emoji: "🌿", category: "Condoms & Intimate Care", discreet: true },
  { name: "VWash Plus Expert Intimate Hygiene", brand: "VWash", unit: "100 ml", price: 165, mrp: 180, emoji: "🧴", category: "Condoms & Intimate Care", discreet: true },
  { name: "Prega News One-Step Pregnancy Test Kit", brand: "Prega News", unit: "1 Test Kit", price: 55, mrp: 60, emoji: "🧪", category: "Condoms & Intimate Care", discreet: true },

  // ==================== HOME APPLIANCES & ELECTRICAL ====================
  { name: "Pigeon Amaze Plus Electric Kettle", brand: "Pigeon", unit: "1.5 Litre (1500W)", price: 649, mrp: 995, emoji: "🫖", category: "Home Appliances" },
  { name: "Philips Heavyweight Dry Iron 1000W", brand: "Philips", unit: "1 Unit (1 Yr Warranty)", price: 799, mrp: 995, emoji: "♨️", category: "Home Appliances" },
  { name: "Bajaj Waterproof Immersion Heater Rod", brand: "Bajaj", unit: "1500W Copper", price: 499, mrp: 650, emoji: "⚡", category: "Home Appliances" },
  { name: "Philips Stellar Bright 9W LED Bulb", brand: "Philips", unit: "B22 Cool Day Light", price: 95, mrp: 120, emoji: "💡", category: "Home Appliances" },
  { name: "Syska 12W High Wattage LED Bulb", brand: "Syska", unit: "B22 White", price: 135, mrp: 165, emoji: "💡", category: "Home Appliances" },
  { name: "Anchor 4-Socket Spike Guard Extension", brand: "Anchor", unit: "2 Meter Cord", price: 320, mrp: 399, emoji: "🔌", category: "Home Appliances" },
  { name: "HIT Rechargeable Mosquito Racquet Bat", brand: "Godrej HIT", unit: "6 Months Warranty", price: 399, mrp: 495, emoji: "🎾", category: "Home Appliances" },
  { name: "Eveready Rechargeable LED Emergency Torch", brand: "Eveready", unit: "1 Unit", price: 210, mrp: 250, emoji: "🔦", category: "Home Appliances" },
  { name: "Stainless Steel Kitchen Gas Lighter", brand: "Pigeon", unit: "1 Piece", price: 95, mrp: 140, emoji: "🔥", category: "Home Appliances" },
  { name: "Duracell Ultra Alkaline AA Batteries", brand: "Duracell", unit: "Pack of 4", price: 155, mrp: 170, emoji: "🔋", category: "Home Appliances" },

  // ==================== HOUSEHOLD & PERSONAL CARE ====================
  { name: "Surf Excel Easy Wash Detergent Powder", brand: "Surf Excel", unit: "1 kg", price: 130, mrp: 145, emoji: "🧺", category: "Household & Care" },
  { name: "Vim Lemon Dishwash Liquid Gel", brand: "Vim", unit: "250 ml", price: 52, mrp: 58, emoji: "🍋", category: "Household & Care" },
  { name: "Harpic Power Plus Toilet Cleaner", brand: "Harpic", unit: "500 ml", price: 98, mrp: 105, emoji: "🚽", category: "Household & Care" },
  { name: "Lizol Citrus Disinfectant Floor Cleaner", brand: "Lizol", unit: "500 ml", price: 105, mrp: 115, emoji: "🧹", category: "Household & Care" },
  { name: "Good Knight Gold Flash Liquid Refill", brand: "Good Knight", unit: "45 ml", price: 74, mrp: 78, emoji: "🦟", category: "Household & Care" },
  { name: "Dettol Original Germ Protection Soap", brand: "Dettol", unit: "125 g", price: 58, mrp: 62, emoji: "🧼", category: "Household & Care" },
  { name: "Lifebuoy Total 10 Bath Soap", brand: "Lifebuoy", unit: "125 g", price: 36, mrp: 40, emoji: "🧼", category: "Household & Care" },
  { name: "Colgate Strong Teeth Anticavity Paste", brand: "Colgate", unit: "150 g", price: 88, mrp: 98, emoji: "🪥", category: "Household & Care" },
  { name: "Clinic Plus Strong & Long Shampoo", brand: "Clinic Plus", unit: "175 ml", price: 105, mrp: 120, emoji: "🧴", category: "Household & Care" },
  { name: "Parachute 100% Pure Coconut Hair Oil", brand: "Parachute", unit: "100 ml", price: 42, mrp: 45, emoji: "🥥", category: "Household & Care" },
  { name: "Gillette Guard Cartridge Razor", brand: "Gillette", unit: "1 Razor + Blade", price: 30, mrp: 35, emoji: "🪒", category: "Household & Care" },
  { name: "Heavy Duty Black Garbage Bags (Medium)", brand: "QuickBasket", unit: "30 Bags Roll", price: 55, mrp: 65, emoji: "🗑️", category: "Household & Care" },
  { name: "Disposable Paper Cups & Plates Party Combo", brand: "QuickBasket", unit: "25 Pcs Pack", price: 45, mrp: 55, emoji: "🍽️", category: "Household & Care" }
];

// State Variables
let cart = [];
let selectedCategory = "All";
let selectedBrand = "All";
let searchTerm = "";
let sortOrder = "popular";

// Helper: Get Category for Product
function getCategory(product) {
  return product.category || "Daily Grocery";
}

// Filter by Category
function filterProducts(category) {
  selectedCategory = category;
  selectedBrand = "All";

  // Show or Hide Discreet Privacy Banner
  const discreetBanner = document.getElementById("discreetBanner");
  if (discreetBanner) {
    if (category === "Condoms & Intimate Care" || category === "Medicine & Wellness") {
      discreetBanner.classList.remove("hidden");
    } else {
      discreetBanner.classList.add("hidden");
    }
  }

  showCategories();
  showBrandFilters();
  showProductCards();
}

// Filter by Company / Brand
function filterByBrand(brand) {
  selectedBrand = brand;
  showBrandFilters();
  showProductCards();
}

// Set Sort Order
function setSortOrder(order) {
  sortOrder = order;
  showProductCards();
}

// Search Products
function searchProducts(value) {
  searchTerm = value;
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    if (value && value.trim().length > 0) {
      clearBtn.classList.remove("hidden");
    } else {
      clearBtn.classList.add("hidden");
    }
  }
  showBrandFilters();
  showProductCards();
}

function clearSearch() {
  const input = document.getElementById("productSearch");
  if (input) input.value = "";
  searchProducts("");
}

function resetAllFilters() {
  selectedCategory = "All";
  selectedBrand = "All";
  clearSearch();
  filterProducts("All");
}

// Render Category Pills
function showCategories() {
  const area = document.getElementById("categories");
  if (!area) return;

  area.innerHTML = categories.map(cat => {
    const isActive = selectedCategory === cat.id;
    const count = cat.id === "All"
      ? products.length
      : products.filter(p => getCategory(p) === cat.id).length;

    return `
      <button
        type="button"
        onclick="filterProducts('${cat.id.replace(/'/g, "\\'")}')"
        class="flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 cursor-pointer border ${
          isActive
            ? 'bg-brand-600 text-white border-brand-600 shadow-sm shadow-brand-600/25'
            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
        }"
      >
        <span>${cat.icon}</span>
        <span>${cat.label}</span>
        <span class="text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
          isActive ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-600'
        }">${count}</span>
      </button>
    `;
  }).join("");
}

// Render Dynamic Brand Chips for Selected Category
function showBrandFilters() {
  const chipContainer = document.getElementById("brandChips");
  const titleEl = document.getElementById("activeCategoryTitle");
  if (!chipContainer) return;

  const catObj = categories.find(c => c.id === selectedCategory);
  if (titleEl && catObj) {
    titleEl.textContent = `${catObj.icon} ${catObj.label}`;
  }

  // Get products in current category + search
  const categorySubset = products.filter(p => {
    const matchesCat = selectedCategory === "All" || getCategory(p) === selectedCategory;
    const matchesSearch = !searchTerm.trim() ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase().trim());
    return matchesCat && matchesSearch;
  });

  // Extract unique brands and counts
  const brandCounts = {};
  categorySubset.forEach(p => {
    brandCounts[p.brand] = (brandCounts[p.brand] || 0) + 1;
  });
  const uniqueBrands = Object.keys(brandCounts);

  const allActive = selectedBrand === "All";
  let html = `
    <button
      type="button"
      onclick="filterByBrand('All')"
      class="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition border ${
        allActive
          ? 'bg-slate-900 text-white border-slate-900'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
      }"
    >
      All Brands (${categorySubset.length})
    </button>
  `;

  html += uniqueBrands.map(brand => {
    const isActive = selectedBrand === brand;
    const safeBrand = brand.replace(/'/g, "\\'");
    return `
      <button
        type="button"
        onclick="filterByBrand('${safeBrand}')"
        class="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition border flex items-center gap-1.5 ${
          isActive
            ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
            : 'bg-white hover:bg-brand-50 text-slate-700 border-slate-200'
        }"
      >
        <span>${brand}</span>
        <span class="text-[10px] opacity-75">(${brandCounts[brand]})</span>
      </button>
    `;
  }).join("");

  chipContainer.innerHTML = html;
}

// Render Product Grid Cards
function showProductCards() {
  const area = document.getElementById("productList");
  const countBadge = document.getElementById("productCountBadge");
  if (!area) return;

  const query = searchTerm.toLowerCase().trim();

  let filtered = products.filter(p => {
    const matchesCategory = selectedCategory === "All" || getCategory(p) === selectedCategory;
    const matchesBrand = selectedBrand === "All" || p.brand === selectedBrand;
    const matchesSearch = !query ||
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);
    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Apply Sort Order
  if (sortOrder === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOrder === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortOrder === "brand") {
    filtered = [...filtered].sort((a, b) => a.brand.localeCompare(b.brand));
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    area.innerHTML = `
      <div class="col-span-full bg-white rounded-2xl border border-slate-200 p-10 text-center my-4">
        <div class="text-4xl mb-2">🔍</div>
        <h3 class="font-display font-bold text-slate-800 text-base">No matching products found</h3>
        <p class="text-xs text-slate-500 mt-1">Try clearing your search or selecting "All Products".</p>
        <button
          type="button"
          onclick="resetAllFilters()"
          class="mt-4 bg-brand-600 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-brand-700 transition"
        >
          Show All Products
        </button>
      </div>
    `;
    return;
  }

  area.innerHTML = filtered.map(p => {
    const i = products.indexOf(p);
    const cartItem = cart.find(item => item.index === i);
    const qty = cartItem ? cartItem.quantity : 0;
    const hasDiscount = p.mrp && p.mrp > p.price;
    const savings = hasDiscount ? p.mrp - p.price : 0;

    return `
      <div class="product-card bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-3.5 flex flex-col justify-between relative overflow-hidden">
        
        <!-- Top Row Badges: Discount & Discreet Badge -->
        <div>
          <div class="flex items-center justify-between gap-1 mb-2 min-h-[20px]">
            ${hasDiscount ? `
              <span class="bg-blue-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wide">
                Save ₹${savings}
              </span>
            ` : `<span></span>`}
            ${p.discreet ? `
              <span title="Packed in sealed opaque bag" class="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                🔒 Discreet
              </span>
            ` : ``}
          </div>

          <!-- Visual Emoji Box -->
          <div class="w-full h-24 sm:h-28 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-4xl sm:text-5xl select-none mb-2.5">
            ${p.emoji}
          </div>

          <!-- Company / Brand Tag -->
          <div class="flex items-center justify-between gap-1 mb-1">
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-100 truncate">
              ${p.brand}
            </span>
            <span class="text-[10px] text-slate-400 font-semibold shrink-0">⚡ 20m</span>
          </div>

          <!-- Product Name -->
          <h3 class="font-bold text-slate-800 text-xs sm:text-sm leading-snug line-clamp-2 min-h-[36px]">
            ${p.name}
          </h3>

          <!-- Pack Size / Unit -->
          <p class="text-[11px] font-semibold text-slate-500 mt-1">
            ${p.unit}
          </p>
        </div>

        <!-- Price & Add/Stepper Button Row -->
        <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div class="text-sm sm:text-base font-display font-extrabold text-slate-900">
              ₹${p.price}
            </div>
            ${hasDiscount ? `
              <div class="text-[11px] text-slate-400 line-through font-medium -mt-0.5">
                MRP ₹${p.mrp}
              </div>
            ` : `
              <div class="text-[10px] text-slate-400 font-medium -mt-0.5">
                Best Price
              </div>
            `}
          </div>

          ${qty === 0 ? `
            <button
              type="button"
              onclick="addToCart(${i})"
              class="bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white border border-brand-600 font-extrabold text-xs px-3.5 py-2 rounded-xl transition-all active:scale-95 cursor-pointer shrink-0 shadow-xs"
            >
              ADD +
            </button>
          ` : `
            <div class="flex items-center bg-brand-600 text-white rounded-xl overflow-hidden shadow-sm shrink-0">
              <button
                type="button"
                onclick="changeQuantity(${i}, -1)"
                class="w-7 h-8 flex items-center justify-center font-extrabold text-sm hover:bg-brand-700 active:bg-brand-800 cursor-pointer"
              >−</button>
              <span class="px-2 text-xs font-extrabold select-none">${qty}</span>
              <button
                type="button"
                onclick="changeQuantity(${i}, 1)"
                class="w-7 h-8 flex items-center justify-center font-extrabold text-sm hover:bg-brand-700 active:bg-brand-800 cursor-pointer"
              >+</button>
            </div>
          `}
        </div>

      </div>
    `;
  }).join("");
}

// Add to Cart
function addToCart(index) {
  const product = products[index];
  if (!product) return;

  const existing = cart.find(item => item.index === index);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ index: index, quantity: 1 });
  }

  // Auto-check discreet packaging if user adds a discreet wellness/pharmacy item
  if (product.discreet) {
    const discreetBox = document.getElementById("discreetPackagingCheckbox");
    if (discreetBox) discreetBox.checked = true;
  }

  showToast(`Added ${product.name} to basket`);
  showProductCards();
  showCart();
}

// Change Item Quantity
function changeQuantity(index, change) {
  const item = cart.find(item => item.index === index);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(item => item.index !== index);
  }

  showProductCards();
  showCart();
}

// Clear Entire Cart
function clearCart() {
  cart = [];
  showProductCards();
  showCart();
  showToast("Basket cleared", "🗑️");
}

// Delivery Fee Calculation
function calculateDeliveryFee(distance) {
  if (distance <= STARTING_DISTANCE) {
    return STARTING_FEE;
  }
  const extraKm = Math.ceil(distance - STARTING_DISTANCE);
  return STARTING_FEE + extraKm * EXTRA_PER_KM;
}

// Quick Distance Setter Buttons
function setDistance(km) {
  const distInput = document.getElementById("custDistance");
  if (distInput) {
    distInput.value = km;
    updateBillSummary();
  }
}

// Render Cart Items & Update All Badges + Bill Summary
function showCart() {
  const area = document.getElementById("cart");
  const totalArea = document.getElementById("total");
  const badge = document.getElementById("cart-count");
  const mobileBadge = document.getElementById("mobile-header-count");
  const headerTotal = document.getElementById("header-cart-total");
  const cartSectionCount = document.getElementById("cartSectionCount");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const floatingBar = document.getElementById("floatingCartBar");

  if (!area || !totalArea || !badge) return;

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + products[item.index].price * item.quantity, 0);
  const totalSavings = cart.reduce((sum, item) => {
    const p = products[item.index];
    const diff = p.mrp && p.mrp > p.price ? (p.mrp - p.price) * item.quantity : 0;
    return sum + diff;
  }, 0);

  // Update Header Counters
  badge.textContent = totalItemsCount;
  if (mobileBadge) mobileBadge.textContent = totalItemsCount;
  if (headerTotal) headerTotal.textContent = "₹" + subtotal;
  if (cartSectionCount) cartSectionCount.textContent = `${totalItemsCount} Item${totalItemsCount === 1 ? '' : 's'}`;

  if (clearCartBtn) {
    if (cart.length > 0) clearCartBtn.classList.remove("hidden");
    else clearCartBtn.classList.add("hidden");
  }

  // Update Floating Sticky Bottom Cart Bar
  if (floatingBar) {
    if (cart.length > 0) {
      floatingBar.classList.remove("hidden");
      document.getElementById("floatingBarCount").textContent = `${totalItemsCount} ITEM${totalItemsCount === 1 ? '' : 'S'}`;
      document.getElementById("floatingBarTotal").textContent = `₹${subtotal} + Delivery`;
      document.getElementById("floatingBarSavings").textContent = totalSavings > 0 ? `Saved ₹${totalSavings}` : `Fast Delivery`;
    } else {
      floatingBar.classList.add("hidden");
    }
  }

  // Render Cart Item Rows
  if (cart.length === 0) {
    area.innerHTML = `
      <div class="py-10 text-center">
        <div class="text-4xl mb-2">🧺</div>
        <p class="font-bold text-slate-700 text-sm">Your basket is currently empty</p>
        <p class="text-xs text-slate-400 mt-1">Add snacks, groceries, medicines, or appliances above to get started.</p>
      </div>
    `;
  } else {
    area.innerHTML = cart.map(item => {
      const p = products[item.index];
      return `
        <div class="py-3 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shrink-0">
              ${p.emoji}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-extrabold uppercase text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded">${p.brand}</span>
                ${p.discreet ? `<span class="text-[10px] text-emerald-700 font-bold">🔒</span>` : ``}
              </div>
              <p class="font-bold text-slate-800 text-xs sm:text-sm truncate">${p.name}</p>
              <p class="text-xs text-slate-500">${p.unit} • ₹${p.price} × ${item.quantity} = <strong class="text-slate-900">₹${p.price * item.quantity}</strong></p>
            </div>
          </div>

          <div class="flex items-center bg-brand-600 text-white rounded-xl overflow-hidden shrink-0">
            <button
              type="button"
              onclick="changeQuantity(${item.index}, -1)"
              class="w-7 h-7 flex items-center justify-center font-extrabold text-sm hover:bg-brand-700 cursor-pointer"
            >−</button>
            <span class="px-2 text-xs font-extrabold">${item.quantity}</span>
            <button
              type="button"
              onclick="changeQuantity(${item.index}, 1)"
              class="w-7 h-7 flex items-center justify-center font-extrabold text-sm hover:bg-brand-700 cursor-pointer"
            >+</button>
          </div>
        </div>
      `;
    }).join("");
  }

  totalArea.textContent = "Subtotal: ₹" + subtotal;
  updateBillSummary();
}

// Live Bill Summary Calculation
function updateBillSummary() {
  const distInput = document.getElementById("custDistance");
  const rawDist = distInput ? Number(distInput.value) : 1;
  const distance = Number.isFinite(rawDist) && rawDist > 0 ? rawDist : 1;

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + products[item.index].price * item.quantity, 0);
  const totalSavings = cart.reduce((sum, item) => {
    const p = products[item.index];
    const diff = p.mrp && p.mrp > p.price ? (p.mrp - p.price) * item.quantity : 0;
    return sum + diff;
  }, 0);

  const deliveryFee = cart.length > 0 ? calculateDeliveryFee(distance) : 0;
  const grandTotal = subtotal + deliveryFee;

  const distBadge = document.getElementById("distanceBadge");
  const billItemCount = document.getElementById("billItemCount");
  const billDistanceText = document.getElementById("billDistanceText");
  const billDeliveryFee = document.getElementById("billDeliveryFee");
  const billSavings = document.getElementById("billSavings");
  const billGrandTotal = document.getElementById("billGrandTotal");

  if (distBadge) distBadge.textContent = `${distance} KM`;
  if (billItemCount) billItemCount.textContent = totalItemsCount;
  if (billDistanceText) billDistanceText.textContent = `${distance} KM`;
  if (billDeliveryFee) billDeliveryFee.textContent = `₹${deliveryFee}`;
  if (billSavings) billSavings.textContent = `- ₹${totalSavings}`;
  if (billGrandTotal) billGrandTotal.textContent = `₹${grandTotal}`;
}

function scrollToCart() {
  const cartSection = document.getElementById("cartSection");
  if (cartSection) {
    cartSection.scrollIntoView({ behavior: "smooth" });
  }
}

function openCartDrawer() {
  scrollToCart();
}

// Toast Helper
let toastTimer = null;
function showToast(msg, icon = "✅") {
  const toast = document.getElementById("toastPopup");
  const toastMsg = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  if (toastIcon) toastIcon.textContent = icon;
  toast.classList.remove("hidden");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 2400);
}

function showFormError(msg) {
  const errBox = document.getElementById("formErrorMsg");
  if (!errBox) return;
  if (!msg) {
    errBox.classList.add("hidden");
    errBox.textContent = "";
  } else {
    errBox.textContent = msg;
    errBox.classList.remove("hidden");
  }
}

// Official Checkout Function (Submits to Google Apps Script + Redirects to WhatsApp)
async function checkout() {
  showFormError("");

  if (cart.length === 0) {
    showFormError("⚠️ Your basket is empty! Please add products before placing an order.");
    showToast("Please add products to your basket first!", "⚠️");
    return;
  }

  const nameEl = document.getElementById("custName");
  const phoneEl = document.getElementById("custPhone");
  const addressEl = document.getElementById("custAddress");
  const distanceEl = document.getElementById("custDistance");
  const discreetEl = document.getElementById("discreetPackagingCheckbox");

  const name = nameEl ? nameEl.value.trim() : "";
  const phone = phoneEl ? phoneEl.value.trim() : "";
  const address = addressEl ? addressEl.value.trim() : "";
  const distance = distanceEl ? Number(distanceEl.value) : 1;
  const isDiscreet = discreetEl ? discreetEl.checked : false;

  if (!name) {
    showFormError("⚠️ Please enter your full name.");
    if (nameEl) nameEl.focus();
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    showFormError("⚠️ Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
    if (phoneEl) phoneEl.focus();
    return;
  }

  if (!address) {
    showFormError("⚠️ Please enter your complete Bramhapuri delivery address.");
    if (addressEl) addressEl.focus();
    return;
  }

  if (!Number.isFinite(distance) || distance <= 0) {
    showFormError("⚠️ Please enter a valid delivery distance greater than 0 KM.");
    if (distanceEl) distanceEl.focus();
    return;
  }

  const subtotal = cart.reduce((sum, item) => {
    return sum + products[item.index].price * item.quantity;
  }, 0);

  const deliveryFee = calculateDeliveryFee(distance);
  const grandTotal = subtotal + deliveryFee;

  const items = cart.map(item => ({
    name: `${products[item.index].brand} - ${products[item.index].name} (${products[item.index].unit})`,
    price: products[item.index].price,
    quantity: item.quantity
  }));

  const order = {
    customer: {
      name: name,
      phone: phone,
      address: address
    },
    payment: "Cash on delivery",
    discreetPackaging: isDiscreet,
    subtotal: subtotal,
    deliveryFee: deliveryFee,
    distanceKm: distance,
    total: grandTotal,
    items: items
  };

  const messageLines = [
    "🧺 *Hello QuickBasket Bramhapuri! New Order:*",
    "------------------------",
    "👤 *Name:* " + name,
    "📞 *Phone:* " + phone,
    "📍 *Address:* " + address,
    isDiscreet ? "🔒 *Packaging:* Discreet / Private Packaging Requested" : null,
    "------------------------",
    "🛒 *Order Items:*",
    ...items.map((p, idx) => `${idx + 1}. ${p.name} × ${p.quantity} = ₹${p.price * p.quantity}`),
    "------------------------",
    "💰 *Items Subtotal:* ₹" + subtotal,
    "🛵 *Distance:* " + distance + " KM (approx.)",
    "🚚 *Delivery Fee:* ₹" + deliveryFee,
    "✅ *Grand Total:* ₹" + grandTotal,
    "💵 *Payment:* Cash / UPI on delivery",
    "Please confirm my order."
  ].filter(Boolean);

  const message = messageLines.join("\n");

  const submitBtn = document.getElementById("checkoutSubmitBtn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>⏳ Processing Order...</span>";
  }

  try {
    await fetch(ORDER_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify({ order })
    });
  } catch (error) {
    console.error("Order submission error:", error);
  }

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = "<span>📲 Place Order via WhatsApp</span>";
  }

  window.location.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message);
}

// Initialize Store Immediately
showCategories();
showBrandFilters();
showProductCards();
showCart();