import { mount } from "@vue/test-utils"
import AppHeader from "@/components/AppHeader"

describe("AppHeader", () => {
  test("If user is logged in, show logout button", async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.find("button").isVisible()).toBe(true)
  })
  test("If user is not logged in, do not show logout button", async () => {
    const wrapper = mount(AppHeader)
    // loggedIn is false by default
    // We're using the default, so we don't have to wait for component to mount
    expect(wrapper.find("button").isVisible()).toBe(false)
  })
})
