import * as bcrypt from 'bcrypt';

import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Unique, ManyToOne, BeforeInsert, BeforeUpdate } from 'typeorm';
@Entity({name: 'user'})
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('varchar', { length: 256, nullable: false })
  firstname: string;
  @Column('varchar', { length: 256, nullable: false })
  lasttname: string;
  @Column('varchar', { length: 256, nullable: false })
  password: string;
  @Column('varchar', { length: 256, nullable: false })
  email: string;
  @Column('varchar', {length: 512, nullable: false })
  specialty: string;
  @Column('varchar', {length: 512, nullable: false })
  department: string;
  @Column({ nullable: false })
  graduationTheme: string;

  @CreateDateColumn()
  createDate: Date;
  @UpdateDateColumn()
  updateDate: Date;
  @BeforeInsert()
  async hashPass() {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      this.email = this.email.trim().toLowerCase();
    } catch (error) {
      return error;
    }
  }
  @BeforeUpdate()
  updateDates() {
    this.updateDate = new Date();
  }

}