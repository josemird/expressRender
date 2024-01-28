const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('multiplicar');
  });

  router.post('/operacion', async (req, res) => {
    const { base } = req.body;
    const htmlContent = await multiplicar(base);
    res.send(htmlContent);
  });

  function multiplicar(base) {
    return new Promise((resolve) => {
        let htmlContent = '<html><head><link rel="stylesheet" href="/stylesheets/style.css"></head><body>';
        htmlContent += '<table>';
        htmlContent += '<tr><th>Base</th><th>X</th><th>Resultado</th></tr>';
        for (let i = 1; i <= 10; i++) {
            htmlContent += `<tr><td>${base}</td><td>${i}</td><td>${base * i}</td></tr>`
        }
        htmlContent += '</table>';
        htmlContent += '</body>';
        resolve(htmlContent);
    });
}



module.exports = router;