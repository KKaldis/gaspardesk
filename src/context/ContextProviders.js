import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const Context = createContext();
const UpdateContext = createContext();

export const useGetContext = () => useContext(Context);
export const useUpdateContext = () => useContext(UpdateContext);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    selectedTag: "All Articles",
    posts: null,
    tags: ["All Articles"],
    mainTags: [],
    moreTags: [],
    filteredPosts: null,
  });

  return (
    <Context.Provider value={state}>
      <UpdateContext.Provider value={dispatch}>
        {children}
      </UpdateContext.Provider>
    </Context.Provider>
  );
};

export default ContextProvider;
