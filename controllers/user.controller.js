import User from "../models/user.model.js";
import { Op } from "sequelize";

const controller = {};

// getAll data with pagination
controller.getAll = async(req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 0;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || "";
        const offside = limit * page;

        const config = {
            where:{
                [Op.or]: [
                    {name: {[Op.like]: `%${search}%`}},
                    {email: {[Op.like]: `%${search}%`}},
                ]
            }
        };
        
        const totalRows = await User.count(config);
        const totalPages = Math.ceil(totalRows / limit);
        
        const newConf = { ...config,
            offset: offside,
            limit,
            order: [ ['id', 'ASC'] ]
        };
        
        const result = await User.findAll(newConf);
        // const result = null;

        result?? res.status(400).json({
            status: 'Error',
            message: 'Data tidak ditemukan'
        }) 

        return res.status(200).json({
            status: 'Success',
            message: 'Data user berhasil ditemukan',
            page: page,
            limit: limit,
            totalRows: totalRows,
            totalPages: totalPages,
            datas: result
        })
        
    } catch (e) {
        next(e)
    }
}

export default controller; 