import { shallow } from "enzyme";
import App from "./App";
import Typography from "@mui/material/Typography";

describe("rendering components", () => {
  it("renders App", () => {
    shallow(<App />);
  });

  it("renders page title", () => {
    const wrapper = shallow(<App />);
    const title = (
      <Typography variant="h2" component="div" gutterBottom>
        Overwatch User Stats
      </Typography>
    );
    expect(wrapper.contains(title).toEqual(true));
  });
});
