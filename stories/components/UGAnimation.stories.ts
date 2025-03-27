import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import '/lib/components/animation';
import '/lib/components/button';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Components/Animation',
  component: 'animation',
  parameters: {
    docs: {
      description: {
        component: `Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).

To animate an element, wrap it in <code><ug-animation></code> and set an animation <code>name</code>. The animation will not start until you add the <code>play</code> attribute. Refer to the properties table for a list of all animation options.

Animations are based on those found in the popular [Animate.css](https://animate.style/) library.`
      },
      source: {
        format: true,
        transform: (code: string) => {
          // Remove empty/default attributes and replace boolean attributes from the source code display
          return code
            .replace(
              /\s*(duration="1000"|easing="linear"|delay="0"|direction="normal"|enddelay="0"|fill="auto"|iterations="1"|iterationstart="0"|playbackrate="1")/g,
              ''
            )
            .replace(/\s* play=""/g, ' play');
        }
      },
      importSection: true // Enables the import section
    }
  },
  argTypes: {
    name: {
      control: 'select',
      name: 'name',
      description:
        'The name of the built-in animation to use. For custom animations, use the `keyframes` property instead.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: undefined }
      },
      options: [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shakeX',
        'shakeY',
        'headShake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'heartBeat',
        'backInDown',
        'backInLeft',
        'backInRight',
        'backInUp',
        'backOutDown',
        'backOutLeft',
        'backOutRight',
        'backOutUp',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeInTopLeft',
        'fadeInTopRight',
        'fadeInBottomLeft',
        'fadeInBottomRight',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'fadeOutTopLeft',
        'fadeOutTopRight',
        'fadeOutBottomRight',
        'fadeOutBottomLeft',
        'flip',
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY',
        'lightSpeedInRight',
        'lightSpeedInLeft',
        'lightSpeedOutRight',
        'lightSpeedOutLeft',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',
        'hinge',
        'jackInTheBox',
        'rollIn',
        'rollOut',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideInUp',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'slideOutUp'
      ]
    },
    play: {
      control: 'boolean',
      name: 'play',
      description:
        'Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when the animation finishes or gets canceled.<br>`reflects: true`',
      table: {
        category: 'Properties',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    delay: {
      control: 'number',
      name: 'delay',
      description:
        'The number of milliseconds to delay the start of the animation.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    direction: {
      control: 'select',
      name: 'direction',
      options: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
      description:
        '	Determines the direction of playback as well as the behavior when reaching the end of an iteration. [Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)',
      table: {
        category: 'Properties',
        type: {
          summary: "'normal' | 'reverse' | 'alternate' | 'alternate-reverse'"
        },
        defaultValue: { summary: 'normal' }
      }
    },
    duration: {
      control: 'number',
      name: 'duration',
      description:
        'The number of milliseconds each iteration of the animation takes to complete.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '1000' }
      }
    },
    easing: {
      control: 'text',
      name: 'easing',
      description:
        'The easing function to use for the animation. This can be a predefined easing function or a custom easing function such as `cubic-bezier(0, 0, 1, 1)`.',
      table: {
        category: 'Properties',
        type: { summary: 'string' },
        defaultValue: { summary: 'linear' }
      }
    },
    endDelay: {
      control: 'number',
      name: 'end-delay',
      description:
        'The number of milliseconds to delay after the active period of an animation sequence.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    fill: {
      control: 'select',
      name: 'fill',
      options: ['none', 'forwards', 'backwards', 'both'],
      description:
        'Sets how the animation applies styles to its target before and after its execution.',
      table: {
        category: 'Properties',
        type: { summary: "'none' | 'forwards' | 'backwards' | 'both'" },
        defaultValue: { summary: 'auto' }
      }
    },
    iterations: {
      control: 'number',
      name: 'iterations',
      description:
        'The number of times the animation should repeat. Setting this to `Infinity` will repeat the animation forever.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    },
    iterationStart: {
      control: 'number',
      name: 'iteration-start',
      description:
        'The offset at which to start the animation, usually between 0 (start) and 1 (end).',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '0' }
      }
    },
    keyframes: {
      control: false,
      name: 'keyframes',
      description:
        'The keyframes to use for the animation. If this is set, <code>name</code> will be ignored.',
      table: {
        category: 'Properties',
        type: { summary: 'Keyframe[] | string' },
        defaultValue: { summary: undefined }
      }
    },
    playbackRate: {
      control: { type: 'number' },
      name: 'playback-rate',
      description:
        'Sets the animation’s playback rate. The default is <code>1</code> (normal speed), which plays the animation at a normal speed. Setting this to 2 doubles the animation’s speed. A negative value can be used to reverse the animation. This value can be changed without causing the animation to restart.',
      table: {
        category: 'Properties',
        type: { summary: 'number' },
        defaultValue: { summary: '1' }
      }
    },
    currentTime: {
      control: { type: 'number' },
      name: 'currentTime',
      description: 'Gets and sets the current animation time.',
      table: {
        category: 'Properties',
        type: { summary: 'CSSNumberish' },
        defaultValue: { summary: '-' }
      }
    },
    updateComplete: {
      control: false, // Read-only, so no Storybook control
      name: 'updateComplete',
      description:
        'A read-only promise that resolves when the component has finished updating.',
      table: {
        category: 'Properties',
        type: { summary: 'Promise<void>' },
        defaultValue: { summary: undefined }
      }
    },
    ugStart: {
      control: false,
      name: 'ug-start',
      action: 'ug-start',
      description: 'Emitted when the animation starts playing.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent<void>' },
        defaultValue: { summary: undefined }
      }
    },
    ugFinish: {
      control: false,
      name: 'ug-finish',
      action: 'ug-finish',
      description: 'Emitted when the animation finishes playing.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent<void>' },
        defaultValue: { summary: undefined }
      }
    },
    ugCancel: {
      control: false,
      name: 'ug-cancel',
      action: 'ug-cancel',
      description: 'Emitted when the animation is canceled.',
      table: {
        category: 'Events',
        type: { summary: 'CustomEvent<void>' },
        defaultValue: { summary: undefined }
      }
    },
    cancel: {
      control: false,
      name: 'cancel()',
      description: 'Cancels the animation.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    },
    finish: {
      control: false,
      name: 'finish()',
      description: 'Finishes the animation.',
      table: {
        category: 'Methods',
        type: { summary: '() => void' },
        defaultValue: { summary: undefined }
      }
    }
  }
};

