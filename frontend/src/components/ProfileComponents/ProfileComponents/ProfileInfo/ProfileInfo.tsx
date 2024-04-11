import styles from "./ProfileInfo.module.scss";
import cn from "clsx";

const ProfileInfo = () => {
  return (
    <div className={cn(styles.profile, "container")}>
      <h1 className={styles.profile__title}>Личный кабинет</h1>
      <div className={styles.profile__content}>
        <h2 className={styles.profile__contentTitle}>Личная информация</h2>
        <div className={styles.profile__info}>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>Имя</span>
            <input
              type="text"
              className={styles.profile__input}
              placeholder="Богдан"
            />
          </label>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>Фамилия</span>
            <input
              type="text"
              className={styles.profile__input}
              placeholder="Пупкин"
            />
          </label>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>Дата рождения</span>
            <input
              type="number"
              className={styles.profile__input}
              placeholder="24.05.1989"
            />
          </label>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>Телефон</span>
            <input
              type="number"
              className={styles.profile__input}
              placeholder="+7 (359) 90-38-98"
            />
          </label>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>E-mail</span>
            <input
              type="email"
              className={styles.profile__input}
              placeholder="youmail@mail.com"
            />
          </label>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>Пароль</span>
            <input type="password" className={styles.profile__input} />
          </label>
          <label className={styles.profile__infoItem}>
            <span className={styles.profile__infoText}>Подтвердить пароль</span>
            <input type="password" className={styles.profile__input} />
          </label>
        </div>
        <button className={styles.profile__button}>Сохранить</button>
      </div>
    </div>
  );
};

export default ProfileInfo;
