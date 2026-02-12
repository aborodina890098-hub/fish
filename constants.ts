
import { MenuItem, Review, GalleryImage } from './types';

export const RESTAURANT_INFO = {
  name: 'Blue Harbor Seafood',
  address: '12 Nile Corniche, Maadi, Cairo, Egypt',
  phone: '+20 100 000 0000',
  email: 'info@blueharbor-eg.com',
  whatsapp: '201000000000',
  hours: [
    { day: 'Monday - Thursday', time: '1:00 PM - 11:00 PM' },
    { day: 'Friday - Saturday', time: '1:00 PM - 12:00 AM' },
    { day: 'Sunday', time: '1:00 PM - 11:00 PM' }
  ]
};

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Sea Bass',
    description: 'Fresh Mediterranean sea bass grilled with lemon, herbs, and cold-pressed olive oil.',
    price: 'EGP 420',
    category: 'Main',
    image: 'https://picsum.photos/seed/fish1/600/400'
  },
  {
    id: '2',
    name: 'Fried Calamari',
    description: 'Crispy golden calamari rings served with our signature zesty tartar sauce.',
    price: 'EGP 180',
    category: 'Appetizer',
    image: 'https://picsum.photos/seed/calamari/600/400'
  },
  {
    id: '3',
    name: 'Shrimp Tagine',
    description: 'Sizzling clay pot with jumbo shrimp, peppers, and spicy tomato reduction.',
    price: 'EGP 360',
    category: 'Specialty',
    image: 'https://picsum.photos/seed/shrimp/600/400'
  },
  {
    id: '4',
    name: 'Seafood Pasta',
    description: 'Linguine tossed with mussels, clams, and shrimp in a light garlic white wine sauce.',
    price: 'EGP 290',
    category: 'Pasta',
    image: 'https://picsum.photos/seed/pasta/600/400'
  },
  {
    id: '5',
    name: 'Fisherman’s Soup',
    description: 'Creamy seafood bisque loaded with chunks of fish, crab, and squid.',
    price: 'EGP 150',
    category: 'Soup',
    image: 'https://picsum.photos/seed/soup/600/400'
  },
  {
    id: '6',
    name: 'Mixed Seafood Platter',
    description: 'The ultimate feast: grilled lobster, shrimp, calamari, and seasonal fish.',
    price: 'EGP 950',
    category: 'Platter',
    image: 'https://picsum.photos/seed/platter/600/400'
  }
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Ahmed Hassan', rating: 5, comment: 'The freshest fish I have had in Cairo. The atmosphere by the Nile is unbeatable.', date: '2 weeks ago' },
  { id: '2', name: 'Sara Mohamed', rating: 5, comment: 'Excellent service and the Shrimp Tagine is a must-try. Very authentic Mediterranean taste.', date: '1 month ago' },
  { id: '3', name: 'John Doe', rating: 4, comment: 'Great place for family dinners. The staff is very friendly and hygienic standards are top-notch.', date: '3 weeks ago' },
  { id: '4', name: 'Mona Aly', rating: 5, comment: 'Perfect seasoning on the sea bass. Will definitely be coming back for the seafood pasta.', date: '2 days ago' },
  { id: '5', name: 'Khaled Omar', rating: 5, comment: 'A bit pricey but worth every pound. The view and the quality of seafood are world-class.', date: '1 week ago' },
  { id: '6', name: 'Laila I.', rating: 4, comment: 'Delivery was fast and the food arrived piping hot. Highly recommend for home orders.', date: '5 days ago' }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'g1', url: 'https://picsum.photos/seed/rest1/800/600', alt: 'Restaurant Interior', caption: 'Elegant dining area' },
  { id: 'g2', url: 'https://picsum.photos/seed/rest2/800/600', alt: 'Chef cooking', caption: 'Chef preparing the daily catch' },
  { id: 'g3', url: 'https://picsum.photos/seed/rest3/800/600', alt: 'Seafood display', caption: 'Our fresh daily selection' },
  { id: 'g4', url: 'https://picsum.photos/seed/rest4/800/600', alt: 'Outdoor seating', caption: 'Stunning Nile views' },
  { id: 'g5', url: 'https://picsum.photos/seed/rest5/800/600', alt: 'Cocktail bar', caption: 'Refreshing beverages' },
  { id: 'g6', url: 'https://picsum.photos/seed/rest6/800/600', alt: 'Plating', caption: 'Artistic culinary presentation' }
];
