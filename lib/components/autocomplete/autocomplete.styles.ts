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

    .control input:focus {
        outline: none;
    }

    .control input {
        flex: 1;
        text-indent: .5rem;
    }

    .control .trigger {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: 1rem;
        vertical-align: center;
        margin-top: auto;
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

    .control--medium {
        border-radius: var(--ug-input-border-radius-medium);
        font-size: var(--ug-input-font-size-medium);
        height: var(--ug-input-height-medium);
        border-color: var(--ug-input-border-color);
    }

    .control--large {
        border-radius: var(--ug-input-border-radius-large);
        font-size: var(--ug-input-font-size-large);
        height: var(--ug-input-height-large);
        border-color: var(--ug-input-border-color);
    }


    trigger {
        .input--small {
        }

`;
