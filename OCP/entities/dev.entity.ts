import ProfessionalEntity from "./professional.entity";

export default class DevEntity extends ProfessionalEntity {
    calculate(): number {
        return 25000 + 100;
    }
}