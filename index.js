const products = [{
    "id": 1,
    "name": "iPhone 13 Pro",
    "description": "Latest iPhone model with advanced camera system",
    "price": 999.99,
    "category": "Smartphones",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 2,
    "name": "Samsung 4K TV",
    "description": "55-inch QLED Smart TV with HDR",
    "price": 799.99,
    "category": "Electronics",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 3,
    "name": "Nike Air Max",
    "description": "Classic running shoes with air cushioning",
    "price": 129.99,
    "category": "Footwear",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 4,
    "name": "MacBook Air",
    "description": "Thin and light laptop with M1 chip",
    "price": 1299.99,
    "category": "Laptops",
    "rating": 4.9,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 5,
    "name": "Sony WH-1000XM4",
    "description": "Wireless noise-cancelling headphones",
    "price": 349.99,
    "category": "Audio",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 6,
    "name": "Samsung Galaxy S21",
    "description": "High-performance Android smartphone",
    "price": 899.99,
    "category": "Smartphones",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 7,
    "name": "Dell XPS 13",
    "description": "Compact and powerful ultrabook",
    "price": 1399.99,
    "category": "Laptops",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 8,
    "name": "Bose SoundLink Revolve+",
    "description": "Portable Bluetooth speaker with 360-degree sound",
    "price": 299.99,
    "category": "Audio",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 9,
    "name": "Adidas Ultraboost 21",
    "description": "High-performance running shoes",
    "price": 149.99,
    "category": "Footwear",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 10,
    "name": "LG OLED CX",
    "description": "65-inch OLED Smart TV with 4K HDR",
    "price": 1599.99,
    "category": "Electronics",
    "rating": 4.9,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 11,
    "name": "Apple Watch Series 7",
    "description": "Smartwatch with fitness tracking",
    "price": 399.99,
    "category": "Wearables",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 12,
    "name": "GoPro Hero 10",
    "description": "Action camera with 5.3K video recording",
    "price": 499.99,
    "category": "Cameras",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 13,
    "name": "JBL Flip 5",
    "description": "Portable waterproof Bluetooth speaker",
    "price": 119.99,
    "category": "Audio",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 14,
    "name": "Nintendo Switch",
    "description": "Hybrid gaming console for home and portable play",
    "price": 299.99,
    "category": "Electronics",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 15,
    "name": "Sony Alpha a7 III",
    "description": "Full-frame mirrorless camera with fast autofocus",
    "price": 1999.99,
    "category": "Cameras",
    "rating": 4.9,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 16,
    "name": "Canon EOS R6",
    "description": "Mirrorless camera with 4K video",
    "price": 2499.99,
    "category": "Cameras",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 17,
    "name": "Huawei P50 Pro",
    "description": "High-end smartphone with advanced camera features",
    "price": 849.99,
    "category": "Smartphones",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 18,
    "name": "OnePlus 9 Pro",
    "description": "Flagship Android phone with Hasselblad camera",
    "price": 969.99,
    "category": "Smartphones",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 19,
    "name": "Xiaomi Redmi Note 10",
    "description": "Affordable smartphone with AMOLED display",
    "price": 249.99,
    "category": "Smartphones",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 20,
    "name": "Apple iPad Pro",
    "description": "Powerful tablet with Liquid Retina display",
    "price": 1099.99,
    "category": "Electronics",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 21,
    "name": "Microsoft Surface Pro 7",
    "description": "2-in-1 detachable laptop with touchscreen",
    "price": 899.99,
    "category": "Laptops",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 22,
    "name": "HP Spectre x360",
    "description": "Premium convertible laptop with 4K display",
    "price": 1299.99,
    "category": "Laptops",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 23,
    "name": "ASUS ROG Zephyrus G14",
    "description": "Gaming laptop with Ryzen processor",
    "price": 1499.99,
    "category": "Laptops",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 24,
    "name": "Lenovo ThinkPad X1 Carbon",
    "description": "Business laptop with lightweight design",
    "price": 1599.99,
    "category": "Laptops",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 25,
    "name": "Asics Gel-Kayano 27",
    "description": "Stability running shoes for overpronators",
    "price": 159.99,
    "category": "Footwear",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 26,
    "name": "Puma RS-X",
    "description": "Retro-inspired sneakers with bold design",
    "price": 99.99,
    "category": "Footwear",
    "rating": 4.4,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 27,
    "name": "Audio-Technica ATH-M50x",
    "description": "Professional studio monitor headphones",
    "price": 149.99,
    "category": "Audio",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 28,
    "name": "Beats Solo Pro",
    "description": "On-ear noise-cancelling headphones",
    "price": 229.99,
    "category": "Audio",
    "rating": 4.4,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 29,
    "name": "DJI Mavic Air 2",
    "description": "Compact drone with 4K camera",
    "price": 799.99,
    "category": "Electronics",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 30,
    "name": "Dyson V11 Vacuum",
    "description": "Cordless stick vacuum with powerful suction",
    "price": 599.99,
    "category": "Electronics",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 31,
    "name": "Logitech MX Master 3",
    "description": "Advanced wireless mouse for productivity",
    "price": 99.99,
    "category": "Electronics",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 32,
    "name": "Razer DeathAdder V2",
    "description": "High-precision gaming mouse",
    "price": 69.99,
    "category": "Electronics",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 33,
    "name": "Philips Hue Lightstrip",
    "description": "Smart LED lightstrip with app control",
    "price": 79.99,
    "category": "Electronics",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 34,
    "name": "Amazon Echo Dot (4th Gen)",
    "description": "Smart speaker with Alexa voice assistant",
    "price": 49.99,
    "category": "Electronics",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 35,
    "name": "Google Nest Hub",
    "description": "Smart display with Google Assistant",
    "price": 99.99,
    "category": "Electronics",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 36,
    "name": "Kindle Paperwhite",
    "description": "E-reader with adjustable front light",
    "price": 129.99,
    "category": "Electronics",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 37,
    "name": "Garmin Fenix 6",
    "description": "Rugged multisport GPS smartwatch",
    "price": 499.99,
    "category": "Wearables",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 38,
    "name": "Fitbit Charge 5",
    "description": "Fitness tracker with health metrics",
    "price": 179.99,
    "category": "Wearables",
    "rating": 4.4,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 39,
    "name": "Apple AirTag",
    "description": "Item tracker with precision finding",
    "price": 29.99,
    "category": "Wearables",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 40,
    "name": "SanDisk Extreme Portable SSD",
    "description": "Rugged external SSD with fast transfer speeds",
    "price": 139.99,
    "category": "Electronics",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 41,
    "name": "Seagate Expansion 2TB",
    "description": "External hard drive for extra storage",
    "price": 59.99,
    "category": "Electronics",
    "rating": 4.5,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 42,
    "name": "WD My Passport 4TB",
    "description": "Portable hard drive with backup software",
    "price": 109.99,
    "category": "Electronics",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 43,
    "name": "Panasonic Lumix GH5",
    "description": "Micro Four Thirds camera for video creators",
    "price": 1699.99,
    "category": "Cameras",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 44,
    "name": "Olympus OM-D E-M10 Mark IV",
    "description": "Compact mirrorless camera for enthusiasts",
    "price": 799.99,
    "category": "Cameras",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 45,
    "name": "Samsung Galaxy Buds Pro",
    "description": "Wireless earbuds with noise cancellation",
    "price": 199.99,
    "category": "Audio",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 46,
    "name": "Apple AirPods Pro",
    "description": "In-ear wireless earbuds with active noise cancellation",
    "price": 249.99,
    "category": "Audio",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 47,
    "name": "Bose QuietComfort Earbuds",
    "description": "Truly wireless earbuds with world-class noise cancellation",
    "price": 279.99,
    "category": "Audio",
    "rating": 4.6,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 48,
    "name": "Surface Laptop Go",
    "description": "Lightweight laptop with touchscreen",
    "price": 549.99,
    "category": "Laptops",
    "rating": 4.3,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 49,
    "name": "Acer Predator Helios 300",
    "description": "Gaming laptop with dedicated GPU",
    "price": 1299.99,
    "category": "Laptops",
    "rating": 4.7,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
  },
  {
    "id": 50,
    "name": "Alienware m15 R4",
    "description": "High-end gaming laptop with RGB lighting",
    "price": 1799.99,
    "category": "Laptops",
    "rating": 4.8,
    "image": {
      "desktop": "https://placehold.co/800x800.webp",
      "mobile": "https://placehold.co/200x200.webp",
      "tablet": "https://placehold.co/400x400.webp"
    }
}];