export default meta;

type Story = StoryObj;

export const Animation: Story = {
  args: {
    name: 'swing',
    duration: 1000,
    play: true,
    easing: 'linear',
    delay: 0,
    direction: 'normal',
    endDelay: 0,
    fill: 'auto',
    iterations: 1,
    iterationStart: 0,
    keyframes: undefined,
    playbackRate: 1,
    currentTime: undefined
  },
  render: (args) => {
    return html` <ug-animation
        name="${ifDefined(args.name)}"
        duration="${args.duration}"
        ?play="${args.play}"
        easing="${args.easing}"
        delay="${args.delay}"
        direction="${args.direction}"
        endDelay="${args.endDelay}"
        fill="${args.fill}"
        iterations="${args.iterations}"
        iterationStart="${args.iterationStart}"
        keyframes="${ifDefined(args.keyframes)}"
        playbackRate="${args.playbackRate}"
        currentTime="${ifDefined(args.currentTime)}"
        ><div class="box"></div
      ></ug-animation>

      <style>
        .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--ug-color-primary-600);
          margin: 1.5rem;
        }
      </style>`;
  }
};

export const Examples: Story = {
  parameters: {
    controls: { disable: true }
  },
  render: () => {
    return html`<div class="animation-overview">
        <ug-animation name="bounce" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
        <ug-animation name="jello" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
        <ug-animation name="heartBeat" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
        <ug-animation name="flip" duration="2000" play
          ><div class="box"></div
        ></ug-animation>
      </div>

      <style>
        .animation-overview .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--ug-color-primary-600);
          margin: 1.5rem;
        }
      </style> `;
  }
};

