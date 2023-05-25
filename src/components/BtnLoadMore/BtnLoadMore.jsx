import PropTypes from "prop-types";

import { BtnLoad } from "./BtnLoadMore.styled";

export const BtnLoadMore = ({ onChange }) => {
  return (
    <BtnLoad type="button" onClick={onChange}>
      Load more
    </BtnLoad>
  );
};

BtnLoadMore.propTypes = {
  onChange: PropTypes.func.isRequired,
};
