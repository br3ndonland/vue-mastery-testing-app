import { mount } from "@vue/test-utils"
import { getMessage } from "@/services/axios"
import flushPromises from "flush-promises"
import MessageDisplay from "@/components/MessageDisplay.vue"

describe("MessageDisplay", () => {
  it("calls getMessage and displays message", async () => {
    // 1. Mock API call
    const mockMessage = "This is a mock message from the database"
    getMessage.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)
    // 2. Await promise resolution
    await flushPromises()
    // 3. Assert that API call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // 4. Assert that component displays message
    const messageContent = wrapper.find(`[data-testid="message"]`).element
      .textContent
    expect(messageContent).toEqual(mockMessage)
  })
  it("displays an error if getMessage fails", async () => {
    // 1. Mock API call
    const mockError = "getMessage failed to return the expected response."
    getMessage.mockRejectedValueOnce(mockError)
    const wrapper = mount(MessageDisplay)
    // 2. Await promise resolution
    await flushPromises()
    // 3. Assert that API call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // 4. Assert that component displays message
    const errorContent = wrapper.find(`[data-testid="message-error"]`).element
      .textContent
    expect(errorContent).toEqual(mockError)
  })
})
