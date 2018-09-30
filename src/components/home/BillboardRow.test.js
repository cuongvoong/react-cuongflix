import React from "react";
import { shallow } from "enzyme";
import BillboardRow from "./BillboardRow";
import BackDrop from "./BackDrop";
import BillboardOverlay from "./BillboardOverlay";

const createTestProps = () => ({
  billboardMovie: {
    backdrop_path: "/96B1qMN9RxrAFu6uikwFhQ6N6J9.jpg"
  }
});

describe("<BillboardRow />", () => {
  it("should render <BackDrop />", () => {
    const wrapper = shallow(<BillboardRow {...createTestProps()} />);
    expect(wrapper.find(BackDrop)).toHaveLength(1);
  });

  it("should render <ViewDetailsButton />", () => {
    const wrapper = shallow(<BillboardRow {...createTestProps()} />);
    expect(wrapper.find(BillboardOverlay)).toHaveLength(1);
  });
});
