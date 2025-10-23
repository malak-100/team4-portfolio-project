import Home from "./components/Home";
import Member from "./components/Member";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { members } from "./interfaces/member";

function App() {
  return (
    <>
      {/* 
        This is the key change. 
        The `basename` prop tells React Router that your app is served from a subdirectory.
        In local development, `import.meta.env.BASE_URL` will be '/',
        and in the build for GitHub pages, it will be '/team4-portfolio-project/'.
      */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {members.map((member) => (
              <Route
                key={member.route} // It's a good practice to add a unique key prop here
                path={`/${member.route}`}
                element={<Member member={member} />}
              />
            ))}
            {/* //Only add an entry for you at /interfaces/member.ts */}
            {/* //Add your photos in the corresponding folder at /public */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
