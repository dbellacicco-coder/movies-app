import { render } from "@testing-library/react";
import MovieCard from "../ui/MovieCard";
describe("Movie Card", () => {
  test("test", () => {
    render(<MovieCard title="title" />);
    expect(screen.getByText("Hola")).toBeDefined();
  });
});
