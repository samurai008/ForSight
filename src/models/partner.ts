export class Partner {

    constructor(
        public id: number,
        public fname: string,
        public lname: string,
        public email: string,
        public qualifications: string,
        public workplace: string,
        public phone: number,
        public lat?: number, public long?: number,
        public picture?: any
    ) {}
}