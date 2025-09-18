export const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about-us' },
    {
        title: 'Topics',
        path: '',
        subMenu: [
            { title: 'Educational', path: '/topics/educational' },
            { title: 'Medical', path: '/topics/medical' },
            { title: 'Clinic', path: '/topics/clinic' },
            { title: 'Dental', path: '/topics/dental' },       
            { title: 'ECG', path: '/topics/ecg' },
            { title: 'Food & Meals', path: '/topics/food-meals' },
             
        ]
    },
    { title: 'Donation', path: '/donation' },
    { title: 'Event', path: '/event' },
    {title: 'News', path: '/News' },
    { title: 'Contact Us', path: '/contact' }
]
