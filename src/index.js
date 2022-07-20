import { projects } from "./projects"
import { tasks } from "./tasks";
import { render } from "./render";
import { forms } from "./forms";

render.updateProjectsList(projects.getProjects());
render.updateTasksList(tasks.getTasks());