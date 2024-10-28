db.users.insertMany([
    {
        name: {
            first_name: "John",
            middle_name: "Michael",
            paternal_last_name: "Doe",
            maternal_last_name: "Smith"
        },
        email: "john.doe@example.com",
        password: "password123",
        role: "student",
        birth_date: new Date("2000-01-01"),
        gender: "male",
        address: "123 Main St",
        phone: "123-456-7890",
        educational_institution_id: ObjectId(), // Cambia esto por un ID real si lo tienes
        class_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: {
            first_name: "Jane",
            middle_name: "Ann",
            paternal_last_name: "Doe",
            maternal_last_name: "Johnson"
        },
        email: "jane.doe@example.com",
        password: "securePassword",
        role: "teacher",
        birth_date: new Date("1985-05-05"),
        gender: "female",
        address: "456 Elm St",
        phone: "987-654-3210",
        educational_institution_id: ObjectId(),
        class_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: {
            first_name: "Carlos",
            middle_name: "Eduardo",
            paternal_last_name: "Gonzalez",
            maternal_last_name: "PÃ©rez"
        },
        email: "carlos.gonzalez@example.com",
        password: "carlosPassword",
        role: "parent",
        birth_date: new Date("1975-09-15"),
        gender: "male",
        address: "789 Oak St",
        phone: "555-123-4567",
        educational_institution_id: ObjectId(),
        class_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: {
            first_name: "Maria",
            middle_name: "Carmen",
            paternal_last_name: "Lopez",
            maternal_last_name: "Hernandez"
        },
        email: "maria.lopez@example.com",
        password: "mariaPassword",
        role: "student",
        birth_date: new Date("2001-03-30"),
        gender: "female",
        address: "321 Pine St",
        phone: "333-444-5555",
        educational_institution_id: ObjectId(),
        class_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    }
]);

db.educational_institutions.insertMany([
    {
        name: "Example School",
        address: "789 Oak St",
        phone: "555-123-4567",
        email: "info@example.com",
        location: {
            department: "Department",
            province: "Province",
            district: "District",
            latitude: 1.23456,
            longitude: -1.23456
        },
        teacher_ids: [],
        student_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: "International Academy",
        address: "101 Maple Ave",
        phone: "555-987-6543",
        email: "contact@internationalacademy.edu",
        location: {
            department: "Tech",
            province: "Innovation",
            district: "Central",
            latitude: 2.34567,
            longitude: -2.34567
        },
        teacher_ids: [],
        student_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: "Learning Tree University",
        address: "234 Birch Blvd",
        phone: "555-555-5555",
        email: "admissions@learningtree.edu",
        location: {
            department: "Education",
            province: "Knowledge",
            district: "South",
            latitude: 3.45678,
            longitude: -3.45678
        },
        teacher_ids: [],
        student_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    }
]);

db.classes.insertMany([
    {
        name: "Mathematics 101",
        description: "Introduction to Mathematics",
        teacher_id: ObjectId(), // Cambia según los IDs de usuario
        student_ids: [],
        educational_institution_id: ObjectId(), // Cambia según los IDs de institución
        resource_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: "History of Art",
        description: "Exploring major art movements and artists.",
        teacher_id: ObjectId(),
        student_ids: [],
        educational_institution_id: ObjectId(),
        resource_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        name: "Computer Science Basics",
        description: "Introduction to Computer Science concepts.",
        teacher_id: ObjectId(),
        student_ids: [],
        educational_institution_id: ObjectId(),
        resource_ids: [],
        creation_date: new Date(),
        update_date: new Date()
    }
]);

