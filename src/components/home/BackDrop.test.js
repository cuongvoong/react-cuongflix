import React from "react";
import { shallow } from "enzyme";
import BackDrop from "./BackDrop";

const createTestProps = () => ({
  backdrop_path: "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg"
});

describe("<BackDrop />", () => {
  it("should render a backdrop img", () => {
    const wrapper = shallow(<BackDrop {...createTestProps()} />);
    expect(wrapper.find("img").prop("src")).toEqual(
      "https://image.tmdb.org/t/p/w1280/6P3c80EOm7BodndGBUAJHHsHKrp.jpg"
    );
  });
});
