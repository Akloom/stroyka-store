"use client";
import Modal from "@/shared/Modal/Modal";
import styles from "./AuthModal.module.scss";
import cn from "clsx";
import { useState } from "react";
import Backdrop from "@/shared/Backdrop/Backdrop";
import Link from "next/link";

const AuthModal = () => {
  // const [loginModal, setLoginModal] = useState(true);

  // const closeModal = () => {
  //   setLoginModal(false);
  // };

  // const [registrationModal, setRegistrationModal] = useState(true);

  // const closeModal = () => {
  //   setRegistrationModal(false);
  // };

  return (
    <>
      {/* <Backdrop isVisible={loginModal} close={closeModal} />
      <div className={cn(styles.login, loginModal && styles.show)}>
        <div className={styles.login__body}>
          <h1 className={styles.login__title}>Вход</h1>
          <div className={styles.login__form}>
            <label className={styles.login__formItem}>
              <span className={styles.login__formText}>E-mail</span>
              <input
                type="email"
                className={styles.login__input}
                placeholder="youmail@mail.com"
              />
            </label>
            <label className={styles.login__formItem}>
              <span className={styles.login__formText}>Пароль</span>
              <input
                type="password"
                className={styles.login__input}
                placeholder="********"
              />
            </label>
            <Link href={"#"} className={styles.login__link}>
              Забыли пароль?
            </Link>
          </div>
          <div className={styles.login__buttons}>
            <button className={styles.login__btn}>Войти</button>
            <button className={styles.login__btn}>
              Создать учетную запись
            </button>
          </div>
        </div>
      </div> */}

      {/* <Backdrop isVisible={registrationModal} close={closeModal} />
      <div className="registration">
        <div
          className={cn(styles.registration, registrationModal && styles.show)}
        >
          <div className={styles.registration__body}>
            <h1 className={styles.registration__title}>Регистрация</h1>
            <div className={styles.registration__form}>
              <label className={styles.registration__formItem}>
                <span className={styles.registration__formText}>Имя</span>
                <input
                  type="text"
                  className={styles.registration__input}
                  placeholder="Богдан"
                />
              </label>
              <label className={styles.registration__formItem}>
                <span className={styles.registration__formText}>E-mail</span>
                <input
                  type="email"
                  className={styles.registration__input}
                  placeholder="youmail@mail.com"
                />
              </label>
              <label className={styles.registration__formItem}>
                <span className={styles.registration__formText}>Пароль</span>
                <input
                  type="password"
                  className={styles.registration__input}
                  placeholder="********"
                />
              </label>
              <label className={styles.registration__formItem}>
                <span className={styles.registration__formText}>
                  Подтверждение пароля
                </span>
                <input
                  type="password"
                  className={styles.registration__input}
                  placeholder="********"
                />
              </label>
            </div>
            <button className={styles.registration__btn}>
              Зарегистрироваться
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AuthModal;
