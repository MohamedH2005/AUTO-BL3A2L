import mongoose, { HydratedDocument, Schema } from "mongoose";
import { GenderEnum, RoleEnum } from "../../utils/enum/auth.enum.js";
import { tr } from "zod/locales";
import { maxLength, minLength } from "zod";
export interface Iuser{
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    // confirmPassword:string;

    email:string;
    confirmemailOTP:string;
    confirmemail:Date;
    
    phone?:string;
    Address?:string;
    gender:GenderEnum;
    role:RoleEnum;
    createAt:Date;
    updateAT:Date;
}

export const Userschema = new Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50,
    },
    email:{
        type:String,
        required:true,  
        },
        confirmemailOTP:{
            type:String,
            required:false,
        },
        confirmemail:{
            type:Date,
        },
        password:{
            type:String,
            required:true,
        },
    phone:{
        type:String,
    },
    address:{
        type:String,
    },
        // confirmPassword:{
        //     type:String,
        //     required:false,
        // },


},{
    timestamps:true,
    toJSON:{
        virtuals:true,
    },
    toObject:{
        virtuals:true,
    }
})


Userschema.virtual("fullname").get(function(this:Iuser){
    return `${this.firstname} ${this.lastname}`;
})
export const User = mongoose.model<Iuser>("User",Userschema);
export type Hyperedocument=HydratedDocument<Iuser>