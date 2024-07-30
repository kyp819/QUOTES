/**
 * Kirtankumar patel
 * 200587883
 * 6/21/2024
 * Musicians.ts */
import { Collection, Schema, model } from 'mongoose';

// Musician Interface - 
/**
 * Interface representing a Musician document in MongoDB.
 * 
 * @interface IMusician
 * @property {string} fullName - The full name of the musician.
 * @property {string[]} genres - Array of genres the musician is associated with.
 * @property {string[]} instruments - Array of instruments the musician plays.
 * @property {string[]} labels - Array of labels the musician is signed with.
 * @property {string} born - The birth date of the musician.
 * @property {string} yearsActive - The years the musician has been active.
 * @property {string[]} spouses - Array of spouses of the musician.
 * @property {string[]} children - Array of children of the musician.
 * @property {string[]} relatives - Array of relatives of the musician.
 * @property {string[]} notableWorks - Array of notable works by the musician.
 * @property {string} imageURL - URL of the musician's image.
 */
interface IMusician 
{
    id: number,
    quote: string,
    author: string
    
}

/**
 * Schema representing the structure of a Musician document in MongoDB.
 */
let musicianSchema = new Schema<IMusician>({
    id: Number,
    quote: String,
    author: String
});
/**
 * Mongoose model representing a collection of musicians.
 * 
 * @const {Model<IMusician>}
 */

let Quotes = model<IMusician>('Quotes', musicianSchema);

export default Quotes;