import { MenuItem } from "primeng/api";
import { ModuleType } from "../../enum/module-type.enum";

export interface Items {
  modulo: ModuleType,
  items:MenuItem[]
}
