import storyAtom from "../atoms/story.atom";
import { selector } from "recoil";
import { Story } from "../../model/story.model";

export const storiesSelector = selector<Story[]>({
  key: "storiesSelector",
  get: ({ get }) => {
    const story = get(storyAtom);
    return story.stories;
  },
});
