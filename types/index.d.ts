export default useDarkMode;
declare function useDarkMode(initialValue?: boolean, { element, classNameDark, classNameLight, onChange, storageKey, storageProvider, global, }?: {
    element: any;
    classNameDark: any;
    classNameLight: any;
    onChange: any;
    storageKey?: string;
    storageProvider: any;
    global: any;
}): {
    value: any;
    enable: any;
    disable: any;
    toggle: any;
};
