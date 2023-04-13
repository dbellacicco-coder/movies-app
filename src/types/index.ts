type JSXElement = () => JSX.Element;

export interface Route {
  id: number;
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}
