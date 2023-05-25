import { InfinitySpin } from "react-loader-spinner";
import { ButtonLoad } from "./Loader.styled";
const Loader = () => {
  return (
    <ButtonLoad type="button">
      <InfinitySpin width="200" color="#471ca9" />
    </ButtonLoad>
  );
};
export default Loader;
