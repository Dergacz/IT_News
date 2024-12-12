import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import styles from './Button.module.scss';

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    children: ReactNode;
}

export const Button = ({
    variant,
    onClick,
    children
 }: ButtonProps) => {
    return (
        <button
            className={classNames(styles.Button, {}, [styles[variant]])}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
