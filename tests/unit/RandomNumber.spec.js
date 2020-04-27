import { mount } from "@vue/test-utils"
import RandomNumber from "@/components/RandomNumber"

describe("RandomNumber", () => {
  test("Check default value: randomNumber default should be 0", () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain("<span>0</span>")
  })
  test("Simulate interaction: button -> 0 < randomNumber < 10", async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find("button").trigger("click")
    await wrapper.vm.$nextTick()
    const randomNumber = parseInt(wrapper.find("span").element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })
  test("Change prop values: new min < randomNumber < new max", async () => {
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
