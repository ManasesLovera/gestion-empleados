import { Request, Response } from 'express';

export const getAll = (req: Request, res: Response) => {
    res.send('This is an employee');
}