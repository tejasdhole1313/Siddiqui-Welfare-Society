// Centralized data module combining events, stories, latest, and topic items

// Shared Story interface (desc optional so it covers both latest and stories arrays)
export interface Story {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  topStory: boolean;
  desc?: string;
}

// Stories
export const stories: Story[] = [
  {
    id: 1,
    category: "Education",
    title: "Empowering Communities Through Computer Training",
    description:
      "Making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
    image: "/images/student02.JPG",
    date: "2024-10-08",
    desc:
      "The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. With a strong focus on academic education, computer technology-related training, and self-employmen initiatives, SWS has been instrumental in equipping individuals with the tools they need to break the cycle of poverty and achieve economic independence.\n\nOne of the flagship programs offered by SWS is the provision of basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally, among others. Recognizing the increasing importance of computer literacy in today's digital age, SWS has been proactive in ensuring that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, SWS is enabling participants to enhance their employability and access a wider range of job opportunities in various industries.\n\nThe computer training courses provided by SWS go beyond just technical skills; they also aim to instill confidence and empower individuals to navigate the digital landscape with ease. Participants are given the opportunity to develop proficiency in fundamental software applications, thus enabling them to become more competitive in the job market and better equipped to pursue higher education or vocational training.",
    topStory: true,
  },
  {
    id: 2,
    category: "Medical",
    title: "Global Foundation Steps Up for Blood Shortages",
    description:
      "India experiences alarming scarcity of this life-saving drop, throwing recurring challenges for the healthcare sector.",
    desc:
      "The precious resource for survival that ‘blood’ is often overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector. Reports say that someone in every 2 seconds in India needs blood for recovery. In fact, its demand reaches an estimated 14.6 million units annually. To address this pressing issue, Aurangabad’s Siddique Welfare Society’s Global Foundation arranges frequent blood donation camps to maintain sufficiency in blood banks.",
    image: "/images/top02.png",
    date: "2024-09-23",
    topStory: true,
  },
  {
    id: 10,
    category: "Food & Meals",
    title: "Feeding Hope: Community Food Distribution Drive",
    description:
      "Thousands of underprivileged families benefited from our recent large-scale food and ration distribution initiative.",
    desc:
      "In response to growing food insecurity in marginalized communities, Siddiqui Welfare Society launched a major food distribution campaign aimed at providing immediate relief to families struggling to meet their daily nutritional needs.\n\nThe initiative included the distribution of essential food items such as rice, wheat flour, lentils, cooking oil, sugar, salt, and other staples. Volunteers and local partners came together to ensure the packages reached those most in need—especially daily wage workers, widows, senior citizens, and families affected by unemployment or health crises.\n\nThe campaign was organized across multiple neighborhoods, with distribution centers set up in accessible locations. Each ration kit was carefully curated to sustain a family for several days, offering both nourishment and a sense of dignity to recipients.\n\nBeyond just providing food, this campaign highlighted the spirit of solidarity and compassion within the community. It served as a reminder that no one should go hungry and that collective action can bring real change in people’s lives.\n\nThe Siddiqui Welfare Society remains committed to fighting hunger through sustainable and inclusive initiatives, and this food distribution drive is just one of many steps toward a hunger-free future.",
    image: "/images/foodnew.jpg",
    date: "2024-10-25",
    topStory: false,
  },
];

