import { mount } from "@vue/test-utils"
import LoginForm from "@/components/LoginForm.vue"

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    const input = wrapper.find(`[data-testid="input-name"]`)
    // 2. Set value for text input
    const testName = "Dennis Nedry"
    input.setValue(testName)
    // 3. Simulate form submission
    wrapper.trigger("submit")
    // 4. Assert event has been emitted
    const emitNameInput = wrapper.emitted("formSubmitted")
    expect(emitNameInput).toHaveLength(1)
    // 5. Assert payload is correct
    const expectedPayload = { name: testName }
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    )
  })
})
