const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");
const AccountModel = require("../models/accountModel");
const UserModel = require("../models/userModel");
const BlogModel = require("../models/blogModel");
const CourseModel = require("../models/courseModel");
const ConversationModel = require("../models/conversationModel");
const InvoiceModel = require("../models/invoiceModel");

const password = "password@1234";

async function createStaticData() {
    const userIds = Array.from(
        { length: 25 },
        () => new mongoose.Types.ObjectId()
    );
    const blogsIds = Array.from(
        { length: 50 },
        () => new mongoose.Types.ObjectId()
    );
    const accountIds = Array.from(
        { length: 25 },
        () => new mongoose.Types.ObjectId()
    );
    const courseIds = Array.from(
        { length: 20 },
        () => new mongoose.Types.ObjectId()
    );
    const conversationIds = Array.from(
        { length: 20 },
        () => new mongoose.Types.ObjectId()
    );
    const invoiceIds = Array.from(
        { length: 34 },
        () => new mongoose.Types.ObjectId()
    );
    const account = [
        {
            _id: accountIds[0],
            userId: userIds[0],
            email: "admin@gmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["admin", "instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-07T06:19:22.000Z"),
            updated_at: new Date("2024-01-07T06:19:22.000Z"),
        },
        {
            _id: accountIds[1],
            userId: userIds[1],
            email: "Finn93@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-16T09:28:30.000Z"),
            updated_at: new Date("2024-01-16T09:28:30.000Z"),
        },
        {
            _id: accountIds[2],
            userId: userIds[2],
            email: "Destini.Cassin@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-25T11:10:34.000Z"),
            updated_at: new Date("2024-01-25T11:10:34.000Z"),
        },
        {
            _id: accountIds[3],
            userId: userIds[3],
            email: "Queenie_Cruickshank72@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-02T11:01:32.000Z"),
            updated_at: new Date("2024-01-02T11:01:32.000Z"),
        },
        {
            _id: accountIds[4],
            userId: userIds[4],
            email: "Kelley.Hessel@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-03T16:37:57.000Z"),
            updated_at: new Date("2024-01-03T16:37:57.000Z"),
        },
        {
            _id: accountIds[5],
            userId: userIds[5],
            email: "Sebastian.Weissnat@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-25T04:14:00.000Z"),
            updated_at: new Date("2024-01-25T04:14:00.000Z"),
        },
        {
            _id: accountIds[6],
            userId: userIds[6],
            email: "Ardith_DAmore@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-14T19:05:31.000Z"),
            updated_at: new Date("2024-01-14T19:05:31.000Z"),
        },
        {
            _id: accountIds[7],
            userId: userIds[7],
            email: "Hester25@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-23T07:15:17.000Z"),
            updated_at: new Date("2024-01-23T07:15:17.000Z"),
        },
        {
            _id: accountIds[8],
            userId: userIds[8],
            email: "Bethany50@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-03T11:06:49.000Z"),
            updated_at: new Date("2024-01-03T11:06:49.000Z"),
        },
        {
            _id: accountIds[9],
            userId: userIds[9],
            email: "Akeem.Armstrong@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-11T08:30:57.000Z"),
            updated_at: new Date("2024-01-11T08:30:57.000Z"),
        },
        {
            _id: accountIds[10],
            userId: userIds[10],
            email: "Arthur.Beer1@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-03T21:33:38.000Z"),
            updated_at: new Date("2024-01-03T21:33:38.000Z"),
        },
        {
            _id: accountIds[11],
            userId: userIds[11],
            email: "Clarabelle_Hauck94@gmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-15T19:20:59.000Z"),
            updated_at: new Date("2024-01-15T19:20:59.000Z"),
        },
        {
            _id: accountIds[12],
            userId: userIds[12],
            email: "Vincenzo.Friesen-Kuhic@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-12T08:56:37.000Z"),
            updated_at: new Date("2024-01-12T08:56:37.000Z"),
        },
        {
            _id: accountIds[13],
            userId: userIds[13],
            email: "Dena.Lemke-Towne@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-20T15:43:55.000Z"),
            updated_at: new Date("2024-01-20T15:43:55.000Z"),
        },
        {
            _id: accountIds[14],
            userId: userIds[14],
            email: "Enos_Mayer22@gmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-29T03:11:06.000Z"),
            updated_at: new Date("2024-01-29T03:11:06.000Z"),
        },
        {
            _id: accountIds[15],
            userId: userIds[15],
            email: "Muhammad6@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-22T06:06:20.000Z"),
            updated_at: new Date("2024-01-22T06:06:20.000Z"),
        },
        {
            _id: accountIds[16],
            userId: userIds[16],
            email: "Elise7@gmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-19T04:47:42.000Z"),
            updated_at: new Date("2024-01-19T04:47:42.000Z"),
        },
        {
            _id: accountIds[17],
            userId: userIds[17],
            email: "Heather.OHara@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-15T05:18:21.000Z"),
            updated_at: new Date("2024-01-15T05:18:21.000Z"),
        },
        {
            _id: accountIds[18],
            userId: userIds[18],
            email: "Aryanna.Prohaska@gmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-01T15:49:25.000Z"),
            updated_at: new Date("2024-01-01T15:49:25.000Z"),
        },
        {
            _id: accountIds[19],
            userId: userIds[19],
            email: "Verner77@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-27T02:41:43.000Z"),
            updated_at: new Date("2024-01-27T02:41:43.000Z"),
        },
        {
            _id: accountIds[20],
            userId: userIds[20],
            email: "Murl38@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-24T07:31:04.000Z"),
            updated_at: new Date("2024-01-24T07:31:04.000Z"),
        },
        {
            _id: accountIds[21],
            userId: userIds[21],
            email: "Ilene81@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-06T06:06:12.000Z"),
            updated_at: new Date("2024-01-06T06:06:12.000Z"),
        },
        {
            _id: accountIds[22],
            userId: userIds[22],
            email: "Turner.Reilly@yahoo.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-15T01:26:46.000Z"),
            updated_at: new Date("2024-01-15T01:26:46.000Z"),
        },
        {
            _id: accountIds[23],
            userId: userIds[23],
            email: "Rhea_Miller87@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-05T07:21:17.000Z"),
            updated_at: new Date("2024-01-05T07:21:17.000Z"),
        },
        {
            _id: accountIds[24],
            userId: userIds[24],
            email: "Liliana.Auer89@hotmail.com",
            password: await bcrypt.hash(password, 10),
            role: ["instructor", "user"],
            loginType: "email_and_password_login",
            created_at: new Date("2024-01-08T17:46:52.000Z"),
            updated_at: new Date("2024-01-08T17:46:52.000Z"),
        },
    ];
    const user = [
        {
            _id: userIds[0],
            accountId: accountIds[0],
            name: "Admin",
            description:
                "Sollers depopulo appono terror modi dolore. Titulus aegrotatio demoror. Cohibeo doloribus tendo aurum corporis tempus truculenter conscendo aegrus confero. Creator adeptio dedecor libero damnatio officia solus. Valens odit abduco uxor amor baiulus. Clibanus animi illo adamo angustus cruentus virgo votum adamo. Eius copiose bonus adficio canonicus compono minus vulpes creta. Corona charisma subseco utilis ocer. Abeo artificiose quis cunae. Tepesco depulso possimus umbra. Vivo antiquus solium uberrime adeptio vito. Tantum debilito defetiscor. Cinis doloribus sui. Credo solio ventito sunt. Currus ager vobis.",
            courses_saved: [courseIds[4], courseIds[8]],
            courses_published: [
                courseIds[0],
                courseIds[1],
                courseIds[2],
                courseIds[3],
            ],
            courses_enrolled: [],
            blogs_published: [blogsIds[0], blogsIds[1], blogsIds[2], blogsIds[3]],
            blogs_saved: [blogsIds[16], blogsIds[20]],
            courses_conversation: [
                conversationIds[0],
                conversationIds[1],
                conversationIds[2],
                conversationIds[3],
            ],
            created_at: new Date("2024-01-18T14:01:04.000Z"),
            updated_at: new Date("2024-01-18T14:01:04.000Z"),
        },
        {
            _id: userIds[1],
            accountId: accountIds[1],
            name: "Kyle Rice",
            description:
                "Quisquam compono amissio molestias unus. Vomer dicta illo certus volo cervus concedo truculenter curis amplus. Atavus repudiandae depromo caelestis. Vinculum carbo cunctatio causa despecto abundans voluptatum carpo. Ambitus reiciendis unde attonbitus. Usitas cavus arto peior animus. Patria quas pauci aggredior. Dolor cerno vaco autem accendo conicio. Tempus summopere terra ceno fugiat vinco acer decretum creta. Ocer usus currus aspicio. Coaegresco adhaero combibo curtus compello vero quis audax ustilo. Tabgo canto vester termes. Voco carcer commemoro eius vestrum tabesco careo antiquus turbo vix. Ventito delinquo cauda. Cohibeo acies titulus cursus summisse.",
            courses_saved: [courseIds[2], courseIds[5], courseIds[10]],
            courses_published: [],
            courses_enrolled: [courseIds[0]],
            blogs_published: [blogsIds[4], blogsIds[40]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [conversationIds[0]],
            created_at: new Date("2024-01-26T01:59:30.000Z"),
            updated_at: new Date("2024-01-26T01:59:30.000Z"),
        },
        {
            _id: userIds[2],
            accountId: accountIds[2],
            name: "Naomi McKenzie",
            description:
                "Voluptate debeo suadeo aspernatur audeo correptius deputo totidem voveo. Verecundia autus unde antepono tamdiu taedium labore saepe contigo. Tempus acquiro delectus ustulo copiose tergeo cras. Vomer thesaurus laborum minima depono attollo succedo adsuesco adfero. Auxilium auditor eos benigne absorbeo adflicto consuasor carmen decerno. Caste subiungo voco pax voluntarius cetera turbo terminatio varius. Culpo tenetur damnatio. Uterque vallum civitas complectus commodi id. Officia doloremque numquam deorsum audentia dapifer umerus vomer tactus. Undique sublime temeritas solio tametsi crudelis peior. Verumtamen contego collum suasoria ex deporto paens calculus. Desparatus color adsuesco. Verumtamen amplus vicinus alius vis casus vetus. Aspicio campana quod itaque viridis amor tyrannus torrens aestas facilis. Sublime utilis nam vilis accedo officia aedificium earum casso.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[0], courseIds[1], courseIds[2]],
            blogs_published: [blogsIds[5], blogsIds[41]],
            blogs_saved: [blogsIds[15], blogsIds[30]],
            courses_conversation: [
                conversationIds[0],
                conversationIds[1],
                conversationIds[2],
            ],
            created_at: new Date("2024-01-28T17:26:30.000Z"),
            updated_at: new Date("2024-01-28T17:26:30.000Z"),
        },
        {
            _id: userIds[3],
            accountId: accountIds[3],
            name: "Fernando Hintz",
            description:
                "Accommodo corpus strues amoveo. Textus titulus sonitus animus xiphias teneo sumo studio. Blandior tepesco cunae cui. Aspicio correptius crebro. Ait subiungo armarium bestia tyrannus nesciunt cultellus possimus cinis. Error clamo facilis torrens. Demo adversus aurum impedit inflammatio baiulus vesco sui. Subvenio magni vito benevolentia collum antiquus degero vorax. Asperiores sordeo via virtus repellat benigne bonus video. Ascisco uberrime consuasor non capillus somniculosus. Adsum ultra adstringo accommodo considero odit agnosco. Odit aer balbus atque. Coepi decimus perspiciatis voluptatibus capio. Creta vis est. Amaritudo auxilium amiculum uterque vestrum solutio tyrannus utrum eos.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[2], courseIds[3]],
            blogs_published: [blogsIds[6]],
            blogs_saved: [blogsIds[12], blogsIds[35]],
            courses_conversation: [conversationIds[2], conversationIds[3]],
            created_at: new Date("2024-01-28T20:37:45.000Z"),
            updated_at: new Date("2024-01-28T20:37:45.000Z"),
        },
        {
            _id: userIds[4],
            accountId: accountIds[4],
            name: "Jack Herman",
            description:
                "Confugo cultura claustrum utpote ea. Terra ait decipio adulatio peccatus reprehenderit nostrum. Casso subnecto laborum sto sapiente pauper contigo defendo coadunatio. Cognomen tero esse praesentium caelum expedita nulla subiungo dignissimos provident. Tenus video desipio turbo pax arbustum calcar. Degenero templum cubitum arguo sodalitas valeo tabgo. Urbs enim talus. Convoco sponte suasoria cum decet tricesimus acer ver tempus. Officiis adnuo spiculum tamisium ullam praesentium quas. Callide tondeo stultus expedita vos vita varius. Dicta dolor aurum civitas eaque amet aro quasi absque. Demoror caries stillicidium aduro termes temeritas demum dens tutamen. Sordeo astrum vulgaris depereo officia terror adulatio video. Deludo esse theatrum cultura audacia. Delectus unus tego textor adeo cursim curia amet.",
            courses_saved: [courseIds[4], courseIds[8]],
            courses_published: [courseIds[4], courseIds[5], courseIds[6]],
            courses_enrolled: [courseIds[3]],
            blogs_published: [blogsIds[7], blogsIds[8]],
            blogs_saved: [blogsIds[13], blogsIds[37]],
            courses_conversation: [conversationIds[3]],
            created_at: new Date("2024-01-01T20:10:36.000Z"),
            updated_at: new Date("2024-01-01T20:10:36.000Z"),
        },
        {
            _id: userIds[5],
            accountId: accountIds[5],
            name: "Jeremy Buckridge",
            description:
                "Verus argumentum creber sustineo contego tepidus thymum. Solus decimus cogo aufero vigilo. Supra deficio speculum. Campana denuo tremo ullus tutis vero curvo. Impedit exercitationem doloremque denego conatus harum conspergo suffragium. Perferendis aspernatur caveo. Dignissimos cariosus consectetur consuasor nisi. Vulpes apparatus tondeo theologus nobis. Torqueo ocer vinco vespillo alveus necessitatibus. Victus tamdiu omnis derideo debilito sollers degero. Hic arguo tui pecco tempora casus vicissitudo stultus excepturi. Vis speculum texo spiritus. Vel tero quos. Auxilium cras crapula deorsum vicissitudo aptus cena careo cetera arbustum. Abduco non vilitas uterque approbo appono deprimo minima tres cohibeo.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[4]],
            blogs_published: [blogsIds[9], blogsIds[42]],
            blogs_saved: [blogsIds[17], blogsIds[33]],
            courses_conversation: [conversationIds[4]],
            created_at: new Date("2024-01-03T01:53:13.000Z"),
            updated_at: new Date("2024-01-03T01:53:13.000Z"),
        },
        {
            _id: userIds[6],
            accountId: accountIds[6],
            name: "Cassandra Hansen",
            description:
                "Vacuus trucido tristis admitto demo theologus strues argentum. Animadverto volup canonicus comminor spargo spargo tribuo aeger. Cursim tripudio tandem cum argentum vespillo. Veritatis universe caelum deduco cultura tutamen magni subiungo modi sopor. Aut suscipio ascisco. Decor debitis conturbo coma. Tabella avarus communis velociter vomer terebro absens nesciunt ultio commodi. Attollo deprimo vulariter studio crinis defaeco. Eum terror volaticus averto doloremque sunt creptio tutis. Culpa ambitus artificiose magnam aperte traho chirographum culpa acies ustulo. Creo demergo desipio nostrum vinculum triumphus adimpleo cimentarius. Nostrum anser antepono tribuo corpus cupiditate quis. Venustas ullam correptius crustulum appello. Utilis curriculum sto conturbo adulescens praesentium. Statim thymum viridis arca testimonium.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[5]],
            blogs_published: [blogsIds[10], blogsIds[43]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [conversationIds[5]],
            created_at: new Date("2024-01-05T15:30:37.000Z"),
            updated_at: new Date("2024-01-05T15:30:37.000Z"),
        },
        {
            _id: userIds[7],
            accountId: accountIds[7],
            name: "Bradford Beier",
            description:
                "Creo subseco caute basium thermae socius canis. Suffragium tepesco super suadeo. Unus laudantium calamitas vinum pel cur utrimque tonsor depraedor verus. Crepusculum vorago bellum adduco. Asper tendo consequatur tantum benigne. Cunctatio adhaero porro. Subnecto tergo tunc voluptatem videlicet aeger thymbra considero clementia coadunatio. Caput statua comburo. Explicabo defendo aperte aestus ver abutor autem corona copia. Accommodo coepi suscipio. Veritatis tactus est carbo. Vestigium comburo tibi solus basium quibusdam minus. Officia conqueror abutor vir deserunt alii. Tristis undique quaerat nesciunt subnecto curia iure benevolentia vacuus cunctatio. Spoliatio demoror antepono tutamen verto voluptas villa carcer cubo adipiscor.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[6], courseIds[7]],
            blogs_published: [blogsIds[11], blogsIds[44]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [conversationIds[6], conversationIds[7]],
            created_at: new Date("2024-01-25T11:57:46.000Z"),
            updated_at: new Date("2024-01-25T11:57:46.000Z"),
        },
        {
            _id: userIds[8],
            accountId: accountIds[8],
            name: "Bertha Bednar",
            description:
                "Thema abduco tollo sponte suscipit. Illum votum vinitor cultellus labore quibusdam cicuta decet vinco voluptates. A atavus textor vos textus culpa attonbitus cohaero necessitatibus arx. Clarus bos curis arbustum stillicidium deripio urbs tui cattus. Adsidue animi vitiosus alius depromo adopto brevis. Currus vulariter vetus sunt pauper saepe vulpes vergo vigilo. Venio concedo creptio caelestis admitto conor. Illo adsuesco civis vallum placeat sponte theologus vero. Antea adimpleo at statim viridis cometes caveo stella cedo. Tabula canonicus collum. Tristis quis territo cultellus supellex color. Odit talus porro corrupti. Comparo confugo appositus attonbitus nobis statua voluptates adulescens. Adaugeo sopor colo velit labore tutis demulceo taedium uter. Adhuc confero tres deduco sufficio deleo harum tabella qui aestivus.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [courseIds[7], courseIds[8], courseIds[9]],
            courses_enrolled: [],
            blogs_published: [blogsIds[12], blogsIds[13], blogsIds[38]],
            blogs_saved: [],
            courses_conversation: [
                conversationIds[7],
                conversationIds[8],
                conversationIds[9],
            ],
            created_at: new Date("2024-01-06T21:48:43.000Z"),
            updated_at: new Date("2024-01-06T21:48:43.000Z"),
        },
        {
            _id: userIds[9],
            accountId: accountIds[9],
            name: "Freddie Stark",
            description:
                "Acceptus ultio valde apto eos veritatis quae sulum minima. Celer cognomen solutio somniculosus correptius rem conicio. Vigor illum colligo compono fugit verbum aggero. Succedo aestus angustus omnis carpo. Aperte alienus comprehendo amet tenetur crepusculum vestigium sequi. Demitto bestia patrocinor quos vicissitudo repellat spargo adaugeo. Ipsa vulpes suscipit amoveo magnam conor numquam defero accusantium termes. Depereo amaritudo commodi tero curis perspiciatis acceptus utor cedo campana. Asporto provident admiratio accusantium tendo conventus totus. Appello thorax pel stips suppono. Attero aut absorbeo tergiversatio adipisci. Atrocitas vergo damnatio totidem corona decumbo ambitus. Libero vulgo vinum cognatus. Vorago cupiditas compono umquam decumbo suggero tametsi natus. Quidem succedo valde amo tener esse vester.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[6], courseIds[7], courseIds[8]],
            blogs_published: [blogsIds[14], blogsIds[45]],
            blogs_saved: [blogsIds[7], blogsIds[32]],
            courses_conversation: [
                conversationIds[6],
                conversationIds[7],
                conversationIds[8],
            ],
            created_at: new Date("2024-01-21T06:36:49.000Z"),
            updated_at: new Date("2024-01-21T06:36:49.000Z"),
        },
        {
            _id: userIds[10],
            accountId: accountIds[10],
            name: "Reginald Reilly",
            description:
                "Cogito tabgo tergum virtus. Tredecim quae vesper alienus commodo cunabula quasi. Vito quisquam dolorem inflammatio subvenio coruscus vado. Alter solio denego ut attero cuppedia perspiciatis subiungo. Denego nulla sursum tondeo deripio quibusdam vulpes pariatur. Carbo laborum eligendi similique subvenio. Sapiente vix totam. Acies eius synagoga spero torrens caries coniecto. Corrupti ciminatio curriculum. Doloremque tempus sub uberrime angulus. Dedico vitae ceno abscido adeo antepono esse recusandae. Creptio tego aequitas. Sopor dapifer alo. Eaque stillicidium claro amet defaeco credo. Tredecim somnus acerbitas.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[9]],
            blogs_published: [blogsIds[15], blogsIds[46]],
            blogs_saved: [blogsIds[32], blogsIds[7]],
            courses_conversation: [conversationIds[9]],
            created_at: new Date("2024-01-06T07:33:46.000Z"),
            updated_at: new Date("2024-01-06T07:33:46.000Z"),
        },
        {
            _id: userIds[11],
            accountId: accountIds[11],
            name: "Dr. Nathaniel McCullough",
            description:
                "Aedificium cotidie via omnis cunae spargo. Articulus adinventitias valeo communis commemoro comedo texo aedificium candidus iusto. Amita ascit denego curriculum nostrum doloribus alias aestus summisse suscipio. Aqua turba curto odio. Vir tergeo auxilium cunae vallum crapula. Nostrum tunc tubineus coerceo ara aeneus. Pauci sequi aut defleo tam cerno. Congregatio asporto sperno. Compono alii unde ambulo. Atrox et adduco apostolus utique reprehenderit pauci. Amicitia alveus ratione est consuasor velum. Vacuus eum decipio summisse ceno termes vado. Nihil caelum angelus acquiro velut voro cetera videlicet addo. Tyrannus aro conforto dolorem ubi coniecto coaegresco. Tibi comminor victus vero consuasor sufficio.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[10]],
            blogs_published: [blogsIds[16]],
            blogs_saved: [blogsIds[8], blogsIds[37]],
            courses_conversation: [conversationIds[10]],
            created_at: new Date("2024-01-28T02:44:54.000Z"),
            updated_at: new Date("2024-01-28T02:44:54.000Z"),
        },
        {
            _id: userIds[12],
            accountId: accountIds[12],
            name: "Roger McClure",
            description:
                "Templum caelestis terreo non caelum. Iusto casus clarus avarus torqueo facere ulciscor sponte tabesco. Curtus adeo cupiditate dolorum astrum adulatio similique. Temperantia rem cilicium addo speculum acquiro est tertius ullus neque. Crapula perspiciatis adipisci cernuus tui solutio nesciunt verto carcer comburo. Trucido defungo expedita uterque spero aliqua. Vomica labore nemo tardus aspernatur curia sapiente. Voluptatibus callide artificiose pecus acies versus vomer vulariter. Dens ars sunt. Tenuis laudantium versus carmen vorax stillicidium tantum auctus. Uxor reiciendis quis abundans ex antepono volutabrum arma. Vaco assumenda conduco templum triduana explicabo pecco ex sapiente. Debilito videlicet auctus utrimque. Terreo teneo cursus theca nam abutor. Comis tergo subnecto delectus vero ambitus adeo.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [courseIds[10], courseIds[11]],
            courses_enrolled: [],
            blogs_published: [blogsIds[17], blogsIds[18], blogsIds[35]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [conversationIds[10], conversationIds[11]],
            created_at: new Date("2024-01-11T21:22:51.000Z"),
            updated_at: new Date("2024-01-11T21:22:51.000Z"),
        },
        {
            _id: userIds[13],
            accountId: accountIds[13],
            name: "Mae Schneider",
            description:
                "Correptius calco tergiversatio conforto debeo arma. Utroque auditor decor. Thesaurus corrupti labore. Asper templum autus aer creator delectatio canonicus. Vito aequus adduco. Acquiro auctus tot quae est. Sublime fugiat decor conculco virga eum. Alii atque dignissimos aequus ater autus cur conatus cultellus. Conitor tergeo approbo. Tremo deputo ustilo reiciendis delicate strues admitto aqua viscus harum. Asper candidus capitulus vespillo. Asporto vinum calco officiis volva. Vindico atrocitas tumultus aperte absum. Charisma alo vestigium sublime somnus delectus attero arbustum testimonium. Dedecor deprecator curso spoliatio urbanus anser.",
            courses_saved: [courseIds[4], courseIds[8], courseIds[12], courseIds[15]],
            courses_published: [],
            courses_enrolled: [courseIds[11]],
            blogs_published: [blogsIds[19], blogsIds[47]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [conversationIds[11]],
            created_at: new Date("2024-01-26T02:49:15.000Z"),
            updated_at: new Date("2024-01-26T02:49:15.000Z"),
        },
        {
            _id: userIds[14],
            accountId: accountIds[14],
            name: "Maurice Monahan",
            description:
                "At antepono nesciunt cribro bene mollitia laudantium repellat. Eaque tripudio commodi debilito tutis suggero. Nam deprecator capitulus accedo suggero theatrum atqui vita terga. Adimpleo nostrum viriliter voveo aetas cunabula. Cilicium repellat volutabrum undique candidus cubicularis. Sortitus somniculosus tonsor. Defleo contra synagoga ubi contigo. Voluntarius tepidus copia uxor anser statua. Confugo usitas eos depopulo conor theatrum cupressus demonstro talis considero. A abeo similique vester admitto aranea adsidue peior audio alienus. Tres cattus delicate amicitia villa aestus defessus cultellus. A aedificium vehemens tum voluptates. Admoveo absorbeo currus corrupti valens. Sono odit veritatis cursim. Recusandae adiuvo turbo uter cupressus torrens theatrum vulariter subito.",
            courses_saved: [courseIds[2], courseIds[9]],
            courses_published: [],
            courses_enrolled: [courseIds[12], courseIds[13]],
            blogs_published: [blogsIds[20], blogsIds[48]],
            blogs_saved: [blogsIds[15], blogsIds[42]],
            courses_conversation: [conversationIds[12], conversationIds[13]],
            created_at: new Date("2024-01-02T06:36:43.000Z"),
            updated_at: new Date("2024-01-02T06:36:43.000Z"),
        },
        {
            _id: userIds[15],
            accountId: accountIds[15],
            name: "Jasmine Dare",
            description:
                "Via verto approbo canonicus cernuus non eum deleo consuasor teneo. Calculus verumtamen theologus facilis cibo dens. Votum aequus contigo. Tamdiu textilis aveho cogo reprehenderit occaecati validus. Calco corrigo vere. Suscipio bestia tum aureus ciminatio tam traho dedico absorbeo totus. Ulciscor aduro beatae vere adflicto aro avarus appono ex. Cenaculum celer synagoga. Bardus minima testimonium temporibus. Natus virgo decens coaegresco advoco unde. Totus confugo ultio statua quis casso infit minima peior tyrannus. Attollo adipiscor voveo deputo. Collum incidunt cito. Ante voluptatum damnatio appono contra. Voluptatem velum thymbra conitor.",
            courses_saved: [
                courseIds[2],
                courseIds[9],
                courseIds[4],
                courseIds[8],
                courseIds[12],
            ],
            courses_published: [],
            courses_enrolled: [courseIds[14]],
            blogs_published: [blogsIds[21]],
            blogs_saved: [blogsIds[7], blogsIds[33]],
            courses_conversation: [conversationIds[14]],
            created_at: new Date("2024-01-19T06:01:17.000Z"),
            updated_at: new Date("2024-01-19T06:01:17.000Z"),
        },
        {
            _id: userIds[16],
            accountId: accountIds[16],
            name: "Eula Hyatt",
            description:
                "Baiulus vomer suppono calco tyrannus terebro adhaero demonstro capitulus. Beneficium arceo rerum corpus repellendus vinitor patrocinor aestas. Quo turba thermae cresco adficio quae dapifer averto. Volo suscipio demitto utpote infit stultus. Varietas solvo timor tres conventus aduro adiuvo. Ars nostrum suppono volutabrum decretum catena. Aptus tollo bis solium usus absorbeo pecus clarus cernuus stipes. Benigne umerus socius dens ver ulciscor cena. Totidem cruciamentum amicitia subnecto. Approbo alii congregatio. Animadverto deludo arguo vapulus adeo quidem vestrum. Cotidie cultura spoliatio vehemens ascit venia uter admiratio. Vesco cohors uterque. Catena desino theca tristis crinis conscendo. Sursum crinis beatae adhuc adinventitias ocer conturbo una desino.",
            courses_saved: [
                courseIds[2],
                courseIds[9],
                courseIds[4],
                courseIds[8],
                courseIds[12],
            ],
            courses_published: [courseIds[12], courseIds[13]],
            courses_enrolled: [courseIds[15]],
            blogs_published: [blogsIds[22], blogsIds[23], blogsIds[37]],
            blogs_saved: [blogsIds[15], blogsIds[42]],
            courses_conversation: [conversationIds[15]],
            created_at: new Date("2024-01-04T16:36:05.000Z"),
            updated_at: new Date("2024-01-04T16:36:05.000Z"),
        },
        {
            _id: userIds[17],
            accountId: accountIds[17],
            name: "Florence Thiel",
            description:
                "Vulticulus barba constans volup alveus ars asper ait doloribus cito. Turpis subnecto cumque verecundia alioqui concedo utor avarus annus. Sub cubo cuppedia crur cenaculum defero. Cornu vespillo tyrannus speciosus. Aetas spiritus cerno taceo cinis tredecim cogo voluptates victoria. Praesentium quos cunctatio admoneo abduco. Audio infit tamen. Thorax blandior trans. Victus studio crustulum possimus qui. Patruus creo tactus virgo suppellex consequuntur cometes adflicto. Apto textor solitudo conforto defessus. Charisma vinitor cupressus xiphias valeo curto denuncio magni. Condico collum harum textus texo aspernatur arcus suadeo sophismata. Vinco bis pecto crudelis cibus articulus aeternus adipisci custodia speciosus. Cunae dedico aequitas succedo depulso spiculum vomito cupio administratio.",
            courses_saved: [
                courseIds[1],
                courseIds[3],
                courseIds[5],
                courseIds[7],
                courseIds[16],
            ],
            courses_published: [],
            courses_enrolled: [courseIds[16]],
            blogs_published: [blogsIds[24], blogsIds[49]],
            blogs_saved: [blogsIds[15], blogsIds[32]],
            courses_conversation: [conversationIds[16]],
            created_at: new Date("2024-01-18T23:28:42.000Z"),
            updated_at: new Date("2024-01-18T23:28:42.000Z"),
        },
        {
            _id: userIds[18],
            accountId: accountIds[18],
            name: "Randolph Greenfelder",
            description:
                "Terebro socius suffoco tubineus argumentum cubicularis maxime solutio summopere. Vomer tabgo cresco ultra unus odit adversus considero tolero. Bardus eos enim defluo recusandae. Beatae caterva sono anser. Angulus vesica creator apostolus. Subito arceo calco tardus. Tripudio tutis defero aperte arca. Talus aeneus vado triduana vereor audacia soluta quasi spero. Labore stultus cras. Ter doloremque alveus comedo explicabo uxor. Patior vespillo amaritudo. Vix aperio angulus cognomen spes demoror tonsor pel textus reprehenderit. Tum vulticulus tamen concido caveo caput. Aranea denuo cuppedia attollo adduco pax deinde tabella sumptus terra. Aegrotatio aranea iure solutio.",
            courses_saved: [
                courseIds[1],
                courseIds[3],
                courseIds[5],
                courseIds[7],
                courseIds[16],
            ],
            courses_published: [],
            courses_enrolled: [courseIds[17]],
            blogs_published: [blogsIds[25]],
            blogs_saved: [blogsIds[12], blogsIds[37]],
            courses_conversation: [conversationIds[17]],
            created_at: new Date("2024-01-06T09:39:03.000Z"),
            updated_at: new Date("2024-01-06T09:39:03.000Z"),
        },
        {
            _id: userIds[19],
            accountId: accountIds[19],
            name: "Miguel Schuster PhD",
            description:
                "Aeternus comis crinis trado adamo inventore coruscus contigo. Virgo deporto sumptus delicate depraedor ars. Ipsa unde valeo coniuratio sponte vulnero tabella arguo utroque bonus. Cito claudeo teneo celer suppono demonstro reprehenderit tabgo labore vilitas. Tracto considero vesper solutio. Terreo teres caveo tabula supellex debeo. Abscido virtus succurro artificiose teneo damno dolorem cohaero. Eaque absorbeo capillus acies tredecim. Congregatio alter tenus alo solum. Crudelis quam thema alius desino. Aperiam error cetera aegre vetus trepide. Recusandae creta audentia. Amitto demoror despecto tantum conculco vinco. Thalassinus sponte thema ver quo depraedor depraedor cursim creber turba. Conitor amitto verto denuncio uterque bardus constans pauper articulus.",
            courses_saved: [
                courseIds[1],
                courseIds[16],
                courseIds[3],
                courseIds[5],
                courseIds[7],
            ],
            courses_published: [],
            courses_enrolled: [courseIds[18]],
            blogs_published: [blogsIds[26]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [conversationIds[18], conversationIds[19]],
            created_at: new Date("2024-01-17T10:54:05.000Z"),
            updated_at: new Date("2024-01-17T10:54:05.000Z"),
        },
        {
            _id: userIds[20],
            accountId: accountIds[20],
            name: "Eloise Shanahan",
            description:
                "Quis via adeptio vinum caecus thema. Vaco quia labore debeo volubilis cariosus comburo aegrotatio coniuratio altus. Mollitia amplus voluptatum usitas templum tutamen subvenio. Subito atque tergum patrocinor delinquo. Cervus cedo virga. Amplexus ultio sapiente. Subseco curia capillus cultellus defessus auxilium magni tabesco bellum. Crebro benevolentia perferendis adulescens undique decor asper error. Accusator colo pauci cimentarius bestia. Capitulus provident eos crebro odio delego templum. Bis damno dedecor deleo desidero thymum deripio. Porro delinquo adduco succurro alias aestivus vel omnis. Cotidie convoco bos vitiosus uterque architecto accedo supellex delinquo. Labore tremo spiritus alias arto colligo allatus vicinus caute. Abstergo molestias aurum tunc teneo suggero attollo aveho velit utrimque.",
            courses_saved: [
                courseIds[1],
                courseIds[16],
                courseIds[3],
                courseIds[5],
                courseIds[7],
            ],
            courses_published: [courseIds[14], courseIds[15], courseIds[16]],
            courses_enrolled: [courseIds[19]],
            blogs_published: [blogsIds[27], blogsIds[28]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [
                conversationIds[14],
                conversationIds[15],
                conversationIds[16],
                conversationIds[19],
            ],
            created_at: new Date("2024-01-07T20:35:32.000Z"),
            updated_at: new Date("2024-01-07T20:35:32.000Z"),
        },
        {
            _id: userIds[21],
            accountId: accountIds[21],
            name: "Lee Schimmel",
            description:
                "Rerum alii ceno theologus baiulus deorsum aveho ea. Solum damnatio benigne vester voluntarius verbera voluptatem amoveo vereor curto. Somniculosus pecco fuga. Vulticulus vita caelestis tandem. Adulescens spargo cernuus. Virga velociter coruscus tergum nobis clam corrupti verecundia amita conitor. Bene civitas contego. Vulticulus solvo vivo thesaurus abscido callide voluptatem labore. Stillicidium synagoga teneo caecus aliqua. Beatus uredo dignissimos alienus virtus cuius valens sodalitas ventito accedo. Delectus vobis trado audentia aeternus taceo sol vae solus corrupti. Ducimus vapulus aufero adfero absorbeo. Vapulus veritas vesper. Demo aequitas copia quibusdam utilis cedo alo aegrotatio studio. Repellat absorbeo amplus vir atavus.",
            courses_saved: [
                courseIds[2],
                courseIds[9],
                courseIds[5],
                courseIds[12],
                courseIds[18],
            ],
            courses_published: [],
            courses_enrolled: [courseIds[19]],
            blogs_published: [blogsIds[29]],
            blogs_saved: [blogsIds[15], blogsIds[42]],
            courses_conversation: [conversationIds[19]],
            created_at: new Date("2024-01-25T18:31:34.000Z"),
            updated_at: new Date("2024-01-25T18:31:34.000Z"),
        },
        {
            _id: userIds[22],
            accountId: accountIds[22],
            name: "Ricardo Dickinson",
            description:
                "Stipes cibo dolores paulatim creator vilis ustilo quisquam arcesso ad. Deripio atqui vivo defero turba denego sperno solitudo. Aspicio uxor verus audentia somniculosus incidunt ademptio thalassinus. Anser abscido tolero consequatur perferendis labore. Perspiciatis callide surculus timor atavus. Vulgus uxor urbs ceno acer abeo absconditus sollers. Tremo corrigo expedita congregatio comes comes ipsum vilitas alo. Minima vapulus amplus certe aut tollo damnatio ventosus abbas. Communis saepe tutis. Deporto tertius ars tribuo vere cupio textor valetudo. Somnus armarium tum adfero credo. Votum facilis surgo cura tres vulgivagus undique creator congregatio. Venustas speciosus somniculosus vesper coma supellex. Solvo quibusdam ago similique complectus ascit tantum velociter utilis. Thema callide vox somniculosus.",
            courses_saved: [
                courseIds[1],
                courseIds[4],
                courseIds[7],
                courseIds[10],
                courseIds[15],
            ],
            courses_published: [],
            courses_enrolled: [],
            blogs_published: [blogsIds[30], blogsIds[31]],
            blogs_saved: [blogsIds[20], blogsIds[21]],
            courses_conversation: [],
            created_at: new Date("2024-01-15T06:24:57.000Z"),
            updated_at: new Date("2024-01-15T06:24:57.000Z"),
        },
        {
            _id: userIds[23],
            accountId: accountIds[23],
            name: "Shawna Hayes",
            description:
                "Chirographum usque vae caelestis optio vado temptatio. Adulescens cursim undique dolorum vigilo doloremque carcer amita. Avarus summopere ubi depono tabella cito trepide vero. Derelinquo decens desparatus subito admiratio. Appositus speciosus vae. Templum voluptatem saepe ullam urbanus libero thesaurus. Facere repellat coniuratio constans nulla ullus vulticulus accusator curso aiunt. Terra vitae nulla audentia taceo cometes adduco. Adulescens celebrer solum summisse comprehendo. Casus carcer aureus sustineo cras supellex sumo cupiditas torqueo condico. Similique dolor atqui inflammatio. Acceptus dicta error turbo expedita ago. Volo spiritus tergo paens tamen candidus ventus. Defero dolore supellex tubineus illo aeger altus comburo civitas cedo. Amo suus avaritia charisma.",
            courses_saved: [
                courseIds[1],
                courseIds[3],
                courseIds[5],
                courseIds[7],
                courseIds[9],
                courseIds[11],
                courseIds[13],
                courseIds[15],
                courseIds[17],
                courseIds[19],
            ],
            courses_published: [],
            courses_enrolled: [courseIds[19]],
            blogs_published: [blogsIds[32], blogsIds[39]],
            blogs_saved: [blogsIds[15], blogsIds[47]],
            courses_conversation: [conversationIds[19]],
            created_at: new Date("2024-01-29T06:49:46.000Z"),
            updated_at: new Date("2024-01-29T06:49:46.000Z"),
        },
        {
            _id: userIds[24],
            accountId: accountIds[24],
            name: "Terrell Rippin",
            description:
                "Amitto crebro teneo doloribus thermae cognatus. Decerno antea tumultus. Curto quasi creber cado strenuus amo arto dolores adulescens. Vaco tendo aqua suscipio synagoga. Desipio debeo neque eos contabesco absque turba vapulus curiositas. Surculus complectus tum appello. Antiquus despecto sufficio cogo accusamus crebro contigo theatrum cultellus ipsam. Arma talis baiulus. Sint vigor adulatio conduco commemoro terra angulus. Administratio delinquo vulticulus auctor peior tantillus. Non sodalitas confugo titulus magni adiuvo calamitas caterva tam. Eveniet ullam virgo possimus crur defessus curiositas corrigo calcar. Anser usque rem. Ater recusandae totam. Charisma inflammatio tabesco casso utique terror auctus comminor usque compello.",
            courses_saved: [
                courseIds[0],
                courseIds[2],
                courseIds[4],
                courseIds[6],
                courseIds[8],
                courseIds[10],
                courseIds[12],
                courseIds[14],
                courseIds[16],
                courseIds[18],
            ],
            courses_published: [courseIds[17], courseIds[18], courseIds[19]],
            courses_enrolled: [],
            blogs_published: [blogsIds[33], blogsIds[34], blogsIds[36]],
            blogs_saved: [blogsIds[12], blogsIds[45]],
            courses_conversation: [
                conversationIds[17],
                conversationIds[18],
                conversationIds[19],
            ],
            created_at: new Date("2024-01-05T20:02:49.000Z"),
            updated_at: new Date("2024-01-05T20:02:49.000Z"),
        },
    ];
    const blog = [
        //user0
        {
            _id: blogsIds[0],
            title: "Comprehensive Guide to Node.js for Backend Development",
            description:
                "A detailed blog covering the fundamentals and advanced concepts of Node.js, with code examples and resources to help you master backend development.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "Introduction to Node.js",
                        body: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code, making it easier to create scalable network applications. 
                     This blog will cover essential Node.js concepts such as the event loop, modules, file handling, and more.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic HTTP Server in Node.js",
                        body: `const http = require('http'),
      const server = http.createServer((req, res) => {
        res.statusCode = 200,
        res.setHeader('Content-Type', 'text/plain'),
        res.end('Hello, World!'),
      }),
      
      server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/'),
      }),`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Understanding the Event Loop",
                        body: `The event loop is at the heart of Node.js's asynchronous nature. It allows non-blocking operations, enabling high concurrency. 
                     When an I/O operation is executed, Node.js delegates it to the operating system, and when it's complete, the callback is placed in the event queue for execution.`,
                    },
                },
                {
                    type: "image",
                    content: {
                        header: "Event Loop Diagram",
                        url: "https://example.com/event-loop-diagram.png",
                        alt: "Event Loop diagram",
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "File Handling in Node.js",
                        body: `const fs = require('fs'),
      
      // Reading a file
      fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err),
          return,
        }
        console.log(data),
      }),
      
      // Writing to a file
      fs.writeFile('output.txt', 'Hello, World!', (err) => {
        if (err) {
          console.error(err),
          return,
        }
        console.log('File has been written'),
      }),`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Node.js Modules",
                        body: `Node.js uses the CommonJS module system. Each file in Node.js is treated as a separate module. 
                     You can import built-in modules like 'fs', 'http', or create your own custom modules.`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Node.js Documentation",
                        url: "https://nodejs.org/en/docs/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Asynchronous Programming in Node.js",
                        body: `Asynchronous programming is a key concept in Node.js. It allows for non-blocking operations, meaning that time-consuming tasks such as file reading or HTTP requests won't block the execution of other code.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Example of Promises in Node.js",
                        body: `const fs = require('fs').promises,
      
      async function readFileAsync() {
        try {
          const data = await fs.readFile('example.txt', 'utf8'),
          console.log(data),
        } catch (err) {
          console.error(err),
        }
      }
      
      readFileAsync(),`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[0],
            tags: [
                "Node.js",
                "Backend Development",
                "Asynchronous Programming",
                "Modules",
                "File Handling",
            ],
            coverImage: "https://example.com/nodejs-cover.png",
        },
        {
            _id: blogsIds[1],
            title: "Mastering Docker: The Essential Guide for Developers",
            description:
                "A comprehensive blog covering the fundamental and advanced concepts of Docker, with examples, code snippets, and resources to help developers build, ship, and run applications efficiently.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "Introduction to Docker",
                        body: `Docker is a platform that enables developers to build, package, and deploy applications in containers. These containers are lightweight, portable, and allow applications to run consistently across different environments. 
                     This blog will cover Docker's core components like images, containers, volumes, networks, and more.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Docker Commands",
                        body: `# Pulling an image from Docker Hub
      docker pull ubuntu
      
      # Running a container from an image
      docker run -it ubuntu bash
      
      # Listing running containers
      docker ps
      
      # Stopping a container
      docker stop <container-id>`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Understanding Docker Images and Containers",
                        body: `Docker images are blueprints used to create containers. Containers are running instances of images and provide an isolated environment for the application. 
                     Images can be created using Dockerfiles, which contain instructions to build the image layer by layer.`,
                    },
                },
                {
                    type: "image",
                    content: {
                        header: "Docker Architecture Diagram",
                        url: "https://example.com/docker-architecture-diagram.png",
                        alt: "Docker Architecture",
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Dockerfile Example",
                        body: `# Sample Dockerfile
      FROM node:14
      WORKDIR /app
      COPY package*.json ./
      RUN npm install
      COPY . .
      EXPOSE 3000
      CMD ["npm", "start"]`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Using Volumes in Docker",
                        body: `Docker volumes provide a way to persist data generated by containers. Volumes are not tied to the container's lifecycle, making them ideal for storing data that needs to be retained across container restarts or updates.`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Docker Official Documentation",
                        url: "https://docs.docker.com/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Networking in Docker",
                        body: `Docker networking allows containers to communicate with each other or with the external world. By default, Docker provides three network types: bridge, host, and none. Custom networks can also be created to suit specific requirements.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Creating a Docker Network",
                        body: `# Creating a user-defined bridge network
      docker network create my-network
      
      # Running a container on the custom network
      docker run -d --network my-network --name my-container nginx`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[0],
            tags: ["Docker", "Containerization", "DevOps", "Networking", "Volumes"],
            coverImage: "https://example.com/docker-cover.png",
        },
        {
            _id: blogsIds[2],
            title: "Exploring AWS: A Beginner's Guide to Cloud Computing",
            description:
                "A beginner-friendly blog that introduces AWS, its key services, and practical use cases. It includes code snippets and resources to help developers and businesses leverage cloud computing effectively.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "Introduction to AWS",
                        body: `Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers a wide range of services for storage, computing, networking, machine learning, and more. 
                     It allows businesses and developers to deploy applications at scale without managing physical infrastructure.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key AWS Services",
                        body: `AWS offers numerous services categorized into different areas:
      - **EC2**: Elastic Compute Cloud (EC2) provides scalable virtual servers in the cloud.
      - **S3**: Simple Storage Service (S3) offers object storage with high availability and security.
      - **RDS**: Relational Database Service (RDS) supports managed database services like MySQL, PostgreSQL, and more.
      - **Lambda**: AWS Lambda enables serverless computing, allowing you to run code without provisioning servers.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Launching an EC2 Instance with AWS CLI",
                        body: `# Configure AWS CLI
      aws configure
      
      # Launch a new EC2 instance
      aws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro --key-name MyKeyPair`,
                    },
                },
                {
                    type: "image",
                    content: {
                        header: "AWS Global Infrastructure",
                        url: "https://example.com/aws-global-infrastructure.png",
                        alt: "AWS Global Infrastructure Map",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Using AWS S3 for Object Storage",
                        body: `AWS S3 is one of the most popular storage services for storing and retrieving any amount of data at any time. It provides security, scalability, and high availability for your data.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Uploading a File to S3 Using AWS SDK",
                        body: `const AWS = require('aws-sdk'),
      const fs = require('fs'),
      
      const s3 = new AWS.S3(),
      const fileContent = fs.readFileSync('example.txt'),
      
      const params = {
        Bucket: 'my-bucket',
        Key: 'example.txt',
        Body: fileContent,
      },
      
      s3.upload(params, (err, data) => {
        if (err) {
          console.error("Error uploading file:", err),
        } else {
          console.log("File uploaded successfully:", data.Location),
        }
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "AWS Documentation",
                        url: "https://docs.aws.amazon.com/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "What is AWS Lambda?",
                        body: `AWS Lambda is a serverless compute service that automatically runs your code in response to events. You can write functions in multiple programming languages and deploy them without worrying about the underlying infrastructure.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "AWS Lambda Function Example",
                        body: `exports.handler = async (event) => {
        console.log('Event received:', event),
        return { statusCode: 200, body: 'Hello from Lambda!' },
      },`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[0],
            tags: ["AWS", "Cloud Computing", "EC2", "S3", "Lambda"],
            coverImage: "https://example.com/aws-cover.png",
        },
        {
            _id: blogsIds[3],
            title: "Getting Started with GraphQL: A Modern Approach to API Design",
            description:
                "This blog provides an in-depth introduction to GraphQL, explaining its core principles and advantages over REST APIs. It includes practical code examples and use cases to help developers get started with GraphQL in their projects.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "Introduction to GraphQL",
                        body: `GraphQL is a query language for APIs, developed by Facebook, that allows clients to request only the data they need. It provides a more efficient and flexible alternative to REST by enabling clients to specify the structure of the response.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Why Use GraphQL?",
                        body: `GraphQL offers several advantages over traditional REST APIs, such as:
      - **Efficient Data Fetching**: Clients can request exactly what they need, reducing over-fetching or under-fetching of data.
      - **Single Endpoint**: Unlike REST, GraphQL uses a single endpoint to handle all operations (queries, mutations, subscriptions).
      - **Strongly Typed Schema**: GraphQL APIs are built around a schema that defines the data types, queries, and mutations, providing a clear contract between client and server.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic GraphQL Query Example",
                        body: `# GraphQL query to fetch user data
      {
        user(id: "1") {
          id
          name
          email
          posts {
            title
            content
          }
        }
      }`,
                    },
                },
                {
                    type: "image",
                    content: {
                        header: "GraphQL Query Flow",
                        url: "https://example.com/graphql-query-flow.png",
                        alt: "GraphQL Query Flow Diagram",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "GraphQL vs REST",
                        body: `While REST APIs follow a resource-based approach, GraphQL focuses on querying a graph of data. In REST, each endpoint typically represents a specific resource, whereas in GraphQL, a single endpoint can fulfill multiple data requests by navigating the graph.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Setting Up a Simple GraphQL Server with Node.js",
                        body: `const { ApolloServer, gql } = require('apollo-server'),
      
      // Define GraphQL schema
      const typeDefs = gql\`
        type User {
          id: ID!
          name: String!
          email: String!
        }
      
        type Query {
          users: [User]
        }
      \`,
      
      // Provide resolver functions for schema fields
      const resolvers = {
        Query: {
          users: () => [{ id: "1", name: "John Doe", email: "john@example.com" }],
        },
      },
      
      // Initialize Apollo Server
      const server = new ApolloServer({ typeDefs, resolvers }),
      
      // Start the server
      server.listen().then(({ url }) => {
        console.log(\`🚀  Server ready at \${url}\`),
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official GraphQL Documentation",
                        url: "https://graphql.org/learn/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Advanced GraphQL: Mutations and Subscriptions",
                        body: `Besides querying data, GraphQL also supports **mutations** to modify data and **subscriptions** to listen to real-time updates. Mutations allow clients to perform operations like adding, updating, or deleting data.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "GraphQL Mutation Example",
                        body: `# Mutation to add a new user
      mutation {
        addUser(name: "Jane Doe", email: "jane@example.com") {
          id
          name
          email
        }
      }`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[0],
            tags: ["GraphQL", "API Design", "Query Language", "Node.js", "Mutations"],
            coverImage: "https://example.com/graphql-cover.png",
        },
        //user1
        {
            _id: blogsIds[4],
            title: "Understanding Kubernetes: The Container Orchestration Platform",
            description:
                "This blog provides an introduction to Kubernetes, explaining its architecture, key components, and how it helps manage containerized applications in a production environment.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Kubernetes?",
                        body: `Kubernetes, also known as K8s, is an open-source container orchestration platform designed to automate deploying, scaling, and managing containerized applications. It was originally developed by Google and has become the industry standard for container orchestration.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key Features of Kubernetes",
                        body: `Kubernetes offers several powerful features:
      - **Automatic Scaling**: Automatically scale applications up or down based on demand.
      - **Load Balancing**: Distribute network traffic evenly across containers.
      - **Self-Healing**: Automatically replace failed containers and reschedule them as needed.
      - **Storage Orchestration**: Manage storage resources dynamically, integrating with various storage providers.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Kubernetes Commands",
                        body: `# Check the status of all pods
      kubectl get pods
      
      # Deploy an application
      kubectl create deployment my-app --image=my-app-image
      
      # Expose the deployment as a service
      kubectl expose deployment my-app --type=LoadBalancer --port=80`,
                    },
                },
                {
                    type: "image",
                    content: {
                        header: "Kubernetes Architecture",
                        url: "https://example.com/kubernetes-architecture.png",
                        alt: "Kubernetes Architecture Diagram",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Understanding Pods",
                        body: `In Kubernetes, a pod is the smallest deployable unit that can contain one or more containers. Pods share the same network namespace, which allows them to communicate with each other easily.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Sample Pod Definition YAML",
                        body: `apiVersion: v1
      kind: Pod
      metadata:
        name: my-pod
      spec:
        containers:
        - name: my-container
          image: my-container-image
          ports:
          - containerPort: 80`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Kubernetes Documentation",
                        url: "https://kubernetes.io/docs/home/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Managing Stateful Applications",
                        body: `Kubernetes provides StatefulSets for managing stateful applications. Unlike Deployments, StatefulSets maintain a sticky identity for each pod and are useful for applications that require stable storage and network identity.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Sample StatefulSet Definition YAML",
                        body: `apiVersion: apps/v1
      kind: StatefulSet
      metadata:
        name: my-statefulset
      spec:
        serviceName: "my-service"
        replicas: 3
        selector:
          matchLabels:
            app: my-app
        template:
          metadata:
            labels:
              app: my-app
          spec:
            containers:
            - name: my-container
              image: my-container-image`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[1], // Replace with a real User ID
            tags: [
                "Kubernetes",
                "Container Orchestration",
                "DevOps",
                "Cloud Native",
                "Pods",
            ],
            coverImage: "https://example.com/kubernetes-cover.png",
        },
        {
            _id: blogsIds[40],
            title: "Introduction to Flutter: Build Natively Compiled Applications",
            description:
                "A guide to Flutter, Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Flutter?",
                        body: `Flutter is an open-source UI toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It enables fast development and expressive UIs.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Flutter App",
                        body: `import 'package:flutter/material.dart',
      
      void main() => runApp(MyApp()),
      
      class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          return MaterialApp(
            home: Scaffold(
              appBar: AppBar(title: Text('Hello, Flutter!')),
              body: Center(child: Text('Welcome to Flutter!')),
            ),
          ),
        }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Flutter Documentation",
                        url: "https://flutter.dev/docs",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[1],
            tags: ["Flutter", "Mobile Development", "UI", "Google"],
            coverImage: "https://example.com/flutter-cover.png",
        },
        //user2
        {
            _id: blogsIds[5],
            title: "Getting Started with Redis: An In-Memory Data Store",
            description:
                "This blog introduces Redis, an open-source in-memory data structure store, exploring its features and use cases for developers.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Redis?",
                        body: `Redis is an in-memory key-value store that is often used as a database, cache, and message broker. It is known for its high performance, flexibility, and support for various data structures such as strings, hashes, lists, and sets.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key Features of Redis",
                        body: `Some standout features of Redis include:
      - **Performance**: Extremely fast with low latency, suitable for caching and real-time analytics.
      - **Persistence**: Offers options for persisting data on disk without sacrificing performance.
      - **Pub/Sub Messaging**: Supports publish/subscribe messaging patterns for real-time messaging applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Redis Commands",
                        body: `# Set a key-value pair
      SET key "value"
      
      # Get a value by key
      GET key
      
      # Add elements to a list
      LPUSH mylist "element1"
      LPUSH mylist "element2"`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Redis Documentation",
                        url: "https://redis.io/documentation",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Use Cases for Redis",
                        body: `Redis is commonly used for caching frequently accessed data, session storage, real-time analytics, and managing leaderboard data in gaming applications. Its versatility and speed make it a popular choice among developers.`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[2], // Replace with a real User ID
            tags: ["Redis", "In-Memory Database", "Caching", "Data Structures"],
            coverImage: "https://example.com/redis-cover.png",
        },
        {
            _id: blogsIds[41],
            title: "Introduction to React Native: Build Mobile Apps with JavaScript",
            description:
                "A guide to React Native, a framework for building native mobile apps using React.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is React Native?",
                        body: `React Native is a framework for building native mobile apps using React. It allows developers to use the same codebase for both iOS and Android applications, saving time and resources.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic React Native Component",
                        body: `import React from 'react',
      import { Text, View } from 'react-native',
      
      const App = () => {
        return (
          <View>
            <Text>Hello, React Native!</Text>
          </View>
        ),
      },
      
      export default App,`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "React Native Documentation",
                        url: "https://reactnative.dev/docs/getting-started",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[2],
            tags: ["React Native", "Mobile Development", "JavaScript", "Framework"],
            coverImage: "https://example.com/reactnative-cover.png",
        },
        //user3
        {
            _id: blogsIds[6],
            title: "Introduction to Docker: Simplifying Containerization",
            description:
                "This blog explores Docker, a platform that automates the deployment of applications in lightweight containers, highlighting its benefits and basic commands.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Docker?",
                        body: `Docker is an open-source platform that enables developers to automate the deployment of applications in lightweight, portable containers. Containers package applications with their dependencies, ensuring consistent environments across different stages of development and production.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Benefits of Using Docker",
                        body: `Docker provides several advantages:
      - **Portability**: Run containers on any machine that has Docker installed, regardless of the underlying infrastructure.
      - **Efficiency**: Containers share the host OS kernel, making them more lightweight than traditional virtual machines.
      - **Isolation**: Each container runs in its own environment, avoiding conflicts between applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Docker Commands",
                        body: `# Pull an image from Docker Hub
      docker pull nginx
      
      # Run a container
      docker run -d -p 80:80 nginx
      
      # List running containers
      docker ps`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Docker Documentation",
                        url: "https://docs.docker.com/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Use Cases for Docker",
                        body: `Docker is widely used for microservices architecture, continuous integration/continuous deployment (CI/CD) pipelines, and simplifying the deployment of applications across various environments.`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[3],
            tags: ["Docker", "Containerization", "DevOps", "Microservices"],
            coverImage: "https://example.com/docker-cover.png",
        },
        //user4
        {
            _id: blogsIds[7],
            title: "Getting Started with GraphQL: A Modern API Query Language",
            description:
                "This blog introduces GraphQL, an API query language that offers a more efficient and flexible alternative to REST, covering its features and basic usage.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is GraphQL?",
                        body: `GraphQL is an open-source query language for APIs and a runtime for executing those queries by providing a more efficient, powerful, and flexible approach to interacting with data compared to traditional REST APIs.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key Features of GraphQL",
                        body: `- **Single Endpoint**: Unlike REST, GraphQL uses a single endpoint to handle requests.
      - **Flexible Queries**: Clients can specify exactly what data they need, reducing over-fetching and under-fetching.
      - **Strongly Typed Schema**: GraphQL APIs are defined by a schema, providing clear documentation and validation for API requests.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic GraphQL Query Example",
                        body: `{
        user(id: "1") {
          name
          email
        }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official GraphQL Documentation",
                        url: "https://graphql.org/learn/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Use Cases for GraphQL",
                        body: `GraphQL is particularly useful for applications with complex data requirements, mobile applications where bandwidth is limited, and projects requiring rapid development cycles due to its flexibility in querying data.`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[4], // Replace with a real User ID
            tags: ["GraphQL", "API", "Web Development", "Data Query"],
            coverImage: "https://example.com/graphql-cover.png",
        },
        {
            _id: blogsIds[8],
            title:
                "Introduction to Kubernetes: Orchestrating Containerized Applications",
            description:
                "This blog provides an overview of Kubernetes, an open-source platform for automating the deployment, scaling, and management of containerized applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Kubernetes?",
                        body: `Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of applications in containers. It allows developers to manage complex containerized applications efficiently.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key Features of Kubernetes",
                        body: `- **Automated Deployment**: Simplifies deploying applications in containers across clusters.
      - **Scaling**: Automatically scales applications up or down based on demand.
      - **Load Balancing**: Distributes traffic evenly across containers for improved reliability.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Kubernetes Commands",
                        body: `# View all pods
      kubectl get pods
      
      # Deploy an application
      kubectl apply -f deployment.yaml
      
      # Scale a deployment
      kubectl scale deployment my-deployment --replicas=3`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Kubernetes Documentation",
                        url: "https://kubernetes.io/docs/home/",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Use Cases for Kubernetes",
                        body: `Kubernetes is ideal for microservices architectures, continuous integration/continuous deployment (CI/CD) workflows, and managing applications that require high availability and scalability.`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[4],
            tags: [
                "Kubernetes",
                "Container Orchestration",
                "DevOps",
                "Microservices",
            ],
            coverImage: "https://example.com/kubernetes-cover.png",
        },
        //usr5
        {
            _id: blogsIds[9],
            title: "Getting Started with Firebase: Backend as a Service",
            description:
                "This blog introduces Firebase, a platform that provides a variety of tools and services for building and managing web and mobile applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Firebase?",
                        body: `Firebase is a comprehensive app development platform developed by Google that offers a suite of tools for building and managing applications. It includes services like real-time databases, authentication, and hosting.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key Features of Firebase",
                        body: `- **Real-Time Database**: Allows data to be synced in real-time across all clients.
      - **Authentication**: Simplifies user authentication with various methods, including email, Google, and Facebook.
      - **Hosting**: Provides secure and fast hosting for web applications with automatic SSL certificates.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Firebase Setup",
                        body: `// Initialize Firebase
      import { initializeApp } from 'firebase/app',
      
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_APP.firebaseapp.com",
        databaseURL: "https://YOUR_APP.firebaseio.com",
        projectId: "YOUR_PROJECT_ID",
      },
      
      const app = initializeApp(firebaseConfig),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Firebase Documentation",
                        url: "https://firebase.google.com/docs",
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Use Cases for Firebase",
                        body: `Firebase is widely used for developing real-time applications like chat apps, collaborative tools, and mobile apps due to its scalability and robust feature set.`,
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[5], // Replace with a real User ID
            tags: [
                "Firebase",
                "Backend as a Service",
                "Real-Time Database",
                "Web Development",
            ],
            coverImage: "https://example.com/firebase-cover.png",
        },
        {
            _id: blogsIds[42],
            title: "Introduction to Elasticsearch: The Distributed Search Engine",
            description:
                "Learn about Elasticsearch, a distributed, RESTful search and analytics engine for all types of data.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Elasticsearch?",
                        body: `Elasticsearch is a distributed, RESTful search and analytics engine capable of solving a growing number of use cases. It provides real-time search and analytics capabilities for all types of data.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Elasticsearch Query",
                        body: `GET /my-index/_search
      {
        "query": {
          "match": {
            "title": "Elasticsearch"
          }
        }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Elasticsearch Documentation",
                        url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[5],
            tags: ["Elasticsearch", "Search", "Analytics", "Database"],
            coverImage: "https://example.com/elasticsearch-cover.png",
        },
        //user6
        {
            _id: blogsIds[10],
            title:
                "Introduction to Machine Learning: The Foundation of Artificial Intelligence",
            description:
                "A comprehensive overview of the fundamental principles and applications of machine learning, highlighting its importance in the field of artificial intelligence.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Machine Learning?",
                        body: `Machine learning is a subfield of artificial intelligence that provides computer systems with the ability to learn and improve from data and experiences without being explicitly programmed.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "A Simple Machine Learning Model in Python",
                        body: `from sklearn import datasets, linear_model
    from sklearn.model_selection import train_test_split
    
    # Load data
    iris = datasets.load_iris()
    X = iris.data
    y = iris.target
    
    # Split data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    # Create and train the model
    model = linear_model.LogisticRegression()
    model.fit(X_train, y_train)
    
    # Evaluate the model
    print(f"Model accuracy: {model.score(X_test, y_test)}")`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Machine Learning Resources",
                        url: "https://www.coursera.org/learn/machine-learning",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[6],
            tags: [
                "Machine Learning",
                "Artificial Intelligence",
                "Data Science",
                "Programming",
            ],
            coverImage: "https://example.com/machine-learning-cover.png",
        },
        {
            _id: blogsIds[43],
            title: "Introduction to GraphQL: A Query Language for APIs",
            description:
                "A guide to GraphQL, a query language for APIs and a runtime for fulfilling those queries with your existing data.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is GraphQL?",
                        body: `GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a more efficient and powerful alternative to REST.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic GraphQL Query",
                        body: `{
        user(id: "1") {
          name
          age
        }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "GraphQL Documentation",
                        url: "https://graphql.org/learn/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[6],
            tags: ["GraphQL", "API", "Data", "Query Language"],
            coverImage: "https://example.com/graphql-cover.png",
        },
        //user7
        {
            _id: blogsIds[11],
            title: "Introduction to Docker: Simplifying Application Deployment",
            description:
                "Learn how Docker revolutionizes the way applications are deployed, allowing developers to package applications and their dependencies into containers.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Docker?",
                        body: `Docker is an open platform that allows developers to automate the deployment of applications inside lightweight, portable containers. Containers package an application with its dependencies, ensuring it runs consistently across different environments.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Creating a Docker Container",
                        body: `# Build a Docker image
      docker build -t my-app .
      
      # Run the container
      docker run -d -p 3000:3000 my-app`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Official Docker Documentation",
                        url: "https://docs.docker.com/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[7],
            tags: ["Docker", "Containers", "Deployment", "DevOps"],
            coverImage: "https://example.com/docker-cover.png",
        },
        {
            _id: blogsIds[44],
            title: ".NET Core: A Cross-Platform Framework for Building Applications",
            description:
                "An introduction to .NET Core, a cross-platform framework for building modern applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is .NET Core?",
                        body: `.NET Core is a cross-platform framework for building modern applications that can run on Windows, macOS, and Linux. It provides a robust environment for developing cloud-based applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic .NET Core Console Application",
                        body: `using System,
      
      namespace HelloWorld
      {
          class Program
          {
              static void Main(string[] args)
              {
                  Console.WriteLine("Hello, .NET Core!"),
              }
          }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: ".NET Core Documentation",
                        url: "https://docs.microsoft.com/en-us/dotnet/core/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[7],
            tags: [".NET Core", "Framework", "Cross-Platform", "Development"],
            coverImage: "https://example.com/dotnetcore-cover.png",
        },
        //user8
        {
            _id: blogsIds[12],
            title:
                "Understanding Kubernetes: Orchestrating Containerized Applications",
            description:
                "A brief introduction to Kubernetes, an open-source platform for managing containerized workloads and services, with key concepts and benefits.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Kubernetes?",
                        body: `Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. It groups containers into logical units for easy management.`,
                    },
                },
                {
                    type: "text",
                    content: {
                        header: "Key Features of Kubernetes",
                        body: `- **Automatic scaling**: Scales applications up or down based on load.
      - **Self-healing**: Restarts failed containers automatically.
      - **Service Discovery**: Manages load balancing and service discovery within the cluster.`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Kubernetes Documentation",
                        url: "https://kubernetes.io/docs/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[8],
            tags: ["Kubernetes", "Containers", "Orchestration", "DevOps"],
            coverImage: "https://example.com/kubernetes-cover.png",
        },
        {
            _id: blogsIds[13],
            title: "React.js: Building Dynamic User Interfaces",
            description:
                "An introduction to React.js, a popular JavaScript library for building fast and interactive user interfaces for web applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is React.js?",
                        body: `React.js is a declarative, component-based JavaScript library used for building dynamic and fast user interfaces, developed and maintained by Facebook.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic React Component",
                        body: `import React from 'react',
      
      function Welcome() {
        return <h1>Hello, World!</h1>,
      }
      
      export default Welcome,`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "React.js Documentation",
                        url: "https://reactjs.org/docs/getting-started.html",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[8],
            tags: ["React.js", "JavaScript", "Frontend", "UI Development"],
            coverImage: "https://example.com/reactjs-cover.png",
        },
        {
            _id: blogsIds[38],
            title: "Getting Started with Docker: Containerization Made Easy",
            description:
                "An introduction to Docker, a platform for developing, shipping, and running applications in containers.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Docker?",
                        body: `Docker is a platform for developing, shipping, and running applications in containers. It allows developers to package applications with all their dependencies in a standardized unit for software development.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Docker Command",
                        body: `docker run hello-world`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Docker Documentation",
                        url: "https://docs.docker.com/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[8],
            tags: ["Docker", "Containerization", "DevOps", "Development"],
            coverImage: "https://example.com/docker-cover.png",
        },
        //user9
        {
            _id: blogsIds[14],
            title: "Getting Started with Express.js: A Web Framework for Node.js",
            description:
                "Learn how to build fast and robust server-side applications using Express.js, a minimalist web framework for Node.js.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Express.js?",
                        body: `Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Express.js Server",
                        body: `const express = require('express'),
      const app = express(),
      
      app.get('/', (req, res) => {
        res.send('Hello, World!'),
      }),
      
      app.listen(3000, () => {
        console.log('Server running on port 3000'),
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Express.js Documentation",
                        url: "https://expressjs.com/en/starter/installing.html",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[9],
            tags: ["Express.js", "Node.js", "Web Development", "Backend"],
            coverImage: "https://example.com/expressjs-cover.png",
        },
        {
            _id: blogsIds[45],
            title: "Introduction to Ruby on Rails: A Web Application Framework",
            description:
                "A guide to Ruby on Rails, a web application framework that makes programming web applications easier.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Ruby on Rails?",
                        body: `Ruby on Rails is a web application framework that makes it easier to develop database-backed web applications. It emphasizes convention over configuration and promotes the use of RESTful architecture.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Rails Controller",
                        body: `class ArticlesController < ApplicationController
        def index
          @articles = Article.all
        end
      end`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Ruby on Rails Documentation",
                        url: "https://guides.rubyonrails.org/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[9],
            tags: ["Ruby on Rails", "Web Development", "Framework", "Ruby"],
            coverImage: "https://example.com/rubyonrails-cover.png",
        },
        //user10
        {
            _id: blogsIds[15],
            title: "Getting Started with GoLang: A Powerful Systems Language",
            description:
                "An introduction to GoLang (Go), a statically typed and compiled programming language designed for efficiency and concurrency.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is GoLang?",
                        body: `Go, also known as GoLang, is an open-source programming language designed by Google. It is known for its simplicity, efficiency, and concurrency capabilities, making it a popular choice for building scalable systems.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic GoLang Program",
                        body: `package main
      
      import "fmt"
      
      func main() {
          fmt.Println("Hello, World!")
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "GoLang Documentation",
                        url: "https://golang.org/doc/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[10],
            tags: ["GoLang", "Systems Programming", "Concurrency", "Backend"],
            coverImage: "https://example.com/golang-cover.png",
        },
        {
            _id: blogsIds[46],
            title: "Introduction to Swift: The Language for iOS Development",
            description:
                "A guide to Swift, a powerful programming language for iOS, macOS, watchOS, and tvOS development.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Swift?",
                        body: `Swift is a powerful programming language developed by Apple for building applications for iOS, macOS, watchOS, and tvOS. It is designed to be fast and efficient while maintaining safety.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Swift Function",
                        body: `func greet(name: String) -> String {
        return "Hello, \(name)!"
      }
      
      print(greet(name: "Swift"))`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Swift Documentation",
                        url: "https://swift.org/documentation/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[10],
            tags: ["Swift", "iOS Development", "Programming", "Apple"],
            coverImage: "https://example.com/swift-cover.png",
        },
        //user11
        {
            _id: blogsIds[16],
            title: "Getting Started with Angular: A Powerful Frontend Framework",
            description:
                "An introduction to Angular, a platform for building mobile and desktop web applications, featuring components and TypeScript.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Angular?",
                        body: `Angular is a platform and framework for building client-side applications using HTML, CSS, and TypeScript. It provides tools for developing dynamic web applications with a focus on performance and scalability.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Angular Component",
                        body: `import { Component } from '@angular/core',
      
      @Component({
        selector: 'app-root',
        template: '<h1>Hello, Angular!</h1>',
      })
      export class AppComponent {}`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Angular Documentation",
                        url: "https://angular.io/docs",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[11],
            tags: ["Angular", "Frontend", "Web Development", "TypeScript"],
            coverImage: "https://example.com/angular-cover.png",
        },
        //user12
        {
            _id: blogsIds[17],
            title: "Introduction to Vue.js: A Progressive JavaScript Framework",
            description:
                "Learn about Vue.js, a flexible framework for building user interfaces and single-page applications with reactive data binding.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Vue.js?",
                        body: `Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, making it easy to integrate with other projects.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Vue.js Instance",
                        body: `const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello, Vue.js!'
        }
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Vue.js Documentation",
                        url: "https://vuejs.org/v2/guide/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[12],
            tags: ["Vue.js", "Frontend", "Web Development", "JavaScript"],
            coverImage: "https://example.com/vuejs-cover.png",
        },
        {
            _id: blogsIds[18],
            title: "Getting Started with PostgreSQL: A Powerful Relational Database",
            description:
                "An introduction to PostgreSQL, an open-source relational database known for its robustness and advanced features.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is PostgreSQL?",
                        body: `PostgreSQL is a powerful, open-source object-relational database system with over 15 years of active development. It is known for its reliability, feature robustness, and performance.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic PostgreSQL Query",
                        body: `-- Create a table
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      ),
      
      -- Insert a record
      INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com'),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "PostgreSQL Documentation",
                        url: "https://www.postgresql.org/docs/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[12],
            tags: ["PostgreSQL", "Database", "SQL", "Backend"],
            coverImage: "https://example.com/postgresql-cover.png",
        },
        {
            _id: blogsIds[35],
            title:
                "Getting Started with MySQL: A Relational Database Management System",
            description:
                "An overview of MySQL, a widely used open-source relational database management system.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is MySQL?",
                        body: `MySQL is an open-source relational database management system (RDBMS) based on structured query language (SQL). It is widely used for web applications and is known for its reliability and performance.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic MySQL Query",
                        body: `SELECT * FROM users WHERE age > 18,`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "MySQL Documentation",
                        url: "https://dev.mysql.com/doc/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[12],
            tags: ["MySQL", "Database", "SQL", "Web Development"],
            coverImage: "https://example.com/mysql-cover.png",
        },
        //user13
        {
            _id: blogsIds[19],
            title: "Introduction to TensorFlow: A Deep Learning Framework",
            description:
                "Learn about TensorFlow, an open-source platform for machine learning and deep learning applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is TensorFlow?",
                        body: `TensorFlow is an end-to-end open-source platform for machine learning. It provides a comprehensive ecosystem of tools, libraries, and community resources to help researchers and developers create and deploy ML-powered applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic TensorFlow Example",
                        body: `import tensorflow as tf
      
      # Define a constant
      hello = tf.constant('Hello, TensorFlow!')
      print(hello.numpy())`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "TensorFlow Documentation",
                        url: "https://www.tensorflow.org/learn",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[13],
            tags: ["TensorFlow", "Machine Learning", "Deep Learning", "AI"],
            coverImage: "https://example.com/tensorflow-cover.png",
        },
        {
            _id: blogsIds[47],
            title:
                "Getting Started with TensorFlow: An Open-Source Machine Learning Framework",
            description:
                "An introduction to TensorFlow, an open-source library for numerical computation and machine learning.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is TensorFlow?",
                        body: `TensorFlow is an open-source library for numerical computation and machine learning. It provides a flexible platform for building and training machine learning models.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic TensorFlow Code",
                        body: `import tensorflow as tf
      
      # Create a constant tensor
      hello = tf.constant('Hello, TensorFlow!')
      print(hello.numpy())`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "TensorFlow Documentation",
                        url: "https://www.tensorflow.org/learn",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[13],
            tags: ["TensorFlow", "Machine Learning", "AI", "Open Source"],
            coverImage: "https://example.com/tensorflow-cover.png",
        },
        //user14
        {
            _id: blogsIds[20],
            title: "Getting Started with Swift: A Modern Programming Language",
            description:
                "An introduction to Swift, a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Swift?",
                        body: `Swift is a programming language developed by Apple for iOS and OS X development. It is designed to be easy to use and efficient, providing modern programming features while maintaining performance.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Swift Example",
                        body: `import Foundation
      
      let greeting = "Hello, Swift!"
      print(greeting)`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Swift Documentation",
                        url: "https://swift.org/documentation/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[14],
            tags: ["Swift", "iOS Development", "Programming", "Apple"],
            coverImage: "https://example.com/swift-cover.png",
        },
        {
            _id: blogsIds[48],
            title: "Introduction to Vue.js: The Progressive JavaScript Framework",
            description:
                "A guide to Vue.js, a progressive framework for building user interfaces and single-page applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Vue.js?",
                        body: `Vue.js is a progressive JavaScript framework used for building user interfaces. It is designed to be incrementally adoptable and integrates well with other libraries or existing projects.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Vue.js Component",
                        body: `<template>
        <div>
          <h1>{{ message }}</h1>
        </div>
      </template>
      
      <script>
      export default {
        data() {
          return {
            message: 'Hello, Vue.js!',
          },
        },
      },
      </script>`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Vue.js Documentation",
                        url: "https://vuejs.org/v2/guide/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[14],
            tags: ["Vue.js", "JavaScript", "Framework", "UI"],
            coverImage: "https://example.com/vuejs-cover.png",
        },
        //user15
        {
            _id: blogsIds[21],
            title: "Introduction to Docker: Containerization Made Easy",
            description:
                "An overview of Docker, a platform for developing, shipping, and running applications in containers.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Docker?",
                        body: `Docker is an open-source platform that automates the deployment, scaling, and management of applications inside containers. Containers allow you to package applications with all their dependencies, ensuring they run consistently across different environments.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Docker Command",
                        body: `# Pull a Docker image
      docker pull nginx
      
      # Run a Docker container
      docker run -d -p 80:80 nginx`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Docker Documentation",
                        url: "https://docs.docker.com/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[15],
            tags: ["Docker", "Containerization", "DevOps", "Virtualization"],
            coverImage: "https://example.com/docker-cover.png",
        },
        //user16
        {
            _id: blogsIds[22],
            title: "Getting Started with Kubernetes: Orchestrating Containers",
            description:
                "A beginner's guide to Kubernetes, a powerful container orchestration platform.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Kubernetes?",
                        body: `Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of containerized applications. It provides a framework to run distributed systems resiliently.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Kubernetes Command",
                        body: `# Create a deployment
      kubectl create deployment nginx --image=nginx
      
      # Expose the deployment
      kubectl expose deployment nginx --port=80 --type=NodePort`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Kubernetes Documentation",
                        url: "https://kubernetes.io/docs/home/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[16],
            tags: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud"],
            coverImage: "https://example.com/kubernetes-cover.png",
        },
        {
            _id: blogsIds[23],
            title: "Introduction to GraphQL: A Query Language for APIs",
            description:
                "Explore GraphQL, a data query language that provides a more efficient way to interact with APIs.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is GraphQL?",
                        body: `GraphQL is a query language for APIs that allows clients to request only the data they need. It offers a more efficient and flexible alternative to REST.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic GraphQL Query",
                        body: `query {
        user(id: "1") {
          name
          email
        }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "GraphQL Documentation",
                        url: "https://graphql.org/learn/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[16],
            tags: ["GraphQL", "API", "Web Development", "Data Query"],
            coverImage: "https://example.com/graphql-cover.png",
        },
        {
            _id: blogsIds[37],
            title: "Introduction to Angular: A Web Application Framework",
            description:
                "A guide to Angular, a platform for building mobile and desktop web applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Angular?",
                        body: `Angular is a platform for building mobile and desktop web applications. It provides a framework for developing client-side applications using HTML, CSS, and TypeScript.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Angular Component",
                        body: `import { Component } from '@angular/core',
      
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
      })
      export class AppComponent {}`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Angular Documentation",
                        url: "https://angular.io/docs",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[16],
            tags: ["Angular", "Web Development", "Frontend", "Framework"],
            coverImage: "https://example.com/angular-cover.png",
        },
        //user17
        {
            _id: blogsIds[24],
            title: "Getting Started with Rust: A Systems Programming Language",
            description:
                "An introduction to Rust, a programming language focused on performance and safety, especially safe concurrency.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Rust?",
                        body: `Rust is a systems programming language that emphasizes performance, memory safety, and concurrency. It enables developers to write safe and efficient code without a garbage collector.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Rust Example",
                        body: `fn main() {
          println!("Hello, Rust!"),
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Rust Documentation",
                        url: "https://www.rust-lang.org/learn",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[17],
            tags: ["Rust", "Programming", "Systems", "Performance"],
            coverImage: "https://example.com/rust-cover.png",
        },
        {
            _id: blogsIds[49],
            title: "Introduction to Docker: Containerization Made Easy",
            description:
                "A beginner's guide to Docker, a platform for developing, shipping, and running applications in containers.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Docker?",
                        body: `Docker is a platform that allows developers to automate the deployment of applications inside lightweight containers. It provides a consistent environment for applications across different machines.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Docker Command",
                        body: `docker run hello-world`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Docker Documentation",
                        url: "https://docs.docker.com/get-started/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[17],
            tags: ["Docker", "Containerization", "DevOps", "Cloud"],
            coverImage: "https://example.com/docker-cover.png",
        },
        //user18
        {
            _id: blogsIds[25],
            title: "Introduction to Flutter: Building Beautiful Apps",
            description:
                "Learn about Flutter, a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Flutter?",
                        body: `Flutter is an open-source UI toolkit developed by Google for building natively compiled applications from a single codebase. It allows developers to create beautiful UIs for mobile, web, and desktop applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Flutter App",
                        body: `import 'package:flutter/material.dart',
      
      void main() {
        runApp(MyApp()),
      }
      
      class MyApp extends StatelessWidget {
        @override
        Widget build(BuildContext context) {
          return MaterialApp(
            home: Scaffold(
              appBar: AppBar(title: Text('Hello, Flutter!')),
              body: Center(child: Text('Welcome to Flutter!')),
            ),
          ),
        }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Flutter Documentation",
                        url: "https://flutter.dev/docs",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[18],
            tags: ["Flutter", "Mobile Development", "UI", "Cross-Platform"],
            coverImage: "https://example.com/flutter-cover.png",
        },
        //user19
        {
            _id: blogsIds[26],
            title: "Getting Started with Firebase: A Backend as a Service",
            description:
                "An overview of Firebase, a platform that provides tools and infrastructure to build mobile and web apps.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Firebase?",
                        body: `Firebase is a platform developed by Google for creating mobile and web applications. It provides services such as real-time databases, authentication, and cloud storage, enabling developers to build applications quickly and efficiently.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Using Firebase Realtime Database",
                        body: `import firebase from 'firebase/app',
      import 'firebase/database',
      
      const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
        databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
        projectId: "YOUR_PROJECT_ID",
      },
      
      firebase.initializeApp(firebaseConfig),
      const db = firebase.database(),
      
      db.ref('users/').set({
        username: "exampleUser",
        email: "user@example.com",
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Firebase Documentation",
                        url: "https://firebase.google.com/docs",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[19],
            tags: ["Firebase", "Backend", "Mobile Development", "Web Development"],
            coverImage: "https://example.com/firebase-cover.png",
        },
        //user20
        {
            _id: blogsIds[27],
            title: "Introduction to Laravel: A PHP Framework for Web Artisans",
            description:
                "An overview of Laravel, a powerful PHP framework for building web applications with expressive syntax.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Laravel?",
                        body: `Laravel is a web application framework with an elegant syntax that aims to make the development process easier and faster. It provides tools for routing, sessions, caching, and more.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Laravel Route",
                        body: `Route::get('/', function () {
          return view('welcome'),
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Laravel Documentation",
                        url: "https://laravel.com/docs",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[20],
            tags: ["Laravel", "PHP", "Web Development", "Framework"],
            coverImage: "https://example.com/laravel-cover.png",
        },
        {
            _id: blogsIds[28],
            title: "Getting Started with ASP.NET Core: A Cross-Platform Framework",
            description:
                "An introduction to ASP.NET Core, a high-performance framework for building modern, cloud-based applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is ASP.NET Core?",
                        body: `ASP.NET Core is a cross-platform, high-performance framework for building modern, cloud-based web applications. It is the evolution of ASP.NET, designed for the cloud and embracing the new web standards.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic ASP.NET Core Controller",
                        body: `public class HomeController : Controller
      {
          public IActionResult Index()
          {
              return View(),
          }
      }`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "ASP.NET Core Documentation",
                        url: "https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-5.0",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[20],
            tags: ["ASP.NET Core", "Web Development", "Framework", "Microsoft"],
            coverImage: "https://example.com/aspnet-core-cover.png",
        },
        //user21
        {
            _id: blogsIds[29],
            title: "Introduction to OpenAI: Advancing AI Research",
            description:
                "Explore OpenAI, an AI research lab focused on developing artificial intelligence in a safe and beneficial manner.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is OpenAI?",
                        body: `OpenAI is an AI research organization that aims to ensure that artificial general intelligence (AGI) benefits all of humanity. It conducts research in various areas of AI, focusing on safety, alignment, and robust AI development.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Using OpenAI API",
                        body: `import openai
      
      openai.api_key = "YOUR_API_KEY"
      
      response = openai.Completion.create(
        engine="text-davinci-003",
        prompt="Once upon a time",
        max_tokens=50
      )`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "OpenAI Documentation",
                        url: "https://beta.openai.com/docs/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[21],
            tags: ["OpenAI", "AI", "Machine Learning", "Research"],
            coverImage: "https://example.com/openai-cover.png",
        },
        //user22
        {
            _id: blogsIds[30],
            title: "Introduction to Vue.js: The Progressive JavaScript Framework",
            description:
                "A guide to Vue.js, a progressive framework for building user interfaces.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Vue.js?",
                        body: `Vue.js is a progressive JavaScript framework used for building user interfaces. It focuses on the view layer and can be easily integrated with other projects and libraries.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Vue.js Component",
                        body: `Vue.component('my-component', {
        template: '<div>A custom component!</div>'
      }),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Vue.js Documentation",
                        url: "https://vuejs.org/v2/guide/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[22],
            tags: ["Vue.js", "JavaScript", "Frontend", "Framework"],
            coverImage: "https://example.com/vuejs-cover.png",
        },
        {
            _id: blogsIds[31],
            title: "Getting Started with Swift: Apple's Programming Language",
            description:
                "An introduction to Swift, a powerful and intuitive programming language for iOS and macOS.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Swift?",
                        body: `Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed to be easy to use and provides modern features.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Swift Syntax",
                        body: `import UIKit
      
      var greeting = "Hello, World!"
      print(greeting)`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Swift Documentation",
                        url: "https://swift.org/documentation/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[22],
            tags: ["Swift", "iOS", "Programming", "Apple"],
            coverImage: "https://example.com/swift-cover.png",
        },
        //user23
        {
            _id: blogsIds[32],
            title: "Introduction to TypeScript: A Superset of JavaScript",
            description:
                "Learn about TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is TypeScript?",
                        body: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static typing and powerful tools for large applications, enhancing code quality and maintainability.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic TypeScript Example",
                        body: `let message: string = "Hello, TypeScript!",
      console.log(message),`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "TypeScript Documentation",
                        url: "https://www.typescriptlang.org/docs/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[23],
            tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
            coverImage: "https://example.com/typescript-cover.png",
        },
        {
            _id: blogsIds[39],
            title: "Getting Started with Kubernetes: Orchestrating Containers",
            description:
                "An introduction to Kubernetes, a powerful system for managing containerized applications.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Kubernetes?",
                        body: `Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. It allows you to manage clusters of containers efficiently.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Kubernetes Command",
                        body: `kubectl get pods`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Kubernetes Documentation",
                        url: "https://kubernetes.io/docs/home/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[23],
            tags: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud"],
            coverImage: "https://example.com/kubernetes-cover.png",
        },
        //user24
        {
            _id: blogsIds[33],
            title: "Getting Started with TensorFlow: Machine Learning Made Easy",
            description:
                "An introduction to TensorFlow, an open-source library for machine learning and artificial intelligence.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is TensorFlow?",
                        body: `TensorFlow is an open-source library for numerical computation and machine learning. It provides a flexible ecosystem of tools, libraries, and community resources to build and deploy ML-powered applications.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic TensorFlow Example",
                        body: `import tensorflow as tf
      
      # Define a constant
      hello = tf.constant('Hello, TensorFlow!')
      print(hello)`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "TensorFlow Documentation",
                        url: "https://www.tensorflow.org/learn",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[24],
            tags: ["TensorFlow", "Machine Learning", "AI", "Python"],
            coverImage: "https://example.com/tensorflow-cover.png",
        },
        {
            _id: blogsIds[34],
            title: "Introduction to Apache Kafka: A Distributed Streaming Platform",
            description:
                "Learn about Apache Kafka, a distributed event streaming platform capable of handling trillions of events a day.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Apache Kafka?",
                        body: `Apache Kafka is a distributed streaming platform designed for building real-time data pipelines and streaming applications. It is capable of handling high throughput and low-latency data feeds.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Kafka Producer Example",
                        body: `from kafka import KafkaProducer
      
      producer = KafkaProducer(bootstrap_servers='localhost:9092')
      producer.send('my-topic', b'Hello, Kafka!')`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Kafka Documentation",
                        url: "https://kafka.apache.org/documentation/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[24],
            tags: ["Apache Kafka", "Streaming", "Data", "Event"],
            coverImage: "https://example.com/kafka-cover.png",
        },
        {
            _id: blogsIds[36],
            title: "Introduction to Apache Spark: Fast Data Processing",
            description:
                "Learn about Apache Spark, an open-source unified analytics engine for large-scale data processing.",
            content: [
                {
                    type: "text",
                    content: {
                        header: "What is Apache Spark?",
                        body: `Apache Spark is an open-source unified analytics engine for large-scale data processing, with built-in modules for streaming, SQL, machine learning, and graph processing.`,
                    },
                },
                {
                    type: "code",
                    content: {
                        header: "Basic Spark Application",
                        body: `from pyspark import SparkContext
      
      sc = SparkContext("local", "First App")
      data = sc.parallelize([1, 2, 3, 4])
      print(data.reduce(lambda x, y: x + y))`,
                    },
                },
                {
                    type: "resource",
                    content: {
                        header: "Spark Documentation",
                        url: "https://spark.apache.org/docs/latest/",
                    },
                },
            ],
            isPublised: true,
            publishedBy: userIds[24],
            tags: ["Apache Spark", "Data Processing", "Big Data", "Analytics"],
            coverImage: "https://example.com/spark-cover.png",
        },
    ];
    const course = [
        //user0
        {
            _id: courseIds[0],
            title: "Full-Stack Web Development with MERN",
            description:
                "Learn full-stack development using MongoDB, Express, React, and Node.js. This course covers both backend and frontend aspects of web development.",
            price: 499.99,
            estimatedPrice: 699.99,
            thumbnail: {
                public_id: "mern_course_thumbnail",
                url: "https://example.com/mern_thumbnail.jpg",
            },
            tags: [
                "MERN",
                "JavaScript",
                "Full-Stack",
                "Node.js",
                "React",
                "MongoDB",
                "Express",
            ],
            level: "Intermediate",
            demoUrl: "https://example.com/mern_demo_video.mp4",
            benefits: [
                { title: "Master JavaScript for full-stack development" },
                { title: "Build RESTful APIs using Node.js and Express" },
                { title: "Understand MongoDB for database management" },
                { title: "Create dynamic frontends with React" },
            ],
            prerequisites: [
                { title: "Basic understanding of HTML, CSS, and JavaScript" },
                { title: "Familiarity with Git and GitHub" },
            ],
            review: [
                {
                    userId: userIds[1],
                    rating: 5,
                    comment:
                        "This course gave me a deep understanding of full-stack development!",
                },
                {
                    userId: userIds[2],
                    rating: 4,
                    comment: "Great content but could improve on advanced topics.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction",
                    description: "Overview of the course and what you will learn.",
                    videoSection: [
                        {
                            title: "Course Overview",
                            videoUrl: "https://example.com/intro_video.mp4",
                            videoLength: 10,
                            links: [
                                {
                                    title: "Course Materials",
                                    url: "https://example.com/course_materials.pdf",
                                },
                            ],
                            questions: [
                                {
                                    userId: userIds[1],
                                    question: "Can we get extra resources on MongoDB?",
                                    questionReplies: [
                                        "Sure, I will provide additional resources in the upcoming lessons.",
                                    ],
                                },
                            ],
                        },
                    ],
                    videoPlayer: "https://example.com/video_player_script",
                },
                {
                    sectionName: "Backend Development with Node.js and Express",
                    description:
                        "Learn to create APIs and handle server-side logic using Node.js and Express.",
                    videoSection: [
                        {
                            title: "Setting up Node.js",
                            videoUrl: "https://example.com/node_setup_video.mp4",
                            videoLength: 25,
                            links: [
                                {
                                    title: "Node.js Documentation",
                                    url: "https://nodejs.org/en/docs/",
                                },
                            ],
                            questions: [
                                {
                                    userId: userIds[2],
                                    question:
                                        "Do we need to install a specific version of Node.js?",
                                    questionReplies: ["Yes, please use Node.js 16.x or later."],
                                },
                            ],
                        },
                    ],
                    videoPlayer: "https://example.com/video_player_script",
                },
            ],
            course_enrolledBy: [userIds[0], userIds[1], userIds[2]],
            conversationId: conversationIds[0],
            isPublished: true,
            publishedBy: userIds[0],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[1],
            title: "Mastering Docker and Kubernetes",
            description:
                "Become proficient in containerization and orchestration using Docker and Kubernetes. Learn to deploy and manage applications in a scalable environment.",
            price: 599.99,
            estimatedPrice: 799.99,
            thumbnail: {
                public_id: "docker_k8s_thumbnail",
                url: "https://example.com/docker_k8s_thumbnail.jpg",
            },
            tags: [
                "Docker",
                "Kubernetes",
                "DevOps",
                "Containerization",
                "Orchestration",
            ],
            level: "Advanced",
            demoUrl: "https://example.com/docker_k8s_demo.mp4",
            benefits: [
                { title: "Understand containerization with Docker" },
                { title: "Deploy and manage applications using Kubernetes" },
                { title: "Learn Docker Compose for multi-container environments" },
            ],
            prerequisites: [
                { title: "Basic understanding of Linux command-line" },
                { title: "Familiarity with cloud platforms" },
            ],
            review: [
                {
                    userId: userIds[2],
                    rating: 5,
                    comment: "This course was a game-changer for my DevOps career!",
                },
                {
                    userId: userIds[2],
                    rating: 4,
                    comment:
                        "A great course, but could use more real-world deployment examples.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to Docker",
                    description:
                        "Learn the fundamentals of Docker and why containerization is important.",
                    videoSection: [
                        {
                            title: "What is Docker?",
                            videoUrl: "https://example.com/docker_intro.mp4",
                            videoLength: 15,
                            links: [
                                {
                                    title: "Docker Documentation",
                                    url: "https://docs.docker.com/",
                                },
                            ],
                            questions: [
                                {
                                    userId: userIds[2],
                                    question:
                                        "Do I need to install Docker on my machine before starting?",
                                    questionReplies: [
                                        "Yes, please install Docker before proceeding.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Setting Up Docker on Your Machine",
                            videoUrl: "https://example.com/docker_setup.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "Docker Installation Guide",
                                    url: "https://example.com/install_guide",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/docker_player_script",
                },
                {
                    sectionName: "Kubernetes Basics",
                    description:
                        "An overview of Kubernetes and its role in orchestrating containerized applications.",
                    videoSection: [
                        {
                            title: "Introduction to Kubernetes",
                            videoUrl: "https://example.com/kubernetes_intro.mp4",
                            videoLength: 18,
                            links: [
                                {
                                    title: "Kubernetes Documentation",
                                    url: "https://kubernetes.io/docs/",
                                },
                            ],
                            questions: [
                                {
                                    userId: userIds[2],
                                    question: "Is Kubernetes only for large-scale applications?",
                                    questionReplies: [
                                        "No, Kubernetes can scale for small and large applications.",
                                    ],
                                },
                            ],
                        },
                    ],
                    videoPlayer: "https://example.com/kubernetes_player_script",
                },
            ],
            course_enrolledBy: [userIds[0], userIds[2]],
            conversationId: conversationIds[1],
            isPublished: true,
            publishedBy: userIds[0],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[2],
            title: "AWS Certified Solutions Architect",
            description:
                "Prepare for the AWS Certified Solutions Architect exam by gaining deep knowledge of AWS services, cloud architecture, and best practices for scalable applications.",
            price: 799.99,
            estimatedPrice: 999.99,
            thumbnail: {
                public_id: "aws_thumbnail",
                url: "https://example.com/aws_thumbnail.jpg",
            },
            tags: ["AWS", "Cloud", "Solutions Architect", "Cloud Computing"],
            level: "Professional",
            demoUrl: "https://example.com/aws_demo.mp4",
            benefits: [
                { title: "Understand core AWS services like EC2, S3, RDS" },
                { title: "Architect scalable and fault-tolerant systems" },
                { title: "Prepare for the AWS Solutions Architect certification" },
            ],
            prerequisites: [
                { title: "Basic knowledge of cloud computing" },
                { title: "Experience with Linux or Windows server administration" },
            ],
            review: [
                {
                    userId: userIds[3],
                    rating: 5,
                    comment:
                        "This course helped me pass the AWS Solutions Architect exam with ease!",
                },
                {
                    userId: userIds[2],
                    rating: 4,
                    comment:
                        "Great content but the practice exams could be more detailed.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to AWS",
                    description:
                        "An introduction to Amazon Web Services (AWS) and its role in modern cloud computing.",
                    videoSection: [
                        {
                            title: "What is AWS?",
                            videoUrl: "https://example.com/aws_intro.mp4",
                            videoLength: 10,
                            links: [
                                {
                                    title: "AWS Overview",
                                    url: "https://aws.amazon.com/what-is-aws/",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "Setting Up an AWS Account",
                            videoUrl: "https://example.com/aws_account_setup.mp4",
                            videoLength: 20,
                            links: [
                                { title: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_player_script",
                },
                {
                    sectionName: "Architecting on AWS",
                    description:
                        "Best practices for architecting fault-tolerant and scalable systems on AWS.",
                    videoSection: [
                        {
                            title: "AWS EC2 and Auto Scaling",
                            videoUrl: "https://example.com/aws_ec2_autoscale.mp4",
                            videoLength: 25,
                            links: [
                                {
                                    title: "EC2 Documentation",
                                    url: "https://docs.aws.amazon.com/ec2/index.html",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_player_script",
                },
            ],
            course_enrolledBy: [userIds[0], userIds[2], userIds[3]],
            conversationId: conversationIds[2],
            isPublished: true,
            publishedBy: userIds[0],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            Id: courseIds[3],
            title: "Introduction to Python Programming",
            description:
                "A beginner-friendly course to learn Python programming from scratch. This course will guide you through Python syntax, data structures, and object-oriented programming.",
            price: 299.99,
            estimatedPrice: 399.99,
            thumbnail: {
                public_id: "python_thumbnail",
                url: "https://example.com/python_thumbnail.jpg",
            },
            tags: [
                "Python",
                "Programming",
                "Object-Oriented Programming",
                "Data Structures",
            ],
            level: "Beginner",
            demoUrl: "https://example.com/python_demo.mp4",
            benefits: [
                { title: "Master Python syntax and basics" },
                {
                    title:
                        "Understand Python data structures like lists, dictionaries, and tuples",
                },
                { title: "Write object-oriented code in Python" },
            ],
            prerequisites: [{ title: "No prior programming experience required" }],
            review: [
                {
                    userId: userIds[3],
                    rating: 5,
                    comment:
                        "A great course for Python beginners, the examples were very helpful!",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to Python",
                    description:
                        "Learn the basics of Python programming, including syntax, variables, and control flow.",
                    videoSection: [
                        {
                            title: "Python Syntax and Variables",
                            videoUrl: "https://example.com/python_syntax.mp4",
                            videoLength: 15,
                            links: [
                                {
                                    title: "Python Official Documentation",
                                    url: "https://docs.python.org/3/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/python_player_script",
                },
                {
                    sectionName: "Object-Oriented Programming in Python",
                    description:
                        "Learn to write object-oriented programs in Python, covering classes, objects, and methods.",
                    videoSection: [
                        {
                            title: "Classes and Objects",
                            videoUrl: "https://example.com/python_oop.mp4",
                            videoLength: 20,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/python_player_script",
                },
            ],
            course_enrolledBy: [userIds[0], userIds[3], userIds[4]],
            conversationId: conversationIds[3],
            isPublished: true,
            publishedBy: userIds[0],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //user4
        {
            _id: courseIds[4],
            title: "React.js Essentials",
            description:
                "Learn how to build dynamic web applications using React.js. This course covers components, state management, hooks, and more to create modern, performant web applications.",
            price: 499.99,
            estimatedPrice: 649.99,
            thumbnail: {
                public_id: "react_thumbnail",
                url: "https://example.com/react_thumbnail.jpg",
            },
            tags: ["React", "JavaScript", "Frontend Development", "Web Applications"],
            level: "Intermediate",
            demoUrl: "https://example.com/react_demo.mp4",
            benefits: [
                { title: "Understand React component-based architecture" },
                { title: "Learn to manage state using React hooks" },
                { title: "Build fast and responsive user interfaces" },
            ],
            prerequisites: [
                { title: "Basic knowledge of HTML, CSS, and JavaScript" },
            ],
            review: [
                {
                    userId: userIds[5],
                    rating: 5,
                    comment:
                        "Excellent course, helped me get started with React and build my first project!",
                },
            ],
            courseData: [
                {
                    sectionName: "React Components",
                    description:
                        "Learn how React components work, how to create them, and how they can be reused.",
                    videoSection: [
                        {
                            title: "Introduction to React Components",
                            videoUrl: "https://example.com/react_components.mp4",
                            videoLength: 15,
                            links: [
                                {
                                    title: "React Documentation",
                                    url: "https://reactjs.org/docs/components-and-props.html",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_player_script",
                },
                {
                    sectionName: "Managing State with Hooks",
                    description:
                        "Learn to manage state in your React applications using Hooks, including `useState` and `useEffect`.",
                    videoSection: [
                        {
                            title: "React Hooks Overview",
                            videoUrl: "https://example.com/react_hooks.mp4",
                            videoLength: 18,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_player_script",
                },
            ],
            course_enrolledBy: [userIds[4], userIds[5]],
            conversationId: conversationIds[4],
            isPublished: true,
            publishedBy: userIds[4],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[5],
            title: "Building APIs with GoLang",
            description:
                "Learn to build high-performance APIs using GoLang. This course covers everything from setting up GoLang to creating RESTful APIs and deploying them on cloud platforms.",
            price: 599.99,
            estimatedPrice: 749.99,
            thumbnail: {
                public_id: "golang_thumbnail",
                url: "https://example.com/golang_thumbnail.jpg",
            },
            tags: ["GoLang", "API Development", "Backend Development", "REST APIs"],
            level: "Advanced",
            demoUrl: "https://example.com/golang_demo.mp4",
            benefits: [
                { title: "Understand the GoLang programming language" },
                { title: "Build and test RESTful APIs with GoLang" },
                { title: "Deploy GoLang applications on cloud platforms" },
            ],
            prerequisites: [
                { title: "Familiarity with basic programming concepts" },
                { title: "Experience with RESTful APIs" },
            ],
            review: [
                {
                    userId: userIds[6],
                    rating: 4,
                    comment:
                        "Very detailed, but I wish it included more content on testing APIs.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to GoLang",
                    description:
                        "Learn the basics of GoLang, its syntax, and why it's a great choice for backend development.",
                    videoSection: [
                        {
                            title: "Getting Started with GoLang",
                            videoUrl: "https://example.com/golang_intro.mp4",
                            videoLength: 12,
                            links: [
                                {
                                    title: "GoLang Official Documentation",
                                    url: "https://golang.org/doc/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/golang_player_script",
                },
                {
                    sectionName: "Building REST APIs with GoLang",
                    description:
                        "Create RESTful APIs with GoLang and learn how to connect them with databases.",
                    videoSection: [
                        {
                            title: "REST API Basics",
                            videoUrl: "https://example.com/golang_api_basics.mp4",
                            videoLength: 20,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/golang_player_script",
                },
            ],
            course_enrolledBy: [userIds[4], userIds[6]],
            conversationId: conversationIds[5],
            isPublished: true,
            publishedBy: userIds[4],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[6],
            title: "Full-Stack Web Development Bootcamp",
            description:
                "Learn how to build scalable web applications from scratch using modern technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
            price: 899.99,
            estimatedPrice: 1199.99,
            thumbnail: {
                public_id: "fullstack_thumbnail",
                url: "https://example.com/fullstack_thumbnail.jpg",
            },
            tags: ["Full-Stack", "JavaScript", "React", "Node.js", "MongoDB"],
            level: "Advanced",
            demoUrl: "https://example.com/fullstack_demo.mp4",
            benefits: [
                { title: "Master frontend and backend development" },
                { title: "Build and deploy full-stack applications" },
                { title: "Understand API development and database management" },
            ],
            prerequisites: [
                { title: "Basic knowledge of HTML, CSS, and JavaScript" },
            ],
            review: [
                {
                    userId: userIds[7],
                    rating: 5,
                    comment:
                        "An extensive course that covers everything you need to build a complete web application!",
                },
                {
                    userId: userIds[9],
                    rating: 4,
                    comment:
                        "Great content, but I would have liked more advanced database tutorials.",
                },
            ],
            courseData: [
                {
                    sectionName: "Frontend Basics",
                    description:
                        "Learn the fundamentals of building responsive, interactive user interfaces with HTML, CSS, and JavaScript.",
                    videoSection: [
                        {
                            title: "Introduction to HTML",
                            videoUrl: "https://example.com/html_intro.mp4",
                            videoLength: 15,
                            links: [
                                {
                                    title: "HTML Documentation",
                                    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "CSS for Styling",
                            videoUrl: "https://example.com/css_intro.mp4",
                            videoLength: 20,
                            links: [{ title: "CSS Guide", url: "https://css-tricks.com/" }],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/frontend_player_script",
                },
                {
                    sectionName: "Backend with Node.js",
                    description:
                        "Dive into backend development using Node.js and Express. Learn to create RESTful APIs, manage data, and secure your applications.",
                    videoSection: [
                        {
                            title: "Introduction to Node.js",
                            videoUrl: "https://example.com/nodejs_intro.mp4",
                            videoLength: 18,
                            links: [
                                {
                                    title: "Node.js Documentation",
                                    url: "https://nodejs.org/en/docs/",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "Building RESTful APIs with Express",
                            videoUrl: "https://example.com/express_apis.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/backend_player_script",
                },
                {
                    sectionName: "Database Management with MongoDB",
                    description:
                        "Learn how to use MongoDB to store, manage, and query data efficiently for your web applications.",
                    videoSection: [
                        {
                            title: "Setting Up MongoDB",
                            videoUrl: "https://example.com/mongodb_setup.mp4",
                            videoLength: 22,
                            links: [
                                {
                                    title: "MongoDB Documentation",
                                    url: "https://docs.mongodb.com/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/mongodb_player_script",
                },
            ],
            course_enrolledBy: [userIds[4], userIds[7], userIds[9]],
            conversationId: conversationIds[6],
            isPublished: true,
            publishedBy: userIds[4],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //user8
        {
            _id: courseIds[7],
            title: "Mastering Advanced JavaScript Concepts",
            description:
                "Enhance your JavaScript skills by mastering concepts like closures, promises, async/await, prototype inheritance, and more.",
            price: 499.99,
            estimatedPrice: 699.99,
            thumbnail: {
                public_id: "javascript_advanced_thumbnail",
                url: "https://example.com/javascript_advanced_thumbnail.jpg",
            },
            tags: [
                "JavaScript",
                "Programming",
                "Frontend Development",
                "Asynchronous Programming",
            ],
            level: "Advanced",
            demoUrl: "https://example.com/javascript_advanced_demo.mp4",
            benefits: [
                { title: "Understand advanced JavaScript concepts" },
                {
                    title:
                        "Master asynchronous programming with Promises and async/await",
                },
                { title: "Deep dive into JavaScript closures, scope, and prototype" },
            ],
            prerequisites: [{ title: "Intermediate knowledge of JavaScript" }],
            review: [
                {
                    userId: userIds[7],
                    rating: 5,
                    comment:
                        "This course took my JavaScript knowledge to the next level. Great explanations of tricky concepts!",
                },
                {
                    userId: userIds[9],
                    rating: 4,
                    comment:
                        "Good course, but I wish there were more real-world examples.",
                },
            ],
            courseData: [
                {
                    sectionName: "Closures and Scope",
                    description:
                        "Understand how JavaScript closures work and how to manage variable scope in your applications.",
                    videoSection: [
                        {
                            title: "Understanding Closures",
                            videoUrl: "https://example.com/closures_intro.mp4",
                            videoLength: 15,
                            links: [
                                {
                                    title: "MDN Closures",
                                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "Variable Scope in JavaScript",
                            videoUrl: "https://example.com/scope_intro.mp4",
                            videoLength: 20,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/js_player_script",
                },
                {
                    sectionName: "Promises and Async/Await",
                    description:
                        "Learn to handle asynchronous operations in JavaScript using Promises and async/await.",
                    videoSection: [
                        {
                            title: "Promises Explained",
                            videoUrl: "https://example.com/promises_intro.mp4",
                            videoLength: 18,
                            links: [
                                {
                                    title: "JavaScript Promises",
                                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "Async/Await in Action",
                            videoUrl: "https://example.com/async_await.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/async_player_script",
                },
            ],
            course_enrolledBy: [userIds[8], userIds[7], userIds[9]],
            conversationId: conversationIds[7],
            isPublished: true,
            publishedBy: userIds[8],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[8],
            title: "Data Science with Python: From Basics to Advanced",
            description:
                "Learn the fundamentals of data science using Python, covering libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.",
            price: 799.99,
            estimatedPrice: 999.99,
            thumbnail: {
                public_id: "data_science_thumbnail",
                url: "https://example.com/data_science_thumbnail.jpg",
            },
            tags: ["Python", "Data Science", "Machine Learning", "Data Analysis"],
            level: "Professional",
            demoUrl: "https://example.com/data_science_demo.mp4",
            benefits: [
                { title: "Master Python libraries for data science" },
                { title: "Learn to analyze and visualize data" },
                { title: "Build machine learning models using Scikit-learn" },
            ],
            prerequisites: [
                { title: "Basic knowledge of Python programming" },
                { title: "Understanding of basic statistics" },
            ],
            review: [
                {
                    userId: userIds[9],
                    rating: 5,
                    comment:
                        "Perfect course for those looking to start a career in data science. The Python sections were thorough!",
                },
            ],
            courseData: [
                {
                    sectionName: "Data Manipulation with Pandas",
                    description:
                        "Learn to manipulate, clean, and analyze data using the Pandas library.",
                    videoSection: [
                        {
                            title: "Introduction to Pandas",
                            videoUrl: "https://example.com/pandas_intro.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "Pandas Documentation",
                                    url: "https://pandas.pydata.org/pandas-docs/stable/",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "DataFrames and Series",
                            videoUrl: "https://example.com/pandas_dataframes.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/pandas_player_script",
                },
                {
                    sectionName: "Data Visualization with Matplotlib",
                    description:
                        "Learn to visualize data effectively using Python’s Matplotlib library.",
                    videoSection: [
                        {
                            title: "Getting Started with Matplotlib",
                            videoUrl: "https://example.com/matplotlib_intro.mp4",
                            videoLength: 15,
                            links: [],
                        },
                        {
                            title: "Creating Line and Bar Charts",
                            videoUrl: "https://example.com/matplotlib_charts.mp4",
                            videoLength: 18,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/matplotlib_player_script",
                },
                {
                    sectionName: "Machine Learning with Scikit-learn",
                    description:
                        "Learn to build basic machine learning models using Scikit-learn for tasks like regression and classification.",
                    videoSection: [
                        {
                            title: "Introduction to Machine Learning",
                            videoUrl: "https://example.com/ml_intro.mp4",
                            videoLength: 25,
                            links: [
                                {
                                    title: "Scikit-learn Documentation",
                                    url: "https://scikit-learn.org/stable/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/ml_player_script",
                },
            ],
            course_enrolledBy: [userIds[8], userIds[9]],
            conversationId: conversationIds[8],
            isPublished: true,
            publishedBy: userIds[8],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[9],
            title: "Cloud Computing with AWS: The Complete Guide",
            description:
                "Learn to design, deploy, and manage scalable cloud applications using Amazon Web Services (AWS).",
            price: 999.99,
            estimatedPrice: 1249.99,
            thumbnail: {
                public_id: "aws_cloud_thumbnail",
                url: "https://example.com/aws_cloud_thumbnail.jpg",
            },
            tags: ["Cloud Computing", "AWS", "DevOps", "Cloud Architecture"],
            level: "Professional",
            demoUrl: "https://example.com/aws_cloud_demo.mp4",
            benefits: [
                { title: "Understand AWS services and cloud architecture" },
                { title: "Deploy and manage applications on AWS" },
                { title: "Learn to use services like EC2, S3, RDS, Lambda, and more" },
            ],
            prerequisites: [
                { title: "Basic understanding of IT infrastructure" },
                { title: "Experience with Linux/Unix systems" },
            ],
            review: [
                {
                    userId: userIds[10],
                    rating: 5,
                    comment:
                        "Comprehensive guide to AWS cloud. The sections on EC2 and S3 were very detailed and easy to follow!",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to AWS",
                    description:
                        "Learn the basics of cloud computing and get an overview of Amazon Web Services and its core services.",
                    videoSection: [
                        {
                            title: "What is Cloud Computing?",
                            videoUrl: "https://example.com/cloud_computing_intro.mp4",
                            videoLength: 12,
                            links: [
                                {
                                    title: "AWS Cloud Computing",
                                    url: "https://aws.amazon.com/what-is-cloud-computing/",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "AWS Core Services",
                            videoUrl: "https://example.com/aws_services_intro.mp4",
                            videoLength: 18,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_player_script",
                },
                {
                    sectionName: "Deploying Applications with EC2",
                    description:
                        "Learn to deploy scalable applications on AWS using EC2 instances and manage them efficiently.",
                    videoSection: [
                        {
                            title: "Introduction to EC2",
                            videoUrl: "https://example.com/aws_ec2_intro.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "AWS EC2 Documentation",
                                    url: "https://docs.aws.amazon.com/ec2/index.html",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "Managing EC2 Instances",
                            videoUrl: "https://example.com/aws_ec2_management.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_player_script",
                },
                {
                    sectionName: "Storage with AWS S3",
                    description:
                        "Learn to store and manage data using AWS S3, including creating buckets, uploading files, and setting permissions.",
                    videoSection: [
                        {
                            title: "Introduction to S3",
                            videoUrl: "https://example.com/aws_s3_intro.mp4",
                            videoLength: 18,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_player_script",
                },
            ],
            course_enrolledBy: [userIds[8], userIds[10]],
            conversationId: conversationIds[9],
            isPublished: true,
            publishedBy: userIds[8],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //user12
        {
            _id: courseIds[10],
            title: "Mastering DevOps with Kubernetes",
            description:
                "Learn how to manage containerized applications and orchestrate them using Kubernetes. This course covers Docker, Kubernetes architecture, deployment strategies, and scaling.",
            price: 799.99,
            estimatedPrice: 999.99,
            thumbnail: {
                public_id: "kubernetes_thumbnail",
                url: "https://example.com/kubernetes_thumbnail.jpg",
            },
            tags: ["DevOps", "Kubernetes", "Container Orchestration", "Docker"],
            level: "Professional",
            demoUrl: "https://example.com/kubernetes_demo.mp4",
            benefits: [
                { title: "Understand Docker and containerization" },
                { title: "Learn to deploy and scale applications using Kubernetes" },
                { title: "Master advanced Kubernetes features like Helm and Ingress" },
            ],
            prerequisites: [
                { title: "Familiarity with Linux command-line" },
                { title: "Basic knowledge of Docker and containers" },
            ],
            review: [
                {
                    userId: userIds[11],
                    rating: 5,
                    comment:
                        "Great hands-on course. The Kubernetes deployment sections were very helpful!",
                },
            ],
            courseData: [
                {
                    sectionName: "Containerization with Docker",
                    description:
                        "Learn how to create, manage, and deploy Docker containers for application development.",
                    videoSection: [
                        {
                            title: "Introduction to Docker",
                            videoUrl: "https://example.com/docker_intro.mp4",
                            videoLength: 18,
                            links: [
                                {
                                    title: "Docker Documentation",
                                    url: "https://docs.docker.com/",
                                },
                            ],
                            questions: [],
                        },
                        {
                            title: "Building Docker Images",
                            videoUrl: "https://example.com/docker_images.mp4",
                            videoLength: 20,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/docker_player_script",
                },
                {
                    sectionName: "Kubernetes Architecture",
                    description:
                        "Learn how Kubernetes works under the hood, including its architecture, components, and networking model.",
                    videoSection: [
                        {
                            title: "Kubernetes Overview",
                            videoUrl: "https://example.com/kubernetes_intro.mp4",
                            videoLength: 25,
                            links: [],
                        },
                        {
                            title: "Kubernetes Networking",
                            videoUrl: "https://example.com/kubernetes_networking.mp4",
                            videoLength: 22,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/kubernetes_player_script",
                },
                {
                    sectionName: "Scaling with Kubernetes",
                    description:
                        "Learn how to scale applications using Kubernetes deployments, including autoscaling and load balancing strategies.",
                    videoSection: [
                        {
                            title: "Kubernetes Deployments and Scaling",
                            videoUrl: "https://example.com/kubernetes_scaling.mp4",
                            videoLength: 30,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/kubernetes_player_script",
                },
            ],
            course_enrolledBy: [userIds[12], userIds[11]],
            conversationId: conversationIds[10],
            isPublished: true,
            publishedBy: userIds[12],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[11],
            title: "Python for Data Science: Mastering Data Analysis",
            description:
                "Learn how to analyze and visualize data using Python, focusing on libraries like Pandas, NumPy, and Matplotlib.",
            price: 599.99,
            estimatedPrice: 749.99,
            thumbnail: {
                public_id: "python_data_science_thumbnail",
                url: "https://example.com/python_data_science_thumbnail.jpg",
            },
            tags: ["Python", "Data Science", "Pandas", "NumPy", "Matplotlib"],
            level: "Intermediate",
            demoUrl: "https://example.com/python_data_demo.mp4",
            benefits: [
                { title: "Master data manipulation with Pandas and NumPy" },
                { title: "Create stunning data visualizations with Matplotlib" },
                { title: "Perform data analysis and exploratory data analysis" },
            ],
            prerequisites: [
                { title: "Basic knowledge of Python" },
                { title: "Understanding of data structures like arrays and lists" },
            ],
            review: [
                {
                    userId: userIds[13],
                    rating: 4,
                    comment:
                        "Very helpful for getting started with data analysis. Would love to see more advanced topics.",
                },
            ],
            courseData: [
                {
                    sectionName: "Getting Started with Pandas",
                    description:
                        "Learn how to load, manipulate, and analyze data using Pandas.",
                    videoSection: [
                        {
                            title: "Introduction to Pandas",
                            videoUrl: "https://example.com/pandas_intro.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "Pandas Documentation",
                                    url: "https://pandas.pydata.org/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/pandas_player_script",
                },
                {
                    sectionName: "Data Visualization with Matplotlib",
                    description:
                        "Learn to visualize your data using Matplotlib for creating charts and graphs.",
                    videoSection: [
                        {
                            title: "Creating Graphs with Matplotlib",
                            videoUrl: "https://example.com/matplotlib_graphs.mp4",
                            videoLength: 15,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/matplotlib_player_script",
                },
            ],
            course_enrolledBy: [userIds[12], userIds[13]],
            conversationId: conversationIds[11],
            isPublished: true,
            publishedBy: userIds[12],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //user16
        {
            _id: courseIds[12],
            title: "Java Spring Boot: Build RESTful APIs",
            description:
                "Learn to build RESTful web services using Spring Boot, including best practices for design, security, and scalability.",
            price: 499.99,
            estimatedPrice: 699.99,
            thumbnail: {
                public_id: "spring_boot_thumbnail",
                url: "https://example.com/spring_boot_thumbnail.jpg",
            },
            tags: ["Java", "Spring Boot", "REST APIs", "Backend Development"],
            level: "Intermediate",
            demoUrl: "https://example.com/spring_boot_demo.mp4",
            benefits: [
                { title: "Create REST APIs with Spring Boot" },
                {
                    title:
                        "Understand key concepts like dependency injection and autowiring",
                },
                { title: "Secure your APIs with Spring Security" },
            ],
            prerequisites: [
                { title: "Basic knowledge of Java" },
                { title: "Understanding of REST principles" },
            ],
            review: [
                {
                    userId: userIds[14],
                    rating: 5,
                    comment:
                        "Perfect course for backend developers! Very clear explanations of API security and best practices.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to Spring Boot",
                    description:
                        "Get started with Spring Boot and understand the fundamentals.",
                    videoSection: [
                        {
                            title: "Spring Boot Overview",
                            videoUrl: "https://example.com/spring_boot_intro.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "Spring Boot Documentation",
                                    url: "https://spring.io/projects/spring-boot",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/spring_boot_player_script",
                },
                {
                    sectionName: "Building REST APIs",
                    description:
                        "Learn how to build and secure RESTful APIs with Spring Boot.",
                    videoSection: [
                        {
                            title: "Creating REST APIs",
                            videoUrl: "https://example.com/spring_boot_apis.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/spring_boot_player_script",
                },
            ],
            course_enrolledBy: [userIds[16], userIds[14]],
            conversationId: conversationIds[12],
            isPublished: true,
            publishedBy: userIds[16],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[13],
            title: "Blockchain Development with Solidity",
            description:
                "Learn to build decentralized applications (dApps) on the Ethereum blockchain using Solidity.",
            price: 1099.99,
            estimatedPrice: 1399.99,
            thumbnail: {
                public_id: "solidity_thumbnail",
                url: "https://example.com/solidity_thumbnail.jpg",
            },
            tags: ["Blockchain", "Solidity", "Ethereum", "dApps"],
            level: "Advanced",
            demoUrl: "https://example.com/solidity_demo.mp4",
            benefits: [
                { title: "Understand how Ethereum works" },
                { title: "Write smart contracts using Solidity" },
                { title: "Build and deploy decentralized applications" },
            ],
            prerequisites: [
                { title: "Basic programming knowledge" },
                { title: "Understanding of blockchain concepts" },
            ],
            review: [
                {
                    userId: userIds[14],
                    rating: 5,
                    comment:
                        "A must-take for anyone interested in blockchain development. The Solidity smart contract examples were excellent!",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to Blockchain",
                    description:
                        "Understand the fundamentals of blockchain technology and Ethereum.",
                    videoSection: [
                        {
                            title: "Blockchain Basics",
                            videoUrl: "https://example.com/blockchain_basics.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "Ethereum Documentation",
                                    url: "https://ethereum.org/en/developers/docs/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/solidity_player_script",
                },
                {
                    sectionName: "Writing Smart Contracts with Solidity",
                    description:
                        "Learn to write and deploy smart contracts on Ethereum using Solidity.",
                    videoSection: [
                        {
                            title: "Introduction to Solidity",
                            videoUrl: "https://example.com/solidity_intro.mp4",
                            videoLength: 30,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/solidity_player_script",
                },
            ],
            course_enrolledBy: [userIds[16], userIds[14]],
            conversationId: conversationIds[13],
            isPublished: true,
            publishedBy: userIds[16],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //user20
        {
            _id: courseIds[14],
            title: "React Native: Build Mobile Applications",
            description:
                "Learn to develop mobile applications for iOS and Android using React Native, covering navigation, components, and state management.",
            price: 799.99,
            estimatedPrice: 999.99,
            thumbnail: {
                public_id: "react_native_thumbnail",
                url: "https://example.com/react_native_thumbnail.jpg",
            },
            tags: ["React Native", "Mobile Development", "JavaScript"],
            level: "Intermediate",
            demoUrl: "https://example.com/react_native_demo.mp4",
            benefits: [
                { title: "Build mobile apps using JavaScript and React Native" },
                { title: "Create reusable components and manage state" },
                { title: "Deploy apps to the App Store and Google Play" },
            ],
            prerequisites: [
                { title: "Basic knowledge of React" },
                { title: "Understanding of mobile app development concepts" },
            ],
            review: [
                {
                    userId: userIds[15],
                    rating: 4,
                    comment:
                        "Good introduction to mobile app development with React Native. The navigation section was very useful.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to React Native",
                    description:
                        "Get an overview of React Native and how to set up your environment.",
                    videoSection: [
                        {
                            title: "Setting Up React Native",
                            videoUrl: "https://example.com/react_native_setup.mp4",
                            videoLength: 15,
                            links: [
                                {
                                    title: "React Native Documentation",
                                    url: "https://reactnative.dev/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_native_player_script",
                },
                {
                    sectionName: "Building Components",
                    description:
                        "Learn to create and style reusable components in React Native.",
                    videoSection: [
                        {
                            title: "Creating Reusable Components",
                            videoUrl: "https://example.com/react_native_components.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_native_player_script",
                },
            ],
            course_enrolledBy: [userIds[20], userIds[15]],
            conversationId: conversationIds[14],
            isPublished: true,
            publishedBy: userIds[20],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[15],
            title: "Kubernetes for DevOps Engineers: Automating Containers",
            description:
                "Master Kubernetes for container orchestration and automate the deployment, scaling, and management of containerized applications.",
            price: 699.99,
            estimatedPrice: 899.99,
            thumbnail: {
                public_id: "kubernetes_thumbnail",
                url: "https://example.com/kubernetes_thumbnail.jpg",
            },
            tags: ["Kubernetes", "DevOps", "Containers", "Docker"],
            level: "Advanced",
            demoUrl: "https://example.com/kubernetes_demo.mp4",
            benefits: [
                { title: "Understand Kubernetes architecture and components" },
                { title: "Automate container orchestration" },
                { title: "Deploy, scale, and manage applications in Kubernetes" },
            ],
            prerequisites: [
                { title: "Familiarity with containers and Docker" },
                { title: "Basic understanding of DevOps practices" },
            ],
            review: [
                {
                    userId: userIds[16],
                    rating: 5,
                    comment:
                        "Highly recommend this course! Great insights into Kubernetes scaling and automation.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to Kubernetes",
                    description:
                        "Understand the basics of Kubernetes and its architecture.",
                    videoSection: [
                        {
                            title: "Kubernetes Architecture Overview",
                            videoUrl: "https://example.com/kubernetes_architecture.mp4",
                            videoLength: 25,
                            links: [
                                {
                                    title: "Kubernetes Documentation",
                                    url: "https://kubernetes.io/docs/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/kubernetes_player_script",
                },
                {
                    sectionName: "Deploying Applications",
                    description:
                        "Learn to deploy and manage applications in Kubernetes clusters.",
                    videoSection: [
                        {
                            title: "Application Deployment with Kubernetes",
                            videoUrl: "https://example.com/kubernetes_deployment.mp4",
                            videoLength: 30,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/kubernetes_player_script",
                },
            ],
            course_enrolledBy: [userIds[20], userIds[16]],
            conversationId: conversationIds[15],
            isPublished: true,
            publishedBy: userIds[20],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[16],
            title: "Advanced Machine Learning with TensorFlow",
            description:
                "Dive deep into machine learning techniques and neural networks using TensorFlow and Keras for AI model development.",
            price: 1299.99,
            estimatedPrice: 1599.99,
            thumbnail: {
                public_id: "tensorflow_ml_thumbnail",
                url: "https://example.com/tensorflow_ml_thumbnail.jpg",
            },
            tags: ["Machine Learning", "TensorFlow", "AI", "Deep Learning"],
            level: "Advanced",
            demoUrl: "https://example.com/tensorflow_ml_demo.mp4",
            benefits: [
                { title: "Master advanced machine learning algorithms" },
                { title: "Build deep neural networks using TensorFlow and Keras" },
                { title: "Optimize AI models for performance and scalability" },
            ],
            prerequisites: [
                { title: "Basic knowledge of Python" },
                { title: "Familiarity with linear algebra and calculus" },
            ],
            review: [
                {
                    userId: userIds[17],
                    rating: 5,
                    comment:
                        "An excellent course for anyone looking to master TensorFlow! Great explanations and hands-on examples.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to TensorFlow",
                    description:
                        "Learn the fundamentals of TensorFlow and how to set up your environment.",
                    videoSection: [
                        {
                            title: "Getting Started with TensorFlow",
                            videoUrl: "https://example.com/tensorflow_intro.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "TensorFlow Documentation",
                                    url: "https://www.tensorflow.org/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/tensorflow_player_script",
                },
                {
                    sectionName: "Building Deep Neural Networks",
                    description:
                        "Understand how to build and train deep neural networks for complex AI tasks.",
                    videoSection: [
                        {
                            title: "Neural Network Architectures",
                            videoUrl: "https://example.com/tensorflow_nn_architectures.mp4",
                            videoLength: 30,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/tensorflow_player_script",
                },
            ],
            course_enrolledBy: [userIds[20], userIds[17]],
            conversationId: conversationIds[16],
            isPublished: true,
            publishedBy: userIds[20],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //user24
        {
            _id: courseIds[17],
            title: "AWS Certified Solutions Architect – Associate Level",
            description:
                "Prepare for the AWS Certified Solutions Architect Associate exam by mastering cloud concepts and best practices.",
            price: 999.99,
            estimatedPrice: 1299.99,
            thumbnail: {
                public_id: "aws_solutions_architect_thumbnail",
                url: "https://example.com/aws_solutions_architect_thumbnail.jpg",
            },
            tags: ["AWS", "Cloud", "Solutions Architect", "Certification"],
            level: "Intermediate",
            demoUrl: "https://example.com/aws_solutions_demo.mp4",
            benefits: [
                { title: "Design and deploy scalable AWS solutions" },
                {
                    title:
                        "Prepare for the AWS Certified Solutions Architect Associate exam",
                },
                { title: "Optimize AWS architecture for security and performance" },
            ],
            prerequisites: [
                { title: "Basic understanding of cloud computing" },
                { title: "Familiarity with AWS services like EC2, S3, and RDS" },
            ],
            review: [
                {
                    userId: userIds[18],
                    rating: 5,
                    comment:
                        "Perfect for AWS certification prep. It covers everything you need to pass the exam.",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to AWS",
                    description:
                        "Get familiar with AWS core services and architecture design principles.",
                    videoSection: [
                        {
                            title: "AWS Global Infrastructure",
                            videoUrl: "https://example.com/aws_global_infrastructure.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "AWS Certified Solutions Architect Guide",
                                    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_solutions_player_script",
                },
                {
                    sectionName: "Designing Resilient Architectures",
                    description:
                        "Learn how to design architectures that meet business and technical requirements.",
                    videoSection: [
                        {
                            title: "High Availability and Fault Tolerance",
                            videoUrl: "https://example.com/aws_high_availability.mp4",
                            videoLength: 25,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/aws_solutions_player_script",
                },
            ],
            course_enrolledBy: [userIds[24], userIds[18]],
            conversationId: conversationIds[17],
            isPublished: true,
            publishedBy: userIds[24],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[18],
            title: "Full Stack Web Development with MEAN Stack",
            description:
                "Become a full-stack web developer by mastering MongoDB, Express, Angular, and Node.js (MEAN stack).",
            price: 849.99,
            estimatedPrice: 1099.99,
            thumbnail: {
                public_id: "mean_stack_thumbnail",
                url: "https://example.com/mean_stack_thumbnail.jpg",
            },
            tags: [
                "MEAN Stack",
                "MongoDB",
                "Angular",
                "Node.js",
                "Full Stack Development",
            ],
            level: "Intermediate",
            demoUrl: "https://example.com/mean_stack_demo.mp4",
            benefits: [
                { title: "Build dynamic full-stack applications" },
                {
                    title:
                        "Understand the interaction between frontend and backend with MEAN stack",
                },
                { title: "Learn how to deploy full-stack applications to the cloud" },
            ],
            prerequisites: [
                { title: "Basic knowledge of JavaScript" },
                {
                    title: "Familiarity with front-end development (HTML/CSS/JavaScript)",
                },
            ],
            review: [
                {
                    userId: userIds[19],
                    rating: 4,
                    comment:
                        "Great introduction to the MEAN stack. I built my first full-stack project!",
                },
            ],
            courseData: [
                {
                    sectionName: "Introduction to MEAN Stack",
                    description:
                        "Understand the MEAN stack and how each component works together.",
                    videoSection: [
                        {
                            title: "Overview of MongoDB, Express, Angular, and Node.js",
                            videoUrl: "https://example.com/mean_stack_overview.mp4",
                            videoLength: 30,
                            links: [
                                { title: "MEAN Stack Documentation", url: "https://mean.io/" },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/mean_stack_player_script",
                },
                {
                    sectionName: "Building a Full-Stack Application",
                    description:
                        "Learn to build a full-stack application from scratch using the MEAN stack.",
                    videoSection: [
                        {
                            title: "Developing RESTful APIs with Node.js",
                            videoUrl: "https://example.com/mean_stack_rest_apis.mp4",
                            videoLength: 40,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/mean_stack_player_script",
                },
            ],
            course_enrolledBy: [userIds[24], userIds[19]],
            conversationId: conversationIds[18],
            isPublished: true,
            publishedBy: userIds[24],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: courseIds[19],
            title: "React Native for Mobile App Development",
            description:
                "Learn to build cross-platform mobile applications using React Native, leveraging your React skills to create native-like experiences.",
            price: 899.99,
            estimatedPrice: 1099.99,
            thumbnail: {
                public_id: "react_native_thumbnail",
                url: "https://example.com/react_native_thumbnail.jpg",
            },
            tags: [
                "React Native",
                "Mobile Development",
                "JavaScript",
                "Cross-Platform",
            ],
            level: "Intermediate",
            demoUrl: "https://example.com/react_native_demo.mp4",
            benefits: [
                { title: "Build native mobile apps for iOS and Android" },
                {
                    title:
                        "Utilize existing React knowledge to develop mobile applications",
                },
                {
                    title:
                        "Understand the architecture of React Native and its components",
                },
            ],
            prerequisites: [
                { title: "Proficiency in JavaScript" },
                { title: "Basic understanding of React" },
            ],
            review: [
                {
                    userId: userIds[19],
                    rating: 5,
                    comment:
                        "This course is fantastic! It helped me transition from web development to mobile app development smoothly.",
                },
            ],
            courseData: [
                {
                    sectionName: "Getting Started with React Native",
                    description:
                        "Understand the setup and architecture of a React Native project.",
                    videoSection: [
                        {
                            title: "Setting Up Your Development Environment",
                            videoUrl: "https://example.com/react_native_setup.mp4",
                            videoLength: 20,
                            links: [
                                {
                                    title: "React Native Documentation",
                                    url: "https://reactnative.dev/docs/getting-started",
                                },
                            ],
                            questions: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_native_player_script",
                },
                {
                    sectionName: "Building Your First App",
                    description:
                        "Learn to create your first React Native application from scratch.",
                    videoSection: [
                        {
                            title: "Creating a Simple To-Do App",
                            videoUrl: "https://example.com/react_native_todo_app.mp4",
                            videoLength: 40,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_native_player_script",
                },
                {
                    sectionName: "Navigating Between Screens",
                    description:
                        "Explore navigation options and learn to manage transitions between different screens in your app.",
                    videoSection: [
                        {
                            title: "Using React Navigation",
                            videoUrl: "https://example.com/react_native_navigation.mp4",
                            videoLength: 30,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_native_player_script",
                },
                {
                    sectionName: "Handling User Input",
                    description:
                        "Understand how to capture user input and manage state in your application.",
                    videoSection: [
                        {
                            title: "Forms and User Input Management",
                            videoUrl: "https://example.com/react_native_forms.mp4",
                            videoLength: 35,
                            links: [],
                        },
                    ],
                    videoPlayer: "https://example.com/react_native_player_script",
                },
            ],
            course_enrolledBy: [
                userIds[24],
                userIds[19],
                userIds[20],
                userIds[21],
                userIds[23],
            ],
            conversationId: conversationIds[19],
            isPublished: true,
            publishedBy: userIds[24],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];
    const conversations = [
        //course0 conversation0
        {
            _id: conversationIds[0],
            course_id: courseIds[0],
            participants: [userIds[0], userIds[1], userIds[2]],
            messages: [
                {
                    sender_id: userIds[1],
                    content_type: "text",
                    content: "Welcome to the JavaScript course discussion.",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[2],
                    content_type: "code",
                    content: "let sum = (a, b) => a + b;",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course1 conversation1
        {
            _id: conversationIds[1],
            course_id: courseIds[1],
            participants: [userIds[0], userIds[2]],
            messages: [
                {
                    sender_id: userIds[0],
                    content_type: "text",
                    content: "How do I set up a Docker container for Node.js?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[2],
                    content_type: "image",
                    content: "https://example.com/images/docker-nodejs-setup.png",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course2 conversation2
        {
            _id: conversationIds[2],
            course_id: courseIds[2],
            participants: [userIds[0], userIds[2], userIds[3]],
            messages: [
                {
                    sender_id: new mongoose.Types.ObjectId(),
                    content_type: "text",
                    content: "What are the best practices for securing an Express API?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: new mongoose.Types.ObjectId(),
                    content_type: "code",
                    content: "app.use(helmet());",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course3 conversation3
        {
            _id: conversationIds[3],
            course_id: courseIds[3],
            participants: [userIds[0], userIds[3], userIds[4]],
            messages: [
                {
                    sender_id: userIds[0],
                    content_type: "text",
                    content: "How do I connect my React app with a backend API?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[3],
                    content_type: "code",
                    content: "fetch('/api/data').then(res => res.json())",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course4 conversation4
        {
            _id: conversationIds[4],
            course_id: courseIds[4],
            participants: [userIds[4], userIds[5]],
            messages: [
                {
                    sender_id: userIds[4],
                    content_type: "text",
                    content: "Can anyone explain how to deploy a Node.js app to AWS?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[5],
                    content_type: "image",
                    content: "https://example.com/images/aws-node-deployment.png",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course5 conversation5
        {
            _id: conversationIds[5],
            course_id: courseIds[5],
            participants: [userIds[4], userIds[6]],
            messages: [
                {
                    sender_id: userIds[4],
                    content_type: "text",
                    content:
                        "What's the difference between let, const, and var in JavaScript?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[6],
                    content_type: "code",
                    content: "let x = 10; const y = 20; var z = 30;",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course6 conversation6
        {
            _id: conversationIds[6],
            course_id: courseIds[6],
            participants: [userIds[4], userIds[7], userIds[9]],
            messages: [
                {
                    sender_id: userIds[4],
                    content_type: "text",
                    content: "How do I manage state in React using Redux?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[7],
                    content_type: "code",
                    content: "const store = createStore(rootReducer);",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course7 conversation7
        {
            _id: conversationIds[7],
            course_id: courseIds[7],
            participants: [userIds[8], userIds[7], userIds[9]],
            messages: [
                {
                    sender_id: userIds[8],
                    content_type: "text",
                    content:
                        "What is the difference between class components and functional components in React?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[7],
                    content_type: "code",
                    content: "class MyComponent extends React.Component {}",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course8 conversation8
        {
            _id: conversationIds[8],
            course_id: courseIds[8],
            participants: [userIds[8], userIds[9]],
            messages: [
                {
                    sender_id: userIds[8],
                    content_type: "text",
                    content: "How can I optimize the performance of my React app?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[9],
                    content_type: "image",
                    content: "https://example.com/images/react-performance.png",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course9 conversation9
        {
            _id: conversationIds[9],
            course_id: courseIds[9],
            participants: [userIds[8], userIds[10]],
            messages: [
                {
                    sender_id: userIds[8],
                    content_type: "text",
                    content: "Can someone explain how OAuth2 works with Node.js?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[10],
                    content_type: "code",
                    content: "passport.use(new OAuth2Strategy({ ... }));",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course10 conversation10
        {
            _id: conversationIds[10],
            course_id: courseIds[10],
            participants: [userIds[12], userIds[11]],
            messages: [
                {
                    sender_id: userIds[12],
                    content_type: "text",
                    content:
                        "What's the difference between async/await and promises in JavaScript?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[11],
                    content_type: "code",
                    content:
                        "async function fetchData() { const res = await fetch(url); }",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course11 conversation11
        {
            _id: conversationIds[11],
            course_id: courseIds[11],
            participants: [userIds[12], userIds[13]],
            messages: [
                {
                    sender_id: userIds[12],
                    content_type: "text",
                    content:
                        "Can anyone share tips for improving the security of a MongoDB database?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[13],
                    content_type: "code",
                    content:
                        "db.createUser({ user: 'admin', pwd: 'securepassword', roles: ['dbAdmin'] });",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course12 conversation12
        {
            _id: conversationIds[12],
            course_id: courseIds[12],
            participants: [userIds[16], userIds[14]],
            messages: [
                {
                    sender_id: userIds[16],
                    content_type: "text",
                    content:
                        "How do I deploy a full-stack app with a React frontend and Node.js backend?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[14],
                    content_type: "image",
                    content: "https://example.com/images/fullstack-deployment.png",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course13 conversation13
        {
            _id: conversationIds[13],
            course_id: courseIds[13],
            participants: [userIds[16], userIds[14]],
            messages: [
                {
                    sender_id: userIds[16],
                    content_type: "text",
                    content:
                        "What are the best practices for writing unit tests in Node.js?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[14],
                    content_type: "code",
                    content:
                        "describe('GET /api/users', () => { it('should return all users', async () => {...}); });",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course14 conversation14
        {
            _id: conversationIds[14],
            course_id: courseIds[14],
            participants: [userIds[20], userIds[15]],
            messages: [
                {
                    sender_id: userIds[20],
                    content_type: "text",
                    content: "How do I handle file uploads in a Node.js API?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[15],
                    content_type: "code",
                    content:
                        "app.post('/upload', upload.single('file'), (req, res) => { res.send('File uploaded!'); });",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course15 conversation15
        {
            _id: conversationIds[15],
            course_id: courseIds[15],
            participants: [userIds[20], userIds[16]],
            messages: [
                {
                    sender_id: userIds[20],
                    content_type: "text",
                    content:
                        "What are the different types of NoSQL databases, and when should I use them?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[16],
                    content_type: "code",
                    content: "db.createCollection('users'); // Example for MongoDB",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course16 conversation16
        {
            _id: conversationIds[16],
            course_id: courseIds[16],
            participants: [userIds[20], userIds[17]],
            messages: [
                {
                    sender_id: userIds[20],
                    content_type: "text",
                    content: "What's the difference between Docker and Kubernetes?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[17],
                    content_type: "image",
                    content: "https://example.com/images/docker-vs-kubernetes.png",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course17 conversation17
        {
            _id: conversationIds[17],
            course_id: courseIds[17],
            participants: [userIds[24], userIds[18]],
            messages: [
                {
                    sender_id: userIds[24],
                    content_type: "text",
                    content:
                        "How do I implement user authentication in a MERN stack application?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[18],
                    content_type: "code",
                    content:
                        "const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course18 conversation18
        {
            _id: conversationIds[18],
            course_id: courseIds[18],
            participants: [userIds[24], userIds[19]],
            messages: [
                {
                    sender_id: userIds[24],
                    content_type: "text",
                    content:
                        "Can anyone explain what GraphQL is and how it differs from REST?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[19],
                    content_type: "code",
                    content: "const { graphqlHTTP } = require('express-graphql');",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        //course19 conversation19
        {
            _id: conversationIds[19],
            course_id: courseIds[19],
            participants: [
                userIds[24],
                userIds[19],
                userIds[20],
                userIds[21],
                userIds[23],
            ],
            messages: [
                {
                    sender_id: userIds[24],
                    content_type: "text",
                    content: "How do I use AWS Lambda to run serverless functions?",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    sender_id: userIds[19],
                    content_type: "code",
                    content:
                        "exports.handler = async (event) => { return { statusCode: 200, body: 'Hello, World!' }; };",
                    reply_to: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ];

    const invoice = [
        //course0
        {
            _id: invoiceIds[0],
            userId: userIds[1],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[0],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-04-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-04-15"),
            updated_at: new Date("2024-04-15"),
        },
        {
            _id: invoiceIds[1],
            userId: userIds[2],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[0],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course1
        {
            _id: invoiceIds[2],
            userId: userIds[2],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[1],
                coursePrice: 599.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 599.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course2
        {
            _id: invoiceIds[3],
            userId: userIds[2],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[2],
                coursePrice: 799.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 799.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[4],
            userId: userIds[3],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[2],
                coursePrice: 799.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 799.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course3
        {
            _id: invoiceIds[5],
            userId: userIds[3],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[3],
                coursePrice: 299.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 299.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[6],
            userId: userIds[4],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[3],
                coursePrice: 299.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 299.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course4
        {
            _id: invoiceIds[7],
            userId: userIds[5],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[4],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course5
        {
            _id: invoiceIds[8],
            userId: userIds[6],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[5],
                coursePrice: 599.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 599.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course6
        {
            _id: invoiceIds[9],
            userId: userIds[7],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[6],
                coursePrice: 299.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 299.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },

        {
            _id: invoiceIds[10],
            userId: userIds[9],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[6],
                coursePrice: 299.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 299.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },

        //course7
        {
            _id: invoiceIds[11],
            userId: userIds[7],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[7],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[12],
            userId: userIds[9],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[7],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course8
        {
            _id: invoiceIds[13],
            userId: userIds[9],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[8],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course9
        {
            _id: invoiceIds[14],
            userId: userIds[10],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[9],
                coursePrice: 999.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 999.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course10
        {
            _id: invoiceIds[15],
            userId: userIds[11],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[10],
                coursePrice: 999.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 999.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course11
        {
            _id: invoiceIds[16],
            userId: userIds[13],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[11],
                coursePrice: 599.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 599.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course12
        {
            _id: invoiceIds[17],
            userId: userIds[14],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[12],
                coursePrice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 499.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course13
        {
            _id: invoiceIds[18],
            userId: userIds[14],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[13],
                coursePrice: 1099.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 1099.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course14
        {
            _id: invoiceIds[19],
            userId: userIds[15],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[14],
                coursePrice: 799.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 799.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course15
        {
            _id: invoiceIds[20],
            userId: userIds[16],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[15],
                coursePrice: 699.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 699.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course16
        {
            _id: invoiceIds[21],
            userId: userIds[17],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[16],
                coursePrice: 1299.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 1299.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course17
        {
            _id: invoiceIds[22],
            userId: userIds[18],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[17],
                coursePrice: 1299.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 1299.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course18
        {
            _id: invoiceIds[23],
            userId: userIds[19],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[18],
                coursePrice: 849.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 849.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //course19
        {
            _id: invoiceIds[24],
            userId: userIds[19],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[19],
                coursePrice: 899.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[25],
            userId: userIds[21],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[19],
                coursePrice: 899.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[26],
            userId: userIds[22],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[19],
                coursePrice: 899.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[27],
            userId: userIds[23],
            orderType: "course_purchase",
            courseOrder: {
                courseId: courseIds[19],
                coursePrice: 899.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        //teacher1
        {
            _id: invoiceIds[28],
            userId: userIds[4],
            orderType: "instructor_fee",
            courseOrder: {
                instructorId: userIds[4],
                instructorprice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[29],
            userId: userIds[8],
            orderType: "instructor_fee",
            courseOrder: {
                instructorId: userIds[8],
                instructorprice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[30],
            userId: userIds[12],
            orderType: "instructor_fee",
            courseOrder: {
                instructorId: userIds[12],
                instructorprice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[31],
            userId: userIds[16],
            orderType: "instructor_fee",
            courseOrder: {
                instructorId: userIds[16],
                instructorprice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[32],
            userId: userIds[20],
            orderType: "instructor_fee",
            courseOrder: {
                instructorId: userIds[20],
                instructorprice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
        {
            _id: invoiceIds[33],
            userId: userIds[24],
            orderType: "instructor_fee",
            courseOrder: {
                instructorId: userIds[24],
                instructorprice: 499.99,
            },
            instructorOrder: null,
            orderDate: new Date("2024-05-15"),
            paymentStatus: "paid",
            amount: 899.99,
            created_at: new Date("2024-05-15"),
            updated_at: new Date("2024-05-15"),
        },
    ];
    try {
        await AccountModel.insertMany(account);
        await UserModel.insertMany(user);
        await BlogModel.insertMany(blog);
        await CourseModel.insertMany(course);
        await ConversationModel.insertMany(conversations);
        await InvoiceModel.insertMany(invoice);
        console.log("upload successful")
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.error("Validation error:", error.message);
        } else if (error.code === 11000) {
            console.error("Duplicate key error:", error.message);
        } else {
            console.error("Error inserting data:", error.message);
        }
    }

}

module.exports = createStaticData
// createStaticData();
