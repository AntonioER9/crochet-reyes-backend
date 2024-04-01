import * as bcrypt from 'bcrypt';

interface SeedProduct {
    description: string;
    images: string[];
    stock: number;
    price: number;
    size: ValidSizes;
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
}

type ValidSizes = 'small' | 'medium' | 'big' | 'all';
type ValidTypes = 'amigurumis' | 'tablecloths';

interface SeedUser {
    email:    string;
    fullName: string;
    password: string;
    roles:     string[];
}

interface SeedData {
    users: SeedUser[];
    products: SeedProduct[];
}

export const initialData: SeedData = {
    users: [
        {
            email: 'test1@google.com',
            fullName: 'Test One',
            password: bcrypt.hashSync( 'Abc123', 10 ),
            roles: ['admin']
        },
        {
            email: 'test2@google.com',
            fullName: 'Test Two',
            password: bcrypt.hashSync( 'Abc123', 10 ),
            roles: ['user','super']
        }
    ],

    products: [
        {
            title: "Batman pequeño",
            price: 4000,
            description: "Pequeño amigurumi de Batman de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            slug: "amigurumi_small_batman",
            stock: 1,
            size: 'small',
            tags: ['amigurumis'],
            images: [
                'batman-small-2.jpeg',
                'batman-small.jpeg',
            ],
            type: 'amigurumis',
        },
        {
            description: "Pequeño amigurumi de Hulk de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'hulk-small-2.jpg',
                'hulk-small.jpg',
            ],
            stock: 1,
            price: 4000,
            slug: "amigurumi_small_hulk",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hulk pequeño",
            size: 'small'
        },

        {
            description: "Perrito pequeño de 5 cm de alto.",
            images: [
                'perrito-small-2.jpeg',
                'perrito-small.jpeg'
            ],
            stock: 1,
            price: 4000,
            slug: "amigurumi_small_perrito",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Perrito pequeño",
            size: 'small'
        },

        {
            description: "Perro pequeño de 5 cm de alto.",
            images: [
                'perro-small.jpeg',
                'perro-small-2.jpeg',
            ],
            stock: 1,
            price: 4000,
            slug: "amigurumi_small_perro",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Perro pequeño",
            size: 'small'
        },
        {
            description: "Pequeño amigurumi de Superman de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'superman-small-2.jpeg',
                'superman-small.jpeg',
            ],
            stock: 1,
            price: 4000,
            slug: "amigurumi_small_superman",
            type: 'amigurumis',
            tags: ['shirt'],
            title: "Superman pequeño",
            size: 'small'
        },
        {
            description: "Pequeño amigurumi de la Mujer Maravilla de 5 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'wonder-woman-small.jpeg',
                'wonder-woman-small-2.jpeg',
            ],
            stock: 1,
            price: 4000,
            slug: "amigurumi_small_wonder-woman",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Mujer Maravilla pequeña",
            size: 'small'
        },
        {
            description: "Mediano amigurumi de Hermione de la gran película Harry Potter de 11 cm de alto, puedes encontrar muchos más personajes Harry Potter en nuestro sitio web.",
            images: [
                'hermione-medium-2.jpeg',
                'hermione-medium.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_hermione",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hermione de Harry Potter mediana",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Hulk de 11 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'hulk-medium-2.jpeg',
                'hulk-medium.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_hulk",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hulk mediano",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Kiko del Chavo del 8 de 11 cm de alto, puedes encontrar muchos más personajes del Chavo del 8 en nuestro sitio web.",
            images: [
                'kiko-medium-2.jpeg',
                'kiko-medium.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_kiko",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Kiko de El Chavo del 8 mediano",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de bailarina de 11 cm de alto.",
            images: [
                'juanita-medium-2.jpeg',
                'juanita-medium.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_juanita",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Bailarina Juanita mediana",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Blanca Nieves de 11 cm de alto, puedes encontrar muchos más personajes en nuestro sitio web o enviarnos una foto y lo creamos para ti.",
            images: [
                'snow-white-medium.jpeg',
                'snow-white-medium-2.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_snow_white",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Blanca Nieves mediana",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Stitch de Lilo & Stitch de 11 cm de alto, puedes encontrar muchos más personajes en nuestro sitio web o enviarnos una foto y lo creamos para ti.",
            images: [
                'stitch-medium-2.jpeg',
                'stitch-medium.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_stitch",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Sitch de Lilo & Stitch mediano",
            size: 'medium'
        },
        {
            description: "Mediano amigurumi de Pocoyo de 11 cm de alto, puedes encontrar muchos más personajes de series para niños en nuestro sitio web.",
            images: [
                'pocoyo-medium-2.jpeg',
                'pocoyo-medium.jpeg',
            ],
            stock: 1,
            price: 6000,
            slug: "amigurumi_medium_pocoyo",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Pocoyo mediano",
            size: 'medium'
        },
        {
            description: "Gran amigurumi de El Chapulín Colarado de 17 cm de alto, puedes encontrar muchos más personajes en nuestro sitio web.",
            images: [
                'chapulin-big-2.jpeg',
                'chapulin-big.jpeg',
            ],
            stock: 1,
            price: 8000,
            slug: "amigurumi_big_chapulin",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "El Chapulín Colorado Grande",
            size: 'big'
        },
        {
            description: "Gran amigurumi de Frozen de 17 cm de alto, puedes encontrar muchos más personajes en nuestro sitio web.",
            images: [
                'frozen-big-2.jpeg',
                'frozen-big.jpeg',
            ],
            stock: 1,
            price: 8000,
            slug: "amigurumi_big_frozen",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Frozen grande",
            size: 'big'
        },
        {
            description: "Gran amigurumi de Groot de 17 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'groot-big-2.jpeg',
                'groot-big.jpeg',
            ],
            stock: 1,
            price: 8000,
            slug: "amigurumi_big_groot",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Groot grande",
            size: 'big'
        },
        {
            description: "Gran amigurumi de Hulk de 17 cm de alto, puedes encontrar muchos más personajes de Marvel o DC en nuestro sitio web.",
            images: [
                'hulk-big-2.jpeg',
                'hulk-big.jpeg',
            ],
            stock: 1,
            price: 8000,
            slug: "amigurumi_big_hulk",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Hulk grande",
            size: 'big'
        },
        {
            description: "Gran amigurumi de Kiko del Chavo del 8 de 17 cm de alto, puedes encontrar muchos más personajes del Chavo del 8 en nuestro sitio web.",
            images: [
                'kiko-big-2.jpeg',
                'kiko-big.jpeg',
            ],
            stock: 1,
            price: 8000,
            slug: "amigurumi_big_kiko",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Kiko de El Chavo del 8 grande",
            size: 'big'
        },
        {
            description: "Gran amigurumi de Masha de la serie Masha y el Oso, de 17 cm de alto, puedes encontrar muchos más personajes en nuestro sitio web.",
            images: [
                'masha-big.jpeg',
                'masha-big-2.jpeg',
            ],
            stock: 1,
            price: 8000,
            slug: "amigurumi_big_masha",
            type: 'amigurumis',
            tags: ['amigurumis'],
            title: "Masha de Masha y el Oso grande",
            size: 'big'
        },
    ]
}