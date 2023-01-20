import ACTIONS from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_SELECTED_TAG:
      const moreTagsSelectedIndex = state.moreTags.indexOf(action.payload);
      var mainTagsVar = state.tags.slice(0, 2);
      var moreTagsVar = state.tags.slice(2);

      return {
        ...state,
        selectedTag: action.payload,
        filteredPosts: filterPosts(state.posts, action.payload),
        mainTags:
          moreTagsSelectedIndex !== -1
            ? ["All Articles", ...mainTagsVar, action.payload]
            : ["All Articles", ...mainTagsVar],
        moreTags:
          moreTagsSelectedIndex !== -1
            ? moreTagsVar.filter((tag) => tag !== action.payload)
            : moreTagsVar,
      };

    case ACTIONS.SET_TAGS:
      return {
        ...state,
        tags: action.payload.map((tag) => tag.attributes.name),
        mainTags: ["All Articles", ...mainTags(action.payload)],
        moreTags: moreTags(action.payload),
      };

    case ACTIONS.SET_FETCHED_POSTS:
      return {
        ...state,
        posts: action.payload.data,
        ...action.payload.meta,
        filteredPosts: filterPosts(action.payload.data, state.selectedTag),
      };

    default:
      return state;
  }
};
const mainTags = (state) => state.map((tag) => tag.attributes.name).slice(0, 2);
const moreTags = (state) => state.map((tag) => tag.attributes.name).slice(2);
const filterPosts = (state, selectedTag) =>
  state.filter((post) =>
    selectedTag === "All Articles"
      ? state
      : postTagsArray(post).includes(selectedTag)
  );

const postTagsArray = (arr) => {
  return arr.attributes.tags.data.reduce(
    (accuPostTags, currPostTags) => [
      ...accuPostTags,
      currPostTags.attributes.name,
    ],
    []
  );
};

export default reducer;
