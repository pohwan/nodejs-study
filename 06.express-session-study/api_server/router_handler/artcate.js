const db = require('../db/index') 

// Get article categories logic
exports.getArtCates = (req, res) => {
  // define sql
  const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
  db.query(sql, (err, results) => {
    if(err) {
      return res.cc(err)
    }
    res.send({
      status: 0,
      message: 'Get article category success!',
      data: results
    })
  })
}

// Add category logic
exports.addCates = (req, res) => {
  // define sql to check results
  const sql = 'select * from ev_article_cate where name=? or alias=?'
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    if(err) {
      return res.cc(err)
    }
    // check if all conditions met (name and alias found)
    if(results.length === 2) {
      return res.cc('Article category name and alias been used. Please change and retry!')
    }

    // check if 1 of the conditions met (either name or alias)
    // Name and alias been used
    if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
      return res.cc('Article category name and alias been used. Please change and retry!')
    }

    // Name been used
    if(results.length === 1 && results[0].name === req.body.name) {
      return res.cc('Article category name been used. Please change and retry!')
    }

    // Alias been used
    if(results.length === 1 && results[0].alias === req.body.alias) {
      return res.cc('Article category alias been used. Please change and retry!')
    }

    // Name and alias not been used, can execute insert statement.
    const sql = 'insert into ev_article_cate set ?'
    db.query(sql, req.body, (err, results) => {
      if(err) {
        return res.cc(err)
      }
      
      if(results.affectedRows !== 1) {
        return res.cc('Failed to add new article category')
      }

      res.cc('Add article category success!', 0)
    })
  })
}

// Delete article category by ID logic
exports.deleteCateById = (req, res) => {
  // define sql
  const sql = 'update ev_article_cate set is_delete=1 where id=?'
  db.query(sql, [req.params.id], (err, results) => {
    if(err) {
      return res.cc(err)
    }
    if(results.affectedRows !== 1) {
      return res.cc('Failed to delete article category')
    }
    res.cc('Delete article category success!', 0)
  })
}

// Get article category by ID logic
exports.getArtCateById = (req, res) => {
  const sql = 'select * from ev_article_cate where id=?'
  db.query(sql, [req.params.id], (err, results) => {
    if(err) {
      return res.cc(err)
    }
    if(results.length !== 1) {
      return res.cc('Fail to get article category')
    }
    res.send({
      status: 0,
      message: 'Get article category success!',
      data: results[0]
    })
  })
}

// Update article category by ID logic
exports.updateCateById = (req, res) => {
  // This is to check whether any results other from the ID want to update have duplicate name and alias.
  const sql = 'select * from ev_article_cate where id<>? and (name=? or alias=?)'

  db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
    if(err) {
      return res.cc(err)
    }

    // check if all conditions met (name and alias found)
    if(results.length === 2) {
      return res.cc('Article category name and alias been used. Please change and retry!')
    }

    // check if 1 of the conditions met (either name or alias)
    // Name and alias been used
    if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
      return res.cc('Article category name and alias been used. Please change and retry!')
    }

    // Name been used
    if(results.length === 1 && results[0].name === req.body.name) {
      return res.cc('Article category name been used. Please change and retry!')
    }

    // Alias been used
    if(results.length === 1 && results[0].alias === req.body.alias) {
      return res.cc('Article category alias been used. Please change and retry!')
    }

    const sql = 'update ev_article_cate set ? where id=?'
    db.query(sql, [req.body, req.body.id], (err, results) => {
      if(err) {
        return res.cc(err)
      }

      if(results.affectedRows !== 1) {
        return res.cc('Failed to update article category!')
      }

      res.cc('Update article category success!', 0)
    })
  })
}