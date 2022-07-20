import { projects } from "./projects"
import { tasks } from "./tasks";
import { forms } from "./forms";
import { render } from "./render";

projects.addProject("Home", "blue");
projects.addProject("Work", "orange");
render.updateProjectsList(projects.getProjects());
tasks.addTask(("Buy milk", "", "August 10", "Normal"));
render.updateTasksList(tasks.getTasks());