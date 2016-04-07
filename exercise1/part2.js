// NOT RUNNING CODE! THIS CODE IS ONLY RUNNABLE IN ROBOMONGO

db.studiengang.find({abschluss: 'Bachelor'})
    .forEach(function (u) {
        print(u.kurzel)
    });


ain = db.studiengang.findOne({kurzel: 'AIN'});


db.vorlesungen
    .find(
        {
            'studiengang.$id': ain._id,
            sws: {$lt: 5}
        })
    .sort({name: 1})
    .forEach(function (u) {
        print(u.name)
    });


db.vorlesungen
    .find({$where: 'this.sws > this.ects'})
    .forEach(function (u) {
        print(u.name)
    });

db.vorlesungen.aggregate([
        {$match: {'studiengang.$id': ain._id}},
        {$group: {_id: '$dozent', sws: {$sum: '$sws'}}},
        {$sort: {sws: -1}},
        //  {$limit: 1}
    ])
    .forEach(function (u) {
        print(u._id +' --> ' + u.sws + ' SWS')
    });