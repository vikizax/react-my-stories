import { atom } from "recoil";
import { Status } from "../../model/status.model";

export const statusInitialState: Status = {
  currentIndex: 0,
  total: 0,
  isLoading: false,
  isMounted: false,
  status: "playing",
  fps: 60,
};

const statusAtom = atom<Status>({
  key: "status",
  default: statusInitialState,
});

export default statusAtom;
