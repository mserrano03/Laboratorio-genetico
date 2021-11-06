const MutationDao = require("../persistence/dao/Mutation.dao");

module.exports = {
    hasMutation(req, res) {
        try {
            let params = req.body;
            MutationDao.hasMutation(params).then((result) => {
                res.status(200).json(result);
            }).catch((error) => {
                res.status(400).json(error);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getMutation (req, res) {
        try {
            MutationDao.getMutation().then((result) => {
                res.status(200).json(result);
            }).catch((error) => {
                res.status(400).json(error);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    },
    getMutationReport(req, res) {
        try {
            MutationDao.getMutationReport().then((result) => {
                res.status(200).json(result);
            }).catch((error) => {
                res.status(400).json(error);
            });
        } catch (error) {
            res.status(400).json(error);
        }
    }
}