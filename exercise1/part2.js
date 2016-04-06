// NOT RUNNING CODE! THIS CODE IS ONLY RUNNABLE IN ROBOMONGO

db.studiengang.find({abschluss: 'Bachelor'})
    .forEach(function (u) {
        print(u.kurzel)
    });


ain = db.studiengang.findOne({kurzel: 'AIN'});


db.vorlesungen
    .find(
        {
            'studiengang._id': ain._id,
            sws: {$lt: 5}
        })
    .sort({name: 1})
    .forEach(function (u) {
        print(u.name)
    });