//Niet alles loopt altijd goed met de exacutie van dit script. Ik zet het even opzij. Al veel geprobeerd. Nog geen oplossing.
export const UsingIntersectionObserver: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to control the animation when an element enters or exits the viewport. For example, scroll the box below in and out of your screen. The animation stops when the box exits the viewport and restarts each time it enters the viewport.'
      }
    },
    controls: { disable: true }
  },
  render: () => html`
    <div class="animation-scroll">
      <ug-animation
        name="jackInTheBox"
        duration="2000"
        iterations="1"
        data-testid="animation-with-observer"
      >
        <div class="box"></div>
      </ug-animation>
    </div>

    <script>
      //() => {
      //I don't know why, but the code doesn't work within brackets.
      //alert('Hi, I load 1');

      const container = document.querySelector('.animation-scroll');
      const animation = container.querySelector('ug-animation');
      const box = animation.querySelector('.box');
      //alert('Hi, I load');

      // Watch for the box to enter and exit the viewport. Note that we're observing the box, not the animation element!
      const observer = new IntersectionObserver((entries) => {
        //alert('Hi, I work');
        if (entries[0].isIntersecting) {
          // Start the animation when the box enters the viewport
          animation.play = true;
        } else {
          animation.play = false;
          animation.currentTime = 0;
        }
      });
      observer.observe(box);
      //}; //();
    </script>

    <style>
      .animation-scroll .box {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: var(--ug-color-primary-600);
      }
    </style>
  `,
  play: () => {
    //I don't know why, but the code doesn't work within brackets.
    //alert('Hi, I load 1');

    const container = document.querySelector('.animation-scroll');
    const animation = container!.querySelector('ug-animation')!;
    const box = animation.querySelector('.box')!;
    //alert('Hi, I load');

    // Watch for the box to enter and exit the viewport. Note that we're observing the box, not the animation element!
    const observer = new IntersectionObserver((entries) => {
      //alert('Hi, I work');
      if (entries[0].isIntersecting) {
        // Start the animation when the box enters the viewport
        animation.play = true;
      } else {
        animation.play = false;
        animation.currentTime = 0;
      }
    });
    observer.observe(box);
  }
};

export const CustomKeyframeFormats: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Supply your own [keyframe formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) to build custom animations.'
      }
    },
    controls: { disable: true }
  },
  render: () =>
    html`<div class="animation-keyframes">
        <ug-animation easing="ease-in-out" duration="2000" play>
          <div class="box"></div>
        </ug-animation>
      </div>

      <script>
        //() => {
        const animation = document.querySelector(
          '.animation-keyframes ug-animation'
        );
        animation.keyframes = [
          {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)'
          },
          {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(90deg)'
          }
        ];
        //};
      </script>

      <style>
        .animation-keyframes .box {
          width: 100px;
          height: 100px;
          background-color: var(--ug-color-primary-600);
        }
      </style> `
};

export const PlayingAnimationsOnDemand: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Animations won’t play until you apply the <code>play</code> attribute. You can omit it initially, then apply it on demand such as after a user interaction. In this example, the button will animate once every time the button is clicked.'
      }
    },
    controls: { disable: true }
  },
  render: () =>
    html`<div class="animation-form">
        <ug-animation name="rubberBand" duration="1000" iterations="1">
          <ug-button variant="primary">Click me</ug-button>
        </ug-animation>
      </div>

      <script>
        //() => {
        const container = document.querySelector('.animation-form');
        const animation = container.querySelector('ug-animation');
        const button = container.querySelector('ug-button');

        button.addEventListener('click', () => {
          animation.play = true;
        });
        //};
      </script>`
};

export const AnimationWithEvents: Story = {
  args: {
    name: 'swing',
    duration: 1000,
    play: true,
    easing: 'linear',
    delay: 0,
    direction: 'normal',
    endDelay: 0,
    fill: 'auto',
    iterations: 1,
    iterationStart: 0,
    keyframes: undefined,
    playbackRate: 1,
    currentTime: undefined
  },
  render: (args) => {
    return html` <ug-animation
        name="${ifDefined(args.name)}"
        duration="${args.duration}"
        ?play="${args.play}"
        easing="${args.easing}"
        delay="${args.delay}"
        direction="${args.direction}"
        endDelay="${args.endDelay}"
        fill="${args.fill}"
        iterations="${args.iterations}"
        iterationStart="${args.iterationStart}"
        keyframes="${ifDefined(args.keyframes)}"
        playbackRate="${args.playbackRate}"
        currentTime="${ifDefined(args.currentTime)}"
        @ug-start="${action('ug-start')}"
        @ug-finish="${action('ug-finish')}"
        @ug-cancel="${action('ug-cancel')}"
        ><div class="box"></div
      ></ug-animation>

      <style>
        .box {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: var(--ug-color-primary-600);
          margin: 1.5rem;
        }
      </style>`;
  }
};
