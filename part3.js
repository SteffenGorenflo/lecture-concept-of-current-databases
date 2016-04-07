// NOT RUNNING CODE! THIS CODE IS ONLY RUNNABLE IN ROBOMONGO

var ain = [
    {
        name: 'rechnen',
        dozent: 'hase',
        semester: 1,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 2
    }, {
        name: 'lesen',
        dozent: 'bittel',
        semester: 2,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 1,
        ects: 10
    }, {
        name: 'malen',
        dozent: 'ruprecht',
        semester: 10,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'}
        ,
        sws: 20,
        ects: 1
    }, {
        name: 'klatschen',
        dozent: 'maier',
        semester: 2,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 10
    }, {
        name: 'programieren',
        dozent: 'eck',
        semester: 3,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 1,
        ects: 20
    }, {
        name: 'lachen',
        dozent: 'boger',
        semester: 2,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 50,
        ects: 2
    }, {
        name: 'datenbanken',
        dozent: 'johner',
        semester: 4,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 20
    }, {
        name: 'algo',
        dozent: 'drachenfels',
        semester: 5,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 10
    }, {
        name: 'c',
        dozent: 'maechtel',
        semester: 7,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 5,
        ects: 5
    }, {
        name: 'bsys',
        dozent: 'maechtel',
        semester: 8,
        studiengang: {kurzel: 'AIN', name: 'Angewandte Informatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 10
    }
];

var win = [
    {
        name: 'wirtschaftliches rechnen',
        dozent: 'hase',
        semester: 1,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 2
    }, {
        name: 'wirtschaftliches lesen',
        dozent: 'bittel',
        semester: 2,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 1,
        ects: 10
    }, {
        name: 'wirtschaftliches malen',
        dozent: 'ruprecht',
        semester: 10,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 20,
        ects: 1
    }, {
        name: 'wirtschaftliches klatschen',
        dozent: 'maier',
        semester: 2,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 10
    }, {
        name: 'wirtschaftliches programieren',
        dozent: 'eck',
        semester: 3,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 1,
        ects: 20
    }, {
        name: 'wirtschaftliches lachen',
        dozent: 'boger',
        semester: 2,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 50,
        ects: 2
    }, {
        name: 'wirtschaftliche datenbanken',
        dozent: 'johner',
        semester: 4,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 20
    }, {
        name: 'wirtschaftliche algo',
        dozent: 'drachenfels',
        semester: 5,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 10
    }, {
        name: 'wirtschaftliches c',
        dozent: 'maechtel',
        semester: 7,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 5,
        ects: 5
    }, {
        name: 'wirtschaftliches bsys',
        dozent: 'maechtel',
        semester: 8,
        studiengang: {kurzel: 'WIN', name: 'Wirtschaftsinformatik', abschluss: 'Bachelor'},
        sws: 10,
        ects: 10
    }
];

var mit = [
    {
        name: 'rechnen MASTER',
        dozent: 'hase',
        semester: 1,
        studiengang: {kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'},
        sws: 10,
        ects: 2
    }, {
        name: 'lesen MASTER',
        dozent: 'bittel',
        semester: 2,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 1,
        ects: 10
    }, {
        name: 'malen MASTER',
        dozent: 'ruprecht',
        semester: 10,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 20,
        ects: 1
    }, {
        name: 'klatschen MASTER',
        dozent: 'maier',
        semester: 2,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 10,
        ects: 10
    }, {
        name: 'programieren MASTER',
        dozent: 'eck',
        semester: 3,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 1,
        ects: 20
    }, {
        name: 'lachen MASTER',
        dozent: 'boger',
        semester: 2,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 50,
        ects: 2
    }, {
        name: 'datenbanken MASTER',
        dozent: 'johner',
        semester: 4,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 10,
        ects: 20
    }, {
        name: 'algo MASTER',
        dozent: 'drachenfels',
        semester: 5,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 10,
        ects: 10
    }, {
        name: 'c MASTER',
        dozent: 'maechtel',
        semester: 7,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 5,
        ects: 5
    }, {
        name: 'wirtschaftliches bsys',
        dozent: 'maechtel',
        semester: 8,
        studiengang: {
            kurzel: 'MIT', name: 'Informatik Master', abschluss: 'Master'
        },
        sws: 10,
        ects: 10
    }
];

db.vorlesungen.insertMany(ain);
db.vorlesungen.insertMany(win);
db.vorlesungen.insertMany(mit);
