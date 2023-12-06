import mongoose, { Document, Schema } from 'mongoose';

export interface IPhoneBook {
    name: string;
    phoneNumber: string;
}

export interface IPhoneBookModel extends IPhoneBook, Document {}

const PhoneBookSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        match: /^[a-zA-Z\s]+$/
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /(\+977)?[9][6-9]\d{8}/
    }
});

export default mongoose.model<IPhoneBookModel>('PhoneBook', PhoneBookSchema);