// Latest (uses the same Story interface; desc is optional)
export const latest: Story[] = [
  {
    id: 1,
    category: "Education",
    title: "Empowering Communities Through Computer Training",
    description:
      "Making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
    image: "/images/top01.png",
    date: "2024-10-08",
    topStory: true,
  },
  {
    id: 2,
    category: "Medical",
    title: "Global Foundation Steps Up for Blood Shortages",
    description:
      "India experiences alarming scarcity of this life-saving drop, throwing recurring challenges for the healthcare sector.",
    image: "/images/top02.png",
    date: "2024-09-23",
    topStory: true,
  },
  {
    id: 3,
    category: "Community",
    title: "Providing Hope with Free Dialysis Program",
    description:
      "Our commendable initiative of providing quality dialysis treatment has enhanced the accessibility for those who are unable to afford it.",
    image: "/images/.png",
    date: "2024-10-06",
    topStory: true,
  },
  {
    id: 4,
    category: "Culture",
    title: "Empowering Women: The Impact of Sewing Machine Distribution",
    description:
      "Our work focuses on supporting women, particularly widows, who often face unique challenges in becoming financially independent.",
    image: "/images/top04.png",
    date: "2024-10-06",
    topStory: true,
  },
  {
    id: 5,
    category: "Activism",
    title: "Youth Climate Activists Lead Protest",
    description:
      "Young activists gathered to demand action on climate change from local government.",
    image: "/images/top05.png",
    date: "2024-10-20",
    topStory: false,
  },
  {
    id: 6,
    category: "Community",
    title: "Neighborhood Cleanup Drive a Huge Success",
    description:
      "Volunteers from the community came together to clean up local parks and streets.",
    image: "/images/top07.png",
    date: "2024-10-15",
    topStory: false,
  },
  {
    id: 7,
    category: "Culture",
    title: "Annual Cultural Festival Celebrates Diversity",
    description:
      "The city's annual cultural festival was a vibrant celebration of music, food, and art from around the world.",
    image: "/images/top08.png",
    date: "2024-09-30",
    topStory: false,
  },
  {
    id: 8,
    category: "Education",
    title: "New Scholarship Program for Underprivileged Students",
    description:
      "A new scholarship program has been launched to help students from low-income families pursue higher education.",
    image: "/images/top01.png",
    date: "2024-10-25",
    topStory: false,
  },
  {
    id: 9,
    category: "Medical",
    title: "Free Health Check-up Camp for Seniors",
    description:
      "A free health check-up camp was organized for senior citizens, providing them with essential medical services.",
    image: "/images/top02.png",
    date: "2024-11-05",
    topStory: false,
  },
  {
    id: 10,
    category: "Activism",
    title: "Campaign for Clean Water a Success",
    description:
      "A community-led campaign for clean drinking water has resulted in the installation of new water purification systems.",
    image: "/images/top05.png",
    date: "2024-11-10",
    topStory: false,
  },
];

