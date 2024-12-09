import { render } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import RootPage from "../app/page";

describe("RootPage Component", () => {
  it("should match the snapshot", () => {
    const { container } = render(<RootPage />);
    expect(container).toMatchSnapshot();
  });
});
