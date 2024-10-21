import { default as SlMutationObserver } from '@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.component.js';
export declare class UgMutationObserver extends SlMutationObserver {
}
declare global {
    interface HTMLElementTagNameMap {
        "ug-mutation-observer": UgMutationObserver;
    }
}
