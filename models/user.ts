import { Optional, UUIDV4 } from 'sequelize';
import { Table, Column, Model, CreatedAt, UpdatedAt, DeletedAt, AllowNull, Unique, DataType} from 'sequelize-typescript';


interface UserAttributes {
  id:string;
  firstName:string;
  lastName:string;
  email:string;
}
export interface UserCreationAttributes
  extends Optional<UserAttributes, "id"> {}

@Table({
    timestamps:true,
    paranoid:true
})

class Users extends 
  Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
  {
    @Column({
      type: DataType.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
      allowNull: false
    })
    id:string;

    @Unique(true)
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

    @Unique(true)
    @AllowNull(false)
    @Column
    admin: boolean;

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
}

export default Users;