import { Optional, UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DeletedAt,
  AllowNull,
  Unique,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";

interface ProyectAttributes {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
}
export interface ProyectCreationAttributes
  extends Optional<ProyectAttributes, "id"> {}

@Table({
  timestamps: true,
  paranoid: true,
})
class Proyect
  extends Model<ProyectAttributes, ProyectCreationAttributes>
  implements ProyectAttributes
{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @Unique(true)
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;

  @Unique(true)
  @AllowNull(false)
  @Column
  contactEmail: string;

  @DeletedAt
  deletedAt: Date;
}

export default Proyect;
