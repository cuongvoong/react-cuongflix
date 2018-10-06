import React from "react";
import { shallow, mount, render } from "enzyme";
import TrailerModal from "./TrailerModal";
import YouTube from "react-youtube";

const createTestProps = () => ({
  youTubePlayerRef: React.createRef(),
  onCloseTrailerModal: () => {},
  onFetchMovieTrailer: () => {},
  billboardMovie: {},
  showTrailerModal: false
});

describe("<TrailerModal />", () => {
  it("should not render <YouTube /> when props.trailer is null>", () => {
    const wrapper = mount(
      <TrailerModal {...createTestProps()} trailer={null} />
    );
    expect(wrapper.find(YouTube)).toHaveLength(0);
  });

  it("should render <YouTube /> if not fetching", () => {
    const wrapper = mount(<TrailerModal {...createTestProps()} />);

    const billboardMovie = {
      title: "Solo: A Star Wars Story",
      backdrop_path: "/96B1qMN9RxrAFu6uikwFhQ6N6J9.jpg",
      overview:
        "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
      videos: {
        results: [
          {
            id: "5ac7d2f30e0a264977030b92",
            iso_639_1: "en",
            iso_3166_1: "US",
            key: "UL29y0ah92w",
            name: "Official Trailer",
            site: "YouTube",
            size: 1080,
            type: "Trailer"
          }
        ]
      }
    };

    wrapper.setProps({
      billboardMovie: billboardMovie
    });
    wrapper.update();

    expect(wrapper.find(YouTube)).toHaveLength(1);
  });

  it("should not render <YouTube /> if fetching", () => {
    const wrapper = mount(
      <TrailerModal {...createTestProps()} isFetching={true} />
    );
    expect(wrapper.find(YouTube)).toHaveLength(0);
  });
});
