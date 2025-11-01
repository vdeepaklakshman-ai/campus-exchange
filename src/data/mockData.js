export const categories = [
{ id: '1', name: 'Books', icon: 'book' },
{ id: '2', name: 'Electronics', icon: 'laptop' },
{ id: '3', name: 'Cycles', icon: 'bike' },
{ id: '4', name: 'Furniture', icon: 'armchair' },
{ id: '5', name: 'Stationery', icon: 'pen-tool' },
{ id: '6', name: 'Sports', icon: 'dribbble' },
{ id: '7', name: 'Fashion', icon: 'shirt' },
{ id: '8', name: 'Other', icon: 'package' }
]

export const items = [
{
id: '1',
title: 'Data Structures Textbook',
description: 'Complete textbook for CS fundamentals course. Excellent condition with minimal highlighting.',
price: 450,
category: 'Books',
sellerId: '2',
sellerName: 'Sarah Johnson',
sellerClass: 'CS - B',
images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'],
status: 'available',
condition: 'Like New',
postedDate: '2024-01-15',
views: 45,
verified: true
},
{
id: '2',
title: 'HP Laptop i5 8th Gen',
description: '8GB RAM, 256GB SSD, good battery backup. Perfect for coding and daily tasks.',
price: 25000,
category: 'Electronics',
sellerId: '3',
sellerName: 'Mike Chen',
sellerClass: 'IT - A',
images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'],
status: 'available',
condition: 'Good',
postedDate: '2024-01-14',
views: 120,
verified: true
},
{
id: '3',
title: 'Mountain Bike - Firefox',
description: 'Single speed, 26 inch, well maintained. Great for campus commute.',
price: 3500,
category: 'Cycles',
sellerId: '4',
sellerName: 'Priya Sharma',
sellerClass: 'ECE - C',
images: ['https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400'],
status: 'available',
condition: 'Good',
postedDate: '2024-01-13',
views: 78,
verified: true
},
{
id: '4',
title: 'Study Table with Chair',
description: 'Wooden study table with comfortable chair. Perfect for hostel room.',
price: 2000,
category: 'Furniture',
sellerId: '5',
sellerName: 'Rahul Verma',
sellerClass: 'ME - B',
images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400'],
status: 'sold',
condition: 'Fair',
postedDate: '2024-01-10',
views: 92,
verified: true
},
{
id: '5',
title: 'Scientific Calculator Casio',
description: 'fx-991ES Plus model. All functions working perfectly.',
price: 800,
category: 'Stationery',
sellerId: '6',
sellerName: 'Anjali Patel',
sellerClass: 'CS - A',
images: ['https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400'],
status: 'available',
condition: 'Like New',
postedDate: '2024-01-12',
views: 34,
verified: true
},
{
id: '6',
title: 'Cricket Kit Complete Set',
description: 'Bat, pads, gloves, helmet - everything included. Lightly used.',
price: 4500,
category: 'Sports',
sellerId: '7',
sellerName: 'Arjun Singh',
sellerClass: 'EE - B',
images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400'],
status: 'available',
condition: 'Good',
postedDate: '2024-01-11',
views: 56,
verified: false
}
]

export const users = [
{
id: '1',
name: 'John Doe',
email: 'john.doe@college.edu',
class: 'Computer Science',
section: 'B',
verified: true,
rating: 4.8,
totalSales: 12,
joinedDate: '2023-08-15'
},
{
id: '2',
name: 'Sarah Johnson',
email: 'sarah.j@college.edu',
class: 'Computer Science',
section: 'B',
verified: true,
rating: 4.9,
totalSales: 8,
joinedDate: '2023-09-01'
},
{
id: '3',
name: 'Mike Chen',
email: 'mike.chen@college.edu',
class: 'Information Technology',
section: 'A',
verified: true,
rating: 4.7,
totalSales: 15,
joinedDate: '2023-07-20'
}
]

export const messages = [
{
id: '1',
senderId: '2',
receiverId: '1',
content: 'Hi! Is the Data Structures book still available?',
timestamp: '2024-01-15T10:30:00Z',
read: true
},
{
id: '2',
senderId: '1',
receiverId: '2',
content: 'Yes, it is! Would you like to see it?',
timestamp: '2024-01-15T10:35:00Z',
read: true
},
{
id: '3',
senderId: '2',
receiverId: '1',
content: 'Sure! Can we meet at the library tomorrow?',
timestamp: '2024-01-15T10:40:00Z',
read: false
}
]

export const transactions = [
{
id: '1',
buyerId: '1',
sellerId: '5',
itemId: '4',
itemTitle: 'Study Table with Chair',
amount: 2000,
paymentMode: 'cash',
status: 'completed',
date: '2024-01-10T14:00:00Z'
},
{
id: '2',
buyerId: '3',
sellerId: '1',
itemId: '1',
itemTitle: 'Data Structures Textbook',
amount: 450,
paymentMode: 'online',
status: 'pending',
date: '2024-01-15T11:00:00Z'
}
]