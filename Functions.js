// Función para obtener todos los mensajes de un usuario específico
function getMessagesByUser(userId) {
    return db.messages.find({ sender_id: ObjectId(userId) }).toArray();
}

// Función para obtener mensajes enviados a un usuario específico
function getMessagesForUser(userId) {
    return db.messages.find({ recipient_ids: ObjectId(userId) }).toArray();
}

// Función para obtener mensajes en una fecha específica
function getMessagesByDate(date) {
    return db.messages.find({
        sent_date: {
            $gte: new Date(date + "T00:00:00Z"),
            $lt: new Date(date + "T23:59:59Z")
        }
    }).toArray();
}

// Función para contar mensajes por usuario
function countMessagesByUser() {
    return db.messages.aggregate([
        {
            $group: {
                _id: "$sender_id",
                totalMessages: { $sum: 1 }
            }
        }
    ]).toArray();
}

// Función para obtener mensajes no leídos por un usuario específico
function getUnreadMessagesForUser(userId) {
    return db.messages.find({
        recipient_ids: ObjectId(userId),
        read_date: null
    }).toArray();
}

// Función para obtener mensajes recientes con detalles de usuario y clase
function getRecentMessages(limit) {
    return db.messages.aggregate([
        { $sort: { sent_date: -1 } },
        { $limit: limit },
        {
            $lookup: {
                from: "users",
                localField: "sender_id",
                foreignField: "_id",
                as: "senderInfo"
            }
        },
        {
            $lookup: {
                from: "classes",
                localField: "class_id",
                foreignField: "_id",
                as: "classInfo"
            }
        },
        { $unwind: "$senderInfo" },
        { $unwind: "$classInfo" },
        {
            $project: {
                _id: 0,
                content: 1,
                sender: "$senderInfo.name.first_name",
                class: "$classInfo.name",
                sent_date: 1
            }
        }
    ]).toArray();
}