class MeasurementsData {
    constructor(chest, waist,inseam,shoulders,sleeves) {
        this.chest = chest;
        this.waist = waist;
        this.inseam = inseam;
        this.shoulders = shoulders;
        this.sleeves = sleeves;

    }

    static compare(a) {
        const diff_x = a.chest - this.chest;
    
        return diff_x;
    }

}