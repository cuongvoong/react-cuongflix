import React from "react";
import { shallow } from "enzyme";
import BillboardOverlay from "./BillboardOverlay";
import ViewDetailsButton from "./ViewDetailsButton";
import PlayTrailerButton from "./PlayTrailerButton";

const createTestProps = () => ({
  billboardMovie: {
    title: "Solo: A Star Wars Story",
    overview:
      "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian."
  },
  onPlayTrailerClick: () => {}
});

describe("<BillboardOverlay />", () => {
  it("should render <ViewDetailsButton />", () => {
    const wrapper = shallow(<BillboardOverlay {...createTestProps()} />);
    expect(wrapper.find(ViewDetailsButton)).toHaveLength(1);
  });

  it("should render <PlayTrailerButton />", () => {
    const wrapper = shallow(<BillboardOverlay {...createTestProps()} />);
    expect(wrapper.find(PlayTrailerButton)).toHaveLength(1);
  });
});
