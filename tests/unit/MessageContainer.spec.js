import MessageContainer from "@/components/MessageContainer"
import { mount } from "@vue/test-utils"

describe("MessageContainer", () => {
  it("Wraps MessageDisplay component", () => {
    const stubMessage = "Hello from the db!"
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: {
          template: `<p data-testid="message">${stubMessage}</p>`,
        },
      },
    })
    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual(stubMessage)
  })
})
