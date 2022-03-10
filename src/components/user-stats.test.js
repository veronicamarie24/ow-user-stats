import { shallow } from "enzyme";
import UserStats from "./UserStats";

describe("rendering components", () => {
  it("renders UserStats component", () => {
    shallow(<UserStats />);
  });
});
