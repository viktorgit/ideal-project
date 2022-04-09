export class ChangeTheme {
    static readonly type = '[themeState] ChangeTheme';
    constructor(public theme: string) {}
}