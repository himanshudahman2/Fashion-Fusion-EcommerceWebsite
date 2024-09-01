const womensData = [
    {
        title: "Elegant Silk Saree",
        description: "A beautiful silk saree with intricate embroidery, perfect for weddings and special occasions.",
        price: 4999,
        size: "Free Size",
        image: "https://images.pexels.com/photos/1999895/pexels-photo-1999895.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
        title: "Chic Summer Dress",
        description: "A stylish summer dress for casual outings or beach days.",
        price: 1499,
        size: "M",
        image: "https://images.pexels.com/photos/4945044/pexels-photo-4945044.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Comfortable Yoga Pants",
        description: "Soft and stretchy yoga pants designed for comfort during workouts.",
        price: 899,
        size: "S",
        image: "https://images.pexels.com/photos/4558331/pexels-photo-4558331.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Classic Little Black Dress",
        description: "A timeless little black dress suitable for any formal event.",
        price: 1999,
        size: "L",
        image: "https://images.pexels.com/photos/3830464/pexels-photo-3830464.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Trendy High-Waist Skirt",
        description: "A fashionable high-waist skirt that pairs well with various tops.",
        price: 1199,
        size: "M",
        image: "https://images.pexels.com/photos/5543017/pexels-photo-5543017.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Elegant Blazer",
        description: "A sophisticated blazer for professional or formal occasions.",
        price: 1799,
        size: "L",
        image: ""
    },
    {
        title: "Casual Denim Shorts",
        description: "Comfortable denim shorts perfect for summer wear.",
        price: 799,
        size: "S",
        image: ""
    },
    {
        title: "Boho Print Maxi Dress",
        description: "A bohemian-style maxi dress with a vibrant print.",
        price: 1599,
        size: "M",
        image: ""
    },
    {
        title: "Soft Knit Cardigan",
        description: "A cozy cardigan for layering over your favorite outfits.",
        price: 999,
        size: "S",
        image: ""
    },
    {
        title: "Feminine Floral Blouse",
        description: "A lovely floral blouse ideal for spring and summer.",
        price: 899,
        size: "L",
        image: "https://images.pexels.com/photos/4324155/pexels-photo-4324155.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Smart Work Pants",
        description: "Tailored work pants for a polished and professional look.",
        price: 1299,
        size: "M",
        image: "https://images.pexels.com/photos/26968759/pexels-photo-26968759/free-photo-of-woman-standing-in-blouse-and-pants.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Cozy Sweater Dress",
        description: "A warm sweater dress perfect for colder days.",
        price: 1499,
        size: "S",
        image: "https://images.pexels.com/photos/5709908/pexels-photo-5709908.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Elegant Evening Gown",
        description: "A stunning evening gown for special occasions.",
        price: 2499,
        size: "L",
        image: "https://images.pexels.com/photos/1635664/pexels-photo-1635664.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Comfortable Tunic Top",
        description: "A relaxed tunic top ideal for casual wear.",
        price: 799,
        size: "M",
        image: "https://images.pexels.com/photos/27793025/pexels-photo-27793025/free-photo-of-processed-with-vsco-with-6-preset.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Sophisticated Wrap Dress",
        description: "A versatile wrap dress that can be dressed up or down.",
        price: 1299,
        size: "S",
        image: "https://images.pexels.com/photos/2698470/pexels-photo-2698470.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Trendy Jumpsuit",
        description: "A chic jumpsuit for a modern, stylish look.",
        price: 1599,
        size: "L",
        image: "https://images.pexels.com/photos/27519550/pexels-photo-27519550/free-photo-of-1-embracing-the-city-vibes-in-my-pink-jumpsuit-citylife-pinkjumpsuit-posingpretty-2-feeling-pretty-in-pink-against-this-stunning-backdrop-urbanchic-buildingbackground-strike.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Casual V-Neck Top",
        description: "A simple and stylish v-neck top for everyday wear.",
        price: 699,
        size: "M",
        image: "https://images.pexels.com/photos/7900668/pexels-photo-7900668.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Elegant Kimono Robe",
        description: "A beautiful kimono robe for lounging at home.",
        price: 999,
        size: "Free Size",
        image: ""
    },
    {
        title: "Modern Wide-Leg Pants",
        description: "Fashionable wide-leg pants for a relaxed fit.",
        price: 1199,
        size: "S",
        image: "https://images.pexels.com/photos/3869551/pexels-photo-3869551.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Chic Tailored Shorts",
        description: "Tailored shorts that offer both style and comfort.",
        price: 899,
        size: "M",
        image: "https://images.pexels.com/photos/4838044/pexels-photo-4838044.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Sophisticated Shift Dress",
        description: "A sleek shift dress suitable for various events.",
        price: 1399,
        size: "L",
        image: "https://images.pexels.com/photos/19292779/pexels-photo-19292779/free-photo-of-western-dress-2024-shoot-by-dhanno-mayra-jaffri.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Classic Leather Sneakers Shoes",
        description: "Stylish leather sneakers for a casual look.",
        price: 1999,
        size: "9",
        image: "https://m.media-amazon.com/images/I/71jucJHKGrL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        title: "Running Shoes Shoes",
        description: "Lightweight and breathable running shoes for everyday workouts.",
        price: 1499,
        size: "10",
        image: "https://m.media-amazon.com/images/I/71EbIPv-u9L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        title: "Formal Dress Shoes Shoes",
        description: "Elegant leather shoes perfect for formal occasions.",
        price: 2999,
        size: "8",
        image: "https://m.media-amazon.com/images/I/71me25nV8pL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        title: "Casual Slip-Ons Shoes",
        description: "Comfortable slip-on shoes for easy wear.",
        price: 999,
        size: "9",
        image: "https://m.media-amazon.com/images/I/71MCegzcx-L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        title: "High-Top Sneakers Shoes",
        description: "Trendy high-top sneakers with a modern design.",
        price: 2499,
        size: "10",
        image: "https://m.media-amazon.com/images/I/71s4yJYxVjL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        title: "Suede Loafers Shoes",
        description: "Elegant suede loafers for a smart-casual look.",
        price: 2199,
        size: "7",
        image: "https://m.media-amazon.com/images/I/816Q2aXDy2L._SX695_.jpg"
    },
    {
        title: "Sporty Trainers Shoes",
        description: "Durable trainers designed for high-intensity activities.",
        price: 1799,
        size: "8",
        image: "https://m.media-amazon.com/images/I/61TmVt6XraL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        title: "Ankle Boots Shoes",
        description: "Stylish ankle boots perfect for fall and winter.",
        price: 2599,
        size: "9",
        image: "https://m.media-amazon.com/images/I/71JMDJLzRDL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Canvas Sneakers Shoes",
        description: "Lightweight canvas sneakers for a casual day out.",
        price: 1299,
        size: "10",
        image: "https://m.media-amazon.com/images/I/71xWtLhH2GL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Leather Sandals Shoes",
        description: "Comfortable leather sandals for summer wear.",
        price: 999,
        size: "8",
        image: "https://m.media-amazon.com/images/I/51mtZCsBJDL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Brogue Shoes Shoes",
        description: "Classic brogue shoes with intricate detailing.",
        price: 2799,
        size: "9",
        image: "https://m.media-amazon.com/images/I/81p5Xj32M9L._AC_UL480_QL65_.jpg"
    },
    {
        title: "Chelsea Boots Shoes",
        description: "Sleek Chelsea boots for a polished look.",
        price: 2999,
        size: "10",
        image: "https://m.media-amazon.com/images/I/51eH2qv8G7L._AC_UL480_QL65_.jpg"
    },
    {
        title: "Outdoor Hiking Boots Shoes",
        description: "Sturdy hiking boots designed for rough terrain.",
        price: 3499,
        size: "11",
        image: "https://m.media-amazon.com/images/I/61ztUhuiAGL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Espadrilles Shoes",
        description: "Casual espadrilles for a relaxed summer vibe.",
        price: 1199,
        size: "7",
        image: "https://m.media-amazon.com/images/I/71qewskXG5L._AC_UL480_QL65_.jpg"
    },
    {
        title: "Chukka Boots Shoes",
        description: "Versatile Chukka boots for a casual or semi-formal look.",
        price: 2399,
        size: "8",
        image: "https://m.media-amazon.com/images/I/81xcLHSFSCL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Lace-Up Oxfords Shoes",
        description: "Timeless lace-up Oxfords for business or formal attire.",
        price: 2699,
        size: "9",
        image: "https://m.media-amazon.com/images/I/7139NXICbXL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Running Sandals Shoes",
        description: "Performance sandals designed for running and outdoor activities.",
        price: 1399,
        size: "10",
        image: "https://m.media-amazon.com/images/I/71GwsQX904L._AC_UL480_QL65_.jpg"
    },
    {
        title: "Flip Flops Shoes",
        description: "Comfortable flip flops for everyday wear.",
        price: 499,
        size: "8",
        image: "https://m.media-amazon.com/images/I/614ZnW6FAiL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Moccasins Shoes",
        description: "Soft moccasins for a relaxed and comfortable fit.",
        price: 1599,
        size: "9",
        image: "https://m.media-amazon.com/images/I/512BnjA-4BL._AC_UL480_QL65_.jpg"
    },
    {
        title: "Work Boots Shoes",
        description: "Durable work boots for tough environments.",
        price: 3299,
        size: "11",
        image: "https://m.media-amazon.com/images/I/61QecQhdXIL._AC_UL480_QL65_.jpg"
    }
];

module.exports = { womensData: womensData };
