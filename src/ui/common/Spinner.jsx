import { ClipLoader } from "react-spinners";
import Flex from "../layout/Flex";

function Spinner() {
  return (
    <Flex className="min-h-screen bg-gray-100">
      <ClipLoader size={50} speedMultiplier={1} />
    </Flex>
  );
}

export default Spinner;
