import { mount } from "@vue/test-utils"
import RandomNumber from "@/components/RandomNumber"

describe("RandomNumber", () => {
  it("has the proper default value", () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain("<span>0</span>")
  })
  it("generates a number between min and max after button click", async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find("button").trigger("click")
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find("span").element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })
  it("has the correct prop values after props are changed", async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300,
      },
    })
    wrapper.find("button").trigger("click")
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find("span").element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
