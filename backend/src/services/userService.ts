import User from "../models/User";
import { Document } from "mongoose";

export interface IUserService {
  getUserById(userId: string): Promise<Document | null>;
  updateUser(userId: string, updateData: any): Promise<Document | null>;
  deleteUser(userId: string): Promise<Document | null>;
  getAllUsers(): Promise<Document[]>;
}

class UserService implements IUserService {
  async getUserById(userId: string): Promise<Document | null> {
    return await User.findById(userId).select('-password').exec();
  }

  async updateUser(userId: string, updateData: any): Promise<Document | null> {
    return await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password').exec();
  }

  async deleteUser(userId: string): Promise<Document | null> {
    return await User.findByIdAndDelete(userId).exec();
  }

  async getAllUsers(): Promise<Document[]> {
    return await User.find().select('-password').exec();
  }
}

export default new UserService();