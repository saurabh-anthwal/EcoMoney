import Homepage from "@/component/homepage/Homepage";
import Sidebar from "@/component/sidebar/Sidebar";

export default function Home() {
  return (
 <div className="flex min-h-screen max-h-[100vh] overflow-scroll">
    <Sidebar/>
    <Homepage/>
 </div>
  );
}
