// Definición de esquemas
const usersSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "email", "password", "role"],
        properties: {
            name: {
                bsonType: "object",
                required: ["first_name", "paternal_last_name", "maternal_last_name"],
                properties: {
                    first_name: {
                        bsonType: "string"
                    },
                    middle_name: {
                        bsonType: "string"
                    },
                    paternal_last_name: {
                        bsonType: "string"
                    },
                    maternal_last_name: {
                        bsonType: "string"
                    }
                }
            },
            email: {
                bsonType: "string",
                pattern: "^.+@.+\\..+$"
            },
            password: {
                bsonType: "string"
            },
            role: {
                enum: ["teacher", "student", "parent"]
            },
            birth_date: {
                bsonType: "date"
            },
            gender: {
                enum: ["male", "female", "other"]
            },
            address: {
                bsonType: "string"
            },
            phone: {
                bsonType: "string"
            },
            educational_institution_id: {
                bsonType: "objectId"
            },
            class_ids: {
                bsonType: "array",
                items: {
                    bsonType: "objectId"
                }
            },
            creation_date: {
                bsonType: "date"
            },
            update_date: {
                bsonType: "date"
            }
        }
    }
};

const educationalInstitutionsSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "address"],
        properties: {
            name: {
                bsonType: "string"
            },
            address: {
                bsonType: "string"
            },
            phone: {
                bsonType: "string"
            },
            email: {
                bsonType: "string",
                pattern: "^.+@.+\\..+$"
            },
            location: {
                bsonType: "object",
                properties: {
                    department: {
                        bsonType: "string"
                    },
                    province: {
                        bsonType: "string"
                    },
                    district: {
                        bsonType: "string"
                    },
                    latitude: {
                        bsonType: "double"
                    },
                    longitude: {
                        bsonType: "double"
                    }
                }
            },
            teacher_ids: {
                bsonType: "array",
                items: {
                    bsonType: "objectId"
                }
            },
            student_ids: {
                bsonType: "array",
                items: {
                    bsonType: "objectId"
                }
            },
            creation_date: {
                bsonType: "date"
            },
            update_date: {
                bsonType: "date"
            }
        }
    }
};

const classesSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["name", "teacher_id", "educational_institution_id"],
        properties: {
            name: {
                bsonType: "string"
            },
            description: {
                bsonType: "string"
            },
            teacher_id: {
                bsonType: "objectId"
            },
            student_ids: {
                bsonType: "array",
                items: {
                    bsonType: "objectId"
                }
            },
            educational_institution_id: {
                bsonType: "objectId"
            },
            resource_ids: {
                bsonType: "array",
                items: {
                    bsonType: "objectId"
                }
            },
            creation_date: {
                bsonType: "date"
            },
            update_date: {
                bsonType: "date"
            }
        }
    }
};

const educationalResourcesSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["title", "type", "teacher_id", "class_id", "file"],
        properties: {
            title: {
                bsonType: "string",
                description: "Title of the educational resource"
            },
            description: {
                bsonType: "string",
                description: "Description of the educational resource"
            },
            type: {
                enum: ["document", "video", "audio", "image"],
                description: "Type of educational resource"
            },
            file: {
                bsonType: "object",
                required: ["file_name", "mime_type", "size", "data"],
                properties: {
                    file_name: {
                        bsonType: "string",
                        description: "Name of the file"
                    },
                    mime_type: {
                        bsonType: "string",
                        description: "MIME type of the file (e.g., 'application/pdf', 'video/mp4')"
                    },
                    size: {
                        bsonType: "int",
                        description: "File size in bytes"
                    },
                    data: {
                        bsonType: "binData",
                        description: "Binary data of the file"
                    }
                },
                description: "Information about the attached file"
            },
            class_id: {
                bsonType: "objectId",
                description: "Reference ID for the associated class"
            },
            teacher_id: {
                bsonType: "objectId",
                description: "Reference ID for the associated teacher"
            },
            creation_date: {
                bsonType: "date",
                description: "Date when the resource was created"
            },
            update_date: {
                bsonType: "date",
                description: "Date when the resource was last updated"
            }
        },
        additionalProperties: true, // Cambia esto para permitir _id
        description: "Stores educational resources with validation rules"
    }
};

const messagesSchema = {
    $jsonSchema: {
        bsonType: "object",
        required: ["content", "sender_id", "recipient_ids", "sent_date"],
        properties: {
            content: {
                bsonType: "string",
                description: "Content of the message"
            },
            sender_id: {
                bsonType: "objectId",
                description: "ID of the sender"
            },
            recipient_ids: {
                bsonType: "array",
                minItems: 1,
                items: {
                    bsonType: "objectId",
                    description: "ID of recipient"
                },
                description: "Array of recipient IDs"
            },
            class_id: {
                bsonType: "objectId",
                description: "ID of the associated class (optional)"
            },
            sent_date: {
                bsonType: "date",
                description: "Date when the message was sent"
            },
            read_date: {
                bsonType: ["date", "null"], // Permitir que sea null
                description: "Date when the message was read (optional)"
            },
            attachments: {
                bsonType: "array",
                description: "Files attached to the message",
                items: {
                    bsonType: "object",
                    required: ["file_name", "mime_type", "size"],
                    properties: {
                        file_name: {
                            bsonType: "string",
                            description: "Name of the attachment"
                        },
                        mime_type: {
                            bsonType: "string",
                            description: "MIME type of the attachment"
                        },
                        size: {
                            bsonType: "int",
                            description: "Size of the attachment in bytes"
                        }
                    }
                }
            }
        },
        additionalProperties: true, // Permitir propiedades adicionales como _id
        description: "Stores messages with validation rules"
    }
};

// Crear colecciones con validación de esquema
db.createCollection("users", {
    validator: usersSchema,
    validationLevel: "strict"
});
db.createCollection("educational_institutions", {
    validator: educationalInstitutionsSchema,
    validationLevel: "strict"
});
db.createCollection("classes", {
    validator: classesSchema,
    validationLevel: "strict"
});
db.createCollection("educational_resources", {
    validator: educationalResourcesSchema,
    validationLevel: "strict"
});
db.createCollection("messages", {
    validator: messagesSchema,
    validationLevel: "strict"
});