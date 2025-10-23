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


//create one like this for yourself
const youcef: MemberData = {
  route: "youcef",
  name: "Youcef",
  lastname: "Belaib",
  photo_url: "/pfps/youcefpfp.JPG",
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
  projects: [],
};
const hind: MemberData = {
  route: "hind",
  name: "Hind",
  lastname: "Bennabi",
  photo_url: "/pfps/pfp_hind.jpg",
  role: "AI Student ",
  city: "Algiers",
  country: "Algeria",
  bio: "I am an enthusiastic AI student, passionate about learning and building projects",
  skills: ["c++","python","html","css","php","figma","javascript"],
  experiences: [],
  projects: null,
};

export const members = [youcef, hind];
