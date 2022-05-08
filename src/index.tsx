import * as React from "react";
import { StoryModel } from "./model/story.model";
import Stories from "./pages/Stories/index";
import { RecoilRoot } from "recoil";
function MyStories(props: StoryModel) {
  return (
    <RecoilRoot>
      <Stories {...props} />
    </RecoilRoot>
  );
}

export default MyStories;
