import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { server } from "../../../_mocks_/server";

import SocialContainer from "./SocialContainer";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("Social Widget should not show Tweets for an empty user", async () => {
  render(<SocialContainer />);

  await screen.findByText(/Could not load content./gim);
});

test("Social Widget should show Tweets for a specific user", async () => {
  render(<SocialContainer queryString="?user=norcoreano" />);
  const navigationBullets = await screen.findAllByRole(/navigation/gim);

  expect(navigationBullets.length).toBe(5);
});

test("Social Widget should show Facebook posts", async () => {
  render(<SocialContainer queryString="?user=norcoreano" />);
  const faebookTab = await screen.findByRole(/facebook-selection/);

  userEvent.click(faebookTab);

  const navigationBullets = await screen.findAllByRole(/navigation/gim);

  const textContain = await screen.findAllByText(/facebook/gim);

  expect(navigationBullets.length).toBe(10);

  expect(textContain.length).toBe(10);
});

test("Social Widget should show Linkedin posts", async () => {
  render(<SocialContainer queryString="?user=norcoreano" />);

  const linkedInTab = await screen.findByRole(/linkedin-selection/);

  userEvent.click(linkedInTab);

  const navigationBullets = await screen.findAllByRole(/navigation/gim);

  const textContain = await screen.findAllByText(/linkedin/gim);

  expect(navigationBullets.length).toBe(15);

  expect(textContain.length).toBe(15);
});

test("Social Widget should go from not the first bullet to the first one. If a tab element is selected", async () => {
  render(<SocialContainer queryString="?user=norcoreano" />);

  const navigationBullets = await screen.findAllByRole(/navigation/gim);

  await act(async () => {
    await userEvent.click(navigationBullets[4]);
  });

  const activeBullet = await screen.findByRole(/navigation-active/gim);

  expect(activeBullet).toEqual(navigationBullets[4]);

  const facebookTab = await screen.findByRole(/facebook-selection/);

  await act(async () => {
    await userEvent.click(facebookTab);
  });

  const newNavigationBullets = await screen.findAllByRole(/navigation/gim);

  const newActiveBullet = await screen.findByRole(/navigation-active/gim);

  expect(newActiveBullet).toEqual(newNavigationBullets[0]);
});

test("It should appear loading when retrieving social info", async (done) => {
  render(<SocialContainer />);

  const facebookTab = await screen.findByRole(/facebook-selection/);

  await act(async () => {
    await userEvent.click(facebookTab);
  });

  await screen.findByRole(/loading/gim);

  done();
});
