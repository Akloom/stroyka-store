import styles from "./List.module.scss";
import { TaskCart } from "./Task/Task";
export const ListCart = ({ tasks, remove }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.map((item) => {
        return (
       <TaskCart key={item.id} name={item.name} remove={() => remove(item.id)}/>
        )
      })}
    </ul>
  );
};
