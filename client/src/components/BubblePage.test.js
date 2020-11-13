import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";

import {fetchBubbles as mockFetchBubbles} from '../services/fetchBubbles'

jest.mock("../services/fetchBubbles");


test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  // arrange:
  mockFetchBubbles.mockResolvedValueOnce(({
    data:[
      {color: "aliceblue", code:{hex: "#f0f8ff"}, id:1},
      {color: "limegreen", code:{hex: "#99ddbc"}, id:2}
    ]
  }
  ))
  render(<BubblePage />)
  
  // act:
  await waitFor(() => {
    const circles = screen.getAllByTestId('circle')
    // assert:
    expect(circles).toBeTruthy()
  })
});


test("Renders basic Bubbles Page", () => {
  // Finish this test
  // arrange:
  mockFetchBubbles.mockResolvedValueOnce(({
    data:[
      {color: "aliceblue", code:{hex: "#f0f8ff"}, id:1},
      {color: "limegreen", code:{hex: "#99ddbc"}, id:2}
    ]
  }
  ))
  render(<BubblePage />)

  // act:
  const bubblesTitile = screen.getByText(/bubbles/i)
  const colorsTitle = screen.getByText(/colors/i)

  // assert:
  expect(bubblesTitile).toBeInTheDocument()
  expect(colorsTitle).toBeInTheDocument()
});