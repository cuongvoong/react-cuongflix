import React from "react";
import { shallow } from "enzyme";
import BillboardRow from "./BillboardRow";
import ViewDetailsButton from "./ViewDetailsButton";
import PlayTrailerButton from "./PlayTrailerButton";
import BackDrop from "./BackDrop";

const createTestProps = () => ({
  billboardMovie: {
    title: "Solo: A Star Wars Story",
    backdrop_path: "/96B1qMN9RxrAFu6uikwFhQ6N6J9.jpg",
    overview:
      "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian."
  }
});

describe("<BillboardRow />", () => {
  it("should render <BackDrop />", () => {
    const wrapper = shallow(<BillboardRow {...createTestProps()} />);
    expect(wrapper.find(BackDrop)).toHaveLength(1);
  });

  it("should render <ViewDetailsButton />", () => {
    const wrapper = shallow(<BillboardRow {...createTestProps()} />);
    expect(wrapper.find(ViewDetailsButton)).toHaveLength(1);
  });

  it("should render <PlayTrailerButton />", () => {
    const wrapper = shallow(<BillboardRow {...createTestProps()} />);
    expect(wrapper.find(PlayTrailerButton)).toHaveLength(1);
  });
});
