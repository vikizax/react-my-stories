import { atom } from "recoil";
import { StoryModel } from "../../model/story.model";

export const StoryIntialState: StoryModel = {
  stories: [],
};
const storyAtom = atom<StoryModel>({
  key: "storyAtom",
  default: StoryIntialState,
});

export default storyAtom;