const categories = [
    "Smartphones",
    "Electronics",
    "Footwear",
    "Laptops",
    "Audio",
    "Wearables",
    "Cameras"
];

document.body.innerHTML = `
    <div class="header">
        <h1>Каталог товаров</h1>
        <div class="controls">
            <label>Категория:
                <select id="category">
                    <option value="">Все</option>
                    ${categories.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </label>
            <label>Сортировка:
                <select id="sort">
                    <option value="default">По умолчанию</option>
                    <option value="price-asc">Цена ↑</option>
                    <option value="price-desc">Цена ↓</option>
                    <option value="rating-desc">Рейтинг ↓</option>
                    <option value="rating-asc">Рейтинг ↑</option>
                    <option value="name-asc">Название A → Z</option>
                    <option value="name-desc">Название Z → A</option>
                </select>
            </label>
            <label>Поиск:
                <input id="search" type="text" placeholder="Название или описание..." />
            </label>
        </div>
    </div>
    <div class="grid" id="grid"></div>
`;

const $grid = document.getElementById('grid');
const $category = document.getElementById('category');
const $sort = document.getElementById('sort');
const $search = document.getElementById('search');

function getFilteredSortedProducts() {
    let result = products.slice();
    const q = $search.value.trim().toLowerCase();

    if ($category.value) {
        result = result.filter(p => p.category === $category.value);
    }

    if (q || q === '') {
        result = result.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );
    } 

    switch ($sort.value) {
        case 'price-asc': result.sort((a, b) => a.price - b.price); break;
        case 'price-desc': result.sort((a, b) => b.price - a.price); break;
        case 'rating-asc': result.sort((a, b) => a.rating - b.rating); break;
        case 'rating-desc': result.sort((a, b) => b.rating - a.rating); break;
        case 'name-asc': result.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-desc': result.sort((a, b) => b.name.localeCompare(a.name)); break;
        default: break;
    }

    return result;
}

