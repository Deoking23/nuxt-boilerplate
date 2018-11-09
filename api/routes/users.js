const { Router } = require('express')

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Abigail' },
  { name: 'Bishop' },
  { name: 'Catherine' },
  { name: 'Cherie' },
  { name: 'Deva' },
  { name: 'Duke' },
  { name: 'Esteban' },
  { name: 'Sébastien' }
]

/* GET listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

module.exports = router
