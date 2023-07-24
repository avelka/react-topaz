import { render } from "@testing-library/react";
import Splitter from "./Splitter";

describe("Splitter", () => {
  it("should render successfully", () => {
    render(
      <Splitter>
        <div>primary pane</div>
        <div>secondary pane</div>
      </Splitter>
    );
  });
});
