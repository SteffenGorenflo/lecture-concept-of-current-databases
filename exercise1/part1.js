// NOT RUNNING CODE! THIS CODE IS ONLY RUNNABLE IN ROBOMONGO

var ainID = new ObjectId();
var winID = new ObjectId();
var mitID = new ObjectId();

var studiengaenge = [
    {
        _id: ainID,
        kurzel: 'AIN',
        name: 'Angewandte Informatik',
        abschluss: 'Bachelor'
    },
    {
        _id: winID,
        kurzel: 'WIN',
        name: 'Wirtschaftsinformatik',
        abschluss: 'Bachelor'
    },
    {
        _id: mitID,
        kurzel: 'MIT',
        name: 'Informatik Master',
        abschluss: 'Master'
    }
];

var ain = [
    {
        name: 'rechnen',
        dozent: 'hase',
        semester: '1',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '10',
        ects: '2'
    }, {
        name: 'lesen',
        dozent: 'bittel',
        semester: '2',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '1',
        ects: '10'
    }, {
        name: 'malen',
        dozent: 'ruprecht',
        semester: '10',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '20',
        ects: '1'
    }, {
        name: 'klatschen',
        dozent: 'maier',
        semester: '2',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '10',
        ects: '10'
    }, {
        name: 'programieren',
        dozent: 'eck',
        semester: '3',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '1',
        ects: '20'
    }, {
        name: 'lachen',
        dozent: 'boger',
        semester: '2',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '50',
        ects: '2'
    }, {
        name: 'datenbanken',
        dozent: 'johner',
        semester: '4',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '10',
        ects: '20'
    }, {
        name: 'algo',
        dozent: 'drachenfels',
        semester: '5',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '10',
        ects: '10'
    }, {
        name: 'c',
        dozent: 'maechtel',
        semester: '7',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '5',
        ects: '5'
    }, {
        name: 'bsys',
        dozent: 'maechtel',
        semester: '8',
        studiengang: {
            '$ref': 'studiengang',
            '$id': ainID,
            '$db': 'htwg'
        },
        sws: '10',
        ects: '10'
    }
];

var win = [
    {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': winID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }
];

var mit = [
    {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }, {
        name: '',
        dozent: '',
        semester: '',
        studiengang: {
            '$ref': 'studiengang',
            '$id': mitID,
            '$db': 'htwg'
        },
        sws: '',
        ects: ''
    }
];


db.studiengang.insertMany(studiengaenge);
db.vorlesungen.insertMany(ain);
db.vorlesungen.insertMany(win);
db.vorlesungen.insertMany(mit);
