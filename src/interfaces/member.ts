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

const islam: MemberData = {
  route: "islam",
  name: "islam",
  lastname: "Benali",
  photo_url: "/pfps/islam.jpg",
  role: "Software Engineer and Motion Designer",
  city: "Algiers",
  country: "Algeria",
  bio: "Curious and detail-oriented software engineer merging logic and artistry — from RISC-V to motion graphics.",
  skills: [
    "RISC-V Assembly",
    "C/C++",
    "Qt",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
   
    "TypeScript",
    "React",
    "Flutter",
    "Python",
    "Machine Learning",
    "Data Science",
    "After Effects",
    "Motion Design",
    "Git",
    
   
    
    
    
  ],
  experiences: [
    {
      title: "AI and Data Science Student",
      start_date: "2024",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Software Engineering Student",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Motion Graphics Learner — Adobe After Effects",
      start_date: "6/2025",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Independent Developer and Designer",
      start_date: "2024",
      end_date: "Present",
      type: "work",
    },
  ],
  projects:[ {
      title: "AI-Based Job Matching System",
      description:
        "Developed a many-to-many AI job matching system using greedy search optimization for improved candidate-job pairing.",
      photo_url: null,
    },]
};


export const members = [youcef , islam];
