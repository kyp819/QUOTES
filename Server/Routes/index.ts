/**
 * Kirtankumar patel
 * 200587883
 * 6/21/2024
 * index.ts */
import express from 'express';
const router = express.Router();

import { DisplayMusicianList, DisplayMusicianById,/* AddMusician, UpdateMusician, DeleteMusician*/ } from '../Controllers/musician';

/* List of Routes (endpoints) */

/* GET Musician List. */
router.get('/', (req, res, next) => {  DisplayMusicianList(req, res, next); });

/* GET Musician by ID. */
router.get('/:id', (req, res, next) => {  DisplayMusicianById(req, res, next); });

/* Add Musician */
//router.post('/add', (req, res, next) => {  AddMusician(req, res, next); });

/* Update Musician */
//router.put('/update/:id', (req, res, next) => {  UpdateMusician(req, res, next); });

/* Delete Musician */
//router.delete('/delete/:id', (req, res, next) => {  DeleteMusician(req, res, next); });

export default router;
