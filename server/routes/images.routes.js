import {Router} from 'express'

const router = Router()

router.post('/api/images/upload', async (req, res) => {

    const{ file } = req.files;
    console.log(req.files)

  return res.json('Received')
})

router.get('/api/images', async (req, res) => {})

router.get('/api/images/:id', async (req, res) => {})

router.delete('/api/images/:id', async (req, res) => {})

export default router