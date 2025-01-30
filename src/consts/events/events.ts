export type Events = {
    readonly button_test: {
        readonly path: string;
    };

    readonly breadcrumb_button: {
        readonly path: string;
        readonly projectName: string;
        readonly projectView: Function;
        readonly projectInfo: Function;
    }
};