function getImageSrc(img) {
    if (window.innerWidth <= 600) return img.mobile;
    if (window.innerWidth <= 1024) return img.tablet;
    return img.desktop;
}

function renderProducts() {
    const list = getFilteredSortedProducts();
    $grid.innerHTML = '';

    if(list.length === 0){
        const noResults = document.createElement('div');
        noResults.textContent = 'Нет результатов!'
        noResults.className = 'no-results';

        $grid.appendChild(noResults);
    }

    list.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = (i * 0.04) + 's';
        card.innerHTML = `
            <img class="card__img" src="${getImageSrc(p.image)}" alt="${p.name}" loading="lazy" />
            <div class="card__body">
                <div class="card__category">${p.category}</div>
                <div class="card__title">${p.name}</div>
                <div class="card__description">${p.description}</div>
                <div class="card__footer">
                    <span class="card__footer--price">${p.price.toLocaleString('ru-RU', {style:'currency',currency:'USD'})}</span>
                    <span class="card__footer--rating">★ ${p.rating.toFixed(1)}</span>
                </div>
            </div>
        `;
        $grid.appendChild(card);
    });
}
window.addEventListener('resize', () => renderProducts());

[$category, $sort, $search].forEach(el => el.addEventListener('input', renderProducts));

renderProducts();
