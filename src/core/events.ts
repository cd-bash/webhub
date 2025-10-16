export type Events = {
    readonly page_navigation: {
        readonly pageReference: string;
    };
    readonly language_changed: {
        readonly language: string;
    };
};