export type Events = {
    readonly button_test: {
        readonly path: string;
    };

    readonly page_navigation: {
        readonly path: string;
        readonly pageReference: string;
    }
};