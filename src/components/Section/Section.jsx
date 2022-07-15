import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Section = ({ title, children }) => {
  return (
    <Box textAlign="center" as="section">
      <h2>{title}</h2>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
