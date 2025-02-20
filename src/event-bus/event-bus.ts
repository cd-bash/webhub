type EventMap = Record<string, unknown>;
type EventKey<T extends EventMap> = keyof T;
type EventHandler<T> = (value: T) => void;

export class EventBus<T extends EventMap> {
    private subscribers: Map<EventKey<T>, EventHandler<any>[]> = new Map();

    subscribe<E extends EventKey<T>>(event: E, handler: EventHandler<T[E]>): void {
        if (!this.subscribers.has(event)) {
            this.subscribers.set(event, []);
        }
        this.subscribers.get(event)!.push(handler);
    }

    unsubscribe<E extends EventKey<T>>(event: E, handler: EventHandler<T[E]>): void {
        const handlers = this.subscribers.get(event);
        if (!handlers) {
            return;
        }
        const index = handlers.indexOf(handler);
        if (index !== -1) {
            handlers.splice(index, 1);
        }
    }

    dispatch<E extends EventKey<T>>(event: E, value: T[E]): void {
        const handlers = this.subscribers.get(event);
        if (!handlers) {
            return;
        }
        handlers.forEach((listener) => {
            listener(value);
        });
    }
}