import { css } from 'lit';

export default css`

    :host {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
    }

    ug-dropdown {
        display: block;
        width: 100%;
    }
  
    ug-dropdown::part(panel) {
        display: block;
        width: 100%;
    }
  
    .loading-placeholder, .no-results {
        margin-left: .5rem;
        margin-right: .5rem;
    }
    
    .default-loading {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .default-no-results {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .control {
        background-color: var(--ug-input-background-color);
        border: solid var(--ug-input-border-width) var(--ug-input-border-color);
        border-width: 1px;
        display: flex;
        flex-direction: column;
        //align-items: center;
        //display: inline-flex;
        flex: 1;
    }
    
    .control.input--disabled {
        background-color: var(--ug-input-background-color-disabled);
        border-color: var(--ug-input-border-color-disabled);
        opacity: 0.5;
    }

    .control:focus-within {
        border-color: var(--ug-input-border-color-focus);
        box-shadow: 0 0 0 var(--ug-focus-ring-width) var(--ug-input-focus-ring-color);
        //border-width: 5px;
        //border:none
    }


    .base {
        width: 100%;
        display: inline-flex;

    }

    .control .fix-wrapper {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        height: 100%;

        font-family: var(--ug-input-font-family);
        font-weight: var(--ug-input-font-weight);
        letter-spacing: var(--ug-input-letter-spacing);
    }
    
    
    .control  input:focus {
        outline: none;
    }

    .control input {
        flex: 1;
        text-indent: .5rem;
        border: none;
        font-family: var(--ug-input-font-family);
        font-weight: var(--ug-input-font-weight);
        letter-spacing: var(--ug-input-letter-spacing);
        color: var(--ug-input-color);
    }

    .control .trigger {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        vertical-align: center;
        margin-top: auto;
        margin-bottom: auto;
        color: var(--ug-input-color);
    }

    .control .trigger:focus {
        outline: none;
    }


    .control--small {
        border-radius: var(--ug-input-border-radius-small);
        font-size: var(--ug-input-font-size-small);
        height: var(--ug-input-height-small);
        border-color: var(--ug-input-border-color);
    }
    
    .control--small .fix-wrapper  * {
        //margin-inline-start: var(--ug-input-spacing-small);
        //margin-inline-end: var(--ug-input-spacing-small);
    }


    .control--medium {
        border-radius: var(--ug-input-border-radius-medium);
        font-size: var(--ug-input-font-size-medium);
        height: var(--ug-input-height-medium);
        border-color: var(--ug-input-border-color);
    }

    .control--medium .fix-wrapper .prefix {
        margin-inline-start: var(--ug-input-spacing-medium);
    }
    .control--medium .fix-wrapper .suffix {
        margin-inline-end: var(--ug-input-spacing-medium);
    }


    .control--large {
        border-radius: var(--ug-input-border-radius-large);
        font-size: var(--ug-input-font-size-large);
        height: var(--ug-input-height-large);
        border-color: var(--ug-input-border-color);
    }
    .control--large .fix-wrapper * {
        //margin-inline-start: var(--ug-input-spacing-large);
        //margin-inline-end: var(--ug-input-spacing-large);
    }


    trigger {
        .input--small {
        }

`;
