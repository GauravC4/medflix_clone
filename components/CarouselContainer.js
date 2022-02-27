import { StyleSheet, View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useRef, useState } from "react";

import CarouselCard, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCard";

export default function CarouselContainer({ data }) {
  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View style={{ justifyContent: "center" }}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        loop={true}
        autoplay={true}
        enableMomentum={false}
        autoplayDelay={1000}
        autoplayInterval={2000}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 10,
          marginHorizontal: 0,
          backgroundColor: "#59647a",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
