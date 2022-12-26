import { Optional, UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DeletedAt,
  AllowNull,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Proyect from "./proyect";
import User from "./user";

interface RatingAttributes {
  id: string;
  idProyect: string;
  idUser: string;
  punctuation: number;
  comments: string;
}

export interface RatingCreationAttributes
  extends Optional<RatingAttributes, "id"> {}

@Table({
  timestamps: true,
  paranoid: true,
})
class Rating
  extends Model<RatingAttributes, RatingCreationAttributes>
  implements RatingAttributes
{
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
    allowNull: false,
  })
  id: string;

  @ForeignKey(() => Proyect)
  @AllowNull(false)
  @Column
  idProyect: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  idUser: string;

  @AllowNull(false)
  @Column
  punctuation: number;

  @Column
  comments: string;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => Proyect)
  proyect: Proyect;

  @BelongsTo(() => User)
  users: User;
}

export default Rating;
