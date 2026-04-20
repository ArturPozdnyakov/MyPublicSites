const games = [
    {
        "title": "GTA: Vice City - Definitive Edition",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/12110/header.jpg",
        "myRating": 10.0,
        "steamRating": 8.2,
        "genres": [
            "Action",
            "Shooter",
            "GTA-like",
            "Open-World"
        ],
        "description": "Моя любимая часть гта + достойный ремейк",
        "timesCompleted": 2
    },
    {
        "title": "GTA 3 - Definitive Edition",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/12100/header.jpg",
        "myRating": 5.0,
        "steamRating": 6.6,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Open-World",
            "Shooter",
            "GTA-like"
        ],
        "description": "Говно город, тупой сюжет, бесила много, не зашло крч"
    },
    {
        "title": "GTA San Andreas",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/12120/header.jpg",
        "myRating": 9.2,
        "steamRating": 9.2,
        "timesCompleted": 2,
        "genres": [
            "Action",
            "Shooter",
            "Open-World",
            "GTA-like"
        ],
        "description": "Согласен с мнением стим оценки, хорошая игрушка"
    },
    {
        "title": "GTA IV",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/12210/header.jpg",
        "myRating": 8.0,
        "steamRating": 8.3,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Shooter",
            "Open-World",
            "GTA-like"
        ],
        "description": "Физика не очень зашла"
    },
    {
        "title": "GTA 5",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        "myRating": 5.0,
        "steamRating": 8.8,
        "timesCompleted": 0,
        "genres": [
            "Action",
            "Shooter",
            "Open-World",
            "GTA-like"
        ],
        "description": "Хуйня, физика дерьмо, сюжет тупой, русской озвучки даже нет"
    },
    {
        "title": "CS 1.6",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/10/header.jpg",
        "myRating": 10.0,
        "steamRating": 9.7,
        "timesCompleted": -1,
        "genres": [
            "Shooter"
        ],
        "description": "Умирающая легенда"
    },
    {
        "title": "Sifu",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2138710/header.jpg",
        "myRating": 8.8,
        "steamRating": 9.2,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Souls-like",
            "Slasher"
        ],
        "description": "-1 балл за тупую прокачку которой нет\n-0.2 балла за микро-фризы какие-то местами"
    },
    {
        "title": "F.E.A.R",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/21090/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.4,
        "timesCompleted": 2,
        "genres": [
            "Action",
            "Shooter",
            "Horror"
        ],
        "description": "Старая легенда"
    },
    {
        "title": "Elden Ring",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        "myRating": 6.5,
        "steamRating": 9.3,
        "timesCompleted": 1,
        "genres": [
            "Open-World",
            "Souls-like"
        ],
        "description": "-1 балл за ужасную оптимизацию, пришлось качать мод на fsr\n\n-1 балл за то что очень мало подсказок и т.д. просто бегай себе как дурачек 999 лет по открытому миру, проходил с модами и трейнерами чтобы хоть как-то облегчить себе игру, наиграл часов 45 где-то, dlc не стал проходить\n\n-1 балл за различные баги (например мобы бьют сквозь стены)\n-0.5 балла за повторящихся боссов..."
    },
    {
        "title": "DARK SOULS: REMASTERED",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg",
        "myRating": 6.0,
        "steamRating": 9.2,
        "timesCompleted": 0,
        "genres": [
            "Open-World",
            "Souls-like"
        ],
        "description": "-1 балл за сюжет хуйни и загадочность\n-1 балл за неадекватную сложность и тупой баланс\n\n-1 балл за то что в игре стремно и мерзко находиться, неприятно одним словом\n-1 балл за различные баги (например мобы бьют сквозь стены)"
    },
    {
        "title": "DARK SOULS 3",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg",
        "myRating": 8.0,
        "steamRating": 9.4,
        "timesCompleted": 0,
        "genres": [
            "Open-World",
            "Souls-like"
        ],
        "description": "-1 балл за то что в игре мерзко и стремно находится, неприятно одним словом\n\n-1 балл за различные баги (например мобы бьют сквозь стены)\n\nСтоит начинать играть именно с этой части, так как прошлые кусок дерьма, а эта уже почти как elden ring"
    },
    {
        "title": "DOOM Eternal",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg",
        "myRating": 9.1,
        "steamRating": 9.1,
        "timesCompleted": 0,
        "genres": [
            "Action",
            "Shooter"
        ],
        "description": "Тупой шутан но так и задумовалось"
    },
    {
        "title": "Lies Of P",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg",
        "myRating": 10.0,
        "steamRating": 9.2,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Open-World",
            "Souls-like"
        ],
        "description": "Лучший souls-like ever, 99% времени кайфовал, DLC также прошел."
    },
    {
        "title": "CS GO",
        "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4465480/b6bfe84a1f225e5ace116504231e4193da50154b/ss_b6bfe84a1f225e5ace116504231e4193da50154b.1920x1080.jpg?t=1774635693",
        "myRating": 8.0,
        "steamRating": 8.6,
        "timesCompleted": -1,
        "genres": [
            "Action",
            "Shooter"
        ],
        "description": "-1 балл за отсутствие античита\n-1 балл за кривую регистрацию пуль"
    },
    {
        "title": "CS 2",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        "myRating": 6.0,
        "steamRating": 8.5,
        "timesCompleted": -1,
        "genres": [
            "Action",
            "Shooter"
        ],
        "description": "-1 балл за оптимизацию хуйни\n-1 балл за кривую регистрацию пуль\n-1 балл за отсутствие античита\n-1 балл за то что убрали звания, теперь только донатить на прайм"
    },
    {
        "title": "Dying Light: The Beast",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3008130/header.jpg",
        "myRating": 5.5,
        "steamRating": 8.8,
        "timesCompleted": 4,
        "genres": [
            "RPG",
            "Action",
            "Shooter",
            "Open-World",
            "Co-op"
        ],
        "description": "CЖВ дерьмо, плохая оптимизация, баги, кривые анимации"
    },
    {
        "title": "Dying Light & The Following",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg",
        "myRating": 10.0,
        "steamRating": 9.5,
        "timesCompleted": 2,
        "genres": [
            "RPG",
            "Action",
            "Shooter",
            "Open-World",
            "Co-op"
        ],
        "description": ""
    },
    {
        "title": "Dying Light 2: Stay Human",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/534380/header.jpg",
        "myRating": 9.0,
        "steamRating": 8.0,
        "timesCompleted": 4,
        "genres": [
            "RPG",
            "Action",
            "Shooter",
            "Open-World",
            "Co-op"
        ],
        "description": ""
    },
    {
        "title": "Lollipop Chainsaw RePOP",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2658450/header.jpg",
        "myRating": 9.8,
        "steamRating": 8.8,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Slasher"
        ],
        "description": ""
    },
    {
        "title": "The Forest",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg",
        "myRating": 9.3,
        "steamRating": 9.6,
        "timesCompleted": 4,
        "genres": [
            "Action",
            "Horror",
            "Open-World",
            "Co-op"
        ],
        "description": "-0.2 балла за мини-баги\n-0.5 балла за то что моментами rtx-видюху грузило на 100% несколько минут"
    },
    {
        "title": "Mirror's Edge",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/17410/header.jpg",
        "myRating": 9.0,
        "steamRating": 8.8,
        "timesCompleted": 0,
        "genres": [
            "Action",
            "Adventure",
            "Open-World"
        ],
        "description": ""
    },
    {
        "title": "Alice Madness Returns",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/19680/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.0,
        "timesCompleted": 2,
        "genres": [
            "Action",
            "Adventure",
            "Slasher",
            "Puzzle"
        ],
        "description": ""
    },
    {
        "title": "American McGee’s Alice",
        "image": "https://images.steamusercontent.com/ugc/315622114450516179/B761A0BCD2736640D30B249D6108461F39D6FFD5/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",
        "myRating": 9.5,
        "steamRating": 6.4,
        "timesCompleted": 3,
        "genres": [
            "Action",
            "Adventure",
            "Horror",
            "Slasher",
            "Puzzle"
        ],
        "description": ""
    },
    {
        "title": "Borderlands 2",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg",
        "myRating": 8.0,
        "steamRating": 9.0,
        "timesCompleted": 1,
        "genres": [
            "RPG",
            "Action",
            "Shooter",
            "Co-op"
        ],
        "description": "Фантастическая казуальность"
    },
    {
        "title": "Thymesia",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1343240/header.jpg",
        "myRating": 8.8,
        "steamRating": 8.3,
        "timesCompleted": 1,
        "genres": [
            "RPG",
            "Action",
            "Souls-like"
        ],
        "description": ""
    },
    {
        "title": "Saints Row: The Third",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/55230/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.6,
        "timesCompleted": 4,
        "genres": [
            "Action",
            "Shooter",
            "Open-World",
            "GTA-like",
            "Co-op"
        ],
        "description": "-0.5 балла за то что иногда не хотело заходить в лобби к кенту"
    },
    {
        "title": "The Simpsons: Hit and Run",
        "image": "https://avatars.mds.yandex.net/i?id=44fee98e2bd9f34f915f3846c9237643_l-5194765-images-thumbs&n=13",
        "myRating": 9.5,
        "steamRating": 8.6,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Adventure",
            "Open-World",
            "GTA-like",
            "Racing"
        ],
        "description": ""
    },
    {
        "title": "Saints Row 4",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/206420/header.jpg",
        "myRating": 6.0,
        "steamRating": 8.8,
        "timesCompleted": 0,
        "genres": [
            "RPG",
            "Action",
            "Shooter",
            "Open-World",
            "GTA-like",
            "Co-op"
        ],
        "description": "Оптимизация не очень, слишком фанстастика"
    }
];