import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, onSnapshot, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYGCahLn9IwMu7xp1VO751WN_PndND6FU",
  authDomain: "quickbasket-d2032.firebaseapp.com",
  projectId: "quickbasket-d2032",
  storageBucket: "quickbasket-d2032.firebasestorage.app",
  messagingSenderId: "99063987697",
  appId: "1:99063987697:web:7d0243c34676223a18d850",
  measurementId: "G-HR5M9R4362"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ORDER_ENDPOINT = "https://script.google.com/macros/s/AKfycbzrYU6o630pM2fru_KOY4OObeRv343vJhzQepy13HMGExav8M6xeDCV96jEBtTYLnGr/exec";
const WHATSAPP = "918552969881";

const STARTING_FEE = 20;
const EXTRA_PER_KM = 5;
const STARTING_DISTANCE = 1;

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

const defaultProducts = [
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
  { name: "Fresh Red Tomato (Tamatar)", brand: "Farm Fresh", unit: "1 kg", price: 25, mrp: 30, emoji: "🍅", category: "Vegetables & Fruits" },
  { name: "Fresh Potato (Aloo)", brand: "Farm Fresh", unit: "1 kg", price: 35, mrp: 40, emoji: "🥔", category: "Vegetables & Fruits" },
  { name: "Fresh Nashik Onion (Kanda)", brand: "Farm Fresh", unit: "1 kg", price: 40, mrp: 45, emoji: "🧅", category: "Vegetables & Fruits" },
  { name: "Green Chilli & Fresh Coriander Combo", brand: "Farm Fresh", unit: "200 g", price: 20, mrp: 25, emoji: "🌿", category: "Vegetables & Fruits" },
  { name: "Fresh Ginger & Garlic Pack", brand: "Farm Fresh", unit: "200 g", price: 35, mrp: 40, emoji: "🧄", category: "Vegetables & Fruits" },
  { name: "Fresh Robusta Banana", brand: "Farm Fresh", unit: "1 Dozen", price: 45, mrp: 50, emoji: "🍌", category: "Vegetables & Fruits" },
  { name: "Kashmiri Royal Apple", brand: "Farm Fresh", unit: "500 g", price: 95, mrp: 110, emoji: "🍎", category: "Vegetables & Fruits" },
  { name: "Amul Taaza Toned Milk Pouch", brand: "Amul", unit: "500 ml", price: 28, mrp: 28, emoji: "🥛", category: "Dairy & Bread" },
  { name: "Amul Gold Full Cream Milk", brand: "Amul", unit: "500 ml", price: 34, mrp: 34, emoji: "🥛", category: "Dairy & Bread" },
  { name: "Amul Pasteurised Butter", brand: "Amul", unit: "100 g", price: 58, mrp: 60, emoji: "🧈", category: "Dairy & Bread" },
  { name: "Amul Fresh Malai Paneer", brand: "Amul", unit: "200 g", price: 88, mrp: 95, emoji: "🧀", category: "Dairy & Bread" },
  { name: "Amul Masti Dahi (Fresh Curd)", brand: "Amul", unit: "400 g", price: 35, mrp: 38, emoji: "🥣", category: "Dairy & Bread" },
  { name: "Fresh White Sandwich Bread", brand: "Britannia", unit: "400 g", price: 38, mrp: 40, emoji: "🍞", category: "Dairy & Bread" },
  { name: "Farm Fresh White Eggs", brand: "Protein Pack", unit: "6 Pieces", price: 45, mrp: 50, emoji: "🥚", category: "Dairy & Bread" },
  { name: "Bisleri Mineral Water Bottle", brand: "Bisleri", unit: "1 Litre", price: 20, mrp: 20, emoji: "💧", category: "Drinks & Beverages" },
  { name: "Bisleri Mineral Water Family Pack", brand: "Bisleri", unit: "2 Litre", price: 30, mrp: 30, emoji: "🧴", category: "Drinks & Beverages" },
  { name: "Thums Up Strong Cola", brand: "Coca-Cola", unit: "750 ml", price: 40, mrp: 45, emoji: "🥤", category: "Drinks & Beverages" },
  { name: "Sprite Lemon-Lime Drink", brand: "Coca-Cola", unit: "750 ml", price: 40, mrp: 45, emoji: "🥤", category: "Drinks & Beverages" },
  { name: "Maaza Mango Drink", brand: "Coca-Cola", unit: "600 ml", price: 40, mrp: 42, emoji: "🥭", category: "Drinks & Beverages" },
  { name: "Sting Energy Drink", brand: "PepsiCo", unit: "250 ml", price: 20, mrp: 20, emoji: "⚡", category: "Drinks & Beverages" },
  { name: "Red Bull Energy Drink Can", brand: "Red Bull", unit: "250 ml", price: 125, mrp: 125, emoji: "🐂", category: "Drinks & Beverages" },
  { name: "Amul Kool Rose Lassi", brand: "Amul", unit: "200 ml", price: 25, mrp: 25, emoji: "🥛", category: "Drinks & Beverages" },
  { name: "Amul Spiced Masti Buttermilk", brand: "Amul", unit: "200 ml", price: 1