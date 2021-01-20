module.exports = resourse => ({axios})  => ({
    get: async (req, res) => {
        const {data} = await axios.get(`/${resourse}`)
        return res.send(data)
    },
    post: async (req, res) => {
        const {data} = await axios.post(`/${resourse}`, req.body)
        return res.send(data)
    },
    put: async (req, res) => {
        const {data} = await axios.put(`/${resource}/${req.params.id}`, req.body)
        return res.send(data)
    },
    delete: async (req, res) => {
        const {data} = await axios.delete(`/${users}/${req.params.id}`)
        return res.sendStatus(204)
    },
})