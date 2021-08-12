import React from "react";
import { shallow } from "enzyme";
import ProfilePage from "./ProfilePage";

describe("Profile", () => {
  const setup = () => shallow(<Profile />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders user's avatar", () => {
    const wrapper = setup();
    const avatarDisplay = findByTestAttribute(wrapper, "profile-avatar");
    expect(avatarDisplay.length).toBe(1);
  });

  test("renders user's name", () => {
    const wrapper = setup();
    const nameDisplay = findByTestAttribute(wrapper, "user-name");
    expect(nameDisplay.length).toBe(1);
  });

  test("renders user's info", () => {
    const wrapper = setup();
    const infoDisplay = findByTestAttribute(wrapper, "user-info");
    expect(infoDisplay.length).toBe(1);
  });

  test("renders button on profile page", () => {
    const wrapper = setup();
    const buttonDisplay = findByTestAttribute(wrapper, "profile-button");
    expect(buttonDisplay.length).toBe(1);
  });
});
