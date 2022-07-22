export class NumberPhoneRegex {
    private NUBMERPHONE_REGEXP: RegExp = /^\([+0-9]{2}\)-\([0]{1}[0-9]{9}\)$/;

    public validate(regex: string): boolean {
        return this.NUBMERPHONE_REGEXP.test(regex)
    }
}