import {EventBus} from "./event-bus";
import {Events} from "./events";
import {handlers} from "./handlers";

const EVENT_BUS = new EventBus<Events>();

EVENT_BUS.subscribe('page_navigation', handlers.page_navigation);

export {EVENT_BUS};