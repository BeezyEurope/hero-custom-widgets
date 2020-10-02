/* eslint-disable no-console */
import { useCallback, useEffect, useReducer, useRef } from "react";
import SocialEnum from "../SocialEnum";
import api from "../../../services/Api";

export type UseSocialPosts = {
  text: string;
  createdAt: string;
  user: string;
  link: string;
};

export interface UseSocial {
  posts: UseSocialPosts[];
  loading: boolean;
  useSelectedType: (type: SocialEnum) => void;
  error: boolean;
}

export interface UseSocialParams {
  user: string;
}

type useSocialState = {
  posts: UseSocialPosts[];
  loading: boolean;
  error: boolean;
  type: SocialEnum;
};

const initialState: useSocialState = {
  posts: [],
  loading: false,
  error: false,
  type: SocialEnum.TWITTER,
};

enum SocialActionTypes {
  RETRIEVE_POSTS = "RETRIEVE_POSTS",
  RETRIEVE_POSTS_FAIL = "RETRIEVE_POSTS_FAIL",
  RETRIEVE_POSTS_SUCCESS = "RETRIEVE_POSTS_SUCCESS",
}

const useSocialReducer: (
  state: useSocialState,
  action: any
) => {
  loading: boolean;
  error: boolean;
  type: SocialEnum;
  posts: UseSocialPosts[];
} = (state: useSocialState, action: any) => {
  switch (action.type) {
    case SocialActionTypes.RETRIEVE_POSTS:
      return { ...state, loading: true, error: false };
    case SocialActionTypes.RETRIEVE_POSTS_FAIL:
      return { ...state, loading: false, error: true, posts: [] };
    case SocialActionTypes.RETRIEVE_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload.posts,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

function useSocial({ user }: UseSocialParams): UseSocial {
  const [state, dispatch] = useReducer(useSocialReducer, initialState);

  const type = useRef<SocialEnum>(SocialEnum.TWITTER);

  const retrieveTweets = useCallback(async (): Promise<any> => {
    if (!user) {
      return dispatch({ type: SocialActionTypes.RETRIEVE_POSTS_FAIL });
    }
    try {
      const result = await api({ resource: `tweets/${user}` });

      type.current === SocialEnum.TWITTER &&
        dispatch({
          type: SocialActionTypes.RETRIEVE_POSTS_SUCCESS,
          payload: { posts: result, type: SocialEnum.TWITTER },
        });
    } catch (e) {
      console.error(e);
      dispatch({ type: SocialActionTypes.RETRIEVE_POSTS_FAIL });
    }
    return null;
  }, [user, dispatch]);

  const retrieveFBPosts = useCallback(async () => {
    try {
      const data = await api({ resource: "facebook" });

      type.current === SocialEnum.FACEBOOK &&
        dispatch({
          type: SocialActionTypes.RETRIEVE_POSTS_SUCCESS,
          payload: {
            posts: data,
            type: SocialEnum.FACEBOOK,
          },
        });
    } catch (e) {
      dispatch({ type: SocialActionTypes.RETRIEVE_POSTS_FAIL });
    }
  }, []);

  const retrieveLinkedinPosts = useCallback(async () => {
    try {
      const data = await api({ resource: "linkedin" });

      type.current === SocialEnum.LINKEDIN &&
        dispatch({
          type: SocialActionTypes.RETRIEVE_POSTS_SUCCESS,
          payload: {
            posts: data,
            type: SocialEnum.LINKEDIN,
          },
        });
    } catch (e) {
      dispatch({ type: SocialActionTypes.RETRIEVE_POSTS_FAIL });
    }
  }, []);

  const useSelectedType = useCallback(
    (socialType: SocialEnum) => {
      dispatch({ type: SocialActionTypes.RETRIEVE_POSTS });

      socialType === SocialEnum.TWITTER && retrieveTweets();

      socialType === SocialEnum.FACEBOOK && retrieveFBPosts();

      socialType === SocialEnum.LINKEDIN && retrieveLinkedinPosts();

      type.current = socialType;
    },
    [dispatch, retrieveTweets, retrieveFBPosts, retrieveLinkedinPosts]
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSelectedType(SocialEnum.TWITTER);
  }, [useSelectedType]);

  return {
    posts: state.posts,
    loading: state.loading,
    useSelectedType,
    error: state.error,
  };
}

export default useSocial;
