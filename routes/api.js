const express = require('express');

const router = express.Router();

const ProjectPost = require('../models/projectPost'); //data schema

//Routes

router.get('/intro', async(req, res) => {
    
    ProjectPost.find({type: 'introduction'})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataError)
        });   
});

router.get('/experience', async(req, res) => {
    
    ProjectPost.find({type: 'experience'})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataError)
        });   
});

//Route for retrieving
router.get('/projects', async(req, res) => {
   
    ProjectPost.find({type: 'projects'})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataError)
        });
});

router.get('/quick-view', async(req, res) => {
   
    ProjectPost.find({tag: ['quick-view']})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataError)
        });
});


// router.get('/devtest', (req, res) => {
//     const data = {
//         index: 1,
//         title: 'devtest example'
//     };
//     res.json(data);
// });

router.get('/devtest', (req, res) => {
    
    ProjectPost.find({type: 'devtest'})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataError)
        });
});



//route for posting data
router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    // //test data
    // const data = {
    //     index: 1,
    //     title: 'API save example'  
    // };
    const data = req.body;

    //ProjectPost
    const newProjectPost = new ProjectPost(data); //instance of model

    // newProjectPost.save((error) => {
    //     if (error) {
    //         //console.log('Error custom message');
    //         res.status(500).json({ msg: 'Sorry, internal server errors'});
    //     } else {
    //         //console.log('Data has been saved!!');
    //         res.json({ msg: 'Data has been saved!!'}); //by default res.status(200)
    //     }
    // });

    newProjectPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors'});
            return;
        }
        //ProjectPost
        return res.json({ msg: 'Data has been saved!!'}); //by default res.status(200)
        
    });
});

module.exports = router;