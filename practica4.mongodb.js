// alumnos
db.alumnos.updateOne({ nombre: "Maria" }, { $set: { promedio: 10 } });
db.alumnos.updateOne({ nombre: "Jose" }, { $set: { grupo: "2C" } });

// eventos
db.eventos.updateOne({ nombre: "Feria científica" }, { $set: { tipo: "Tecnología" } });
db.eventos.updateOne({ nombre: "Robótica" }, { $set: { tipo: "Academico" } });

// plantel
db.plantel.updateOne({ edificio: "C" }, { $set: { salones: 20 } });
db.plantel.updateOne({ edificio: "D" }, { $set: { laboratorios: 5 } });

// escuela
db.escuela.updateOne({ nombre: "Instituto Alfa" }, { $set: { tipo: "Pública" } });
db.escuela.updateOne({ nombre: "Colegio Beta" }, { $set: { ciudad: "CDMX" } });

// profesores
db.profesores.updateOne({ nombre: "Miguel" }, { $set: { antiguedad: 10 } });
db.profesores.updateOne({ nombre: "Laura" }, { $set: { materia: "Ciencias" } });