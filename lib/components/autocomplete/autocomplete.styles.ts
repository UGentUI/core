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


    .default-loading-placeholder {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: .5rem;
        
    }

    .control {
        background-color: var(--ug-input-background-color);
        border: solid var(--ug-input-border-width) var(--ug-input-border-color);
        border-width: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        //display: inline-flex;
        flex: 1; 
        
    }
    
    .control:focus-within{
        //border-color: red;
        //border:none
    }

    
    .base {
        width: 100%;
        display: inline-flex;

    }

    
    

    .control input {
        padding-left: 1rem;
        height: 100%;
        width: 100%;
        border: none;
    }

    .control .trigger {
        display: flex;
        align-items: center;
        margin-left: 1rem;
        height: 100%;
        width: 100%;
        vertical-align: center;
        margin-top:auto;
    }

    .control .trigger:focus {
        //border: solid red 1px
        outline: none;
        box-shadow: 0px 0px 3px 3px #abc;
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
