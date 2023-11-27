import { useEffect, useState } from "react";
import { Task } from "../../types/Task";
import CategorySelector from "../CategorySelector/CategorySelector";
import TaskCategory from "../TaskCategory/TaskCategory";
import { TaskService } from "../../services/TaskService";

const Category = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); //Estado para la categoria seleccionada
  
  useEffect(() => {
    const fetchTasks =async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);
  
 //Filtra las tareas por la categoria seleccionada
 const filteredTasks = selectedCategory
 ? tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
 : tasks;

  return (
    <div className="container mt-5">
      <CategorySelector onSelectedCategory={setSelectedCategory}/> {/* Pasa la función para manejar la selección de categoría */}
      <TaskCategory tasks={filteredTasks} /> {/* Pasa las tareas filtradas al componente */}

    </div>
  )
}

export default Category