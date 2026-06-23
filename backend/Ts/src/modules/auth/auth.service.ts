    import { Request, Response } from "express";
import { SignupDTO } from "./auth.dto.js";
import { Signupschema } from "./auth.validation.js";
import { Badrequestextiption ,Notfound } from "../../utils/response/error.js";
import { UserRepository } from "../../DB/repositry/user.repo.js";
import { User } from "../../DB/models/user.model.js";
import { comapareHash, generateHash } from "../../utils/security/Hash.js";
import {encrypt} from "../../utils/security/compare.js"


class authsercice
{
private _usermodel = new UserRepository(User);

    
    
    constructor(){
        
    }
    signup = async (req:Request,res:Response):Promise<Response>=>
        {

            console.log(req.body);
            const {username,email,password,firstname,lastname}:SignupDTO = req.body;
                const Hash_Password = await generateHash(password)
            // const encryptin = await encrypt(firstname)
            const check_user = await this._usermodel.findOne({
                filter:{email},
                select:"email",
            })

            if(check_user){
                throw new Badrequestextiption("This User Exist");
            }
            const user = await this._usermodel.create({
                data:{username,email,password:Hash_Password,firstname,lastname}

            })
            return res.status(200).json({message:"Hello from Signup",data:{username,email,firstname,lastname}});
        }
        login = async(req:Request,res:Response):Promise<Response>=>{
            const {email,password} = req.body;
            const user = await this._usermodel.findOne({filter:{email}});
                if(!user){
                    throw new Notfound("User not Found");
                }
                const isvalidpassword = await comapareHash(password,user.password);
                    if (!isvalidpassword) {
            throw new Badrequestextiption("Invalid Password");
        }


                    return res.status(200).json({
            message: "Login successful",
            data: {
                username: user.firstname,
                email: user.email
            }

        }
    )}}


    export default new authsercice();


