export interface TopicItem {
  id: number
  title: string
  category?: string
  description: string
  desc?: string
  image: string
  date: string
  slug: string
  path?: string
}


export const topicItemsBySlug: Record<string, TopicItem[]> = {
  educational: [
   {
  id: 101,
  category: "EDUCATIONAL",
  slug: 'educational',
  title: "Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs",
  description: 'The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.',
  desc: `The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. With a strong focus on academic education, computer technology-related training, and self-employment initiatives, SWS has been instrumental in equipping individuals with the tools they need to break the cycle of poverty and achieve economic independence.

One of the flagship programs offered by SWS is the provision of basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally, among others. Recognizing the increasing importance of computer literacy in today's digital age, SWS has been proactive in ensuring that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, SWS is enabling participants to enhance their employability and access a wider range of job opportunities in various industries.

The computer training courses provided by SWS go beyond just technical skills; they also aim to instill confidence and empower individuals to navigate the digital landscape with ease. Participants are given the opportunity to develop proficiency in fundamental software applications, thus enabling them to become more competitive in the job market and better equipped to pursue higher education or vocational training.`,
  image: '/images/class01.JPG',
  date: '10/6/2024',
}
,
  {
  id: 102,
  category: "EDUCATIONAL",
  slug: 'educational',
  title: 'Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs',
  description: 'The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.',
  desc: `The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. With a strong focus on academic education, computer technology-related training, and self-employment initiatives, SWS has been instrumental in equipping individuals with the tools they need to break the cycle of poverty and achieve economic independence.

One of the flagship programs offered by SWS is the provision of basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally, among others. Recognizing the increasing importance of computer literacy in today's digital age, SWS has been proactive in ensuring that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, SWS is enabling participants to enhance their employability and access a wider range of job opportunities in various industries.

The computer training courses provided by SWS go beyond just technical skills; they also aim to instill confidence and empower individuals to navigate the digital landscape with ease. Participants are given the opportunity to develop proficiency in fundamental software applications, thus enabling them to become more competitive in the job market and better equipped to pursue higher education or vocational training.`,
  image: '/images/class05.jpg',
  date: '10/3/2024',
},
    {
      id: 103,
      category: "EDUCATIONAL",
      slug: 'educational',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/gk.JPG',
      date: '9/30/2024',
    },
    
    {
      id: 104,
      category: "EDUCATIONAL",
      slug: 'educational',
      title: 'Empowering the Needy: Siddiqui Welfare Societys 15-Year Legacy of Compassion',
      description: 'For the past 15 years, the Siddiqui Welfare Society has been a beacon of hope for widowed women and the underprivileged in our community. Established with the noble aim of providing free ration groceries to those in need, the NGO has been tirelessly working towards its goal of ensuring that no one in our society goes to bed hungry.',
      image: '/images/gk02.jpg',
      date: '9/29/2024',
    },
    {
      id: 105,
      category: "EDUCATIONAL",
      slug: 'educational',
      title: 'Siddiqui Welfare Society’s Global Foundation Steps Us for Blood Shortages with Donation Camps',
      description: 'The precious resource for survival that ‘blood’ is often goes overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector.',
      image: '/images/10th.JPG',
      date: '9/30/2024',
    },
     {
    id: 106,
    category: "EDUCATIONAL",
    slug: 'educational',
    title: "Lifeline to Recovery: How Siddiqui Welfare Society's Global Foundation Provides Medical Financial Assistance for the Poor?",
    description: "Over the past few years, India has witnessed a significant increase in lifestyle diseases like heart disease, diabetes and cancer.",
    image: "/images/freeassis02.jpeg",
    date: "9/23/2024"
  },
  ],
  medical: [
   {
      id: 201,
      category: "MEDICAL",
      slug: 'medical',
      title: 'Providing Hope and Health: The Impact of Free Dialysis Program by Siddiqui Welfare Society',
      description: 'Siddiqui Welfare Society has been instrumental in addressing the healthcare needs of underprivileged communities, particularly individuals suffering from kidney diseases. Through its commendable initiative of providing free dialysis, the organization has significantly enhanced the accessibility of life-saving treatment for those who are unable to afford it.',
      image: '/images/di-01.JPG',
      date: '10/6/2024',
    },
    {
      id: 202,
      category: "MEDICAL",
      slug: 'medical',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/ambulance01.JPG',
      date: '9/30/2024',
     
    },
    {
      id: 103,
      category: "MEDICAL",
      slug: 'medical',
      title: 'Siddiqui Welfare Society Distributes Medicine to Poor People',
      description: 'Aurangabad, India - The Siddiqui Welfare Society, a non-profit organization dedicated to improving the lives of underprivileged communities, has recently distributed essential medicines to hundreds of poor people in the city. The initiative aims to provide much-needed healthcare to those who cannot afford medical treatment.',
      image: '/images/dental01.JPG',
      date: '9/29/2024',
    },
    {
      id: 104,
      category: "MEDICAL",
      slug: 'medical',
      title: 'Empowering the Needy: Siddiqui Welfare Societys 15-Year Legacy of Compassion',
      description: 'For the past 15 years, the Siddiqui Welfare Society has been a beacon of hope for widowed women and the underprivileged in our community. Established with the noble aim of providing free ration groceries to those in need, the NGO has been tirelessly working towards its goal of ensuring that no one in our society goes to bed hungry.',
      image: '/images/blood02.jpeg',
      date: '9/29/2024',
    },
  ],

 
 
  'food-meals': [
      {
      id: 301,
      category: "Food & Meals",
      slug: 'food-meals',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/200cart01.jpeg',
      date: '9/30/2024',
    },
    {
      id: 302,
      category: "Food & Meals",
      slug: 'food-meals',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/200cart07.JPG',
      date: '10/25/2022',
    },
   {
      id: 303,
      category: "Food & Meals",
      slug: 'food-meals',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/foodnew.jpg',
      date: '10/25/202',
    },
     {
      id: 304,
      category: "",
      slug: 'educational',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/food03.jpeg',
      date: '10/25/202',
    },
  ],
  'self-employment': [
    {
      id: 401,
      category: "Self-Employment",
      slug: 'self-employment',
      title: 'Empowering Communities: The Role of Our NGO in Creating Positive Change',
      description: 'Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.',
      image: '/images/women02.jpg',
      date: '9/30/2024',
    },
    {
      id      : 402,
      category: "Self-Employment",
      slug: 'self-employment',
      title: 'Your post title',
      description: 'A short description of your blog post.',
      image: '/images/auto01.jpg',
      date: '10/25/2022',
    },                      
  ]
}