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
            "Co-op",
            "Survival",
            "Sandbox"
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
        "description": "Казуальщина"
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
    },
    {
        "title": "Painkiller Overdose",
        "image": "https://cdn.vkplay.ru/pre_600x315_crop/hotbox/showcase/gamelocale/picture_horizontal/45060-h-images-8-6-a-0_dPvT2NPt_23470_3.jpg?quality=85",
        "myRating": 8.5,
        "steamRating": 7.0,
        "timesCompleted": 2,
        "genres": [
            "Action",
            "Shooter"
        ],
        "description": ""
    },
    {
        "title": "Sons of The Forest",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1326470/header.jpg",
        "myRating": 8.0,
        "steamRating": 8.8,
        "timesCompleted": 3,
        "genres": [
            "Horror",
            "Open-World",
            "Co-op",
            "Survival",
            "Sandbox"
        ],
        "description": "-1 балл за ужасную оптимизацию\n-1 балл за превращение сюжета в к***...***(no spoilers) бред"
    },
    {
        "title": "Terraria",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.8,
        "timesCompleted": 4,
        "genres": [
            "Action",
            "Co-op",
            "Survival",
            "Sandbox"
        ],
        "description": "Мне лично менее интересней становиться играть при переходе в hardmod, из-за этого и снижаю 0.5 балла"
    },
    {
        "title": "Orion",
        "image": "https://i.ytimg.com/vi/XNWpiuJUji0/maxresdefault.jpg",
        "myRating": 8.8,
        "steamRating": 9.4,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Adventure",
            "Flash",
            "Sandbox"
        ],
        "description": ""
    },
    {
        "title": "Clair Obscur: Expedition 33",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1903340/header.jpg",
        "myRating": 2.5,
        "steamRating": 9.5,
        "timesCompleted": 3,
        "genres": [
            "RPG",
            "Action",
            "Adventure",
            "Strategy"
        ],
        "description": "Проще перечислить плюсы чем минусы:\n+0.5 балла за музыку в моментах норм, но бывает и хуйня, а также как будто нейронка\n+1 балл за тянок\n+0.5 за прокачку\n+0.5 за сюжет (он на любителя)\n\nИз минусов: Ужасная оптимизация"
    },
    {
        "title": "Resident Evil Requiem",
        "image": "https://i.ytimg.com/vi/tDL4kqvMk6c/maxresdefault.jpg",
        "myRating": 9.5,
        "steamRating": 9.6,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Shooter",
            "Horror",
            "Stealth",
            "Puzzle"
        ],
        "description": "Ахуенная оптимизация (кроме поднятия предметов на осмотр, там шейдеры грузятся динамически), в моментах прохождения особенно за Леона бывает рутина, хорошая игра но немного не дотянула до шедевра (хз как объяснить)"
    },
    {
        "title": "Resident Evil 6",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/221040/header.jpg",
        "myRating": 9.0,
        "steamRating": 7.9,
        "timesCompleted": 4,
        "genres": [
            "Action",
            "Shooter",
            "Horror",
            "Puzzle",
            "Co-op"
        ],
        "description": "-1 балл за некрасивые переработанные зачем-то лица главных героев...\n\nСюжет один, разделенный на всех персонажей, за каждого сыграть чтобы полную картину увидеть. Понравился саундтрек"
    },
    {
        "title": "Resident Evil 2 Remake",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg",
        "myRating": 9.0,
        "steamRating": 9.7,
        "timesCompleted": 3,
        "genres": [
            "Action",
            "Shooter",
            "Horror",
            "Puzzle"
        ],
        "description": "-0.5 балл за уебищные лица главных персонажей кроме разве-что Ады и шефа\n-0.5 за деревянность персонажей"
    },
    {
        "title": "Minecraft",
        "image": "https://avatars.mds.yandex.net/get-mpic/4497593/2a0000018ac0f03505f920764b68da831580/orig",
        "myRating": 5.0,
        "steamRating": 8.2,
        "timesCompleted": 0,
        "genres": [
            "Adventure",
            "Open-World",
            "Survival",
            "Sandbox"
        ],
        "description": "Тупая хуета для аутистов, плохая оптимизация"
    },
    {
        "title": "Reservoir Dogs",
        "image": "https://i.ytimg.com/vi/GvdHFizgz0g/maxresdefault.jpg",
        "myRating": 7.0,
        "steamRating": 7.3,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Shooter",
            "Racing"
        ],
        "description": ""
    },
    {
        "title": "Black Myth: Wukong",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",
        "myRating": 3.0,
        "steamRating": 9.6,
        "timesCompleted": 3,
        "genres": [
            "Action",
            "Souls-like"
        ],
        "description": "Тупая хуета для аутистов, обезьянка кунфу, плохая оптимизация"
    },
    {
        "title": "Death Stranding",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/header.jpg",
        "myRating": 1.5,
        "steamRating": 9.3,
        "timesCompleted": 3,
        "genres": [
            "Open-World"
        ],
        "description": "СЖВ дерьмо, тупейший бред, гемплей за курьера"
    },
    {
        "title": "The Last of Us Part I",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg",
        "myRating": 9.2,
        "steamRating": 8.4,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Adventure",
            "Shooter",
            "Stealth"
        ],
        "description": "-0.5 балла за хуевую оптимизацию но fsr с frame generation спасает ситуацию\n-0.3 за один лгбт момент\n\nМного смешных багов в ютубе есть, но в моем прохождение все было норм"
    },
    {
        "title": "The Last of Us Part 2 Remastered",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2531310/header.jpg",
        "myRating": 7.0,
        "steamRating": 9.1,
        "timesCompleted": 1,
        "genres": [
            "Action",
            "Adventure",
            "Shooter",
            "Stealth"
        ],
        "description": "-1 балл за ужасную оптимизацию (но с патчем инструкций проца + fsr и frame generation +- можно играть, но придется загружать заново загружать вручную сегменты локаций, так как теперь шейдеры динамично-статические)\n\n-1 балл за много лгбт\n\n-1 балл за испорченную концовку хотя можно было раньше закончить = +-happy end\n\nМного смешных багов в ютубе есть, но в моем прохождение все было норм"
    },
    {
        "title": "Total Overdose",
        "image": "https://avatars.mds.yandex.net/i?id=9ed5423743ca629d6935ab1d9886520a_l-8352896-images-thumbs&n=13",
        "myRating": 8.5,
        "steamRating": 7.4,
        "timesCompleted": 2,
        "genres": [
            "Action",
            "Shooter",
            "Open-World",
            "GTA-like"
        ],
        "description": ""
    },
    {
        "title": "POSTAL 2",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/223470/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.7,
        "timesCompleted": 4,
        "genres": [
            "Action",
            "Shooter",
            "Open-World",
            "Co-op"
        ],
        "description": "-0.5 балла за плохую оптимизацию и древний движок"
    },
    {
        "title": "Left 4 Dead",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/500/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.6,
        "timesCompleted": -1,
        "genres": [
            "Action",
            "Shooter"
        ],
        "description": "-0.5 за супер низкий airaccelerate что юнреал норм мувмить.\nМало ru серваков"
    },
    {
        "title": "Left 4 Dead 2",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg",
        "myRating": 9.5,
        "steamRating": 9.8,
        "timesCompleted": -1,
        "genres": [
            "Action",
            "Shooter"
        ],
        "description": "-0.5 за супер низкий airaccelerate что юнреал норм мувмить.\nМало ru серваков"
    },
    {
        "title": "Grounded",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/962130/header.jpg",
        "myRating": 9.1,
        "steamRating": 9.1,
        "timesCompleted": 4,
        "genres": [
            "Adventure",
            "Open-World",
            "Strategy",
            "Co-op",
            "Survival",
            "Sandbox"
        ],
        "description": "Оптимизация пойдет, слишком дохуя жрать и пить надо = бьет по скорости прохождения, также банят аккаунты в misrosoft, без них нельзя и ссанный xbox скачивать, вместо просто по LAN или Steam, слишком люто защищать хуйни одни надо (в креативе дефали), поставлю крч оценку как и в Steam."
    },
    {
        "title": "Grounded 2",
        "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2661300/a9f02144893a4bad56c7333c068e9ae2e28da52d/capsule_616x353.jpg?t=1770077103",
        "myRating": 5.0,
        "steamRating": 8.2,
        "timesCompleted": 0,
        "genres": [
            "Adventure",
            "Open-World",
            "Strategy",
            "Co-op",
            "Survival",
            "Sandbox"
        ],
        "description": "-2 балла за супер хуевую оптимизацию\n-1 балл за множество багов\n-1 балл за сжв дерьмо\n-1 балл за то что нихуя не интересно все почти одно и тоже как будто в первую часть играешь но хуевую ещё\n\nP.S. Мне пох что это ранний доступ."
    },
    {
        "title": "Portal 1",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg",
        "myRating": 9.9,
        "steamRating": 9.9,
        "timesCompleted": 1,
        "genres": [
            "Puzzle"
        ],
        "description": ""
    },
    {
        "title": "Portal 2",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
        "myRating": 9.9,
        "steamRating": 9.9,
        "timesCompleted": 4,
        "genres": [
            "Puzzle",
            "Co-op"
        ],
        "description": ""
    },
    {
        "title": "Portal Knights",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/374040/header.jpg",
        "myRating": 8.5,
        "steamRating": 8.4,
        "timesCompleted": 4,
        "genres": [
            "RPG",
            "Adventure",
            "Sandbox"
        ],
        "description": ""
    },
    {
        "title": "Dungeon Defenders",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/65800/header.jpg",
        "myRating": 9.3,
        "steamRating": 9.3,
        "timesCompleted": 1,
        "genres": [
            "Strategy",
            "Co-op",
            "Survival"
        ],
        "description": ""
    },
    {
        "title": "Lost Magic",
        "image": "https://shara-games.ru/339-lost-magic.jpg",
        "myRating": 5.0,
        "steamRating": 6.9,
        "timesCompleted": -1,
        "genres": [
            "RPG",
            "Adventure"
        ],
        "description": "-1 балл за мертвый онлайн\n-1 балл на похуизм разраба\n-1 балл за баги\n-1 балл за выкачку денег донатом, урезает все тем самым мотивирую тратиться\n-1 балл за превращение в mobile дерьмище в Steam\n\nЕсли и хотите попробовать то ищите десктопный клиент на сайте или хз где архивом, потому что в Steam просто рыгатня. Но играть не получится так как она рассчитана на кооп но онлайн практически нулевой = донать (много) или 999 часов фармись"
    },
    {
        "title": "Plants vs. Zombies",
        "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3590/header.jpg",
        "myRating": 10.0,
        "steamRating": 9.8,
        "timesCompleted": 2,
        "genres": [
            "Strategy",
            "Survival"
        ],
        "description": ""
    }
];