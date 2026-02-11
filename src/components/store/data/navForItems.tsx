export type Category = {
  name: string
  children?: Category[]
}

const categories: Category[] = [
  {
    name: 'Phones & Tablets',
    children: [
      {
        name: 'Smartphones',
        children: [
          { name: 'Brand New' },
          { name: 'Refurbished' },
          { name: '5G Phones' },
          { name: 'Foldable Phones' },
        ],
      },
      {
        name: 'Tablets',
        children: [
          {
            name: 'Android Tablets',
            children: [
              { name: 'Brand New' },
              { name: 'Refurbished' },
              { name: '5G Phones' },
              { name: 'Foldable Phones' },
            ],
          },
          { name: 'iOS Tablets' },
          { name: 'Drawing Tablets' },
        ],
      },
      {
        name: 'Accessories',
        children: [
          { name: 'Cases & Covers' },
          { name: 'Screen Protectors' },
          { name: 'Styluses' },
          { name: 'Mobile Chargers' },
        ],
      },
    ],
  },
  {
    name: 'Laptop & Desktop',
    children: [
      {
        name: 'Laptops',
        children: [
          { name: 'Gaming Laptops' },
          { name: 'Ultrabooks' },
          { name: '2-in-1 Convertibles' },
        ],
      },
      {
        name: 'Desktops',
        children: [
          { name: 'All-in-One PCs' },
          { name: 'Gaming PCs' },
          { name: 'Workstations' },
        ],
      },
      {
        name: 'Components',
        children: [
          { name: 'Processors' },
          { name: 'Graphics Cards' },
          { name: 'Storage' },
          { name: 'Motherboards' },
        ],
      },
    ],
  },
  {
    name: 'Sound Equipment',
    children: [
      {
        name: 'Headphones',
        children: [
          { name: 'Wireless' },
          { name: 'Noise-Cancelling' },
          { name: 'Earbuds' },
        ],
      },
      {
        name: 'Speakers',
        children: [
          { name: 'Bluetooth Speakers' },
          { name: 'Home Theater' },
          { name: 'Soundbars' },
        ],
      },
      {
        name: 'Audio Accessories',
        children: [
          { name: 'DACs & Amplifiers' },
          { name: 'Microphones' },
          { name: 'Cables & Adapters' },
        ],
      },
    ],
  },
  {
    name: 'Power & Accessories',
    children: [
      {
        name: 'Chargers',
        children: [
          { name: 'Wireless Chargers' },
          { name: 'Fast Chargers' },
          { name: 'Car Chargers' },
        ],
      },
      {
        name: 'Power Banks',
        children: [
          { name: 'Compact' },
          { name: 'High-Capacity' },
          { name: 'Solar-Powered' },
        ],
      },
      {
        name: 'Cables',
        children: [{ name: 'USB-C' }, { name: 'Lightning' }, { name: 'HDMI' }],
      },
    ],
  },
  {
    name: 'Fitness & Wearable',
    children: [
      {
        name: 'Smartwatches',
        children: [
          { name: 'Fitness Trackers' },
          { name: 'Luxury Smartwatches' },
          { name: 'Kids Smartwatches' },
        ],
      },
      {
        name: 'Fitness Tech',
        children: [
          { name: 'Heart Rate Monitors' },
          { name: 'GPS Watches' },
          { name: 'Fitness Bands' },
        ],
      },
      {
        name: 'Smart Glasses',
        children: [{ name: 'AR Glasses' }, { name: 'Camera Glasses' }],
      },
    ],
  },
  {
    name: 'Peripherals',
    children: [
      {
        name: 'Keyboards',
        children: [
          { name: 'Mechanical' },
          { name: 'Wireless' },
          { name: 'Gaming Keyboards' },
        ],
      },
      {
        name: 'Mice',
        children: [
          { name: 'Gaming Mice' },
          { name: 'Ergonomic' },
          { name: 'Trackballs' },
        ],
      },
      {
        name: 'Monitors',
        children: [
          { name: 'Gaming Monitors' },
          { name: 'Ultrawide' },
          { name: '4K Monitors' },
        ],
      },
    ],
  },
  {
    name: 'Cover & Glass',
    children: [
      {
        name: 'Phone Protection',
        children: [
          { name: 'iPhone Cases' },
          { name: 'Samsung Cases' },
          { name: 'Screen Protectors' },
        ],
      },
      {
        name: 'Tablet Protection',
        children: [
          { name: 'iPad Covers' },
          { name: 'Android Tablet Covers' },
          { name: 'Tempered Glass' },
        ],
      },
      {
        name: 'Laptop Protection',
        children: [
          { name: 'Sleeves' },
          { name: 'Hard Cases' },
          { name: 'Keyboard Covers' },
        ],
      },
    ],
  },
  {
    name: 'Smart Electronics',
    children: [
      {
        name: 'Smart Home',
        children: [
          { name: 'Smart Speakers' },
          { name: 'Security Cameras' },
          { name: 'Smart Locks' },
        ],
      },
      {
        name: 'Smart Lighting',
        children: [
          { name: 'Smart Bulbs' },
          { name: 'LED Strips' },
          { name: 'Lighting Controllers' },
        ],
      },
      {
        name: 'IoT Devices',
        children: [
          { name: 'Sensors' },
          { name: 'Smart Plugs' },
          { name: 'Hubs' },
        ],
      },
    ],
  },
  {
    name: 'Used Device',
    children: [
      {
        name: 'Refurbished Phones',
        children: [
          { name: 'Apple' },
          { name: 'Samsung' },
          { name: 'Google Pixel' },
        ],
      },
      {
        name: 'Pre-owned Laptops',
        children: [
          { name: 'Business Laptops' },
          { name: 'Gaming Laptops' },
          { name: 'Ultrabooks' },
        ],
      },
      {
        name: 'Used Accessories',
        children: [
          { name: 'Headphones' },
          { name: 'Smartwatches' },
          { name: 'Chargers' },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    // No children for blog
  },
]

export default categories
