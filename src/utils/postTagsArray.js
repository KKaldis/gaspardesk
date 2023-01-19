export const postTagsArray = (arr) => {
  return arr.attributes.tags.data.reduce(
    (accuPostTags, currPostTags) => [
      ...accuPostTags,
      currPostTags.attributes.name,
    ],
    []
  );
};
