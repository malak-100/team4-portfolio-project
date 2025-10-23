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

const malak: MemberData = {
  route: "malak",
  name: "Malak",
  lastname: "Felioune",
  photo_url: "/pfps/malak.jpg",
  role: "Software engineer",
  city: "Algiers",
  country: "Algeria",
  bio: "I am the CEO & Founder of Adam AGI, first robotic computer in the world, love deeptech and very high impact software",
  skills: ["AGI", "Cyber security", "system engineering", "large language models", "Reinforcment learning", "and a lot more that I am tired to write"],
  experiences: [
    {
      title: "student at ENSIA",
      start_date: "9/2023",
      end_date: "Present",
      type: "study",
    },
    {
      title: "Cyber security: self employment",
      start_date: "1/2024",
      end_date: "Present",
      type: "work",
    },
    {
      title: "CEO and solo founder of Adam AGI",
      start_date: "8/2025",
      end_date: "Present",
      type: "work",
    },
  ],
  projects: [
  {
    title: "Adam AGI",
    description:
      "Adam AGI is a groundbreaking artificial general intelligence system — designed to reason, learn, and interact with the world in a fully autonomous way. first general intelligence, making it one of the breakthroughs of 2026.",
    photo_url: "/pfps/AdamWithCat.jpg"
  }
],
};

export const members = [malak];
