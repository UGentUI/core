import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import "/lib/components/visually-hidden";

const meta: Meta = {
    title: "Components/VisuallyHidden",
    component: "ug-visually-hidden",
    parameters: {
        docs: {
            
            description: {

                component: `
The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.

According to [The A11Y Project](https://www.a11yproject.com/posts/how-to-hide-content/), "there are real world situations where visually hiding content may be appropriate, while the content should remain available to assistive technologies, such as screen readers. For instance, hiding a search field's label as a common magnifying glass icon is used in its stead."

Since visually hidden content can receive focus when tabbing, the element will become visible when something inside receives focus. This behavior is intentional, as sighted keyboard user won't be able to determine where the focus indicator is without it.

The <ug-visually-hidden> component is used to provide content that is visually hidden but accessible to screen readers. It is ideal for improving accessibility in applications by ensuring non-visual users can access critical information. Below are just a few examples of scenario's where it's use is justified`
            },
        },
    }
};

export default meta;

type Story = StoryObj;

export const VisuallyHidden: Story = {
    render: (args) => {
        return html`
        <div>
      <ug-visually-hidden>
        <a href="#">Skip to main content</a>
      </ug-visually-hidden>
    </div>`;
    },

    parameters: {
        docs: {
            description: {
                story: 'The "Skip to main content" link is a widely adopted pattern to improve navigation for users relying on screen readers or keyboard navigation. It allows users to bypass repetitive navigation links and jump directly to the main content, making it easier for non-visual or motor-impaired users to navigate a page efficiently.'
            },
            canvas: {
                type: 'code',
                sourceState: 'shown',
            }
        }
    }
};

export const AssociatedLabel = {
    name: 'Associated Label',
    render: () => html`
    <div>
      <button aria-describedby="hidden-instructions">Click me</button>
      <ug-visually-hidden id="hidden-instructions">
        Press this button to submit your form.
      </ug-visually-hidden>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'This story shows how to associate hidden content with visible elements using attributes like `aria-describedby` for accessibility purposes.'
            },
            canvas: {
                type: 'code',
                sourceState: 'shown',
            }
        }
    }
};

export const ComplexInteraction = {
    name: 'Complex Interaction',
    render: () => html`
    <div>
      <button aria-live="polite" @click=${() => alert('Action triggered')}>Perform Action</button>
      <ug-visually-hidden>This button performs a complex action when clicked.</ug-visually-hidden>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'Shows how to include critical information for complex interactions, ensuring all users understand the action being performed.'
            },
            canvas: {
                type: 'code',
                sourceState: 'shown',
            }
        }
    }
};

export const ImageWithHiddenText = {
    name: 'Image With Hidden Text',
    render: () => html`
    <div>
      <img src="https://www.ugain.ugent.be/images/info2b.jpg" width="500px" alt="Link voor opleidingsonderdelen" />
      <ug-visually-hidden>
      The text in the image is: 
      <p>Niet meteen gevonden wat u zocht?</p>
      <p><a>Klik hier</a> en zeg ons wat uw opleidingsnoden zijn</p>
      </ug-visually-hidden>
    </div>
  `,
    parameters: {
        docs: {
            description: {
                story: 'This story demonstrates how to add descriptive hidden text to an infographic, ensuring visually impaired users can access the same information presented in the graphic.'
            },
            canvas: {
                type: 'code',
                sourceState: 'shown',
            }
        }
    }
};
