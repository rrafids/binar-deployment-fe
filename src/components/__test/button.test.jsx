import { render } from "react-dom";
import Button from "../button";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Button textLabel="login" />, div);
});
