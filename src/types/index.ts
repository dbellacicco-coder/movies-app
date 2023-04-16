type JSXElement = () => JSX.Element;

export interface Route {
  id: number;
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

export interface UserInfoI {
  userEmail: string;
  userPassword: string;
  guest_session_id: string;
}

export interface MovieI {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface RatingMovieArgs {
  id: number;
}
