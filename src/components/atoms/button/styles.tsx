import { Button } from 'antd';
import styled from 'styled-components';
import { ButtonProps } from './Button';
import { Palette } from '../../../themes';

const baseStyle = `
    font-style: normal;
    border-radius: 4px;
    border: none;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const primaryButtonStyle = `
    background: ${Palette.primary};
    color: ${Palette.white};
    font-weight: 600;

    &:disabled {
        background: ${Palette.primaryLight};
        color: ${Palette.white};
    }
`;
const secondaryButtonStyle = `
    background: ${Palette.secondary};
    color: ${Palette.primary};
`;
const errorButtonStyle = `
    font-weight: 600;
    background: ${Palette.errorLight};
    color: ${Palette.errorDark};
`;
const textButtonStyle = `
    background: ${Palette.white};
    color: ${Palette.primary};
`;

const variances = {
    primary: primaryButtonStyle,
    secondary: secondaryButtonStyle,
    text: textButtonStyle,
    error: errorButtonStyle,
}

export const ButtonStyle = styled(Button)`
    ${baseStyle}
    ${(props: ButtonProps) => variances[props.variance || 'primary']}
`;
