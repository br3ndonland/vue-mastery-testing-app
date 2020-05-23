import { mount } from "@vue/test-utils"
import { toBeVisible } from "@testing-library/jest-dom/matchers"
import AppHeader from "@/components/AppHeader"

expect.extend({ toBeVisible })

describe("AppHeader", () => {
  it("shows the logout button if user is logged in", async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    expect(wrapper.find("button").element).toBeVisible()
  })
  it("doesn't show logout button if user is not logged in", async () => {
    const wrapper = mount(AppHeader)
    // loggedIn is false, so we don't have to use setData()
    expect(wrapper.find("button").element).not.toBeVisible()
  })
})
