export interface Medicine {
  id: string,
  name: string,
  activeSubstance: string,
  dosage: number,
  numberOfTakes: number,
  foodInterval: number,
  pharmaceuticalFormId: number,
  foodRelationId: number,
  pharmaceuticalFormName: string,
  foodRelationName: string
}
