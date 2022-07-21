import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', children, handleFunc }) => {
  return (
    <StyledButton type={type} onClick={handleFunc}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleFunc: PropTypes.func,
};