// Events
export const events = [
  {
     id: 1,
  title: "Free Dialysis Health Program",
  description:
    "A healthcare initiative providing free diagnostic tests including blood tests, sugar level checks, blood pressure monitoring, and other essential screenings.",
  image: "/images/di-01.JPG",
  topEvent: true,
  media: [
    { type: "image", src: "/images/dialysis02.jpg" },
    { type: "image", src: "/images/di-01.JPG" },
    { type: "video", src: "/images/dialysis-video01.mp4" },
  ],
  desc: `
  Siddiqui Welfare Society has launched Diagnostic Free Health Checkup Campaigns aimed at improving community well-being... 

  **Introduction:** Siddiqui Welfare Society has been instrumental in addressing the healthcare needs of underprivileged communities, particularly individuals suffering from kidney diseases. Through its commendable initiative of providing free dialysis, the organization has significantly enhanced the accessibility of life-saving treatment for those who are unable to afford it. One of the pivotal aspects of this program is the installation of dialysis machines in various hospitals, making this essential medical service available at no cost to those in need.

  **Addressing Healthcare Disparities:** In many parts of the world, access to dialysis treatment remains a challenge for economically disadvantaged individuals. Siddiqui Welfare Society has taken a proactive approach to bridge this gap by establishing a network of free dialysis centers. This initiative has not only saved lives but has also alleviated the financial burden on the underprivileged, offering them a chance for a healthier and more productive life.
  **Addressing Healthcare Disparities:** In many parts of the world, access to dialysis treatment remains a challenge for economically disadvantaged individuals. Siddiqui Welfare Society has taken a proactive approach to bridge this gap by establishing a network of free dialysis centers. This initiative has not only saved lives but has also alleviated the financial burden on the underprivileged, offering them a chance for a healthier and more productive life.
  **Addressing Healthcare Disparities:** In many parts of the world, access to dialysis treatment remains a challenge for economically disadvantaged individuals. Siddiqui Welfare Society has taken a proactive approach to bridge this gap by establishing a network of free dialysis centers. This initiative has not only saved lives but has also alleviated the financial burden on the underprivileged, offering them a chance for a healthier and more productive life.

  **Quality Care for All:** The provision of free dialysis services demonstrates the organization’s commitment to ensuring that individuals from all walks of life receive high-quality medical care, irrespective of their financial standing. By installing dialysis machines in various hospitals, the NGO has extended the reach of this critical treatment, thereby positively impacting the lives of countless individuals and their families.

  **Empowering Communities:** The impact of Siddiqui Welfare Society's free dialysis program extends beyond the realm of healthcare. By enabling equitable access to this vital service, the organization has empowered underprivileged communities, offering them hope and a renewed sense of well-being. The program not only saves lives but also fosters a sense of solidarity and compassion within society.
  `,
},
  {
    id: 2,
    title: "Ambulance Service",
    description:
      "A special support program for hostel students, offering emergency ambulance services...",
    image: "/images/ambulance01.JPG",
    topEvent: true,
    media: [
      { type: "image", src: "/images/ambulance001.jpeg" },
      { type: "image", src: "/images/ambulance02.jpg" },
      { type: "image", src: "/images/ambulance03.PNG" },

    ],
    desctitle1: "Introduction",
    desc: `Siddiqui Welfare Society has launched the Free Ambulance Service...`,
    desctitle2: "Addressing Healthcare Needs",
    desc2: "In emergency situations, especially in hostels...",
    desctitle3: "Quality Care for All",
    desc3: "By collaborating with professional medical transport providers...",
    desctitle4: "Community Empowerment",
    desc4: "Beyond emergency response, the initiative fosters awareness...",
    desctitle5: "Promoting Preventive Healthcare",
    desc5: "While the service primarily addresses emergency needs...",
  },
  {
    id: 3,
    title: "Free Food Distribution Program",
    description:
      "Providing nutritious meals to underprivileged communities...",
    image: "/images/Acitivity03.JPG",
    media: [
      { type: "image", src: "/images/food03.jpeg" },
      { type: "video", src: "/images/foodvideo.mp4" },
      { type: "image", src: "/images/FOOD.jpeg" },
      { type: "image", src: "/images/foodnew.jpg" },
    ],
    desctitle1: "Introduction",
    desc: `Siddiqui Welfare Society has launched the Food Distribution Program...`,
    desctitle2: "Addressing Basic Needs:",
    desc2: "Food insecurity remains a critical issue...",
    desctitle3: "Equity and Dignity in Access",
    desc3: "The program is designed to serve all in need without discrimination...",
    desctitle4: "Community Engagement",
    desc4: "By involving local volunteers...",
    desctitle5: "Promoting Long-Term Solutions",
    desc5: "While the immediate focus is on providing food...",
  },
  {
    id: 4,
    title: "Education & Skill Empowerment Program",
    description:
      "Free educational sessions and skill development classes...",
    image: "/images/class01.JPG",
    media: [
      { type: "image", src: "/images/class01.JPG" },
      { type: "video", src: "/images/classvideo.mp4" },
      { type: "image", src: "/images/class033.jpeg" },
      { type: "image", src: "/images/class05.jpg" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society has initiated the Education & Skill Empowerment Program...`,
    desctitle2: "Bridging Educational Gaps:",
    desc2: "Many students, especially from marginalized backgrounds...",
    desctitle3: "Skill Development for the Future",
    desc3: "In addition to academic learning, the program focuses on life skills...",
    desctitle4: "Inclusive & Accessible Learning",
    desc4: "The sessions are designed to be inclusive...",
    desctitle5: "Community and Career Impact",
    desc5: "By investing in education and skills...",
  },
  {
    id: 5,
    title: "Free Assistance Programme for Students",
    description:
      "Helping financially struggling students by offering partial or full support...",
    image: "/images/fessad01.JPG",
    media: [
      { type: "image", src: "/images/fessad01.JPG" },
      { type: "image", src: "/images/freeassis02.jpeg" },
      { type: "image", src: "/images/freeassis03.jpeg" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society has introduced the College Fee Support Program...`,
    desctitle2: "Breaking Financial Barriers:",
    desc2: "Higher education is often out of reach...",
    desctitle3: "Fostering Equal Opportunities",
    desc3: "By supporting students from diverse backgrounds...",
    desctitle4: "Long-Term Impact",
    desc4: "Access to college education increases a student’s chances...",
    desctitle5: "A Step Toward Empowerment",
    desc5: "The College Fee Support Program reflects...",
  },
  {
    id: 6,
    title: "200 Carts Distribution Program",
    description:
      "Supporting small vendors and self-employed individuals...",
    image: "/images/200cartlogo.jpeg",
    media: [
      { type: "image", src: "/images/car01.PNG" },
      { type: "image", src: "/images/200cart01.jpeg" },
      { type: "image", src: "/images/200cart03.jpeg" },
      { type: "image", src: "/images/200cart04.jpeg" },
      { type: "image", src: "/images/200cart06.JPG" },
      { type: "image", src: "/images/200cart07.JPG" },
      { type: "image", src: "/images/200cart08.JPG" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society has initiated the Carts Distribution Program...`,
    desctitle2: "Encouraging Livelihood Creation:",
    desc2: "Many individuals with strong work ethics lack the basic tools...",
    desctitle3: "Supporting Marginalized Communities",
    desc3: "This program particularly benefits daily wage earners...",
    desctitle4: "Promoting Self-Reliance",
    desc4: "With a focus on entrepreneurship...",
    desctitle5: "Sustainable Economic Impact",
    desc5: "By enabling micro-businesses...",
  },
  {
    id: 7,
    title: "10th Inter School General Knowledge Competition",
    description:
      "An exciting competition designed to enhance students' knowledge...",
    image: "/images/10th.JPG",
    media: [
      { type: "image", src: "/images/10th.JPG" },
      { type: "image", src: "/images/gk.JPG" },
      { type: "image", src: "/images/gk02.jpg" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society proudly presents the 10th edition...`,
    desctitle2: "Fostering Academic Excellence:",
    desc2: "This competition aims to cultivate a love for learning...",
    desctitle3: "Building Confidence and Teamwork",
    desc3: "Participants compete in teams...",
    desctitle4: "Inspiring Healthy Competition",
    desc4: "With schools from different regions participating...",
    desctitle5: "Celebrating Knowledge and Growth",
    desc5: "The event concludes with awards and recognition...",
  },
  {
    id: 8,
    title: "Blood Donation Program",
    description:
      "A noble initiative dedicated to saving lives...",
    image: "/images/blood02.jpeg",
    media: [
      { type: "image", src: "/images/blood01.jpg" },
      { type: "image", src: "/images/blood02.jpeg" },
      { type: "image", src: "/images/blood03.jpg" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society is organizing a Blood Donation Camp...`,
    desctitle2: "Saving Lives Together",
    desc2: "Every drop of blood can make a difference...",
    desctitle3: "Health and Awareness",
    desc3: "Donors not only contribute to society...",
    desctitle4: "Encouraging Social Responsibility",
    desc4: "The event fosters a spirit of responsibility...",
    desctitle5: "Celebrating Humanity",
    desc5: "The camp concludes with acknowledgment...",
  },
  {
    id: 9,
    title: "Women Self-Empowerment Program",
    description:
      "A dedicated program aimed at empowering women...",
    image: "/images/women02.jpg",
    media: [
      { type: "image", src: "/images/women04.jpg" },
      { type: "image", src: "/images/women033.JPG" },
      { type: "image", src: "/images/women01.jpg" },
      { type: "image", src: "/images/women02.jpg" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society proudly organizes the Women Self-Empowerment Program...`,
    desctitle2: "Encouraging Independence",
    desc2: "The program emphasizes self-reliance...",
    desctitle3: "Building Confidence and Leadership",
    desc3: "Workshops, discussions, and interactive sessions...",
    desctitle4: "Creating Awareness",
    desc4: "The event also addresses important topics...",
    desctitle5: "Celebrating Empowerment",
    desc5: "The program concludes by recognizing the efforts...",
  },
  {
    id: 10,
    title: "Charitable Clinic and Dental Service",
    description:
      "A healthcare initiative providing free medical consultations...",
    image: "/images/dental02.jpg",
    media: [
      { type: "image", src: "/images/dental01.jpg" },
      { type: "image", src: "/images/dental02.jpg" },
    ],
    desctitle1: "Introduction",
    desc: `The Siddiqui Welfare Society organizes a Charitable Clinic...`,
    desctitle2: "Accessible Healthcare",
    desc2: "The clinic offers free general check-ups...",
    desctitle3: "Promoting Dental Hygiene",
    desc3: "The program emphasizes oral hygiene awareness...",
    desctitle4: "Community Support",
    desc4: "By addressing health concerns of marginalized communities...",
    desctitle5: "A Step Toward Healthier Lives",
    desc5: "The event concludes by encouraging regular health check-ups...",
  },
];

// Topic Items
export interface TopicItem {
  id: number;
  title: string;
  category?: string;
  description: string;
  desc?: string;
  image: string;
  date: string;
  slug: string;
  path?: string;
}

export const topicItemsBySlug: Record<string, TopicItem[]> = {
  educational: [
    {
      id: 101,
      category: "EDUCATIONAL",
      slug: "educational",
      title:
        "Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs",
      description:
        "The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
      desc: `The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. With a strong focus on academic education, computer technology-related training, and self-employment initiatives, SWS has been instrumental in equipping individuals with the tools they need to break the cycle of poverty and achieve economic independence.

One of the flagship programs offered by SWS is the provision of basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally, among others. Recognizing the increasing importance of computer literacy in today's digital age, SWS has been proactive in ensuring that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, SWS is enabling participants to enhance their employability and access a wider range of job opportunities in various industries.

The computer training courses provided by SWS go beyond just technical skills; they also aim to instill confidence and empower individuals to navigate the digital landscape with ease. Participants are given the opportunity to develop proficiency in fundamental software applications, thus enabling them to become more competitive in the job market and better equipped to pursue higher education or vocational training.`,
      image: "/images/class01.JPG",
      date: "10/6/2024",
    },
    {
      id: 102,
      category: "EDUCATIONAL",
      slug: "educational",
      title:
        "Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs",
      description:
        "The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
      desc: `The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. With a strong focus on academic education, computer technology-related training, and self-employment initiatives, SWS has been instrumental in equipping individuals with the tools they need to break the cycle of poverty and achieve economic independence.

One of the flagship programs offered by SWS is the provision of basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally, among others. Recognizing the increasing importance of computer literacy in today's digital age, SWS has been proactive in ensuring that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, SWS is enabling participants to enhance their employability and access a wider range of job opportunities in various industries.

The computer training courses provided by SWS go beyond just technical skills; they also aim to instill confidence and empower individuals to navigate the digital landscape with ease. Participants are given the opportunity to develop proficiency in fundamental software applications, thus enabling them to become more competitive in the job market and better equipped to pursue higher education or vocational training.`,
      image: "/images/class05.jpg",
      date: "10/3/2024",
    },
    {
      id: 103,
      category: "EDUCATIONAL",
      slug: "educational",
      title:
        "Empowering Communities: The Role of Our NGO in Creating Positive Change",
      description:
        "Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.",
      image: "/images/gk.JPG",
      date: "9/30/2024",
    },
    {
      id: 104,
      category: "EDUCATIONAL",
      slug: "educational",
      title:
        "Empowering the Needy: Siddiqui Welfare Societys 15-Year Legacy of Compassion",
      description:
        "For the past 15 years, the Siddiqui Welfare Society has been a beacon of hope for widowed women and the underprivileged in our community. Established with the noble aim of providing free ration groceries to those in need, the NGO has been tirelessly working towards its goal of ensuring that no one in our society goes to bed hungry.",
      image: "/images/gk02.jpg",
      date: "9/29/2024",
    },
    {
      id: 105,
      category: "EDUCATIONAL",
      slug: "educational",
      title:
        "Siddiqui Welfare Society’s Global Foundation Steps Us for Blood Shortages with Donation Camps",
      description:
        "The precious resource for survival that ‘blood’ is often goes overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector.",
      image: "/images/10th.JPG",
      date: "9/30/2024",
    },
    {
      id: 106,
      category: "EDUCATIONAL",
      slug: "educational",
      title:
        "Lifeline to Recovery: How Siddiqui Welfare Society's Global Foundation Provides Medical Financial Assistance for the Poor?",
      description:
        "Over the past few years, India has witnessed a significant increase in lifestyle diseases like heart disease, diabetes and cancer.",
      image: "/images/freeassis02.jpeg",
      date: "9/23/2024",
    },
  ],
  medical: [
    {
      id: 201,
      category: "MEDICAL",
      slug: "medical",
      title:
        "Providing Hope and Health: The Impact of Free Dialysis Program by Siddiqui Welfare Society",
      description:
        "Siddiqui Welfare Society has been instrumental in addressing the healthcare needs of underprivileged communities, particularly individuals suffering from kidney diseases. Through its commendable initiative of providing free dialysis, the organization has significantly enhanced the accessibility of life-saving treatment for those who are unable to afford it.",
      image: "/images/di-01.JPG",
      date: "10/6/2024",
    },
    {
      id: 202,
      category: "MEDICAL",
      slug: "medical",
      title: "Empowering Communities: The Role of Our NGO in Creating Positive Change",
      description:
        "Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.",
      image: "/images/ambulance01.JPG",
      date: "9/30/2024",
    },
    {
      id: 103,
      category: "MEDICAL",
      slug: "medical",
      title: "Siddiqui Welfare Society Distributes Medicine to Poor People",
      description:
        "Aurangabad, India - The Siddiqui Welfare Society, a non-profit organization dedicated to improving the lives of underprivileged communities, has recently distributed essential medicines to hundreds of poor people in the city. The initiative aims to provide much-needed healthcare to those who cannot afford medical treatment.",
      image: "/images/dental01.JPG",
      date: "9/29/2024",
    },
    {
      id: 104,
      category: "MEDICAL",
      slug: "medical",
      title:
        "Empowering the Needy: Siddiqui Welfare Societys 15-Year Legacy of Compassion",
      description:
        "For the past 15 years, the Siddiqui Welfare Society has been a beacon of hope for widowed women and the underprivileged in our community. Established with the noble aim of providing free ration groceries to those in need, the NGO has been tirelessly working towards its goal of ensuring that no one in our society goes to bed hungry.",
      image: "/images/blood02.jpeg",
      date: "9/29/2024",
    },
  ],
  "food-meals": [
    {
      id: 301,
      category: "Food & Meals",
      slug: "food-meals",
      title: "Empowering Communities: The Role of Our NGO in Creating Positive Change",
      description:
        "Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.",
      image: "/images/200cart01.jpeg",
      date: "9/30/2024",
    },
    {
      id: 302,
      category: "Food & Meals",
      slug: "food-meals",
      title: "Your post title",
      description: "A short description of your blog post.",
      image: "/images/200cart07.JPG",
      date: "10/25/2022",
    },
    {
      id: 303,
      category: "Food & Meals",
      slug: "food-meals",
      title: "Your post title",
      description: "A short description of your blog post.",
      image: "/images/foodnew.jpg",
      date: "10/25/202",
    },
    {
      id: 304,
      category: "",
      slug: "educational",
      title: "Your post title",
      description: "A short description of your blog post.",
      image: "/images/food03.jpeg",
      date: "10/25/202",
    },
  ],
  "self-employment": [
    {
      id: 401,
      category: "Self-Employment",
      slug: "self-employment",
      title: "Empowering Communities: The Role of Our NGO in Creating Positive Change",
      description:
        "Education is a powerful tool that can break the cycle of poverty and empower individuals to build a better future for themselves and their communities. Our NGO believes in the transformative power of education and works to provide access to quality education for children and adults in underserved communities. Through our educational programs, we aim to equip individuals with the knowledge and skills they need to succeed in life.",
      image: "/images/women02.jpg",
      date: "9/30/2024",
    },
    {
      id: 402,
      category: "Self-Employment",
      slug: "self-employment",
      title: "Your post title",
      description: "A short description of your blog post.",
      image: "/images/auto01.jpg",
      date: "10/25/2022",
    },
  ],
};