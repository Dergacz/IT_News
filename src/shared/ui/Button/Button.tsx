import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import styles from './Button.module.scss';

export enum ButtonVariant {
    Primary = 'primary',
    Secondary = 'secondary',
    Clear = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant: ButtonVariant;
    children: ReactNode;
}

export const Button = ({
    variant,
    children,
    className,
    ...otherProps
 }: ButtonProps) => {
    return (
        <button
            className={classNames(styles.Button, {}, [styles[variant], className])}
            {...otherProps}
            
        >
            {children}
        </button>
    )
}
