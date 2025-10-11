import { User } from "../models/User";
import { Document } from "mongoose";

export interface IUserService {
  getUserById(userId: string): Promise<Document | null>;
  updateUser(userId: string, updateData: Partial<User>): Promise<Document | null>;
  deleteUser(userId: string): Promise<Document | null>;
}

class UserService implements IUserService {
  async getUserById(userId: string): Promise<Document | null> {
    return await User.findById(userId).exec();
  }

  async updateUser(userId: string, updateData: Partial<User>): Promise<Document | null> {
    return await User.findByIdAndUpdate(userId, updateData, { new: true }).exec();
  }

  async deleteUser(userId: string): Promise<Document | null> {
    return await User.findByIdAndDelete(userId).exec();
  }
}

export default new UserService();