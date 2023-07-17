import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        <Task title="Take a shower"></Task>
        <Task title="Sleep"></Task>

        {/* //footer section */}
      </div>
      <Footer year="2023" fullName="Wayu Tharai" studentId="650610806"></Footer>
    </div>
  );
}
