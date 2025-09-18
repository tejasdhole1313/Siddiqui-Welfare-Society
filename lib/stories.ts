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
  "id": 1,
  "category": "Education",
  "title": "Empowering Communities Through Computer Training",
  "description": "Making significant strides in empowering underprivileged communities through a range of educational and skill development programs.",
  "image": "/images/student02.JPG",
  "date": "2024-10-08",
  "desc": "The Siddiqui Welfare Society (SWS) has been making significant strides in empowering underprivileged communities through a range of educational and skill development programs. With a strong focus on academic education, computer technology-related training, and self-employment initiatives, SWS has been instrumental in equipping individuals with the tools they need to break the cycle of poverty and achieve economic independence.\n\nOne of the flagship programs offered by SWS is the provision of basic computer training in areas such as desktop publishing (DTP), Microsoft Office, and Tally, among others. Recognizing the increasing importance of computer literacy in today's digital age, SWS has been proactive in ensuring that individuals from marginalized backgrounds are not left behind. By imparting these essential skills, SWS is enabling participants to enhance their employability and access a wider range of job opportunities in various industries.\n\nThe computer training courses provided by SWS go beyond just technical skills; they also aim to instill confidence and empower individuals to navigate the digital landscape with ease. Participants are given the opportunity to develop proficiency in fundamental software applications, thus enabling them to become more competitive in the job market and better equipped to pursue higher education or vocational training.",
  "topStory": true
},
  {
   id: 2,
  category: "Medical",
  title: "Global Foundation Steps Up for Blood Shortages",
  description: "India experiences alarming scarcity of this life-saving drop, throwing recurring challenges for the healthcare sector.",
  desc: `The precious resource for survival that ‘blood’ is often overlooked until it’s desperately required. Unfortunately, India experiences alarming scarcity of this life-saving drop, thus, throwing recurring challenges for the healthcare sector. Reports say that someone in every 2 seconds in India needs blood for recovery. In fact, its demand reaches an estimated 14.6 million units annually. To address this pressing issue, Aurangabad’s Siddique Welfare Society’s Global Foundation arranges frequent blood donation camps to maintain sufficiency in blood banks.`,
  image: "/images/top02.png",
  date: "2024-09-23",
  topStory: true,
},


   {
  id: 10,
  category: "Food & Meals",
  title: "Feeding Hope: Community Food Distribution Drive",
  description: "Thousands of underprivileged families benefited from our recent large-scale food and ration distribution initiative.",
  desc: `In response to growing food insecurity in marginalized communities, Siddiqui Welfare Society launched a major food distribution campaign aimed at providing immediate relief to families struggling to meet their daily nutritional needs.

The initiative included the distribution of essential food items such as rice, wheat flour, lentils, cooking oil, sugar, salt, and other staples. Volunteers and local partners came together to ensure the packages reached those most in need—especially daily wage workers, widows, senior citizens, and families affected by unemployment or health crises.

The campaign was organized across multiple neighborhoods, with distribution centers set up in accessible locations. Each ration kit was carefully curated to sustain a family for several days, offering both nourishment and a sense of dignity to recipients.

Beyond just providing food, this campaign highlighted the spirit of solidarity and compassion within the community. It served as a reminder that no one should go hungry and that collective action can bring real change in people’s lives.

The Siddiqui Welfare Society remains committed to fighting hunger through sustainable and inclusive initiatives, and this food distribution drive is just one of many steps toward a hunger-free future.`,
  image: "/images/foodnew.jpg",
  date: "2024-10-25",
  topStory: false
}

];
