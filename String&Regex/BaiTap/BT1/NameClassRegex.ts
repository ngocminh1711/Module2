export class NameClassRegex {
    private NAMECLASS_REGEXP: RegExp =/^[CAP]+[0-9]{4}[GHIKLM]$/;


    public validate(regex: string): boolean {
        return this.NAMECLASS_REGEXP.test(regex)
    }
}