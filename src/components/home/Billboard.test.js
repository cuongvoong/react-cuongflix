import React from "react";
import { shallow } from "enzyme";
import Billboard from "./Billboard";
import BillboardRow from "./BillboardRow";

const createTestProps = () => ({
  billboardMovie: {
    title: "Solo: A Star Wars Story",
    backdrop_path: "/96B1qMN9RxrAFu6uikwFhQ6N6J9.jpg",
    overview:
      "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian."
  }
});

describe("<Billboard />", () => {
  it("should render <BillboardRow />", () => {
    const wrapper = shallow(<Billboard {...createTestProps()} />);
    expect(wrapper.find(BillboardRow)).toHaveLength(1);
  });
});
