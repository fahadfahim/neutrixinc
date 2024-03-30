import React, { FC } from 'react';
interface ReusableButtonProps {
    text: string | any;
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    variant?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | any;
    ariaLabel?: string;
}
const Button: FC<ReusableButtonProps> = ({
    text,
    onClick,
    variant,
    disabled = false,
    type = 'button',
    ariaLabel,
}) => {
    const classes = `
    ${variant === 'info' ? 'rounded-[56px] bg-[#fff] text-[#1F2A37] py-[10px] lg:py-[18px] px-[30px] text-[16px] font-medium' :
            variant === 'faq-primary' ? 'rounded-[56px] bg-[#C81E1E] text-[#fff] py-[10px] lg:py-[18px] px-[120px] lg:px-[30px] text-[16px] font-medium my-[20px] lg:my-0' :
                variant === 'secondary' ? 'bg-[#111928] text-[#fff] rounded-[56px] px-[95px] lg:px-[30px] py-[10px] lg:py-[18px] font-medium' :
                    variant === 'primary-sm' ? 'bg-[#C81E1E] text-[#fff] rounded-[53px] py-[10px] px-[20px] text-[16px]' :
                        ''}
    ${disabled ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : ''}
  `;

    return (
        <button className={classes} onClick={onClick} disabled={disabled} type={type} aria-label={ariaLabel}>
            {text}
        </button>
    );
};

export default Button;
