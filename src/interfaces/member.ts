export interface Experience {
  title: string;
  start_date: string;
  end_date: string;
  type: "study" | "work";
}

export interface Project {
  title: string;
  description: string;
  photo_url: string | null;
}

export interface MemberData {
  route: string;
  name: string;
  lastname: string;
  photo_url: string | null;
  role: string;
  city: string;
  country: string;
  bio: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[] | null;
}

const youcef: MemberData = {
  route: "youcef",
  name: "Youcef",
  lastname: "Belaib",
  photo_url: "/pfps/Male.png",
  role: "Team Leader and Software Engineer",
  city: "Algiers",
  country: "Algeria",
  bio: "I am a passionate software engineer who loves his team",
  skills: ["React", "Javascript", "Flutter", "Machine Learning", "TypeScript"],
  experiences: [
    {
      title: "Ai/Data Science student at ENSIA",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Co-Manager of External Relations at M4T club",
      start_date: "12/2024",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Co-Manager of Finance and Legal at EBEC club",
      start_date: "9/2025",
      end_date: "Present",
      type: "work",
    },
  ],
  projects: null,
};
const oumaima: MemberData = {
  route: "oumaima",
  name: "Oumaima",
  lastname: "Boucekkine",
  photo_url: "./pfps/oumaima.png",
  role: "Frontend Developer & Creative Designer",
  city: "Annaba",
  country: "Algeria",
  bio: "I am a dedicated and creative frontend developer passionate about crafting elegant, user-centered web experiences. With a strong focus on clean code, design precision, and modern technologies, I aim to bridge functionality with beauty in every project I create.",
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git & GitHub",
    "UI/UX Design",
  ],
  experiences: [
    {
      title: "Vice president at EBEC Club (ENSIA Business & Entrepreneurship Club)",
      start_date: "09/2025",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Web Developer Intern at NeuronCowork",
      start_date: "10/2025",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Full Stack Developer Intern at Code Alpha",
      start_date: "8/2025",
      end_date: "9/2025",
      type: "work",
    },
    {
      title: "Event Manager at EBEC Club (ENSIA Business & Entrepreneurship Club)",
      start_date: "12/2024",
      end_date: "Present",
      type: "work",
    },
    {
      title: "Computer Science Student at ENSIA",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
  ],
  projects: [
   
    {
      title: "Fresto – Restaurant Management System",
      description:
        "Built the frontend for a management system that allows restaurants to handle menus, staff, and customer orders seamlessly.",
      photo_url: "public/pfps/oumaima_project1.png",
    },
    {
    title: "House Price Prediction using Machine Learning",
    description:
      "Developed a machine learning model to predict house prices based on key features such as location, area, number of rooms, and overall property description. Implemented data preprocessing, feature engineering, and model evaluation using Python and scikit-learn.",
    photo_url: "public/pfps/oumaima_project2.png",
  },
  ],
};

// Export both members as an array
export const members: MemberData[] = [youcef, oumaima];

// Or export them individually
export { youcef, oumaima };