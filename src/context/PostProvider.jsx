import { useReducer, createContext } from "react";

const PostContext = createContext([]);

const PostProvider = ({ children }) => {
  const initialState = {
    posts: [],
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "create":
        return {
          posts: (state.posts = [
            ...state.posts,
            {
              content: Math.random(),
            },
          ]),
        };
      case "shuffle":
        return {
          posts: shuffle(state.posts),
        };
      case "reset":
        return {
          posts: [],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PostContext.Provider value={[state, dispatch]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };
export default PostContext;
