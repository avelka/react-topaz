// Split.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Splitter from "@react-topaz/splitter";
import { ReactNode } from "react";

const meta: Meta<typeof Splitter> = {
  component: Splitter,
};

export default meta;

type Story = StoryObj<typeof Splitter>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => (
    <>
      <div style={{ width: "70vw", height: "70vh" }}>
        <Splitter max={300} value={150} min={100} disable>
          <div>
            <ul>
              <li>
                <a href="">hello 1(index)</a>
              </li>
              <li>
                <a href="">hello 2(index)</a>
              </li>
              <li>
                <a href="">hello 3(index)</a>
              </li>
              <li>
                <a href="">hello 4(index)</a>
              </li>
              <li>
                <a href="">hello 5(index)</a>
              </li>
              <li>
                <a href="">hello 6(index)</a>
              </li>
              <li>
                <a href="">hello 7(index)</a>
              </li>
              <li>
                <a href="">hello 8(index)</a>
              </li>
            </ul>
          </div>
          <Splitter direction="vertical">
            <div>hello</div>
            <div>hello</div>
          </Splitter>
        </Splitter>
      </div>
    </>
  ),
};
const MockCard = ({
  children,
  big,
}: {
  children: ReactNode;
  big?: boolean;
}) => (
  <div
    style={{
      width: "100%",
      flex: big ? "1 0 300px" : "1 0 100px",
      background: big ? "lightgray" : "gray",
      display: "grid",
      placeItems: "center",
      borderRadius: "0.5rem",
    }}
  >
    {children}
  </div>
);

const CardList = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: "flex",
      flexFlow: "column",
      padding: "1rem",
      gap: "1rem",
    }}
  >
    {children}{" "}
  </div>
);
const cards = new Array(20).fill(0);
export const Inverted = () => (
  <div style={{ width: "100vw,", height: "100vh" }}>
    <Splitter max={300} value={150} min={100}>
      <CardList>
        {cards.map((_, i) => (
          <MockCard key={i}>{i}</MockCard>
        ))}
      </CardList>
      <Splitter invert>
        <CardList>
          {cards.map((_, i) => (
            <MockCard big key={i}>
              {i}
            </MockCard>
          ))}
        </CardList>
        <CardList>
          {cards.map((_, i) => (
            <MockCard key={i}>{i}</MockCard>
          ))}
        </CardList>
      </Splitter>
    </Splitter>
  </div>
);
