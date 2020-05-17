import { mount } from "@vue/test-utils"
import LoginForm from "@/components/LoginForm.vue"

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm)
    // 1. Find text input
    const input = wrapper.find(`[data-testid="input-name"]`)
    // 2. Set value for text input
    // 3. Simulate form submission
    // 4. Assert event has been emitted
    // 5. Assert payload is correct
  })
})
