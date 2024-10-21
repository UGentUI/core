import { default as SlResizeObserver } from '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.component.js';
export declare class UgResizeObserver extends SlResizeObserver {
}
declare global {
    interface HTMLElementTagNameMap {
        "ug-resize-observer": UgResizeObserver;
    }
}