db.educational_resources.insertMany([
    {
        title: "Advanced Physics Textbook",
        description: "A comprehensive textbook covering advanced physics topics.",
        type: "document",
        file: {
            file_name: "advanced_physics.pdf",
            mime_type: "application/pdf",
            size: 1048576, // 1 MB
            data: new BinData(0, "base64data") // Placeholder for binary data
        },
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a70"), // Replace with a valid class ID
        teacher_id: ObjectId("648d88e98b0e2a9fbbbc3a66"), // Replace with a valid teacher ID
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        title: "Biology 101 Lecture Video",
        description: "Lecture video for the Biology 101 course.",
        type: "video",
        file: {
            file_name: "biology_lecture.mp4",
            mime_type: "video/mp4",
            size: 5242880, // 5 MB
            data: new BinData(0, "base64data") // Placeholder for binary data
        },
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a71"), // Replace with a valid class ID
        teacher_id: ObjectId("648d88e98b0e2a9fbbbc3a66"), // Replace with a valid teacher ID
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        title: "Chemistry Lab Manual",
        description: "Laboratory manual for Chemistry experiments.",
        type: "document",
        file: {
            file_name: "chemistry_lab_manual.pdf",
            mime_type: "application/pdf",
            size: 256000, // 250 KB
            data: new BinData(0, "base64data") // Placeholder for binary data
        },
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a72"), // Replace with a valid class ID
        teacher_id: ObjectId("648d88e98b0e2a9fbbbc3a67"), // Replace with a valid teacher ID
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        title: "History of Science Podcast",
        description: "A podcast series discussing the history of science.",
        type: "audio",
        file: {
            file_name: "history_of_science.mp3",
            mime_type: "audio/mpeg",
            size: 52428800, // 50 MB
            data: new BinData(0, "base64data") // Placeholder for binary data
        },
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a73"), // Replace with a valid class ID
        teacher_id: ObjectId("648d88e98b0e2a9fbbbc3a68"), // Replace with a valid teacher ID
        creation_date: new Date(),
        update_date: new Date()
    },
    {
        title: "Intro to Computer Science Slides",
        description: "Presentation slides for the Intro to Computer Science course.",
        type: "document",
        file: {
            file_name: "cs_intro_slides.pptx",
            mime_type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            size: 1048576, // 1 MB
            data: new BinData(0, "base64data") // Placeholder for binary data
        },
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a74"), // Replace with a valid class ID
        teacher_id: ObjectId("648d88e98b0e2a9fbbbc3a69"), // Replace with a valid teacher ID
        creation_date: new Date(),
        update_date: new Date()
    }
]);

db.messages.insertMany([
    {
        content: "Welcome to Mathematics 101!",
        sender_id: ObjectId("648d88e98b0e2a9fbbbc3a66"), // Cambia por un ID válido de un usuario
        recipient_ids: [ObjectId("648d88e98b0e2a9fbbbc3a65")], // Cambia por un ID válido de un usuario
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a70"), // Cambia por un ID válido de una clase
        sent_date: new Date(),
        read_date: null,
        attachments: []
    },
    {
        content: "Don't forget to submit your assignments!",
        sender_id: ObjectId("648d88e98b0e2a9fbbbc3a66"), // Cambia por un ID válido de un usuario
        recipient_ids: [ObjectId("648d88e98b0e2a9fbbbc3a65")], // Cambia por un ID válido de un usuario
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a70"), // Cambia por un ID válido de una clase
        sent_date: new Date(),
        read_date: null,
        attachments: []
    },
    {
        content: "Next class will cover the Renaissance period.",
        sender_id: ObjectId("648d88e98b0e2a9fbbbc3a66"), // Cambia por un ID válido de un usuario
        recipient_ids: [ObjectId("648d88e98b0e2a9fbbbc3a67")], // Cambia por un ID válido de un usuario
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a71"), // Cambia por un ID válido de una clase
        sent_date: new Date(),
        read_date: null,
        attachments: []
    },
    {
        content: "Reminder: The homework is due this Friday!",
        sender_id: ObjectId("648d88e98b0e2a9fbbbc3a66"), // Cambia por un ID válido de un usuario
        recipient_ids: [ObjectId("648d88e98b0e2a9fbbbc3a68")], // Cambia por un ID válido de un usuario
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a70"), // Cambia por un ID válido de una clase
        sent_date: new Date(),
        read_date: null,
        attachments: []
    },
    {
        content: "Great job on your last presentation!",
        sender_id: ObjectId("648d88e98b0e2a9fbbbc3a67"), // Cambia por un ID válido de un usuario
        recipient_ids: [ObjectId("648d88e98b0e2a9fbbbc3a66")], // Cambia por un ID válido de un usuario
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a71"), // Cambia por un ID válido de una clase
        sent_date: new Date(),
        read_date: null,
        attachments: []
    },
    {
        content: "The field trip is scheduled for next week.",
        sender_id: ObjectId("648d88e98b0e2a9fbbbc3a68"), // Cambia por un ID válido de un usuario
        recipient_ids: [ObjectId("648d88e98b0e2a9fbbbc3a66")], // Cambia por un ID válido de un usuario
        class_id: ObjectId("648d88e98b0e2a9fbbbc3a72"), // Cambia por un ID válido de una clase
        sent_date: new Date(),
        read_date: null,
        attachments: []
    }
]);