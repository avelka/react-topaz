import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "@react-topaz/carousel";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const cards = new Array(20).fill(0);
export const Default: Story = () => (
  <div style={{ width: "90vw", height: "90vh" }}>
    <Carousel
      onDelete={(i: number) => console.log("delete", i)}
      onChange={(i: number) => console.log("changed", i)}
    >
      {cards.map((_, i) => (
        <div key={i}>
          <img
            src={`https://picsum.photos/1000/600?random=${i}`}
            alt="random"
            loading="lazy"
            title={`random ${i + 1}`}
          />
        </div>
      ))}
    </Carousel>
  </div>
);
