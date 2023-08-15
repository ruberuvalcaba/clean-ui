import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

interface StyledButtonProps {
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const ButtonComponent = primary ? ButtonPrimary : ButtonSecondary
  return (
    <ButtonComponent backgroundColor={backgroundColor} {...props} size={size}>
      {label}
    </ButtonComponent>
  )
}

export default Button

const StyledButton = styled.button<StyledButtonProps>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: 0;
  border-radius: ${(p) => p.theme.borderRadius.default};
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: ${(p) => p.theme.buttonStyles.size[p.size].fontSize};
  padding: ${(p) => p.theme.buttonStyles.size[p.size].padding};
`

const ButtonPrimary = styled(StyledButton)`
  color: ${(p) => p.theme.colors.cream};
  background-color: ${(p) => p.theme.colors[p.backgroundColor] || p.theme.colors.orange};
`

const ButtonSecondary = styled(StyledButton)`
  color: ${(p) => p.theme.colors.cream};
  background-color: ${(p) => p.theme.colors[p.backgroundColor] || p.theme.colors.pink};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`
