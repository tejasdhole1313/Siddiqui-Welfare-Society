export interface TopicItem {
  id: number
  
  title: string
  // optional category label for UI grouping
  category?: string
  description: string
  image: string
  date: string
  // slug this item belongs to, e.g., "educational"
  slug: string
  // optional deep link to a detail page (can be wired later)
  path?: string
}

// Dummy data grouped by topic slug
export const topicItemsBySlug: Record<string, TopicItem[]> = {
  educational: [
    {
      id: 101,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Providing Hope and Health: The Impact of Free Dialysis Program by Siddiqui Welfare Society',
      description: 'Siddiqui Welfare Society has been instrumental in addressing the healthcare needs of underprivileged communities, particularly individuals suffering from kidney diseases. Through its commendable initiative of providing free dialysis, the organization has significantly enhanced the accessibility of life-saving treatment for those who are unable to afford it.',
      image: '/images/top12.png',
      date: '10/6/2024',
    },
    {
      id: 102,
      category: "EDUCATIONAL",
      slug: 'educational',
      title: 'Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs',
      description: 'The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.',
      image: '/images/top01.png',
      date: '10/3/2024',
    },
    {
      id: 103,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/top09.png',
      date: '9/30/2024',
    },
    {
      id: 104,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Siddiqui Welfare Society Distributes Medicine to Poor People',
      description: 'Aurangabad, India - The Siddiqui Welfare Society, a non-profit organization dedicated to improving the lives of underprivileged communities, has recently distributed essential medicines to hundreds of poor people in the city. The initiative aims to provide much-needed healthcare to those who cannot afford medical treatment.',
      image: '/images/top10.png',
      date: '9/29/2024',
    },
    {
      id: 105,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Empowering the Needy: Siddiqui Welfare Societys 15-Year Legacy of Compassion',
      description: 'For the past 15 years, the Siddiqui Welfare Society has been a beacon of hope for widowed women and the underprivileged in our community. Established with the noble aim of providing free ration groceries to those in need, the NGO has been tirelessly working towards its goal of ensuring that no one in our society goes to bed hungry.',
      image: '/images/top11.png',
      date: '9/29/2024',
    },
    {
      id: 106,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Siddiqui Welfare Society’s Global Foundation Steps Us for Blood Shortages with Donation Camps',
      description: 'The precious resource for survival that ‘blood’ is often goes overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector.',
      image: '/images/top02.png',
      date: '9/30/2024',
    },
     {
    id: 201,
    category: "MEDICAL",
    slug: 'educational',
    title: "Lifeline to Recovery: How Siddiqui Welfare Society's Global Foundation Provides Medical Financial Assistance for the Poor?",
    description: "Over the past few years, India has witnessed a significant increase in lifestyle diseases like heart disease, diabetes and cancer.",
    image: "/images/top03.png",
    date: "9/23/2024"
  },
  {
    id: 202,
    category: "EDUCATIONAL",
    slug: 'educational',
    title: "How Siddiqui Welfare Society's Global Foundation Provides Financial Assistance to the Poor for Education?",
    description: "You must have heard, “Knowledge is wisdom and power combined.” That’s true! And the foundation to this vastness of knowledge is laid down by education. Now, what if access to that wisdom is buried behind the wall of financial crisis? Well, that’s the unfortunate reality for numerous underprivileged students. To make learning accessible, Siddiqui Welfare Society's Global Foundation – a renowned NGO working for education of poor children works like the ultimate wingman.",
    image: "/images/top04.png",
    date: "8/23/2024"
  },
  ],
  medical: [
   {
      id: 101,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Providing Hope and Health: The Impact of Free Dialysis Program by Siddiqui Welfare Society',
      description: 'Siddiqui Welfare Society has been instrumental in addressing the healthcare needs of underprivileged communities, particularly individuals suffering from kidney diseases. Through its commendable initiative of providing free dialysis, the organization has significantly enhanced the accessibility of life-saving treatment for those who are unable to afford it.',
      image: '/images/top12.png',
      date: '10/6/2024',
    },
    {
      id: 103,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/top09.png',
      date: '9/30/2024',
    },
    {
      id: 104,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Siddiqui Welfare Society Distributes Medicine to Poor People',
      description: 'Aurangabad, India - The Siddiqui Welfare Society, a non-profit organization dedicated to improving the lives of underprivileged communities, has recently distributed essential medicines to hundreds of poor people in the city. The initiative aims to provide much-needed healthcare to those who cannot afford medical treatment.',
      image: '/images/top10.png',
      date: '9/29/2024',
    },
    {
      id: 105,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Empowering the Needy: Siddiqui Welfare Societys 15-Year Legacy of Compassion',
      description: 'For the past 15 years, the Siddiqui Welfare Society has been a beacon of hope for widowed women and the underprivileged in our community. Established with the noble aim of providing free ration groceries to those in need, the NGO has been tirelessly working towards its goal of ensuring that no one in our society goes to bed hungry.',
      image: '/images/top11.png',
      date: '9/29/2024',
    },
  ],
  clinic: [
    {
      id: 101,
      category: "CULTURE",
      slug: 'educational',
      title: 'Empowering Women: The Impact of Siddiqui Welfare Society’s Sewing Machine Distribution and Tailoring Classes',
      description: 'A significant aspect of our work focuses on supporting women, particularly widows, who often face unique challenges in becoming financially independent. Through our Sewing Machine Distribution program and Tailoring Classes, we are transforming lives by enabling women to achieve self-employment and financial stability.',
      image: '/images/top13.png',
      date: '10/6/2024',
    },
  {
      id: 102,
      category: "CULTURE",
      slug: 'educational',
      title: 'Siddiqui Welfare Society: Bringing Hope through Free Medical Treatment',
      description: 'In a world where access to quality healthcare remains a challenge for many, organizations like Siddiqui Welfare Society are beacons of hope. Founded with a mission to provide free medical treatment for heart surgery, angioplasty, angiography tests, and essential medicines to the underprivileged, the society has been making a significant impact in the lives of the needy in Aurangabad.',
      image: '/images/top14.png',
      date: '10/1/2024',
    },
    {
      id: 103,
      category: "CULTURE",
      slug: 'educational',
      title: 'Wheels of Change: How Siddiqui Welfare Society’s Pushcart Distribution is Changing Lives!',
      description: 'Siddique Welfare Society’s Global Foundation is a reputed non-governmental organisation committed to enhancing society’s quality of living through humanitarian efforts. With the Pushcart initiative, their purpose is to help the poor and needy with setting up small businesses, providing them with a sustainable source of income.',
      image: '/images/top15.png',
      date: '9/30/2024',
    },
  ],
  dental: [
    {
      id: 102,
      category: "EDUCATIONAL",
      slug: 'educational',
      title: 'Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs',
      description: 'The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.',
      image: '/images/top01.png',
      date: '10/3/2024',
    },
     {
      id: 103,
      category: "EDUCATIONAL",
      slug: 'educational',
      title: 'Providing Nourishment and Hope: The Compassionate Work of Siddiqui Welfare Society',
      description: 'For over 15 years, the Siddiqui Welfare Society has been a beacon of compassion and hope for those battling cancer in our community. Through their unwavering dedication, this remarkable NGO has been providing free, nutritious meals to impoverished patients in cancer hospitals, offering sustenance and support during their most challenging moments.',
      image: '/images/top16.png',
      date: '10/1/2024',
    },
  ],

 
  ecg: [
    {
      id: 101,
      category: "INNOVATION",
      slug: 'educational',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/top20.png',
      date: '10/1/2024',
    },
  
  ],
  'food-meals': [
     {
      id: 101,
      category: "COMMUNITY",
      slug: 'educational',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/top09.png',
      date: '9/30/2024',
    },
    {
      id: 102,
      category: "SPORT",
      slug: 'educational',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/top17.png',
      date: '10/25/2022',
    },
   {
      id: 103,
      category: "SPORT",
      slug: 'educational',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/top18.png',
      date: '10/25/202',
    },
     {
      id: 104,
      category: "SPORT",
      slug: 'educational',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/top19.png',
      date: '10/25/202',
    },
  ],
}