import styles from "./Task.module.scss"
export const TaskCart = ({ name, remove }) => {
    return (
      <li className="task-item">
        <span className="task-name">{name}</span>
        <button className={styles.remove} onClick={remove}>Удалить товар</button>
      </li>
    );
  };