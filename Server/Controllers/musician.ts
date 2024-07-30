/**
 * Kirtankumar patel
 * 200587883
 * 6/21/2024
 * Musicians.ts */

import { Request, Response, NextFunction } from 'express';
import { SanitizeArray } from '../Util';
import Musician from '../Models/musician';
import Quotes from '../Models/musician';

/**
 * This function displays the list in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMusicianList(req: Request, res: Response, next: NextFunction): void
{
    Quotes.find({})
    .then((data) =>
    {
        res.status(200).json({success: true, msg: "Musician List Retrieved and Displayed", data: data})
    })
    .catch((err) =>
    {
        console.error(err);
    })
}

/**
 * This function displays a single Musician by ID in JSON format
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function DisplayMusicianById(req: Request, res: Response, next: NextFunction) : void
{
    // endpoint should be /api/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to retrive a musician", data: ""});
    }
    else
    {
        Musician.findById({_id: id})
        .then((data) =>
        {
            if(data)
            {
                res.status(200).json({success: true, msg: "One Musician Retrived and Displayed", data: data})
            }
            else
            {
                res.status(404).json({success: false, msg: "Musician not found", data: ""});
            }
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}

/**
 * This function adds a Musician to the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 
export function AddMusician(req: Request, res:Response, next: NextFunction): void
{
    let genres = (req.body.genres) ?  SanitizeArray(req.body.genres as string) : SanitizeArray("");
    let instruments = (req.body.instruments) ? SanitizeArray(req.body.instruments as string) : SanitizeArray("");
    let labels = (req.body.labels) ? SanitizeArray(req.body.labels as string) : SanitizeArray("");
    let spouses = (req.body.born) ? SanitizeArray(req.body.spouses as string) : SanitizeArray("");
    let children = (req.body.children) ? SanitizeArray(req.body.children as string) : SanitizeArray("");
    let relatives = (req.body.relatives) ? SanitizeArray(req.body.relatives as string) : SanitizeArray("");
    let notableWorks = (req.body.notableWorks) ? SanitizeArray(req.body.spouses as string) : SanitizeArray("");
    
    let musician = new Musician({
    fullName:  req.body.fullName,
    genres:genres,
    instruments: instruments,
    labels: labels,
    born: req.body.born,
    yearsActive: req.body.yearsActive,
    spouses: spouses,
    children: children,
    relatives: relatives,
    notableWorks: notableWorks,
    imageURL:req.body.imageURL
     });
 
     Musician.create(musician)
     .then(() =>
     {
        res.status(200).json({success: true, msg: "Musician added", data: Musician});
     })
     .catch((err) =>
     {
        console.error(err);
     })
}

/**
 * This function updates a Musician in the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next

export function UpdateMusician(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/update/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to update a Musician", data: ""});
    }
    else
    {
        let genres = (req.body.genres) ?  SanitizeArray(req.body.genres as string) : SanitizeArray("");
        let instruments = (req.body.instruments) ? SanitizeArray(req.body.instruments as string) : SanitizeArray("");
        let labels = (req.body.labels) ? SanitizeArray(req.body.labels as string) : SanitizeArray("");
        let spouses = (req.body.born) ? SanitizeArray(req.body.spouses as string) : SanitizeArray("");
        let children = (req.body.children) ? SanitizeArray(req.body.children as string) : SanitizeArray("");
        let relatives = (req.body.relatives) ? SanitizeArray(req.body.relatives as string) : SanitizeArray("");
        let notableWorks = (req.body.notableWorks) ? SanitizeArray(req.body.spouses as string) : SanitizeArray("");
        
        let musicianToUpdate = new Musician({
            _id: id,
            fullName:  req.body.fullName,
            genres:genres,
            instruments: instruments,
            labels: labels,
            born: req.body.born,
            yearsActive: req.body.yearsActive,
            spouses: spouses,
            children: children,
            relatives: relatives,
            notableWorks: notableWorks,
            imageURL:req.body.imageURL
        });

        Musician.updateOne({_id: id}, musicianToUpdate)
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Musician updated", data: musicianToUpdate});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}

/**
 * This function deletes a Musician from the database
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
export function DeleteMusician(req:Request, res:Response, next:NextFunction): void
{
    // endpoint should be /api/delete/:id
    let id = req.params.id;

    // ensure that the id is valid
    if (id.length != 24)
    {
        res.status(400).json({success: false, msg: "A valid ID is required to delete a Musician", data: ""});
    }
    else
    {
        Musician.deleteOne({_id: id})
        .then(() =>
        {
            res.status(200).json({success: true, msg: "Musician deleted", data: id});
        })
        .catch((err) =>
        {
            console.error(err);
        })
    }
}*/