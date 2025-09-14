import Header from "./Header";
import SideBar from "./SideBar";
import ProfileContent from "./ProfileContent";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Body: Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar on the left */}
        <SideBar />

        {/* Profile content in the center */}
        <div className="flex-1 flex justify-center items-start p-6">
          <ProfileContent />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;