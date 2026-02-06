'use client';

import { useState } from 'react';
import css from './AuthNavigation.module.css';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

export default function AuthNavigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false);

  const openModal = (type: string) => {
    setIsModalOpen(true);
    if (type === 'login') {
      setIsLogin(true);
    } else if (type === 'registration') {
      setIsRegistration(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLogin(false);
    setIsRegistration(false);
  };

  return (
    <>
      <ul className={css.authList}>
        <li className={css.authItem}>
          <button className={css.authLogin} onClick={() => openModal('login')}>
            {/* <svg className={css.authLoginIcon} width="" height="">
            <use href=""></use>
          </svg> */}
            Log in
          </button>
        </li>
        <li className={css.authItem} onClick={() => openModal('registration')}>
          <button className={css.authRegister}>Registration</button>
        </li>
      </ul>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {isLogin && <Login />}
          {isRegistration && <Registration />}
        </Modal>
      )}
    </>
  );
}
