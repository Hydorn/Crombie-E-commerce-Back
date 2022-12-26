import { Optional, UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DeletedAt,
  AllowNull,
  Unique,
  DataType,
} from "sequelize-typescript";

interface UserAttributes {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  admin: boolean;
  password: string;
}
export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

@Table({
  timestamps: true,
  paranoid: true,
})
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @Unique(true)
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @Unique(true)
  @AllowNull(false)
  @Column
  admin: boolean;

  @DeletedAt
  deletedAt: Date;
}

export default User;
