import React, { createContext, useState, useContext } from "react";

const TagsContext = createContext();
const TagsUpdateContext = createContext();

export const useSelectedTag = () => useContext(TagsContext);
export const useSetSelectedTag = () => useContext(TagsUpdateContext);

const TagsProvider = ({ children }) => {
  const [selectedTag, setSelectedTag] = useState("All Articles");
  return (
    <TagsContext.Provider value={selectedTag}>
      <TagsUpdateContext.Provider value={setSelectedTag}>
        {children}
      </TagsUpdateContext.Provider>
    </TagsContext.Provider>
  );
};

export default TagsProvider;
