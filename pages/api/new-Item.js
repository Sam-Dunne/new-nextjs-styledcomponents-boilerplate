// /api/new-item

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, message, location} = data;
    }
}

export default handler;