import { Optional, UUIDV4 } from 'sequelize';
import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, AllowNull, Unique, DataType} from 'sequelize-typescript';


interface RatingAttributes {
  id:string;
  idProyect:string;
  idUser:string;
  punctuation:number;
  comments:string;
}

export interface RatingCreationAttributes
  extends Optional<RatingAttributes, "id"> {}

@Table({
    timestamps:true,
    paranoid:true
})

class Ratings extends 
  Model<RatingAttributes, RatingCreationAttributes>
  implements RatingAttributes
  {
    @Column({
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false
    })
    id:string;

    @AllowNull(false)
    @Column
    idProyect: string;

    @AllowNull(false)
    @Column
    idUser: string;

    @Unique(true)
    @AllowNull(false)
    @Column
    punctuation: number;

    @Unique(true)
    @AllowNull(false)
    @Column
    comments: string;

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
}

export default Ratings;