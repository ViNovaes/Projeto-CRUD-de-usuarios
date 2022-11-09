import { Request, Response } from "express";
import { Usuario } from "../model/Usuario";

export const index = async (req:Request, res:Response) =>{

    let users = await Usuario.findAll()

    res.render("pages/usuario",{
        users
    })
}