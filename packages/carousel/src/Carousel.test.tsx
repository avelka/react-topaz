import { render } from "@testing-library/react";
import Carousel from "./Carousel";

describe("Carousel", () => {
  it("should render successfully", () => {
    render(
      <Carousel>
        <div>primary pane</div>
        <div>secondary pane</div>
      </Carousel>
    );
  });
});
