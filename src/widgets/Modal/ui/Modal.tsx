import cls from './Modal.module.scss'
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import data from 'shared/assets/data.json';
import {findUser} from "entities/User/findUser";
import {setUser} from "app/redux/user/userAction";
import {useDispatch} from "react-redux";

interface ModalProps {
    active?: boolean;
    setActiveModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = (props: ModalProps) => {
    const {
        active,
        setActiveModal
    } = props;

    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password.length < 8) {
            setErrorMessage("Пароль должен содержать минимум 8 символов");
        } else {
            setErrorMessage("");
            const user = findUser(data, login, password)
            if (user) {
                setLogin("")
                setPassword("")
                setActiveModal(false)
                dispatch(setUser(user));
                localStorage.setItem("user", JSON.stringify(user))
                navigate('/userPage')
            } else {
                setErrorMessage("Неверный логин или пароль");
            }
        }
    }
    return (
        <div
            className={active ? `${cls.modalActive}` : `${cls.modal}`}
            onClick={() => setActiveModal(false)}
        >
                <div
                    className={cls.modalContent}
                    onClick={e => e.stopPropagation()}
                >
                    <form onSubmit={handleSubmit}>
                        <div className={cls.formGroup}>
                            <label htmlFor="login">Логин:</label>
                            <input
                                type="text"
                                id="login"
                                value={login}
                                onChange={handleLoginChange}
                            />
                        </div>
                        <div className={cls.formGroup}>
                            <label htmlFor="password">Пароль:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                        {errorMessage && <p className={cls.error}>{errorMessage}</p>}
                        <Button theme={ThemeButton.CLEAR_SMALL} type="submit">Войти</Button>
                    </form>
                </div>
            </div>
    );
};