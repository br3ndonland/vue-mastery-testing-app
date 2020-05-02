import { mount } from "@vue/test-utils"
import AppHeader from "@/components/AppHeader"

describe("AppHeader", () => {
  it("shows the logout button if user is logged in", async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find("button").isVisible()).toBe(true)
  })
  it("doesn't show logout button if user is not logged in", async () => {
    const wrapper = mount(AppHeader)
    // loggedIn is false by default
    // We're using the default, so we don't have to wait for component to mount
    expect(wrapper.find("button").isVisible()).toBe(false)
  })
})
