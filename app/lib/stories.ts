export interface Story {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  topStory: boolean;
}

export const stories: Story[] = [
  {
    id: 1,
    category: "Education",
    title: "Empowering Communities Through Computer Training",
    description: "Making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
    image: "/images/top01.png",
    date: "2024-10-08",
    topStory: true,
  },
  {
    id: 2,
    category: "Medical",
    title: "Global Foundation Steps Up for Blood Shortages",
    description: "India experiences alarming scarcity of this life-saving drop, throwing recurring challenges for the healthcare sector.",
    image: "/images/top02.png",
    date: "2024-09-23",
    topStory: true,
  },
  {
    id: 3,
    category: "Community",
    title: "Providing Hope with Free Dialysis Program",
    description: "Our commendable initiative of providing quality dialysis treatment has enhanced the accessibility for those who are unable to afford it.",
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
