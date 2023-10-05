

const moreItems = ['More Category 1', 'More Category 2', 'More Category 3', 'More Category 4', 'More Category 5'];

const subItems1 = [
    { id: 1, title: 'Collection 1', moreItems: moreItems.map(item => item + " (Collection 1)") },
    { id: 2, title: 'Collection 2', moreItems: moreItems.map(item => item + " (Collection 2)") },
    { id: 3, title: 'Collection 3', moreItems: moreItems.map(item => item + " (Collection 3)") },
    { id: 4, title: 'Collection 4', moreItems: moreItems.map(item => item + " (Collection 4)") },
    { id: 5, title: 'Collection 5', moreItems: moreItems.map(item => item + " (Collection 5)") }
]

const subItems2 = [
    { id: 1, title: 'Art', moreItems: moreItems.map(item => item + " (Art)") },
    { id: 2, title: 'Collectibles', moreItems: moreItems.map(item => item + " (Collectibles)") },
    { id: 3, title: 'Domain Names', moreItems: moreItems.map(item => item + " (Domain Names)") },
    { id: 4, title: 'Photography', moreItems: moreItems.map(item => item + " (Photography)") },
    { id: 5, title: 'Sports', moreItems: moreItems.map(item => item + " (Sports)") },
    { id: 6, title: 'Trading Cards', moreItems: moreItems.map(item => item + " (Trading Cards)") },
    { id: 7, title: 'Utility', moreItems: moreItems.map(item => item + " (Utility)") },
    { id: 8, title: 'Virtual Worlds', moreItems: moreItems.map(item => item + " (Virtual Worlds)") },
]

const subItems3 = [
    { id: 1, title: 'Chain 1', moreItems: moreItems.map(item => item + " (Chain 1)") },
    { id: 2, title: 'Chain 2', moreItems: moreItems.map(item => item + " (Chain 2)") },
    { id: 3, title: 'Chain 3', moreItems: moreItems.map(item => item + " (Chain 3)") },
    { id: 4, title: 'Chain 4', moreItems: moreItems.map(item => item + " (Chain 4)") },
    { id: 5, title: 'Chain 5', moreItems: moreItems.map(item => item + " (Chain 5)") }
]

const subItems4 = [
    { id: 1, title: 'Price 1', moreItems: moreItems.map(item => item + " (Price 1)") },
    { id: 2, title: 'Price 2', moreItems: moreItems.map(item => item + " (Price 2)") },
    { id: 3, title: 'Price 3', moreItems: moreItems.map(item => item + " (Price 3)") },
    { id: 4, title: 'Price 4', moreItems: moreItems.map(item => item + " (Price 4)") },
    { id: 5, title: 'Price 5', moreItems: moreItems.map(item => item + " (Price 5)") }
]

const subItems5 = [
    { id: 1, title: 'Currency 1', moreItems: moreItems.map(item => item + " (Currency 1)") },
    { id: 2, title: 'Currency 2', moreItems: moreItems.map(item => item + " (Currency 2)") },
    { id: 3, title: 'Currency 3', moreItems: moreItems.map(item => item + " (Currency 3)") },
    { id: 4, title: 'Currency 4', moreItems: moreItems.map(item => item + " (Currency 4)") },
    { id: 5, title: 'Currency 5', moreItems: moreItems.map(item => item + " (Currency 5)") }
]

export const data = [
    { id: 1, title: 'Collections', subItems: subItems1 },
    { id: 2, title: 'Categories', subItems: subItems2 },
    { id: 3, title: 'Chains', subItems: subItems3 },
    { id: 4, title: 'Price', subItems: subItems4 },
    { id: 5, title: 'Currencies', subItems: subItems5 }
]