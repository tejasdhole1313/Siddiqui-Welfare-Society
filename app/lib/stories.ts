export interface Story {
  id: number;
  category: string;
  title: string;
  description: string;
  desc?: string;
  image: string;
  date: string;
  topStory: boolean;
}

export const stories: Story[] = [
  {
     id: 1,
  category: "Education",
  title: "Siddiqui Welfare Society Empowers Underprivileged Communities Through Computer Training and Educational Programs",
  description: "SWS provides basic computer training in desktop publishing (DTP), Microsoft Office, and Tally, ensuring marginalized individuals gain essential digital skills.",
  desc: `The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. Focusing on academic education, computer technology training, and self-employment initiatives, SWS equips individuals with tools to break the cycle of poverty and achieve economic independence.

One of the flagship programs offered by SWS is basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally. Recognizing the increasing importance of computer literacy in today's digital age, SWS proactively ensures that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, participants enhance their employability and access wider job opportunities across industries.

The computer training courses go beyond technical skills; they also instill confidence and empower individuals to navigate the digital landscape with ease. Participants develop proficiency in fundamental software applications, making them more competitive in the job market and better prepared for higher education or vocational training.`,
  image: "/images/top01.png",
  date: "2024-10-08",
  topStory: true,
},
  {
    id: 2,
    category: "Medical",
    title: "Siddiqui Welfare Society’s Global Foundation Steps Us for Blood Shortages with Donation Camps",
    description: "The precious resource for survival that ‘blood’ is often goes overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector.",
    desc: "The precious resource for survival that ‘blood’ is often goes overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector. Reports say that someone in every 2 seconds in India needs blood for recovery. In fact, its demand reaches an estimated 14.6 million units annually. To address this pressing issue, Aurangabad’s Siddique Welfare Society’s Global Foundation arranges frequent blood donation camps to maintain sufficiency in blood banks.",
    image: "/images/top02.png",
    date: "2024-09-23",
    topStory: true,
  },
  {
 id: 3,
  category: "Community",
  title: "Lifeline to Recovery: How Siddiqui Welfare Society’s Global Foundation Provides Medical Financial Assistance for the Poor",
  description: "India has seen a rise in lifestyle diseases like heart disease, diabetes, and cancer, increasing medical expenses for the poor.",
  desc: `Here’s a reality-check!  
Over the past few years, India has witnessed a significant increase in lifestyle diseases such as heart disease, diabetes, and cancer. Medical expenses have risen due to growing demand, technological advancements, medical developments, the COVID-19 pandemic, rising healthcare service charges, and other factors. This raises the alarming question – how can the poor afford basic or life-saving medical treatment? For many, the answer lies in Siddiqui Welfare Society’s Global Foundation, a non-profit organization providing medical financial assistance in Aurangabad.

How Does the Organisation Aid?  
The NGO acts as a beacon of hope where others hesitate. A trusted name for years, it provides a lifeline to economically weaker people facing insurmountable medical expenses. The foundation bridges the gap between the underprivileged and critical treatment by offering financial help to poor patients in India.`,
  image: "/images/top03.png",
  date: "2024-10-06",
  topStory: true,
},
  {
    id: 4,
    category: "Culture",
    title: "Empowering Women: The Impact of Sewing Machine Distribution",
    description: "Our work focuses on supporting women, particularly widows, who often face unique challenges in becoming financially independent.",
    image: "/images/top04.png",
    date: "2024-10-06",
    topStory: true,
  },
  {
    id: 5,
    category: "Activism",
    title: "Youth Climate Activists Lead Protest",
    description: "Young activists gathered to demand action on climate change from local government.",
    image: "/images/top05.png",
    date: "2024-10-20",
    topStory: false,
  },
  {
    id: 6,
    category: "Community",
    title: "Neighborhood Cleanup Drive a Huge Success",
    description: "Volunteers from the community came together to clean up local parks and streets.",
    image: "/images/top07.png",
    date: "2024-10-15",
    topStory: false,
  },
  {
    id: 7,
    category: "Culture",
    title: "Annual Cultural Festival Celebrates Diversity",
    description: "The city's annual cultural festival was a vibrant celebration of music, food, and art from around the world.",
    image: "/images/top08.png",
    date: "2024-09-30",
    topStory: false,
  },
  {
    id: 8,
    category: "Education",
    title: "New Scholarship Program for Underprivileged Students",
    description: "A new scholarship program has been launched to help students from low-income families pursue higher education.",
    image: "/images/top01.png",
    date: "2024-10-25",
    topStory: false,
  },
  {
    id: 9,
    category: "Medical",
    title: "Free Health Check-up Camp for Seniors",
    description: "A free health check-up camp was organized for senior citizens, providing them with essential medical services.",
    image: "/images/top02.png",
    date: "2024-11-05",
    topStory: false,
  },
  {
    id: 10,
    category: "Activism",
    title: "Campaign for Clean Water a Success",
    description: "A community-led campaign for clean drinking water has resulted in the installation of new water purification systems.",
    image: "/images/top05.png",
    date: "2024-11-10",
    topStory: false,
  },
];
