type EventMap = Record<string, unknown>;
type EventKey<T extends EventMap> = keyof T;
type EventHandler<T> = (value: T) => void;

export class EventBus<T extends EventMap> {
    private subscribers: Partial<Record<keyof T, EventHandler<any>[]>> = {};

    subscribe<E extends EventKey<T>>(event: E, handler: EventHandler<T[E]>): void {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }

        this.subscribers[event].push(handler);
    }

    unsubscribe<E extends EventKey<T>>(event: E, handler: EventHandler<T[E]>): void {
        if (!this.subscribers[event]) {
            return;
        }

        this.subscribers[event] = this.subscribers[event]!.filter(
            (listener) => listener !== handler
        );
    }

    dispatch<E extends EventKey<T>>(event: E, value: T[E]): void {
        if (!this.subscribers[event]) {
            return;
        }
        this.subscribers[event]!.forEach((listener) => {
            listener(value);
        });
    }
}